<template>
    <div class="page-main">
        <Card />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Card from '@/components/card/Card.vue'

@Component({
    components: {
        Card,
    },
})
export default class Main extends Vue {}
</script>

<style scoped lang="scss">
@import '@/assets/style/variable.scss';
</style>
