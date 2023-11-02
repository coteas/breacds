//Require in our Mongoose
const mongoose = require('mongoose')

//Destructuring/Shorthand for Schema constructor
const { Schema } = mongoose

//Bread Schema
const breadSchema = new Schema ({
    //actualbreakdown of the bread document(1 bread item/data)
    name: { type: String, required: true },
    hasGluten: { type: Boolean },
    image: { type: String, default: 'http://placehold.it/500x500.png' },
    baker: {
        type: Schema.Types.ObjectId,
        ref: 'Baker',
    }
})

// helper methods 
breadSchema.methods.getBakedBy = function(){
    return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}`
}

//Bread Model
const Bread = mongoose.model('Bread', breadSchema)

//Export Bread
module.exports = Bread