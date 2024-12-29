import bcrypt from 'bcrypt'

export const hashPassword = async(password) => {
    try{
        const saltRounds = 10;
        const hashedPasswords = await bcrypt.hash(password, saltRounds);
        return hashedPasswords;
    } catch (error) {
        console.log(error);
    }
}

export const comparePassword = async (password, hashedPasword) => {
    return bcrypt.compare(password, hashedPassword);
};