import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import classes from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    M = 'sizeM',
    L = 'sizeL',
    XL = 'sizeXl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [classes[theme]]: true,
        [classes.square]: square,
        [classes[size]]: true,
    };

    if (square) {
        console.log('mods: ', mods);
        console.log('classes: ', classes);
        console.log('size: ', size);
        console.log('square: ', square);
        console.log('theme: ', theme);
        console.log('className: ', className);
    }

    return (
        <button
            type="button"
            className={classNames(
                classes.button,
                mods,
                [className],
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default Button;
