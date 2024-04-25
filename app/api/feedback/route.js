import Feedback from "@models/feedback";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        const feedbacks = await Feedback.find({}).populate('creator')

        return new Response(JSON.stringify(feedbacks), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all feedbacks", { status: 500 })
    }
} 