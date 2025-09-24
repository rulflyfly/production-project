import { profileActions, profileReducer } from './model/slice/profileSlice';
import { ProfileSchema } from './model/types/profile';
import { ProfilePageAsync as ProfilePage } from './ui/ProfilePage.async';

export {
    ProfilePage,
    ProfileSchema,
    profileActions,
    profileReducer,
};
