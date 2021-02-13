import { Story, Meta } from '@storybook/vue'
import Card from '@/components/Card.vue'

export default ((): Meta => ({
    title: 'Components/Card',
    component: Card,
    argTypes: {
        color: { control: 'color' },
        bg: { control: 'color' },
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
        },
    },
}))()

const Template: Story = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Card },
    template: '<Card v-bind="$props" />',
})

export const Default = Template.bind({})

export const Small = Template.bind({})
Small.args = {
    size: 'small',
}

export const Medium = Template.bind({})
Medium.args = {
    size: 'medium',
}

export const Large = Template.bind({})
Large.args = {
    size: 'large',
}

export const Black = Template.bind({})
Black.args = {
    size: 'small',
    color: '#fff',
    bg: '#000',
}
