const User = require('../models/User');

const auth = async (req, res, next) => {
    const token = req.get('Token');


    if (!token) {
        return res.status(401).send({message: 'No token present'});
    }



    const user = await User.findOne({token});

    if (!user) {
        return res.status(401).send({message: 'This user does not exist'});
    }

    req.user = user;

    next();
};

module.exports = auth;