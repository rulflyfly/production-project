import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Code from './Code';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Light = Template.bind({});

Light.args = {
    text: `const Code = (props: CodeProps) => {
    const {
        className,
        children,
    } = props;
    return (
        <code className={classNames(classes.code, {}, [className])}>
            {children}
        </code>
    );
};`,
};

export const Dark = Template.bind({});

Dark.args = {
    text: `const Code = (props: CodeProps) => {
    const {
        className,
        children,
    } = props;
    return (
        <code className={classNames(classes.code, {}, [className])}>
            {children}
        </code>
    );
};`,
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
