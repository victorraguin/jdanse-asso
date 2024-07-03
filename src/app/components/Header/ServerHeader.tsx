import { getServerSession } from "next-auth/next";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import Header from "./Header";

export default async function ServerHeader() {
    const session = await getServerSession(authOptions);
    const isAdmin = session?.user?.email === process.env.ADMIN_EMAIL;
    
    return (
        <Header isAdmin={isAdmin} />
    );
}