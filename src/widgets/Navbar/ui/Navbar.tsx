import { classNames } from 'shared/lib/classNames';
import classes from './Navbar.module.scss';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface NavbarProps {
    className?: string
}

const Navbar = (props: NavbarProps) => {
  return (
    <div className={classNames(classes.navbar)}>
      <div className={classes.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={classes.mainLink}>
          Main
          </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
          About
          </AppLink>
      </div>
    </div>
  )
}

export default Navbar

