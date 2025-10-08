import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { SidebarItemType } from 'widgets/Sidebar/model/types/sidebar';
import classes from './SidebarItem.module.scss';

interface SidebarItemProps {
    item?: SidebarItemType,
    collapsed: boolean
}

const SidebarItem = memo((props: SidebarItemProps) => {
    const {
        item,
        collapsed,
    } = props;
    const isAuth = useSelector(getUserAuthData);

    const { t } = useTranslation();

    if (item?.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item?.path || '/'}
            className={classNames(classes.item, { [classes.collapsed]: collapsed }, [])}
        >
            {item && <item.Icon className={classes.icon} />}
            <span className={classes.link}>{t(`${item && item.text}`)}</span>
        </AppLink>
    );
});

export default SidebarItem;
