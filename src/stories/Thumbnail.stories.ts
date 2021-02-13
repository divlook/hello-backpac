import { Story, Meta } from '@storybook/vue'
import Thumbnail from '@/components/common/Thumbnail.vue'

export default ((): Meta => ({
    title: 'Components/Thumbnail',
    component: Thumbnail,
    argTypes: {
        color: { control: 'color' },
        ratio: {
            control: {
                type: 'number',
                min: 0,
            },
            defaultValue: 1,
        },
        width: {
            control: {
                type: 'number',
                step: 10,
            },
            defaultValue: 300,
        },
    },
}))()

const Template: Story = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Thumbnail },
    template: `
        <Thumbnail
            v-bind="$props"
            :style="{
                width: \`\${$props.width}px\`,
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
