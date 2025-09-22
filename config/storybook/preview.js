import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator.ts';
import { ThemeDecorator }
    from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx';
import { Theme } from '../../src/app/providers/ThemeProvider/index.tsx';
import { RouterDecorator }
    from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator.tsx';
import { TranslationDecorator }
    from '../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator.tsx';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
addDecorator(TranslationDecorator);
