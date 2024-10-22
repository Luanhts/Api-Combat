import { Schema, model } from "mongoose";

const monsterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    atkPoints: {
        type: Number,
        required: true
    },
    expReward: {
        type: Number,
        required: true
    },
    defeated: {
        type: Boolean,
        default: false,
        required: true // pode dar conflito eu acho
    }
});

export default model('Monster', monsterSchema);