import mongoose, { Schema } from "mongoose";

const FollowRequestSchema = new Schema({
    requester: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    recipient: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    }
}, { timestamps: true });
export const FollowRequest = mongoose.model("FollowRequest", FollowRequestSchema)