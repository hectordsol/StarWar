const {Schema}=require("mongoose");
const planetSchema = new Schema(
{
    _id: String,
    name: String,
    rotation_period: String,
    orbital_period: String,
    diameter: String,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    residents: {type: String, ref: "Planet"},
    films: [{type: String, ref: "Film"}]
  });
  planetSchema.statics.list = async function (){
    return await this.find()
      .populate("residents",["_id","name"])
      .populate("films",["_id","title"])
  };
  planetSchema.statics.get = async function (id){
    return await this.findById(id)  //findOne({_id}) es lo mismo, y sirve para otras propiedades
      .populate("residents",["_id","name"])
      .populate("films",["_id","title"])
  };
  planetSchema.statics.insert = async function (planet){
    return await this.create(planet);
  };
  planetSchema.statics.change = async function (id, planet){
    return await this.findByIdAndUpdate(id, planet,{new:true});
  };
  planetSchema.statics.remove = async function (id) {
    return await this.findByIdAndRemove(id);
  };
  module.exports = planetSchema;