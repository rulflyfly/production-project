import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { getLogingState } from 'features/AuthByUsername/model/selectors/getLogingState/getLoginState';
import { loginByUserName } from 'features/AuthByUsername/model/services/loginByUsername/loginByUserName';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import { loginActions } from '../../model/slice/loginSlice';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

const LoginForm = memo((props: LoginFormProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLogingState);

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
    );
});

export default LoginForm;
