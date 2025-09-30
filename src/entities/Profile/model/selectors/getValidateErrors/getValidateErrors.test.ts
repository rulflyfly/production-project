import { StateSchema } from 'app/providers/StoreProvider';
import { getValidateErrors } from './getValidateErrors';
import { ValidateProfileError } from '../../types/profile';

describe('getValidateErrors.test', () => {
    test('should return error', () => {
        const errors = [ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_USER_DATA];
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: errors,
            },
        };
        expect(getValidateErrors(state as StateSchema)).toEqual(errors);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
