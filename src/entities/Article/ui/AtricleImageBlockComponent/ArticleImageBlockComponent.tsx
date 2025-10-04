import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleImageBlock } from 'entities/Article/model/types/article';
import Text, { TextAlign } from 'shared/ui/Text/Text';
import classes from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock
}

const ArticleImageBlockComponent = (props: ArticleImageBlockComponentProps) => {
    const {
        className,
        block,
    } = props;
    return (
        <div className={classNames('', {}, [className])}>
            <img src={block.src} className={classes.img} alt={block.src} />
            {block.title && (
                <Text
                    text={block.title}
                    align={TextAlign.CENTER}
                />
            )}
        </div>
    );
};

export default memo(ArticleImageBlockComponent);
