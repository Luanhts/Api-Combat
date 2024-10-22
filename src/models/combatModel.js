import { Schema, Types, model } from "mongoose";


const combatSchema = new Schema({
    monster: {
        type: Schema.Types.ObjectId,
        ref: "Monster",
        required: true
    },
    hero: {
        type: Schema.Types.ObjectId,
        ref: "Hero",
        required: true
    }
});

export default model('Combat', combatSchema);