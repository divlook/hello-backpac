import { Story, Meta } from '@storybook/vue'
import Main from '@/views/Main.vue'

export default ((): Meta => ({
    title: 'Views/Main',
    component: Main,
    argTypes: {},
    parameters: {
        layout: 'none',
    },
}))()

const Template: Story = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Main },
    template: `
        <Main v-bind="$props" />
    `,
})

export const Default = Template.bind({})
Default.args = {}
