import { collection, doc, deleteDoc } from "firebase/firestore"
import { User } from "next-auth"
import { useCollection } from "react-firebase-hooks/firestore"
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"
import { useState } from "react"
import { db } from "@/lib/firebase"
import Link from "next/link"
import { MessageSquareIcon, Trash2Icon } from "lucide-react"
export const ChatRow = ({ chatId, user }: { chatId: string; user: User }) => {
    const pathname = usePathname()
    const router = useRouter()

    const [isActive, setIsActive] = useState(false)
    const [messages] = useCollection(
        collection(db, "users", user.email!, "chats", chatId, "messages")
    )
    useEffect(() => {
        if (!pathname) return
        setIsActive(`/chat/${chatId}` === pathname)
    }, [pathname, chatId])
    const handleDeleteChat = async () => {
        if (!chatId) return
        const docRef = doc(db, "users", user.email!, "chats", chatId)
        await deleteDoc(docRef)
        router.replace("/chat")
    }
    return (
        <Link
            href={`/chat/${chatId}`}
            className={`flex items-center justify-between w-full p-2 rounded-lg hover:bg-sidebar-accent hover:text-sidebar-accent-foreground 
                ${isActive && "bg-sidebar-accent text-sidebar-foreground"}`}
        >
            <MessageSquareIcon className="mr-2 w-4 h-4" />
            <p className="flex-1 truncate">
                {messages?.docs[0]?.data()?.text || "New Chat"}
            </p>
            <Trash2Icon
                onClick={handleDeleteChat}
                className="w-4 h-4 text-muted-foreground hover:text-red-500"
            />
        </Link>
    )
}
