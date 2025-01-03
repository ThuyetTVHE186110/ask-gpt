import Link from "next/link"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/ui/mode-toggle"

export const Header = () => {
    return (
        <header className="bg-background border-b border-border p-4 flex items-center justify-between">
            <SidebarTrigger className="block md:hidden mr-4" />
            <Link href="/">
                <h1 className="text-xl font-bold">Ask-GPT</h1>
            </Link>
            <ModeToggle />
        </header>
    )
}
