<template>
    <main class="page-main">
        <div class="main-container">
            <template v-for="(row, key) in list">
                <div :key="key" class="col-4">
                    <Card
                        :thumbnail="row.thumbnail"
                        :thumbnailRatio="row.thumbnailRatio"
                        :label="row.label"
                        :title="row.title"
                        :comment="row.comment"
                        :price="row.price"
                        :discountPer="row.discountPer"
                        :rating="row.rating"
                        :horizontal="row.horizontal"
                    />
                </div>
            </template>
        </div>

        <div class="main-container">
            <template v-for="(row, key) in horizontalList">
                <div :key="key" class="col-6">
                    <Card
                        :thumbnail="row.thumbnail"
                        :thumbnailRatio="row.thumbnailRatio"
                        :label="row.label"
                        :title="row.title"
                        :comment="row.comment"
                        :price="row.price"
                        :discountPer="row.discountPer"
                        :rating="row.rating"
                        :horizontal="row.horizontal"
                    />
                </div>
            </template>
        </div>
    </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Card from '@/components/card/Card.vue'
import { loremIpsum } from '@/libs/strings'

interface Item {
    thumbnail: string
    thumbnailRatio?: number
    label: string
    title: string
    comment?: string
    price?: number
    discountPer?: number
    rating?: number
    horizontal?: boolean
}

@Component({
    components: {
        Card,
    },
})
export default class Main extends Vue {
    list: Item[] = [
        {
            thumbnail: 'https://source.unsplash.com/random',
            label: 'Label 1',
            title: 'Title 1',
            comment: loremIpsum,
            price: 10000,
            discountPer: 50,
            rating: 1,
        },
        {
            thumbnail: 'https://source.unsplash.com/random',
            label: 'Label 2',
            title: 'Title 2',
            price: 10000,
            discountPer: 70,
            rating: 2,
        },
        {
            thumbnail: 'https://source.unsplash.com/random',
            label: 'Label 3',
            title: 'Title 3',
            price: 10000,
            discountPer: 90,
        },
        {
            thumbnail: 'https://source.unsplash.com/random',
            label: 'Label 4',
            title: 'Title 4',
            comment: loremIpsum,
            rating: 5,
        },
        {
            thumbnail: 'https://source.unsplash.com/random',
            label: 'Label 5',
            title: 'Title 5',
            price: 10000,
            discountPer: 10,
        },
    ]

    get horizontalList() {
        return this.list.map((row) => ({
            ...row,
            horizontal: true,
        }))
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/variable.scss';

.page-main {
    height: 100%;

    .main-container {
        display: flex;
        flex-wrap: wrap;
        padding: 20px 10px 0;

        .col-4,
        .col-6 {
            box-sizing: border-box;
            width: 100%;
            min-width: 300px;
            padding: 0 10px 20px;
        }
    }
}

@media (min-width: 721px) {
    .page-main {
        .main-container {
            min-width: 900px;

            .col-4 {
                width: 33.33%;
            }

            .col-6 {
                width: 50%;
            }
        }
    }
}
</style>
