import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    images: [{ type: String, required: true }],
    description: { type: String, default: '' },
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
},
    { timestamps: true }
);

export const User = mongoose.model('Post', PostSchema);