import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string,
    ThunkConfig<string>
    >(
        'ArticleDetails/addCommentForArticle',
        async (text, thunkApi) => {
            const {
                extra, dispatch, rejectWithValue, getState,
            } = thunkApi;
            const userData = getUserAuthData(getState());
            const articleId = getArticleDetailsData(getState())?.id;

            if (!userData || !text || !articleId) {
                return rejectWithValue('no data');
            }
            try {
                const response = await extra.api.post<Comment>('/comments', {
                    articleId,
                    userId: userData.id,
                    text,
                });

                dispatch(fetchCommentsByArticleId(articleId));

                return response.data;
            } catch {
                return rejectWithValue('You entered wrong username or password');
            }
        },
    );
