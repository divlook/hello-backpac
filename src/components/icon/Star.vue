<template>
    <div
        class="icon-star"
        :style="{
            width,
            height,
        }"
        @click="onClick"
    >
        <svg
            v-show="active"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            :fill="color"
            width="18px"
            height="18px"
        >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M0 0h24v24H0z" fill="none" />
            <path
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
        </svg>
        <svg
            v-show="!active"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            :fill="color"
            width="18px"
            height="18px"
        >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
                d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
            />
        </svg>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component
export default class Star extends Vue {
    @Prop({
        type: Boolean,
        default: false,
    })
    readonly value!: boolean

    @Prop({
        type: String,
    })
    readonly width!: string

    @Prop({
        type: String,
    })
    readonly height!: string

    @Prop({
        type: String,
        default: '#ffc501',
    })
    readonly color!: string

    @Prop({
        type: Boolean,
        default: false,
    })
    readonly readonly!: boolean

    active = false

    @Watch('value')
    watchValue(value: boolean, prevValue: boolean) {
        if (prevValue === value) {
            return
        }
        this.active = value
    }

    created() {
        this.active = this.value
    }

    onClick() {
        if (this.readonly) {
            return
        }

        this.active = !this.active

        /**
         * @event input
         * @arg boolean
         */
        this.$emit('input', this.active)

        /**
         * @event change
         * @arg boolean
         */
        this.$emit('change', this.active)
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/variable.scss';

.icon-star {
    display: inline-block;

    svg {
        width: 100%;
        height: 100%;
    }
}
</style>
