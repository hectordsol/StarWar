const {Schema}=require("mongoose");
const filmSchema = new Schema(
{
    _id: String,
    title: String,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: Date,
    characters: [{type: String, ref: "Character"}],
    planets: [{type: String, ref: "Planet"}]

  });
  filmSchema.statics.list = async function (){
    return await this.find()
      .populate("characters",["_id","name"])
      .populate("planets",["_id","name"])
  };
  filmSchema.statics.get = async function (id){
    return await this.findById(id)  //findOne({_id}) es lo mismo, y sirve para otras propiedades
      .populate("characters",["_id","name"])
      .populate("planets",["_id","name"])
  };
  filmSchema.statics.insert = async function (film){
    return await this.create(film);
  };
  filmSchema.statics.change = async function (id, film){
    return await this.findByIdAndUpdate(id, film,{new:true});
  };
  filmSchema.statics.remove = async function (id) {
    return await this.findByIdAndRemove(id);
  };  
module.exports = filmSchema;