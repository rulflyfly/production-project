import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import Image from 'shared/assets/images/3b2758ad5492a76b578f7ee072e4e894.jpg';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ProfileCard from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    data: {
        first: 'Nastya',
        lastname: 'Suhasya',
        age: 28,
        currency: Currency.EUR,
        country: Country.Russia,
        city: 'Moscow',
        username: 'admin',
        avatar: Image,
    },
};

export const WithError = Template.bind({});

WithError.args = {
    error: 'true',
};

export const Loading = Template.bind({});

Loading.args = {
    isLoading: true,
};
