import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useEffect } from 'react';
import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from 'entities/Article/model/selectors/articleDetails';
import Text, { TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import Avatar from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import Icon from 'shared/ui/Icon/Icon';
import { ArticleBlock, ArticleBlockType } from 'entities/Article/model/types/article';
import classes from './ArticleDetails.module.scss';
import ArticleCodeBlockComponent from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import ArticleImageBlockComponent from '../AtricleImageBlockComponent/ArticleImageBlockComponent';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleDetailsProps {
    className?: string
    id: string;
}

const reducers: ReducerList = {
    articleDetails: articleDetailsReducer,
};

const ArticleDetails = (props: ArticleDetailsProps) => {
    const {
        className,
        id,
    } = props;

    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent key={block.id} className={classes.block} block={block} />;
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent key={block.id} className={classes.block} block={block} />;
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent key={block.id} className={classes.block} block={block} />;
        default:
            return null;
        }
    }, []);

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={classes.avatar} width={200} height={200} border="50%" />
                <Skeleton className={classes.title} width={300} height={32} />
                <Skeleton className={classes.skeleton} width={600} height={24} />
                <Skeleton className={classes.skeleton} width="100%" height={200} />
                <Skeleton className={classes.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={error}
            />
        );
    } else {
        content = (
            <>
                <div className={classes.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={classes.avatart}
                    />

                </div>
                <Text
                    title={article?.title}
                    text={article?.subtitle}
                    className={classes.title}
                    size={TextSize.L}
                />
                <div className={classes.articleInfo}>
                    <Icon Svg={EyeIcon} className={classes.icon} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={classes.articleInfo}>
                    <Icon Svg={CalendarIcon} className={classes.icon} />
                    <Text text={article?.createdAt} />
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(classes.articleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetails);
