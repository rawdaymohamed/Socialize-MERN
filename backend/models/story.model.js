import mongoose, { Schema } from "mongoose";
const StorySchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true }, // Can be image or text URL
    viewers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    expiresAt: {
        type: Date,
        default: () => new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
        index: { expires: 0 }
    }
}, { timestamps: true });
export const Story = mongoose.model('Story', StorySchema);