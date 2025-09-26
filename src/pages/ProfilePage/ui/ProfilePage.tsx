import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchProfileData } from 'entities/User';
import { ProfileCard, profileReducer } from 'entities/Profile';

interface ProfilePageProps {
    className?: string
}

const reducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = (props: ProfilePageProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames('', {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
