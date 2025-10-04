import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import Text from 'shared/ui/Text/Text';
import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import classes from './ArticleDetailsPage.module.scss';
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slice/articleDetailsCommentSlice';
import { getArticleCommentsIsLoading } from '../model/selectors/comment';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducerList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const {
        className,
    } = props;

    const { id } = useParams<{id: string}>();

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <div className={classNames('', {}, [className])}>
                Article not found
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames('', {}, [className])}>
                <ArticleDetails id={id} />
                <Text title="Comments" className={classes.commentTitle} />
                <CommentList comments={comments} isLoading={commentsIsLoading} />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
