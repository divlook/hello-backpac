import { Story, Meta } from '@storybook/vue'
import { Controls } from '@/libs/storybook'
import Thumbnail from '@/components/common/Thumbnail.vue'

export default ((): Meta => ({
    title: 'Components/Thumbnail',
    component: Thumbnail,
    argTypes: {
        width: {
            control: Controls.number({
                step: 10,
            }),
            defaultValue: 300,
        },
        color: { control: Controls.color() },
        ratio: {
            control: Controls.number({
                min: 0,
                step: 0.01,
            }),
            defaultValue: 1,
        },
    },
}))()

const Template: Story = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Thumbnail },
    template: `
            <Thumbnail
                :image="image"
                :color="color"
                :ratio="ratio"
                :contain="contain"
                :style="{
                    width: \`\${width}px\`,
                }"
            />
        `,
})

export const Default = Template.bind({})
Default.args = {
    image: 'https://source.unsplash.com/random/400x300',
}

export const Ratio = Template.bind({})
Ratio.args = {
    image: 'https://source.unsplash.com/random/400x300',
    ratio: 3 / 2,
}

export const Contain = Template.bind({})
Contain.args = {
    image: 'https://source.unsplash.com/random/400x300',
    contain: true,
}

export const Color = Template.bind({})
Color.args = {
    image: 'https://source.unsplash.com/random/400x300',
    contain: true,
    color: 'red',
}
