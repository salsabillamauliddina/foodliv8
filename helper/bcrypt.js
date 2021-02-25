const bcrypt = require('bcryptjs')

function hashPassword(password) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

function comparePassword(input, passwordDB){
    return bcrypt.compareSync(input, passwordDB)
}

module.exports = {
    hashPassword,
    comparePassword
}

