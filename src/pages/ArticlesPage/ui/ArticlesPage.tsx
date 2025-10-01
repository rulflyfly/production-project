import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const {
        className,
    } = props;
    return (
        <div className={classNames('', {}, [className])}>
            ARTICLES
        </div>
    );
};

export default memo(ArticlesPage);
