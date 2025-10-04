import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleCodeBlock } from 'entities/Article/model/types/article';
import Code from 'shared/ui/Code/Code';
import classes from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

const ArticleCodeBlockComponent = (props: ArticleCodeBlockComponentProps) => {
    const {
        className,
        block,
    } = props;
    return (
        <div className={classNames(classes.ArticleCodeBlockComponent, {}, [className])}>
            <Code text={block.code} />
        </div>
    );
};

export default memo(ArticleCodeBlockComponent);
