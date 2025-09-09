import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import classes from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(classes.notFoundPage, {}, [className])}>
            {t('Page not found')}
        </div>
    );
};

export default NotFoundPage;
