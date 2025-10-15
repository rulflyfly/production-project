import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Article, ArticleView } from 'entities/Article/model/types/article';
import Text from 'shared/ui/Text/Text';
import classes from './ArticleList.module.scss';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string,
    articles: Article[],
    isLoading?: boolean,
    view?: ArticleView,
    target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        // eslint-disable-next-line
        <ArticleListItemSkeleton key={index} view={view} className={classes.card}/>
    ));

const ArticleList = (props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
    } = props;

    const renderArticle = (article: Article) => (
        <ArticleListItem target={target} article={article} view={view} className={classes.card} key={article.id} />
    );

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(classes.articleList, {}, [className, classes[view]])}>
                <Text title="No articles found" />
            </div>
        );
    }

    return (
        <div className={classNames(classes.articleList, {}, [className, classes[view]])}>
            {articles.length
                ? articles.map(renderArticle)
                : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
};

export default memo(ArticleList);
