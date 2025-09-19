import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import 'app/styles/index.scss';

export const ReduxDecorator = (story: () => Story) => (
    <StoreProvider initialState={{ counter: { value: 10 }, user: {} }}>
        {story()}
    </StoreProvider>
);
