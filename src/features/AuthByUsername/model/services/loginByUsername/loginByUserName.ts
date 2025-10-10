import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginByUsernameProps,
    ThunkConfig<string>
    >(
        'login/loginByUserName',
        async (authData, thunkApi) => {
            const { extra, dispatch, rejectWithValue } = thunkApi;
            try {
                const response = await extra.api.post('/login', authData);

                if (!response.data) {
                    throw new Error();
                }
                localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
                dispatch(userActions.setAuthData(response.data));

                return response.data;
            } catch {
                return rejectWithValue('You entered wrong username or password');
            }
        },
    );
