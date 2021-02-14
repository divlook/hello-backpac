import { Story, Meta } from '@storybook/vue'
import { Controls } from '@/libs/storybook'
import Btn from '@/components/input/Btn.vue'

export default ((): Meta => ({
    title: 'Components/Btn',
    component: Btn,
    argTypes: {
        label: {
            control: Controls.text(),
        },
        type: {
            control: Controls.select(['button', 'submit']),
            defaultValue: 'button',
        },
        disabled: {
            control: Controls.boolean(),
            defaultValue: false,
        },
        onClick: {
            action: 'clicked',
        },
    },
}))()

const Template: Story = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Btn },
    template: `
        <Btn
            :disabled="disabled"
            @click="onClick"
        >
            {{ label }}
        </Btn>
    `,
})

export const Default = Template.bind({})
Default.args = {
    label: '버튼',
}

export const Disabled = Template.bind({})
Disabled.args = {
    label: '버튼',
    disabled: true,
}
