import { Schema, model } from "mongoose";

const productSchema = new Schema({
    uid: {
        type: String,
        required: true // uid is required
    },
    title: {
        type: String,
        required: true // Title is required
    },
    description: {
        type: String,
        required: true // Description is required
    },
    pinCodes: [{
        type: Number,
        required: true // Consider making this required if it's critical for your application
    }],
    price: {
        type: Number,
        required: true, // Price is required
        min: 0 // Ensure the price is not negative
    },
    keywords: {
        type: String,
        trim: true, // Trim whitespace from the beginning and end
        index: true // Index for faster search
    },
    images: [{
        type: String // Array of image URLs
    }]
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

export const Product = model('Product', productSchema);
