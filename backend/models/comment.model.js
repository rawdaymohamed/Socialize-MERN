import mongoose, { Schema } from "mongoose";

const CommentSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    post: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
    content: { type: String, required: true },
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    replies: [{
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        content: { type: String, required: true },
        likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        createdAt: { type: Date, default: Date.now }
    }]
}, { timestamps: true });
export const Comment = mongoose.model("Comment", CommentSchema)