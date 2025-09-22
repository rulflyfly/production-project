import { StateSchema } from 'app/providers/StoreProvider';

export const getLogingState = (state: StateSchema) => state?.loginForm;
