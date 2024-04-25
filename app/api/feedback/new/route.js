import Feedback from "@models/feedback";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, feedback, tag, date } = await request.json();

    try {
        await connectToDB();
        const newFeedback = new Feedback ({ creator: userId, feedback, tag, date });

        await newFeedback.save();
        return new Response(JSON.stringify(newFeedback), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new feedback", { status: 500 });
    }
}