const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  _id:String,
  videoLink: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^youtube\.com\/embed\/[a-zA-Z0-9_-]+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid YouTube embed link!`,
    },
  },
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    enum: ["Education", "Sports", "Movies", "Comedy", "Lifestyle", "All"],
    required: true,
  },
  contentRating: {
    type: String,
    enum: ["Anyone", "7+", "12+", "16+", "18+"],
    required: true,
  },
  releaseDate: {
    type: String,
    required: true,
  },
  previewImage: {
    type: String,
    required: true,
  },
  votes: {
    upVotes: {
      type: Number,
      default: 0,
    },
    downVotes: {
      type: Number,
      default: 0,
    },
  },
  viewCount: {
    type: Number,
    default: 0,
  },
});

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
