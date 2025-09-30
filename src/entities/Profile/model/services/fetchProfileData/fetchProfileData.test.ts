import axios from 'axios';
import { StateSchema } from 'app/providers/StoreProvider';
import { Dispatch } from '@reduxjs/toolkit';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { fetchProfileData } from './fetchProfileData';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

const data = {
    first: 'Nastya',
    lastname: 'Suhasya',
    age: 28,
    currency: Currency.EUR,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin',
};

describe('fetchProfileData.test', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockResolvedValue({ data });
        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('login error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockRejectedValue({ response: { status: 403 } });
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
