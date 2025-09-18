// import { BugButton } from 'app/providers/ErrorBoundry';
import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            {/* <BugButton /> */}
            {t('Main page')}
            <Counter />
        </div>
    );
};

export default MainPage;
