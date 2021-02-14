<template>
    <div id="app">
        <Main />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Main from '@/views/Main.vue'

@Component({
    components: {
        Main,
    },
})
export default class App extends Vue {}
</script>

<style scoped lang="scss">
@import '@/assets/style/variable.scss';
</style>
