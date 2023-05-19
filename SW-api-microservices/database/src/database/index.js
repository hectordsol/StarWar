const  mongoose = require("mongoose");
const {MONGO_URI} = require("../config/envs");

const conn = mongoose.createConnection(MONGO_URI);

const Character =  conn.model("Character", require("./schemas/characterSchema"));

Character.find().then((res) => console.log(res));