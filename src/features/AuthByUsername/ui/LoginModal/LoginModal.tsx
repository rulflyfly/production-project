import { classNames } from 'shared/lib/classNames/classNames';
import Modal from 'shared/ui/Modal/Modal';
import classes from './LoginModal.module.scss';
import LoginForm from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string,
    isOpen: boolean;
    onClose: () => void;

}

const LoginModal = (props: LoginModalProps) => {
    const {
        className,
        isOpen,
        onClose,
    } = props;
    return (
        <Modal
            lazy
            isOpen={isOpen}
            onClose={onClose}
            className={classNames(classes.loginModal, {}, [className])}
        >
            <LoginForm />
        </Modal>
    );
};

export default LoginModal;
