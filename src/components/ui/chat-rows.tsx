"use client"
import { Session } from "next-auth"
import { useCollection } from "react-firebase-hooks/firestore"
import { collection, query, orderBy } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { SidebarMenuItem } from "./sidebar"
import { SidebarMenuButton } from "./sidebar"
import { ChatRow } from "./chat-row"

export const ChatRows = ({ session }: { session: Session }) => {
    const user = session.user
    const [chats] = useCollection(
        session &&
            query(
                collection(db, "users", user.email!, "chats"),
                orderBy("createdAt", "desc")
            )
    )
    return (
        <>
            {chats?.docs.map((chat) => (
                <SidebarMenuItem key={chat.id}>
                    <SidebarMenuButton asChild>
                        <ChatRow chatId={chat.id} user={user} />
                    </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
        </>
    )
}
