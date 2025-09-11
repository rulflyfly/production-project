import { classNames } from 'shared/lib/classNames/classNames';
import './PageLoader.scss';

interface LoaderProps {
    className?: string
}

const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('loader', {}, [className])} />
);

export default Loader;
