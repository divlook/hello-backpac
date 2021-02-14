<template>
    <button class="ui-btn" :disabled="disabled" @click="onClick">
        <slot />
    </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Btn extends Vue {
    @Prop({
        type: Boolean,
        default: false,
    })
    readonly disabled!: boolean

    onClick() {
        if (this.disabled) {
            return
        }

        /**
         * @event click
         */
        this.$emit('click')
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/variable.scss';

.ui-btn {
    display: inline-block;
    border: 0;
    border-radius: 4px;
    background: $color-orange;
    color: rgba($color: $color-white, $alpha: 0.8);
    box-sizing: border-box;
    padding: 6px 8px;
    line-height: 1;
    cursor: pointer;

    &:hover {
        color: rgba($color: $color-white, $alpha: 1);
        box-shadow: 0 0 4px rgba($color: $color-black, $alpha: 0.2);
    }

    &:focus {
        outline: 0;
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.4;
    }
}
</style>
