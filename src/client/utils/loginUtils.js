/**
 * Login/Register pages' utility functions
 * @author patrickkerrypei / https://github.com/patrickkerrypei
 */

/**
 * Verifies whether an email is allowed (check in Register page)
 * @param {string} email - email to be checked
 * @return {boolean} - T/F valid email
 */
export function verifyEmail(email) {
    return true;
    return email.length >= 3 && /^\S+@\S+\.\S+$/.test(email);
}

/**
 * Verifies whether a password is allowed (check in Register page)
 * @param {string} password - password to be checked
 * @return {boolean} - T/F valid password
 */
export function verifyPassword(password) {
    let badPasswords = ['password', '123'];
    return password.length >= 3 &&
           badPasswords.indexOf(password) === -1;
}

/**
 * Verifies whether a userId is allowed (check in Register page)
 * @param {string} userId - userId to be checked
 * @return {boolean} - T/F valid userId
 */
export function verifyUserOrOrganizationId(userId) {
    return userId.length >= 3 &&
           /^[A-Za-z0-9_]+$/.test(userId);
    // TODO: share the same reference to the check in webgme
}

/**
 * Verifies whether a userName is allowed (check in Register page)
 * @param {string} userName - userName to be checked
 * @return {boolean} - T/F valid userName
 */
export function verifyUserName(userName) {
    return userName.length >= 3 && userName.indexOf(' ') > -1;
}

/**
 * Verifies whether a Major field is allowed (check in Register page)
 * @param {string} majorField - majorField to be checked
 * @return {boolean} - T/F valid orgField
 */
export function verifyMajor(majorField) {
    return typeof majorField === 'string' && majorField.length >= 1;
}
