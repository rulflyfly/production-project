import { classNames } from 'shared/lib/classNames/classNames';
import Select from 'shared/ui/Select/Select';
import { Currency } from 'entities/Currency/model/types/currency';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';

interface CurrencySelectProps {
    className?: string,
    value?: Currency,
    onChange?: (value: Currency) => void
    readonly?: boolean
}

const options = [
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
];

const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Choose currency')}
            options={options}
            onChange={onChangeHandler}
            value={value}
            readonly={readonly}
        />
    );
});

export default CurrencySelect;
