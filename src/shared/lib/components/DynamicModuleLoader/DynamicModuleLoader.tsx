import { useDispatch, useStore } from 'react-redux';
import { FC, ReactNode, useEffect } from 'react';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer
}

type ReducerListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
    reducers: ReducerList;
    children: ReactNode;
}

const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props: DynamicModuleLoaderProps) => {
    const {
        reducers,
        children,
    } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        (Object.entries(reducers) as ReducerListEntry[]).forEach(([name, reducer]) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            (Object.entries(reducers) as ReducerListEntry[]).forEach(([name, reducer]: ReducerListEntry) => {
                store.reducerManager.remove(name);
                dispatch({ type: `@DESTROY ${name} reducer` });
            });
        };
        // eslint-disable-next-line
        }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};

export default DynamicModuleLoader;
