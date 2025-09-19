import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

const LoginForm = (props: LoginFormProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(classes.loginForm, {}, [className])}>
            <Input autoFocus placeholder={t('Enter Username')} className={classes.input} />
            <Input placeholder={t('Enter Password')} className={classes.input} />
            <Button className={classes.loginButton}>
                {t('Login')}
            </Button>
        </div>
    );
};

export default LoginForm;
