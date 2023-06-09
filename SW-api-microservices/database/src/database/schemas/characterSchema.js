const {Schema}=require("mongoose");
const characterSchema = new Schema(
{
    _id: String,
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    homeworld: {type: String, ref: "Planet"},
    films: [{type: String, ref: "Film"}]
  });
  characterSchema.statics.list = async function (){
    return await this.find()
      .populate("homeworld",["_id","name"])
      .populate("films",["_id","title"])
  };
  characterSchema.statics.get = async function (id){
    return await this.findById(id)  //findOne({_id}) es lo mismo, y sirve para otras propiedades
      .populate("homeworld",["_id","name"])
      .populate("films",["_id","title"])
  };
  characterSchema.statics.insert = async function (character){
    return await this.create(character);
  };
  characterSchema.statics.change = async function (id, character){
    return await this.findByIdAndUpdate(id, character,{new:true});
  };
  characterSchema.statics.remove = async function (id) {
    return await this.findByIdAndRemove(id);
  };
  module.exports = characterSchema;