import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Text from 'shared/ui/Text/Text';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import {
    getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'entities/Profile';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import classes from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string
}

const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
    const {
        className,
    } = props;

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const readonly = useSelector(getProfileReadonly);

    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    const { t } = useTranslation('profile');
    return (
        <div className={classNames(classes.header, {}, [className])}>
            <Text title={t('Profile')} />
            {canEdit && (
                <div className={classes.btnWrapper}>
                    {readonly ? (
                        <Button
                            className={classes.editButton}
                            theme={ButtonTheme.OUTLINE}
                            onClick={onEdit}
                        >
                            {t('Edit')}
                        </Button>
                    ) : (
                        <>
                            <Button
                                className={classes.editButton}
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={onCancelEdit}
                            >
                                {t('Cancel')}
                            </Button>
                            <Button
                                className={classes.saveButton}
                                theme={ButtonTheme.OUTLINE}
                                onClick={onSave}
                            >
                                {t('Save')}
                            </Button>
                        </>
                    )}
                </div>
            )}

        </div>
    );
};

export default ProfilePageHeader;
