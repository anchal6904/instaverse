import mongoose from "mongoose";
import Story from "../models/storyContent.js";

const getStories = async (req, res) => {

    try {
        const story = await Story.find();
        res.status(200).json(story);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

const createStory = async (req, res) => {
    const body = req.body;

    const newStory = new Story({
        ...body,
        userId: req.userId,
        postDate: new Date().toISOString()
    });

    try {
        await newStory.save();
        res.status(201).json(newStory);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

const updateStory = async (req, res) => {
    const { id: _id } = req.params;

    const story = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("This id doesnt belong to any story");
    }

    const updatedStory = await Story.findByIdAndUpdate(_id, story, { new: true });

    res.json(updatedStory);
}

const deleteStory = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send("This id doesnt belong to any story");
    }

    await Story.findByIdAndDelete(id);

    res.json({ message: "Story deleted successfully" });
}

const likeStory = async (req, res) => {
    const { id } = req.params;

    if (!req.userId) return res.status(401).json({ message: "Unauthenticated User" });

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: "This id doesn't belong to any story" });
    }

    try {
        const story = await Story.findById(id);

        if (!story) return res.status(404).json({ message: "Story not found" });

        const hasLiked = story.likes.includes(req.userId);

        const updatedStory = await Story.findByIdAndUpdate(
            id,
            hasLiked
                ? { $pull: { likes: req.userId } }  // Remove like if already liked
                : { $addToSet: { likes: req.userId } }, // Add like if not liked
            { new: true }
        );

        res.status(200).json(updatedStory);
    } catch (error) {
        console.error("Error in likeStory:", error);
        res.status(500).json({ message: "Something went wrong" });
    }
};

export { getStories, createStory, updateStory, deleteStory, likeStory };