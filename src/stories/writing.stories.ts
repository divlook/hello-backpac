import { Story, Meta } from '@storybook/vue'
import Writing from '@/views/Writing.vue'

export default ((): Meta => ({
    title: 'Views/Writing',
    component: Writing,
    argTypes: {},
    parameters: {
        layout: 'none',
    },
}))()

const Template: Story = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Writing },
    template: `
        <Writing v-bind="$props" />
    `,
})

export const Default = Template.bind({})
Default.args = {}
Default.storyName = 'TextField example'
