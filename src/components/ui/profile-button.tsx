import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { SidebarMenuButton } from "./sidebar"
import { User } from "next-auth"
import { signOut } from "@/auth"

export const ProfileButton = ({ user }: { user: User }) => {
    return (
        <form
            action={async () => {
                "use server"
                await signOut({ redirectTo: "/" })
            }}
        >
            <SidebarMenuButton size="lg" type="submit">
                <Avatar className="w-8 h-8">
                    <AvatarImage
                        src={user.image || "https://github.com/shadcn.png"}
                    />
                    <AvatarFallback>
                        {user.name
                            ?.split(" ")
                            .map((name) => name[0])
                            .join("")}
                    </AvatarFallback>
                </Avatar>
                <div className=" grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">{user.name}</span>
                    <span className="truncate text-xs">{user.email}</span>
                </div>
            </SidebarMenuButton>
        </form>
    )
}
