import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation('main');

    const [value, setValue] = useState('');

    const onChange = (value: string) => {
        setValue(value);
    };

    return (
        <div>
            {t('Main page')}
            <Input
                value={value}
                onChange={onChange}
                placeholder="enter text"
            />
        </div>
    );
};

export default MainPage;
