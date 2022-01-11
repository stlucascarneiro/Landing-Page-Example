export const userValidations = {
    username: (input, submited) => {
        const invalidCharacter = /[^a-zA-Z0-9\-\/]/.test(input)
        if (invalidCharacter) {
            return { valid: false, message: 'Caracteres inválidos' };
        }
        const invalidLength = input.length > 24 || input.length < 3
        if (submited && invalidLength) {
            return { valid: false, message: 'Nome de usuário inválido' };
        }
        return { valid: true, message: false };
    },
    email: (input, submited) => {
        const invalidCharacter = /[^a-zA-Z0-9@\._\-\/]/.test(input)
        if (invalidCharacter) {
            return { valid: false, message: 'Caracteres inválidos' };
        }
        const invalidEmailFormat = !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
        if (submited && invalidEmailFormat) {
            return { valid: false, message: 'Formato de email inválido' };
        }
        const invalidLength = input.length > 255 || input.length < 8
        if (submited && invalidLength) {
            return { valid: false, message: 'Email inválido' };
        }
        return { valid: true, message: false };
    },
    usernameOrEmail: (input, submited) => {
        const invalidCharacter = /[^a-zA-Z0-9@\._\-\/]/.test(input)
        if (invalidCharacter) {
            return { valid: false, message: 'Caracteres inválidos' };
        }
        const invalidLength = input.length > 255 || input.length < 3
        if (submited && invalidLength) {
            return { valid: false, message: 'Formato inválido' };
        }
        return { valid: true, message: false };
    },
    password: (input, submited) => {
        const invalidCharacter = /[^a-zA-Z0-9!@#$%&*^\-\/]/.test(input)
        if (invalidCharacter) {
            return { valid: false, message: 'Formato de senha inválido' };
        }
        const invalidLength = input.length > 24 || input.length < 8
        if (submited && invalidLength) {
            return { valid: false, message: 'Digite uma senha entre 8 e 24 caracteres' };
        }
        return { valid: true, message: false };
    },
}