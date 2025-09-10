import { BugButton } from 'app/providers/ErrorBoundry';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            <BugButton />
            {t('Main page')}
        </div>
    );
};

export default MainPage;
