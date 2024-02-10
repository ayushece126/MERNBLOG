const { User } = require('../models/user.model');
const { signupData } = require('../types/authtypes');
const bcrypt = require('bcryptjs');
const signup = async (req, res,next) => {
    const signUpbody = req.body;
    const validBody = signupData.safeParse(signUpbody);

    if (!validBody.success) {
        return res.status(400).json({ message: 'invalid data inputs' });        
    }

    const existingUser = await User.findOne({
        email:req.body.email
    });

    if (existingUser) {
        return res.status(400).json({ email: 'A user has already registered with this email' });
    } else {

        const password = req.body.password;
        const hashedPassword =await bcrypt.hash(password,8)
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: hashedPassword,
        });
        try {
            const savedUser = await newUser.save();
            return res.status(200).json({ msg: savedUser });   
            
        } catch (error) {
            next(error);
        }
    }
}

module.exports = {
    signup,
}