import { adminDb } from "@/lib/firebaseAdmin"
import { xai } from "@/lib/xai"
import { firestore } from "firebase-admin"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    try {
        // Validate the request data
        const { input, chatId, user } = await request.json()

        if (!input || !chatId || !user?.email) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            )
        }

        const res = await xai.chat.completions.create({
            model: "grok-beta",
            messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant",
                },
                {
                    role: "user",
                    content: input,
                },
            ],
        })

        const response = res.choices[0].message.content
        const message: Message = {
            text: response || "I'm sorry, I don't know how to answer that.",
            createdAt: firestore.Timestamp.now(),
            user: {
                _id: "askgpt",
                name: "AskGPT",
                avatar: "https://cdn-icons-png.flaticon.com/512/1787/1787077.png",
            },
        }

        await adminDb
            .collection("users")
            .doc(user.email)
            .collection("chats")
            .doc(chatId)
            .collection("messages")
            .add(message)

        return NextResponse.json({ answer: message.text }, { status: 200 })
    } catch (error) {
        console.error("Error in chat route:", error)
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        )
    }
}
