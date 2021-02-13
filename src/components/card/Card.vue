<template>
    <article
        class="ui-card"
        :class="{
            'ui-card--horizontal': horizontal,
            'ui-card--only-thumbnail': hasOnlyThumbnail,
        }"
    >
        <template v-if="thumbnail">
            <div class="ui-card-thumbnail">
                <Thumbnail :image="thumbnail" :ratio="thumbnailRatio" />
            </div>
        </template>

        <div class="ui-card-textarea">
            <template v-if="hasHeader">
                <div class="card-header">
                    <template v-if="label">
                        <p class="card-label">{{ label }}</p>
                    </template>
                    <h3>{{ title }}</h3>
                </div>
            </template>

            <template v-if="comment">
                <div class="card-body">
                    <p class="card-comment">{{ comment }}</p>
                </div>
            </template>

            <div
                v-if="hasPrice"
                class="card-price"
                :class="{
                    'card-price--discount': isDiscount,
                }"
            >
                <template v-if="discountPer > 0">
                    <div class="price-discount">
                        <span class="price-discount-per">
                            {{ discountPer }}%
                        </span>
                        <span class="ml-1">
                            {{ moneyFormat(discountedPrice) }}
                        </span>
                    </div>
                </template>
                <div class="price-fixed">{{ moneyFormat(price) }}</div>
            </div>

            <div v-if="hasFooter" class="card-footer">
                <template v-if="hasFooterLine">
                    <div class="card-footer-line" />
                </template>

                <div class="card-rating">
                    <template v-if="rating > 0">
                        <div class="card-rating-star">
                            <template v-for="key in 5">
                                <Star
                                    :key="key"
                                    :value="key <= rating"
                                    class="star-item"
                                    readonly
                                />
                            </template>
                        </div>
                    </template>

                    <template v-if="label">
                        <p class="card-label">
                            <template v-if="rating > 0">
                                <span class="mx-2">|</span>
                            </template>
                            {{ label }}
                        </p>
                    </template>
                </div>

                <template v-if="comment">
                    <p class="card-comment">{{ comment }}</p>
                </template>
            </div>
        </div>
    </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Thumbnail from '@/components/common/Thumbnail.vue'
import Star from '@/components/icon/Star.vue'
import { moneyFormat } from '@/libs/utils'

@Component({
    components: {
        Thumbnail,
        Star,
    },
})
export default class Card extends Vue {
    @Prop({
        type: String,
        default: '',
    })
    readonly thumbnail!: string

    /**
     * ratio = width / height
     */
    @Prop({
        type: Number,
        default: 1,
        validator: (value: number) => value >= 0,
    })
    readonly thumbnailRatio!: number

    @Prop({
        type: String,
        default: '',
    })
    readonly label!: string

    @Prop({
        type: String,
        default: '',
    })
    readonly title!: string

    @Prop({
        type: String,
        default: '',
    })
    readonly comment!: string

    @Prop({
        type: Number,
        default: 0,
        validator: (value: number) => value >= 0,
    })
    readonly price!: number

    /**
     * 0 ~ 100
     */
    @Prop({
        type: Number,
        default: 0,
        validator: (value: number) => value >= 0 && value <= 100,
    })
    readonly discountPer!: number

    /**
     * - range : 0 ~ 5
     * - step : 1
     */
    @Prop({
        type: Number,
        default: 0,
        validator: (value: number) => value >= 0 && value <= 100,
    })
    readonly rating!: number

    @Prop({
        type: Boolean,
        default: false,
    })
    readonly horizontal!: boolean

    get hasPrice() {
        return this.price > 0
    }

    get moneyFormat() {
        return (price: number) => (this.hasPrice ? moneyFormat(price) : '0')
    }

    get isDiscount() {
        return this.hasPrice && this.discountPer > 0
    }

    get discountedPrice() {
        return this.price - Math.floor((this.price * this.discountPer) / 100)
    }

