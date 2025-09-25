import { StateSchema } from 'app/providers/StoreProvider';
import { AsyncThunkAction } from '@reduxjs/toolkit';

type ActionCreatorType<Return, Arg, RegectValue>
 = (arg: Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RegectValue}>

export class TestAsyncThunk<Return, Arg, RegectValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    api: { post: jest.Mock };

    navigate: jest.Mock;

    actionCreator: ActionCreatorType<Return, Arg, RegectValue>;

    constructor(actionCreator: ActionCreatorType<Return, Arg, RegectValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
        this.api = { post: jest.fn() };
        this.navigate = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, { api: this.api, navigate: this.navigate });

        return result;
    }
}
