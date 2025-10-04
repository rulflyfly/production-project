import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleTextBlock } from 'entities/Article/model/types/article';
import Text, { TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text';
import classes from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string,
    block: ArticleTextBlock
}

const ArticleTextBlockComponent = (props: ArticleTextBlockComponentProps) => {
    const {
        className,
        block,
    } = props;
    return (
        <div className={classNames(classes.ArticleTextBlockComponent, {}, [className])}>
            {block.title && (
                <Text title={block.title} className={classes.title} />
            )}
            {block.paragraphs.map((paragraph) => (
                <Text
                    key={paragraph}
                    text={paragraph}
                    className={classes.paragraph}
                />
            ))}
        </div>
    );
};

export default memo(ArticleTextBlockComponent);
