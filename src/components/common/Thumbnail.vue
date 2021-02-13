<template>
    <div
        class="ui-thumbnail"
        :class="{
            'ui-thumbnail--contain': contain,
        }"
    >
        <div
            class="thumbnail-image"
            :style="{
                backgroundImage,
                backgroundColor,
                paddingBottom: height,
            }"
        />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Thumbnail extends Vue {
    @Prop({
        type: String,
        required: true,
    })
    readonly image!: string

    @Prop({
        type: String,
        default: '#fff',
    })
    readonly color!: string

    /**
     * ratio = width / height
     */
    @Prop({
        type: Number,
        default: 1,
        validator: (value: number) => value >= 0,
    })
    readonly ratio!: number

    @Prop({
        type: Boolean,
        default: false,
    })
    readonly contain!: boolean

    get backgroundImage() {
        return this.image && `url(${this.image})`
    }

    get backgroundColor() {
        return this.color
    }

    get height() {
        const percent = this.ratio
            ? Math.floor((100 / this.ratio) * 100) / 100
            : 100

        return `${percent}%`
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/variable.scss';

.ui-thumbnail {
    width: 100%;
    height: 100%;

    .thumbnail-image {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    &.ui-thumbnail--contain {
        .thumbnail-image {
            background-size: contain;
        }
    }
}
</style>
