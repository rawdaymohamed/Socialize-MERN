import mongoose, { Schema } from "mongoose";


const UserSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    description: { type: String, default: '' },
    city: { type: String, default: '' },
    school: { type: String, default: '' },
    work: { type: String, default: '' },
    website: { type: String, default: '' },
    profilePicture: { type: String, default: '' },
    followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    pendingFollowRequests: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    blockedUsers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
}, { timestamps: true });

export const User = mongoose.model('User', UserSchema);