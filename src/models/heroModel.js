import { Schema, model } from "mongoose";

const heroSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    atkPoints: {
        type: Number,
        required: true
    },
    expPoints: {
        type: Number,
        required: true,
        default: 0
    },
    monsterDefeated: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Monster',
            required: true,
            default: {}
        }
    ]
});

export default model('Hero', heroSchema);