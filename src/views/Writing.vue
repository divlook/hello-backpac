<template>
    <main class="page-writing">
        <div class="writing-container">
            <article class="writing-block">
                <h3>기본 상태</h3>
                <TextField v-model="form.value1" />
            </article>

            <article class="writing-block">
                <h3>내용이 없을 때 placeholder 처리</h3>
                <TextField
                    v-model="form.value2"
                    placeholder="내용을 입력해주세요."
                />
            </article>

            <article class="writing-block">
                <h3>초기 값이 있는 상태</h3>
                <TextField
                    v-model="form.value3"
                    placeholder="내용을 입력해주세요."
                />
            </article>

            <article class="writing-block">
                <h3>disabled 상태</h3>
                <TextField v-model="form.value4" disabled />
            </article>

            <article class="writing-block">
                <h3>readonly 상태</h3>
                <TextField v-model="form.value5" readonly />
            </article>
        </div>
    </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TextField from '@/components/input/TextField.vue'

@Component({
    components: {
        TextField,
    },
})
export default class Writing extends Vue {
    form = {
        value1: '',
        value2: '',
        value3: '내용이 있을수도 있습니다.',
        value4: '내용을 수정할 수 없습니다.',
        value5: '읽기전용입니다.',
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/variable.scss';

.page-writing {
    height: 100%;

    .writing-container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        padding: 20px 10px 0;

        .writing-block {
            padding: 0 10px 20px;
        }
    }
}
</style>
