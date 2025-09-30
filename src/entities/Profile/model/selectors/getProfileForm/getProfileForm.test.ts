import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should return error', () => {
        const form = {
            first: 'Nastya',
            lastname: 'Suhasya',
            age: 28,
            currency: Currency.EUR,
            country: Country.Russia,
            city: 'Moscow',
            username: 'admin',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
