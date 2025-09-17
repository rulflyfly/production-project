import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Modal from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Tenetur minima repellat iure numquam cum sequi a enim sit sunt
                expedita, possimus aperiam eum accusantium quaerat impedit tempore 
                libero omnis fugit!`,
};

export const Dark = Template.bind({});

Dark.args = {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Tenetur minima repellat iure numquam cum sequi a enim sit sunt
                expedita, possimus aperiam eum accusantium quaerat impedit tempore 
                libero omnis fugit!`,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
