import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => {
    const mockedDispatch = jest.fn();
    React.useEffect(() => {
        mockedDispatch({ type: 'FETCH_PROFILE_MOCK' });
    }, [mockedDispatch]);

    return <ProfilePage {...args} />;
};

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    profile: { data: { username: 'John', age: 25 }, isLoading: false, error: '' },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: { data: { username: 'John', age: 25 }, isLoading: false, error: '' },
})];
