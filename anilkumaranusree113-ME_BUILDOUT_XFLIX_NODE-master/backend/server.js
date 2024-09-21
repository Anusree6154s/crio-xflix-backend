const express = require("express");
const Video = require("./models/video");

const router = express.Router();

router.post("/", async (req, res) => {
  const { videoLink, ...rest } = req.body;
  try {
    const video = await Video.create({ ...rest, videoLink: videoLink.slice(12) });
    res.status(201).send(video);
  } catch (error) {
    res.status(400).send({
      code: 400,
      message: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const { title, genres, contentRating, sortBy } = req.query;
    let filter = {};

    if (title) filter.title = new RegExp(title, "i");
    if (genres && genres !== "All") filter.genre = { $in: genres.split(",") };
    if (contentRating)  filter.contentRating =  decodeURIComponent(contentRating)

    const sortField =
      sortBy === "viewCount" ? { viewCount: -1 } : { releaseDate: -1 };

    const videos = await Video.find(filter).sort(sortField);
    res.status(200).send({ videos });
  } catch (error) {
    res.status(400).send({
      code: 400,
      message: error.message,
    });
  }
});

router.get("/:videoId", async (req, res) => {
  try {
    const video = await Video.findById(req.params.videoId);
    if (!video) {
      return res.status(404).send({ message: "Video not found" });
    }
    res.status(200).send(video);
  } catch (error) {
    res.status(400).send({
      code: 400,
      message: "Invalid videoId format",
    });
  }
});

router.patch("/:videoId/votes", async (req, res) => {
  try {
    const { vote, change } = req.body;
    if (
      !["upVote", "downVote"].includes(vote) ||
      !["increase", "decrease"].includes(change)
    ) {
      return res.status(400).send({ message: "Invalid vote or change value" });
    }

    const video = await Video.findById(req.params.videoId);
    if (!video) {
      return res.status(404).send({ message: "Video not found" });
    }

    if (vote === "upVote") {
      video.votes.upVotes += change === "increase" ? 1 : -1;
    } else {
      video.votes.downVotes += change === "increase" ? 1 : -1;
    }

    await video.save();
    res.status(204).send();
  } catch (error) {
    res.status(400).send({
      code: 400,
      message: error.message,
    });
  }
});

router.patch("/:videoId/views", async (req, res) => {
  try {
    const video = await Video.findById(req.params.videoId);
    if (!video) {
      return res.status(404).send({ message: "Video not found" });
    }

    video.viewCount += 1;
    await video.save();
    res.status(204).send();
  } catch (error) {
    res.status(400).send({
      code: 400,
      message: "Invalid videoId format",
    });
  }
});

module.exports = router;
