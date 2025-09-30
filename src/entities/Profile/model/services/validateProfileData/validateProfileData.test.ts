import axios from 'axios';
import { StateSchema } from 'app/providers/StoreProvider';
import { Dispatch } from '@reduxjs/toolkit';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/profile';

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

describe('validateProfileData.test', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test('success', async () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });

    test('without first and last name', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
