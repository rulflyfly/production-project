import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginByUserName } from 'features/AuthByUsername/model/services/loginByUsername/loginByUserName';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import { getLoginUserName } from 'features/AuthByUsername/model/selectors/getLoginUserName/getLoginUserName';
import { getLoginPassword } from 'features/AuthByUsername/model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from 'features/AuthByUsername/model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError/getLoginError';
import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import classes from './LoginForm.module.scss';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

export interface LoginFormProps {
    className?: string
}

const initialReducers: ReducerList = {
    loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();
    const dispatch = useDispatch();

    const username = useSelector(getLoginUserName);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({ username, password }));
    }, [dispatch, username, password]);

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={classNames(classes.loginForm, {}, [className])}>
                <Text title={t('Login form')} />
                {error && (
                    <Text
                        text={t('You entered wrong username or password')}
                        theme={TextTheme.ERROR}
                    />
                )}
                <Input
                    autoFocus
                    placeholder={t('Enter Username')}
                    className={classes.input}
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    onChange={onChangePassword}
                    placeholder={t('Enter Password')}
                    className={classes.input}
                    value={password}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={classes.loginButton}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('Login')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
