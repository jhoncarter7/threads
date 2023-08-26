import { UserButton } from "@clerk/nextjs";
 
export default function Home() {
  return (
    <div>
      <h1 className="text-white">Home</h1>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}