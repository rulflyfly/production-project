import { classNames } from 'shared/lib/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(classes.navbar, {}, [className])}>
        <div className={classes.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={classes.mainLink}>
                Main
            </AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                About
            </AppLink>
        </div>
    </div>
);

export default Navbar;
