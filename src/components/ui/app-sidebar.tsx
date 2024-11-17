import { NewChat } from "@/components/ui/new-chat"
import {
    Sidebar,
    SidebarHeader,
    SidebarMenu,
    SidebarContent,
    SidebarMenuItem,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
} from "@/components/ui/sidebar"
import { ProfileButton } from "@/components/ui/profile-button"
import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { ChatRows } from "./chat-rows"

export const AppSidebar = async () => {
    const session = await auth()
    if (!session) {
        redirect("/")
    }
    if (!session.user) {
        redirect("/")
    }
    const user = session.user

    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <NewChat user={user} />
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <ChatRows session={session} />
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <ProfileButton user={user} />
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}
