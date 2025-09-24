import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import classes from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red'
}

interface AppLinkProps extends LinkProps{
    className?: string;
    theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = memo((props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;
    return (
        <Link
            to={to}
            className={classNames(
                classes.appLink,
                {},
                [className, classes[theme]],
            )}
            {...otherProps}
        >
            {children}
        </Link>
    );
});

export default AppLink;
