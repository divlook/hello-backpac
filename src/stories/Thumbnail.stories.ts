import { Story, Meta } from '@storybook/vue'
import Thumbnail from '@/components/common/Thumbnail.vue'
import { Controls } from '@/libs/storybook'

export default ((): Meta => ({
    title: 'Components/Thumbnail',
    component: Thumbnail,
    argTypes: {
        color: { control: Controls.color() },
        ratio: {
            control: Controls.number({
                min: 0,
            }),
            defaultValue: 1,
        },
        width: {
            control: Controls.number({
                step: 10,
            }),
            defaultValue: 300,
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
                    width: \`\${width || 300}px\`,
                }"
            />
        `,
})

export const Default = Template.bind({})
Default.args = {
    image: 'https://source.unsplash.com/random',
}

export const Ratio = Template.bind({})
Ratio.args = {
    image: 'https://source.unsplash.com/random',
    ratio: 3 / 2,
}

export const Contain = Template.bind({})
Contain.args = {
    image: 'https://source.unsplash.com/random',
    contain: true,
}

export const Color = Template.bind({})
Color.args = {
    image: 'https://source.unsplash.com/random',
    contain: true,
    color: 'red',
}
