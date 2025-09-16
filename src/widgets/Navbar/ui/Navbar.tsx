import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(classes.navbar, {}, [className])}>
        <div className={classes.links}>
            /
        </div>
    </div>
);

export default Navbar;