    get hasRating() {
        return this.rating > 0
    }

    get hasHeader() {
        if (this.title) {
            return true
        }

        if (this.horizontal) {
            return false
        }

        return !!this.label
    }

    get hasFooter() {
        if (this.rating > 0) {
            return true
        }

        if (this.horizontal) {
            return !!this.label
        }

        return !!this.comment
    }

    get hasOnlyThumbnail() {
        if (this.hasHeader || this.hasPrice || this.hasFooter) {
            return false
        }

        return !this.comment
    }

    get hasFooterLine() {
        if (this.horizontal || !this.hasFooter) {
            return false
        }

        return this.hasHeader || this.hasPrice
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/variable.scss';

.ui-card {
    border: 1px solid $color-alto;
    border-radius: 4px;
    box-sizing: border-box;
    min-width: 280px;
    display: block;
    background-color: $color-white;

    .ui-card-thumbnail {
        width: 100%;
        overflow: hidden;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }

    .ui-card-textarea {
        padding: 12px 8px;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;

        > div {
            margin-bottom: 6px;

            &:last-child {
                margin-bottom: 0;
            }
        }

        h3,
        p {
            margin: 0;
            line-height: 1.4;
            font-weight: 400;
        }

        p {
            color: $color-dove-gray;
            font-size: 14px;
        }

        h3 {
            color: $color-mine-shaft;
            font-size: 16px;
        }

        .card-label {
            color: $color-bombay;
            font-size: 12px;
            margin-bottom: 2px;
            @include ellipsis();
        }

        .card-body {
            display: none;

            .card-comment {
                @include multi-ellipsis(3, 1.4em);
            }
        }

        .card-price {
            font-size: 15px;
            font-weight: 500;
            color: $color-black;
            display: flex;
            flex-wrap: wrap;
            align-items: center;

            .price-discount {
                display: flex;
                align-items: center;
                line-height: 1;

                .price-discount-per {
                    color: $color-sunset-orange;
                    font-weight: 600;
                }
            }

            &.card-price--discount {
                .price-fixed {
                    text-decoration: line-through;
                    color: $color-dusty-gray;
                    width: 100%;
                    font-size: 12px;
                }
            }
        }

        .card-footer-line {
            height: 1px;
            margin: 10px -8px;
            background-color: $color-alto;
        }

        .card-footer {
            .card-rating {
                display: flex;
                align-items: center;
                flex-wrap: wrap;

                .card-rating-star {
                    .star-item {
                        width: 24px;
                        height: 24px;
                    }
                }

                .card-label {
                    display: none;
                }
            }

            .card-comment {
                @include ellipsis();
            }
        }
    }

    &:not(.ui-card--horizontal) {
        .ui-card-textarea {
            .card-header {
                h3 {
                    @include multi-ellipsis(2, 1.4em);
                }
            }
        }
    }

    &.ui-card--horizontal {
        display: flex;

        .ui-card-thumbnail {
            width: 40%;
            border-top-right-radius: 0;
            border-bottom-left-radius: 4px;
        }

        .ui-card-textarea {
            flex: 1;
            display: flex;
            flex-direction: column;
            padding: 20px 16px;
            border-bottom-left-radius: 0;
            border-top-right-radius: 4px;
            justify-content: space-between;

            .card-header {
                .card-label {
                    display: none;
                    @include ellipsis();
                }
            }

            .card-body {
                display: block;
            }

            .card-price {
                display: none;
            }

            .card-footer-line {
                display: none;
            }

            .card-footer {
                .card-rating {
                    .card-label {
                        display: block;
                    }
                }

                .card-comment {
                    display: none;
                }
            }
        }
    }

    &.ui-card--only-thumbnail {
        .ui-card-thumbnail {
            width: 100%;
            border-radius: 4px;
        }
        .ui-card-textarea {
            display: none;
        }
    }
}
</style>
