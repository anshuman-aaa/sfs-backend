const mongoose = require("mongoose");
const validator = require("validator");

const catSchema = new mongoose.Schema(
  {
    categoryId: {
      type: Number,
      required: [true, "category id required"],
      trim: true
    },
    categoryName: {
      type: String,
      required: [true, "Name of Category required"],
      validate(value) {
        if (!validator.isLength(value, { max: 50 })) {
          throw new Error("Category name should not be more than 50 letters");
        }
      }
    },
    categoryDesc: {
      type: String
    },
    categoryUri: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Category = mongoose.model("category", catSchema);

module.exports = Category;
