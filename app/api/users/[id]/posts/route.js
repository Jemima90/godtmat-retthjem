import Feedback from "@models/feedback";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const feedbacks = await Feedback.find({ creator: params.id }).populate("creator")

        return new Response(JSON.stringify(feedbacks), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch feedbacks created by user", { status: 500 })
    }
} 