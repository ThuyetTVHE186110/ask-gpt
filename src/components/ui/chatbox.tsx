"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SendIcon } from "lucide-react"
import { Session } from "next-auth"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { addDoc } from "firebase/firestore"
import { collection } from "firebase/firestore"
import { serverTimestamp } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { ChatMessages } from "@/components/ui/chat-messages"
export const ChatBox = ({ session }: { session: Session }) => {
    const user = session.user
    const chatId = usePathname().split("/").pop()
    const [prompt, setPrompt] = useState("")
    const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!prompt.trim() || !chatId || !user?.email) return
        const input = prompt.trim()
        setPrompt("")

        const message: Message = {
            text: input,
            createdAt: serverTimestamp(),
            user: {
                _id: user.email!,
                name: user.name!,
                avatar: user.image!,
            },
        }
        await addDoc(
            collection(db, "users", user.email!, "chats", chatId, "messages"),
            message
        )
        await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                input,
                chatId,
                user,
            }),
        })
    }
    return (
        <>
            <ChatMessages chatId={chatId} session={session} />
            <div className="p-4 border-t">
                <form onSubmit={sendMessage} className="flex space-x-2">
                    <Input
                        type="text"
                        name="prompt"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Send a message"
                        className="flex-grow "
                    />
                    <Button type="submit" size="icon">
                        <SendIcon className="w-4 h-4" />
                    </Button>
                </form>
            </div>
        </>
    )
}
