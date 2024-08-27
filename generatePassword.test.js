// generatePassword.test.js

const generatePassword = require('../generatePassword');

describe('generatePassword Function', () => {
    test('should generate a password of correct length', () => {
        const length = 10;
        const password = generatePassword(length, 'low');
        expect(password).toHaveLength(length);
    });

    test('should throw an error for invalid strength', () => {
        expect(() => generatePassword(10, 'invalid')).toThrow('Invalid strength level');
    });

    test('should generate a low strength password with only lowercase letters', () => {
        const password = generatePassword(10, 'low');
        expect(password).toMatch(/^[a-z]+$/);
    });

    test('should generate a medium strength password with lowercase, uppercase, and numbers', () => {
        const password = generatePassword(15, 'medium');
        expect(password).toMatch(/^[a-zA-Z0-9]+$/);
    });

    test('should generate a high strength password with lowercase, uppercase, numbers, and special characters', () => {
        const password = generatePassword(20, 'high');
        expect(password).toMatch(/^[a-zA-Z0-9!@#$%^&*()_+\[\]{}|;:,.<>?]+$/);
    });

    test('should generate different passwords on consecutive calls', () => {
        const password1 = generatePassword(12, 'high');
        const password2 = generatePassword(12, 'high');
        expect(password1).not.toBe(password2);
    });
});
