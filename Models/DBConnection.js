const mongoose = require('mongoose');

const password = "BdzfkwxdEWYVuMUE";

const url = `mongodb+srv://badrivishalsinghal8803:${password}@minorprojectcluster.81bcyoq.mongodb.net/?retryWrites=true&w=majority`

mongoose.set('strictQuery', false);
mongoose.connect(url).then(function(db){
    console.log("DB Connected...");
}).catch(function(err){
    console.log("Error Encountered");
})

module.exports = mongoose;
