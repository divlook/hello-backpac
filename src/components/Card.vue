<template>
    <div
        class="ui-card"
        :style="{
            color,
            backgroundColor: bg,
        }"
        @click="onClick"
    >
        <slot>{{ size }}</slot>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Card extends Vue {
    @Prop()
    readonly color!: string

    @Prop({
        default: '#fff',
    })
    readonly bg!: string

    /**
     * 'small' | 'medium' | 'large'
     */
    @Prop({
        default: 'small',
    })
    readonly size!: 'small' | 'medium' | 'large'

    onClick() {
        this.$emit('click')
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/variable.scss';

.ui-card {
    cursor: pointer;
}
</style>
