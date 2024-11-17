import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { DocumentData } from "firebase/firestore"
import Markdown from "react-markdown"
export const Message = ({ message }: { message: DocumentData }) => {
    const isAIMessage = message.user._id === "askgpt"
    return (
        <div
            key={message.id}
            className={`flex mb-4 ${
                isAIMessage ? "justify-start" : "justify-end"
            }`}
        >
            <div
                className={`flex items-start max-w-[80%] ${
                    isAIMessage ? "flex-row" : "flex-row-reverse"
                }`}
            >
                <Avatar className="h-8 w-8">
                    <AvatarImage src={message.user.avatar} />
                    <AvatarFallback>
                        {`${message.user.name
                            ?.split(" ")
                            .map((name: string) => name[0])
                            .join("")}`}
                    </AvatarFallback>
                </Avatar>
                <div
                    className={`mx-2 p-3 rounded-lg ${
                        isAIMessage
                            ? "bg-secondary "
                            : "bg-primary text-primary-foreground"
                    }`}
                >
                    <Markdown>{message.text}</Markdown>
                </div>
            </div>
        </div>
    )
}
