import { StateSchema } from 'app/providers/StoreProvider';

export const articleDetailsPageRecommendationsIsLoading = (state: StateSchema) => state.articleDetailsPage?.recommendations?.isLoading;

export const articleDetailsPageRecommendationsError = (state: StateSchema) => state.articleDetailsPage?.recommendations?.error;
