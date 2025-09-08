import { classNames } from 'shared/lib/classNames';
import classes from './AppLink.module.scss';
import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps{
    className?: string;
    theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = (props) => {
   const {
    to, 
    className, 
    children, 
    theme = AppLinkTheme.PRIMARY, 
    ...otherProps
} = props
  return (
    <Link 
        to={to} 
        className={classNames(classes.appLink, {}, [className, classes[theme]])}
        {...otherProps}
        >
        {children}
    </Link>
  )
}

export default AppLink