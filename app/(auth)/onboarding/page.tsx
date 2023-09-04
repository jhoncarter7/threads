import AccountProfile from "@/components/form/AccountProfile"
import { currentUser } from "@clerk/nextjs"
async function page() {
    const user = await currentUser()
 console.log(user)
    const userInfo = {}
    const userData = {
        id: user?.id,
        objectId: userInfo?._id,
        userName: userInfo?.userName || user?.username,
        name: userInfo?.name || user?.firstName || '',
        bio: userInfo?.bio || '',
        image: userInfo?.imageUrl || user?.profileImageUrl,
    }
    return(
        <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
            <h1 className="head-text">onboarding</h1>
            <p className="mt-3 text-base-regular text-light-2">complete your profile </p>
            <section className="mt-9 bg-dark-2 p-10">
             <AccountProfile user={userData} btnTitle="Continue"/>
            </section>
        </main>
    )
}
export default page