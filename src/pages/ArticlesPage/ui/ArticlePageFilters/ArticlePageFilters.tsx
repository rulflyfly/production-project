import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType, getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { ArticleView, ArticleViewSelector } from 'entities/Article';
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlePageSlice';
import { Card } from 'shared/ui/Card/Card';
import Input from 'shared/ui/Input/Input';
import ArticleSortSelector from 'entities/Article/ui/ArticleSortSelector/ArticleSortSelector';
import { ArticleSortField, ArticleType } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types/types';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import Tabs, { TabItem } from 'shared/ui/Tabs/Tabs';
import ArticleTypeTabs from 'entities/Article/ui/ArticleTypeTabs/ArticleTypeTabs';
import classes from './ArticlePageFilters.module.scss';

interface ArticlePageFiltersProps {
    className?: string
}

const ArticlePageFilters = (props: ArticlePageFiltersProps) => {
    const {
        className,
    } = props;

    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);
    const dispatch = useAppDispatch();

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetch = useDebounce(fetchData, 500);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const onChangeSort = useCallback((sort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(sort));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetch();
    }, [dispatch, debouncedFetch]);

    const onChangeOrder = useCallback((order: SortOrder) => {
        dispatch(articlesPageActions.setOrder(order));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetch();
    }, [dispatch, debouncedFetch]);

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlesPageActions.setSearch(search));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetch();
    }, [dispatch, debouncedFetch]);

    const onCahngeType = useCallback((value: ArticleType) => {
        dispatch(articlesPageActions.setType(value));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetch();
    }, [dispatch, debouncedFetch]);

    return (
        <div className={classNames(classes.ArticlePageFilters, {}, [className])}>
            <div className={classes.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={classes.search}>
                <Input placeholder="Search" onChange={onChangeSearch} value={search} />
            </Card>
            <ArticleTypeTabs
                value={type}
                onChangeType={onCahngeType}
            />
        </div>
    );
};

export default memo(ArticlePageFilters);
