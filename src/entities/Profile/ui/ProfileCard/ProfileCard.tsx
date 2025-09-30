import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import Input from 'shared/ui/Input/Input';
import { Profile } from 'entities/Profile/model/types/profile';
import Loader from 'shared/ui/Loader/Loader';
import Avatar from 'shared/ui/Avatar/Avatar';
import { Currency } from 'entities/Currency/model/types/currency';
import { CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string,
    data?: Profile,
    isLoading?: boolean,
    readonly?: boolean,
    error?: string,
    onChangeFirstName?: (value?: string) => void;
    onChangeLastName?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country?: Country) => void;
}

const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(classes.profileCard, {}, [className, classes.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(classes.profileCard, {}, [className, classes.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Error')}
                    text={t('Refresh the page')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: Mods = {
        [classes.editing]: !readonly,
    };

    return (
        <div className={classNames(classes.profileCard, mods, [className])}>
            <div className={classes.data}>
                {data?.avatar && (
                    <div className={classes.avatarWrapper}>
                        <Avatar src={data.avatar} />
                    </div>
                )}
                <Input
                    value={data?.first}
                    placeholder={t('Your name')}
                    className={classes.input}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Your surname')}
                    className={classes.input}
                    onChange={onChangeLastName}
                    readonly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder={t('Your age')}
                    className={classes.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('City')}
                    className={classes.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder={t('User name')}
                    className={classes.input}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('Avatar')}
                    className={classes.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <CurrencySelect
                    className={classes.input}
                    onChange={onChangeCurrency}
                    value={data?.currency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={classes.input}
                    onChange={onChangeCountry}
                    value={data?.country}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};

export default ProfileCard;
