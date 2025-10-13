import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/Input/Input';
import Page from 'widgets/Page/Page';

const MainPage = () => {
    const { t } = useTranslation('main');

    const [value, setValue] = useState('');

    const onChange = (value: string) => {
        setValue(value);
    };

    return (
        <Page>
            {t('Main page')}
            <Input
                value={value}
                onChange={onChange}
                placeholder="enter text"
            />
        </Page>
    );
};

export default MainPage;
