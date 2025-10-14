import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types/types';
import { ArticleSortField, ArticleType } from 'entities/Article/model/types/article';
import {
    getArticlesPageInited,
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams,
    ThunkConfig<string>
    >(
        'articlePage/initArticlesPage',
        async (searchParams, thunkApi) => {
            const { getState, dispatch } = thunkApi;
            const inited = getArticlesPageInited(getState());
            if (!inited) {
                const orderFromURL = searchParams.get('order') as SortOrder;
                const sortFromURL = searchParams.get('sort') as ArticleSortField;
                const searchFromURL = searchParams.get('search');
                const typeFromURL = searchParams.get('type') as ArticleType;
                if (orderFromURL) {
                    dispatch(articlesPageActions.setOrder(orderFromURL));
                }
                if (sortFromURL) {
                    dispatch(articlesPageActions.setSort(sortFromURL));
                }
                if (searchFromURL) {
                    dispatch(articlesPageActions.setSearch(searchFromURL));
                }
                if (typeFromURL) {
                    dispatch(articlesPageActions.setType(typeFromURL));
                }
                dispatch(articlesPageActions.initState());
                dispatch(fetchArticlesList({}));
            }
        },
    );
