import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from 'pages/ProfilePage/ui/ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import Image from 'shared/assets/images/3b2758ad5492a76b578f7ee072e4e894.jpg';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    profile: {
        form: {
            first: 'Nastya',
            lastname: 'Suhasya',
            age: 28,
            currency: Currency.USD,
            country: Country.Russia,
            city: 'Moscow',
            username: 'admin',
            avatar: Image,
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            first: 'Nastya',
            lastname: 'Suhasya',
            age: 28,
            currency: Currency.USD,
            country: Country.Russia,
            city: 'Moscow',
            username: 'admin',
            avatar: Image,
        },
    },
})];
