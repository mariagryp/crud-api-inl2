const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
   /*  sub: {
        type: Boolean,
        required: true,
        default: false
    } */
})

// export mongoose schema to be able to comunicate with db.
module.exports = mongoose.model("User", UserSchema);