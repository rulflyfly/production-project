import { ArticleType } from 'entities/Article/model/types/article';
import { ArticleDetailsPageRecommendationsSchema } from 'pages/ArticleDetailsPage/model/types/ArticleDetailsPageRecommendationsSchema';
import { ArticlePageSchema } from './model/types/articlesPageSchema';
import { ArticlesPageAsync } from './ui/ArticlesPage/ArticlesPage.async';

export {
    ArticlesPageAsync as ArticlesPage,
    ArticlePageSchema,
    ArticleType,
    ArticleDetailsPageRecommendationsSchema,
};
