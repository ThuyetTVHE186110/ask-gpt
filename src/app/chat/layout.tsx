import { AppSidebar } from "@/components/ui/app-sidebar"
import { Header } from "@/components/ui/header"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <SidebarProvider>
            <div className="flex h-screen bg-background text-foreground w-full">
                <>
                    <AppSidebar />
                    <div className="flex flex-1 flex-col">
                        <Header />
                        {children}
                    </div>
                </>
            </div>
        </SidebarProvider>
    )
}
