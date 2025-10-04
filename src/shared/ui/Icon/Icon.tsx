import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Icon.module.scss';

interface IconProps {
    className?: string
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

const Icon = (props: IconProps) => {
    const {
        className,
        Svg,
    } = props;
    return (
        <Svg className={classNames(classes.icon, {}, [className])} />
    );
};

export default Icon;
