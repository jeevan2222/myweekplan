
const createUser = async (data) => {
    try {
        return { message: `User created: ${data}` };
    } catch (err) {
        throw new Error('Error creating user');
    }
};

module.exports = {
    createUser
};
