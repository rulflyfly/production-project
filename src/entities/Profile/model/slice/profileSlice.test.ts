import { DeepPartial } from '@reduxjs/toolkit';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { profileReducer } from './profileSlice';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
    first: 'Nastya',
    lastname: 'Suhasya',
    age: 28,
    currency: Currency.EUR,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin',
};

describe('profileSlice.test', () => {
    test('test update profile service panding', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({ isLoading: true, error: undefined, validateErrors: [ValidateProfileError.SERVER_ERROR] });
    });
    test('test update profile service fullfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false, error: undefined, validateErrors: undefined, readonly: true, form: data, data,
        });
    });
});
