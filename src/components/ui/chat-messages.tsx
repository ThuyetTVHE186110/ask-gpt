import { db } from "@/lib/firebase"
import { ScrollArea } from "@radix-ui/react-scroll-area"
import { collection, orderBy, query } from "firebase/firestore"
import { Session } from "next-auth"
import { useCollection } from "react-firebase-hooks/firestore"
import { Message } from "@/components/ui/message"
export const ChatMessages = ({
    chatId,
    session,
}: {
    chatId: string
    session: Session
}) => {
    const user = session.user!
    const [messages] = useCollection(
        session &&
            query(
                collection(
                    db,
                    "users",
                    user.email!,
                    "chats",
                    chatId,
                    "messages"
                ),
                orderBy("createdAt")
            )
    )
    return (
        <ScrollArea className="flex-1 p-4">
            {messages?.docs.map((message) => (
                <Message key={message.id} message={message.data()} />
            ))}
        </ScrollArea>
    )
}
