import { Story, Meta } from '@storybook/vue'
import { Controls } from '@/libs/storybook'
import TextField from '@/components/input/TextField.vue'

export default ((): Meta => ({
    title: 'Components/TextField',
    component: TextField,
    argTypes: {
        value: {
            control: false,
        },
        placeholder: {
            control: Controls.text(),
        },
        disabled: {
            control: Controls.boolean(),
            defaultValue: false,
        },
        readonly: {
            control: Controls.boolean(),
            defaultValue: false,
        },
        rows: {
            control: Controls.number({
                min: 1,
            }),
            defaultValue: 3,
        },
        onInput: {},
        onChange: {},
    },
}))()

const Template: Story = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { TextField },
    data: () => ({
        rawValue: args.value,
    }),
    template: `
        <TextField
            v-model="rawValue"
            :placeholder="placeholder"
            :disabled="disabled"
            :readonly="readonly"
            :rows="rows"
            @input="onInput"
            @change="onChange"
        />
    `,
})

export const Default = Template.bind({})
Default.args = {}

export const Placeholder = Template.bind({})
Placeholder.args = {
    placeholder: 'Placeholder',
}

export const Disabled = Template.bind({})
Disabled.args = {
    value: 'Disabled',
    disabled: true,
}

export const Readonly = Template.bind({})
Readonly.args = {
    value: 'Readonly',
    readonly: true,
}

export const Rows = Template.bind({})
Rows.args = {
    rows: 6,
}
