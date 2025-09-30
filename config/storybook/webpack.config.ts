/* eslint-disable no-param-reassign */
import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    if (!config.resolve) {
        config.resolve = {};
    }

    if (!config.module) {
        config.module = {};
    }

    config.resolve.modules = [
        paths.src,
        ...(config.resolve.modules || []),
    ];

    config.resolve.extensions = [
        ...(config.resolve.extensions || []),
        '.ts',
        '.tsx',
    ];

    config.resolve.alias = {
        ...(config.resolve.alias || {}),
        '@': paths.src,
    };

    // @ts-ignore
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module?.rules?.push(buildCssLoaders(true));

    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config.plugins = [
        ...(config.plugins || []),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify(''),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    ];

    return config;
};
