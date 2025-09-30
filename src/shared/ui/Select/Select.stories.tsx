import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AvatarImg from '../../assets/images/3b2758ad5492a76b578f7ee072e4e894.jpg';
import Select from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Select something',
    options: [
        { value: '123', content: 'First option' },
        { value: '456', content: 'Second option' },
        { value: '789', content: 'Third option' },
    ],
};
