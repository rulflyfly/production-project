import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Page from 'shared/ui/Page/Page';
import classes from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <Page className={classNames(classes.notFoundPage, {}, [className])}>
            {t('Page not found')}
        </Page>
    );
};

export default NotFoundPage;
