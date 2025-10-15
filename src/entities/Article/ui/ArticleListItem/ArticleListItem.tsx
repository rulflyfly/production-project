import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from 'entities/Article/model/types/article';
import Text from 'shared/ui/Text/Text';
import Icon from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import Avatar from 'shared/ui/Avatar/Avatar';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AppLink from 'shared/ui/AppLink/AppLink';
import classes from './ArticleListItem.module.scss';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget
}

const ArticleListItem = (props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
        target,
    } = props;
    const [isHover, bindHover] = useHover();

    const types = <Text text={article.type.join(', ')} className={classes.type} />;
    const views = (
        <>
            <Text text={String(article.views)} className={classes.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
        return (
            <div {...bindHover} className={classNames(classes.ArticleListItem, {}, [className, classes[view]])}>
                <Card className={classes.card}>
                    <div className={classes.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={classes.username} />
                        <Text text={article.createdAt} className={classes.date} />
                    </div>
                    <Text text={article.title} className={classes.title} />
                    {types}
                    <img src={article.img} className={classes.img} alt={article.img} />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={classes.textBlock} />
                    )}
                    <div className={classes.footer}>
                        <AppLink to={RoutePath.article_details + article.id} target={target}>
                            <Button theme={ButtonTheme.OUTLINE}>
                                Read more...
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink target={target} to={RoutePath.article_details + article.id} {...bindHover} className={classNames(classes.articleListItem, {}, [className, classes[view]])}>
            <Card className={classes.card}>
                <div className={classes.imageWrapper}>
                    <img src={article.img} className={classes.img} alt={article.title} />
                    <Text text={article.createdAt} className={classes.date} />
                </div>
                <div className={classes.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} />
            </Card>
        </AppLink>
    );
};

export default memo(ArticleListItem);
