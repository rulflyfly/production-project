import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import Text from 'shared/ui/Text/Text';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string
}

const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(classes.profileCard, {}, [className])}>
            <div className={classes.header}>
                <Text title={t('Profile')} />
                <Button className={classes.editButton} theme={ButtonTheme.OUTLINE}>
                    {t('Edit')}
                </Button>
            </div>
            <div className={classes.data}>
                <Input
                    value={data?.first}
                    placeholder={t('Your name')}
                    className={classes.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Your surname')}
                    className={classes.input}
                />
            </div>
        </div>
    );
};

export default ProfileCard;
