const mongoose = require("mongoose");
const validator = require("validator");

const catSchema = new mongoose.Schema(
    {
        categoryId: {
            type: Number,
            required: [true, "category id required"],
            trim: true
        },
        blogTitle: {
            type: String,
            required: [true, "Name of Category required"],
            validate(value) {
                if (!validator.isLength(value, { max: 50 })) {
                    throw new Error("Category name should not be more than 50 letters");
                }
            }
        },
        blogDesc: {
            type: JSON
        },
        blogLogo: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Blog = mongoose.model("blogs", catSchema);

module.exports = Blog;
