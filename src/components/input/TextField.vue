<template>
    <form
        class="ui-textField"
        :class="{
            'ui-textField--editing': isEditing,
            'ui-textField--disabled': disabled,
            'ui-textField--readonly': readonly,
        }"
        @submit.prevent="onSubmit"
    >
        <div class="textField-textare">
            <textarea
                v-model="rawValue"
                :placeholder="placeholder"
                :disabled="disabled"
                :readonly="readonly"
                :rows="rows"
                @input="onInput"
            />
            <div class="textField-length">
                {{ valueLength }}
            </div>
        </div>

        <div v-show="isEditing" class="textField-btn">
            <Btn type="submit">Save</Btn>
        </div>
    </form>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import Btn from '@/components/input/Btn.vue'
import { numberFormat } from '@/libs/utils'

@Component({
    components: {
        Btn,
    },
})
export default class TextField extends Vue {
    @Prop({
        type: String,
        default: '',
    })
    readonly value!: string

    @Prop({
        type: String,
    })
    readonly placeholder!: string

    @Prop({
        type: Boolean,
        default: false,
    })
    readonly disabled!: boolean

    @Prop({
        type: Boolean,
        default: false,
    })
    readonly readonly!: boolean

    @Prop({
        type: Number,
        default: 1,
    })
    readonly rows!: number

    rawValue = ''

    get isEditable() {
        return !this.disabled && !this.readonly
    }

    get isEditing() {
        return this.value !== this.rawValue
    }

    get valueLength() {
        const rawValue = this.rawValue || ''
        return numberFormat(rawValue.length)
    }

    created() {
        this.rawValue = this.value
    }

    @Watch('value')
    watchValue(value: string, prevValue: string) {
        if (value === prevValue) {
            return
        }

        this.rawValue = value
    }

    onSubmit() {
        if (!this.isEditable) {
            return
        }

        /**
         * @event input
         */
        this.$emit('input', this.rawValue)
    }

    onInput(event: Event) {
        if (!this.isEditable) {
            return
        }

        /**
         * @event change
         * @arg { Event }
         */
        this.$emit('change', event)
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/variable.scss';

.ui-textField {
    display: flex;

    .textField-textare {
        flex: 1;
        position: relative;
        border: 1px solid $color-alto;
        border-radius: 4px;
        display: flex;
        font-size: 16px;
        background: $color-white;

        textarea {
            flex: 1;
            padding: 6px 8px;
            resize: none;
            border: 0;
            border-radius: inherit;
            font-size: 1em;
            background: inherit;

            &:focus {
                outline: 0;
            }

            &::placeholder {
                font-size: 1em;
            }
        }

        .textField-length {
            position: absolute;
            right: 3px;
            bottom: 3px;
            color: $color-bombay;
            font-size: 0.8em;
            padding: 0.33em 0.8em;
            background-color: rgba($color: $color-white, $alpha: 0.4);
            border: 1px solid $color-alto;
            border-radius: 1em;
        }
    }

    .textField-btn {
        margin-left: 10px;
        display: flex;
        width: 60px;

        .ui-btn {
            flex: 1;
        }
    }

    &.ui-textField--editing {
        .textField-textare {
            border-color: $color-orange;
        }
    }

    &.ui-textField--disabled {
        .textField-textare {
            textarea {
                background: $color-alto;
                opacity: 0.4;
            }
        }
    }
    &.ui-textField--readonly {
        .textField-textare {
            textarea {
                opacity: 0.4;
            }
        }
    }
}
</style>
