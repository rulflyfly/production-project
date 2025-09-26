import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAythData';
import { fetchProfileData } from '../Profile/model/services/fetchProfileData/fetchProfileData';
import { userReducer, userActions } from './model/slice/userSlice';
import { User, UserSchema } from './model/types/user';

export {
    userReducer,
    userActions,
    User,
    UserSchema,
    getUserAuthData,
    fetchProfileData,
};
