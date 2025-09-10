import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import classes from './PageError.module.scss';

interface PageErrorProps {
    className?: string
}

const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line
        location.reload();
    };
    return (
        <div className={classNames(classes.pageError, {}, [className])}>
            <p>{t('Page error message')}</p>
            <Button onClick={reloadPage}>
                {t('Refresh page')}
            </Button>
        </div>
    );
};

export default PageError;
