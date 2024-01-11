
// el nombre de usuario tiene que ser un email
// el nombre de usuario no puede estar vacío.
// el nombre de usuario no puede tener más de 35 caracteres.
export const validEmail = (email) => {
    if (email.length === 0) {
        return "El email no puede estar vacío.";
    }
    if (email.length > 35) {
        return "El email no puede tener más de 35 caracteres.";
    }
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}

// la contraseña tiene que tener al menos un número.
// la contraseña tiene que tener una longitud entre 6 y 10 caracteres.
export const validPassword = (password) => {
    if (password.length === 0) {
        return "La contraseña no puede estar vacía.";
    }
    if (password.length < 6 || password.length > 10) {
        return "La contraseña debe tener entre 6 y 10 caracteres.";
    }
    const regex = /^(?=.*[0-9]).{6,10}$/;
    return regex.test(password);
}