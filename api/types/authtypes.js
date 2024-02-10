const zod = require('zod');

const signupData = zod.object({
    username: zod.string().min(1),
    email: zod.string().email(),
    password:zod.string().min(6)
    
})

module.exports = {
    signupData,
}