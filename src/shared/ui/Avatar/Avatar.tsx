import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import classes from './Avatar.module.scss';

interface AvatarProps {
    className?: string,
    src?: string,
    size?: number,
    alt?: string
}

const Avatar = (props: AvatarProps) => {
    const {
        className,
        src,
        size = 100,
        alt,
    } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    return (
        <img
            src={src}
            className={classNames(classes.avatar, {}, [className])}
            style={styles}
            alt={alt}
        />

    );
};

export default Avatar;
