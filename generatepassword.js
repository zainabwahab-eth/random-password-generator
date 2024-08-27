// generatePassword.js

function generatePassword(length, strength) {
    if (typeof length !== 'number' || length <= 0) {
        throw new Error('Password length must be a positive number');
    }

    let charset = '';
    switch (strength) {
        case 'low':
            charset = 'abcdefghijklmnopqrstuvwxyz';
            break;
        case 'medium':
            charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            break;
        case 'high':
            charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';
            break;
        default:
            throw new Error('Invalid strength level');
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}

module.exports = generatePassword;


