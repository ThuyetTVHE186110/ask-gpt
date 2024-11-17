"use client"

import { PlusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SidebarMenuButton } from "@/components/ui/sidebar"
import { User } from "next-auth"
import { useRouter } from "next/navigation"
import { collection } from "@firebase/firestore"
import { addDoc } from "@firebase/firestore"
import { serverTimestamp } from "@firebase/firestore"
import { db } from "@/lib/firebase"

export const NewChat = ({ user }: { user: User }) => {
    const router = useRouter()
    const CreateNewChat = async () => {
        const doc = await addDoc(
            collection(db, "users", user.email!, "chats"),
            {
                userId: user.email!,
                createdAt: serverTimestamp(),
            }
        )
        router.push(`/chat/${doc.id}`)
    }

    return (
        <SidebarMenuButton asChild>
            <Button
                onClick={CreateNewChat}
                variant="outline"
                className="w-full"
            >
                <PlusIcon className="w-4 h-4 mr-2" />
                New Chat
            </Button>
        </SidebarMenuButton>
    )
}
