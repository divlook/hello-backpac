import { Story, Meta } from '@storybook/vue'
import { Controls } from '@/libs/storybook'
import Card from '@/components/card/Card.vue'
import { loremIpsum } from '@/libs/strings'

export default ((): Meta => ({
    title: 'Components/Card',
    component: Card,
    argTypes: {
        thumbnail: {
            control: Controls.text(),
        },
        thumbnailRatio: {
            control: Controls.number({
                min: 0,
                step: 0.01,
            }),
            defaultValue: 1,
        },
        label: {
            control: Controls.text(),
        },
        title: {
            control: Controls.text(),
        },
        comment: {
            control: Controls.text(),
        },
        price: {
            control: Controls.number({
                min: 0,
            }),
            defaultValue: 0,
        },
        discountPer: {
            control: Controls.number({
                min: 0,
            }),
            defaultValue: 0,
        },
        rating: {
            control: Controls.number({
                min: 0,
                max: 5,
                step: 1,
            }),
            defaultValue: 0,
        },
        horizontal: {
            control: Controls.boolean(),
            defaultValue: false,
        },
    },
}))()

const Template: Story = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Card },
    template: `
        <div class="container d-flex flex-wrap">
            <div
                class="mr-10 mb-10"
                :style="{
                    width: '30%',
                }"
            >
                <Card
                    :thumbnail="thumbnail"
                    :thumbnailRatio="thumbnailRatio"
                    :label="label"
                    :title="title"
                    :comment="comment"
                    :price="price"
                    :discountPer="discountPer"
                    :rating="rating"
                />
            </div>

            <div
                :style="{
                    width: '50%',
                }"
            >
                <Card
                    :thumbnail="thumbnail"
                    :thumbnailRatio="thumbnailRatio"
                    :label="label"
                    :title="title"
                    :comment="comment"
                    :price="price"
                    :discountPer="discountPer"
                    :rating="rating"
                    horizontal
                />
            </div>
        </div>
    `,
})

export const Default = Template.bind({})
Default.args = {
    thumbnail: 'https://source.unsplash.com/random/400x300',
    label: 'Label',
    title: 'Title',
    comment: loremIpsum,
    price: 10000,
    discountPer: 10,
    rating: 4,
}

export const NoThumbnail = Template.bind({})
NoThumbnail.args = {
    label: 'Label',
    title: 'Title',
    comment: loremIpsum,
    price: 10000,
    discountPer: 10,
    rating: 4,
}

export const NoComment = Template.bind({})
NoComment.args = {
    thumbnail: 'https://source.unsplash.com/random/400x300',
    label: 'Label',
    title: 'Title',
    price: 10000,
    discountPer: 10,
    rating: 4,
}

export const NoRating = Template.bind({})
NoRating.args = {
    thumbnail: 'https://source.unsplash.com/random/400x300',
    label: 'Label',
    title: 'Title',
    price: 10000,
    discountPer: 15,
}

export const NoDiscountPer = Template.bind({})
NoDiscountPer.args = {
    thumbnail: 'https://source.unsplash.com/random/400x300',
    label: 'Label',
    title: 'Title',
    price: 10000,
}

export const NoPrice = Template.bind({})
NoPrice.args = {
    thumbnail: 'https://source.unsplash.com/random/400x300',
    label: 'Label',
    title: 'Title',
}

export const NoLabel = Template.bind({})
NoLabel.args = {
    thumbnail: 'https://source.unsplash.com/random/400x300',
    title: 'Title',
}

export const NoTitle = Template.bind({})
NoTitle.args = {
    thumbnail: 'https://source.unsplash.com/random/400x300',
    comment: loremIpsum,
    rating: 1,
}

export const OnlyThumbnail = Template.bind({})
OnlyThumbnail.args = {
    thumbnail: 'https://source.unsplash.com/random/400x300',
}
