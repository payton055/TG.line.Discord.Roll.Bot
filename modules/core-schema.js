if (process.env.mongoURL) {
    const mongoose = require('mongoose');
    //const Schema = mongoose.Schema;
    //const Message = mongoose.model('Message', schema);

    const chattest = mongoose.model('chattest', {
        default: String,
        text: String,
        type: String
    });
    const block = mongoose.model('block', {
        groupid: String,
        blockfunction: Array
    });

    const randomAns = mongoose.model('randomAns', {
        groupid: String,
        randomAnsfunction: Array
    });

    const randomAnsAllgroup = mongoose.model('randomAnsAllgroup', {
        randomAnsAllgroup: Array
    });

    const GpPermission = mongoose.model('GpPermission', {
        groupid: String,
        user: [{
            userid: String,
            name: String,
            date: {
                type: Date,
                default: Date.now
            },
            Permission: String,
            Abiliy: Array
        }]



    });


    module.exports = {
        randomAns,
        block,
        chattest,
        randomAnsAllgroup,
        GpPermission
    }
    //const Cat = mongoose.model('Cat', { name: String });
    //const kitty = new Cat({ name: 'Zildjian' });
    /*
    module.exports = new Schema({
        default: String,
        text: String,
        type: String
    
    });
    */
}