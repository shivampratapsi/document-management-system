exports.passwordStrength = async (password) => {
    if (password.length < 8) {
        console.log("password must have length greater than 8");
        return false;
    }
    
    if (!/[A-Z]/.test(password)) {
        console.log("password must have at least one uppercase letter");
        return false;
    }
    
    if (!/[a-z]/.test(password)) {
        console.log("password must have at least one lowercase letter");
        return false;
    }
    
    if (!/\d/.test(password)) {
        console.log("password must have at least one digit");
        return false;
    }
    
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
        console.log("password must have at least one special character");
        return false;
    }
    
    const commonPattern = /password|123456|123456789|qwerty|abc123|password123|admin|letmein|welcome|monkey/i;

    if (commonPattern.test(password)) {
        console.log("Come on it's a common password !");
        return false;
    }
    
    if (/123|234|345|456|567|678|789|abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz/i.test(password)) {
        console.log("Please don't use sequential characters for password !");
        return false;
    }
    
    return true;
};