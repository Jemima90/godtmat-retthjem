import Feedback from "@models/feedback";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const feedback = await Feedback.findById(params.id).populate("creator")
        if (!feedback) return new Response("Feedback Not Found", { status: 404 });

        return new Response(JSON.stringify(feedback), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

export const PATCH = async (request, { params }) => {
    const { feedback, tag, date } = await request.json();

    try {
        await connectToDB();

        // Find the existing feedback by ID
        const existingFeedback = await Feedback.findById(params.id);

        if (!existingFeedback) {
            return new Response("Feedback not found", { status: 404 });
        }

        // Update the feedback with new data
        existingFeedback.feedback = feedback;
        existingFeedback.tag = tag;
        existingFeedback.date= date;


        await existingFeedback.save();

        return new Response("Successfully updated the Feedbacks", { status: 200 });
    } catch (error) {
        return new Response("Error Updating Feedback", { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        // Find the feedback by ID and remove it
        await Feedback.findByIdAndRemove(params.id);

        return new Response("Feedback deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting feedback", { status: 500 });
    }
};