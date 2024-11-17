import { ChatBox } from "@/components/ui/chatbox"
import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function SingleChatPage() {
    const session = await auth()
    return (
        <>
            {session && session.user ? (
                <ChatBox session={session} />
            ) : (
                redirect("/")
            )}
        </>
    )
}
