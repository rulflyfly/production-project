import StoreProvider from './ui/StoreProvider';
import { AppDispatch, createReduxStore } from './config/store';
import {
    ReduxStoreWithManager, StateSchema, ThunkConfig, ThunkExtraArg,
} from './config/StateSchema';

export {
    StateSchema,
    StoreProvider,
    createReduxStore,
    ReduxStoreWithManager,
    AppDispatch,
    ThunkExtraArg,
    ThunkConfig,
};
