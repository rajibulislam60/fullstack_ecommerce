const { default: mongoose, Schema } = require("mongoose");

let categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
    products:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      }
    ]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Category", categorySchema);
