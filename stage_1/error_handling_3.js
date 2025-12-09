function validate(username, password) {
   const trimmedUsername = username.trim();
   const trimmedPassword = password.trim();

   if (trimmedUsername.length > 12) {
      throw ERRORS.usernameTooLong(trimmedUsername);
   }

   if (trimmedUsername.length < 1) {
      throw ERRORS.usernameTooShort(trimmedUsername);
   }

   const invalidUsernameChars = /[(){}[\]|;:'"\/?.,<>~\-=+*&^%$@!]/;
   if (invalidUsernameChars.test(trimmedUsername)) {
      throw ERRORS.usernameInvalidCharacters(trimmedUsername);
   }

   if (trimmedPassword.length > 24) {
      throw ERRORS.passwordTooLong(trimmedPassword);
   }

   if (trimmedPassword.length < 8) {
      throw ERRORS.passwordTooShort(trimmedPassword);
   }

   const allowedPasswordChars = /^[a-zA-Z0-9;:?.,<>~*^%$ @!_]+$/;
   if (!allowedPasswordChars.test(trimmedPassword)) {
      throw ERRORS.passwordInvalidCharacters(trimmedPassword);
   }

   if (!/[A-Z]/.test(trimmedPassword)) {
      throw ERRORS.passwordNoCapital(trimmedPassword);
   }

   if (!/[0-9]/.test(trimmedPassword)) {
      throw ERRORS.passwordNoNumber(trimmedPassword);
   }

   if (
      trimmedPassword.includes(trimmedUsername) &&
      trimmedUsername.length > 0
   ) {
      throw ERRORS.passwordContainsUsername(trimmedPassword);
   }

   return true;
}
