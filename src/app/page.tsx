import { signIn } from "@/auth"
import { Button } from "@/components/ui/button"
import { DialogHeader } from "@/components/ui/dialog"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
} from "@radix-ui/react-dialog"
import { GitBranchIcon } from "lucide-react"
import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function Home() {
    const session = await auth()
    return (
        <>
            {session && session.user ? (
                redirect("/chat")
            ) : (
                <Dialog open>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Sign in to your account</DialogTitle>
                            <DialogDescription>
                                Sign in to your account and start chatting with
                                our AI assistant.
                            </DialogDescription>
                        </DialogHeader>
                        <form
                            action={async () => {
                                "use server"
                                await signIn("github")
                            }}
                            className="flex items-center justify-center py-4 flex-col gap-4"
                        >
                            <Button
                                type="submit"
                                className="w-full max-w-sm"
                                variant="outline"
                            >
                                <GitBranchIcon className="mr-2 h-4 w-4" />
                                Sign in with GitHub
                            </Button>
                        </form>
                    </DialogContent>
                </Dialog>
            )}
        </>
    )
}
