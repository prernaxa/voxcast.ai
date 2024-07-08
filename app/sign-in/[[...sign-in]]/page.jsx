import HomeTopBar from "@/components/HomeTopBar";
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return(
        <div className="h-screen w-screen flex flex-col items-center justify-start xl:px-12 py-2 px-4 bg-gradient-to-tr from-stone-100 via-transparent to-lime-200">
          <HomeTopBar/>
          <div className="flex w-full h-full">
            <div className="p-12 md:flex flex-col bg-lime-200 rounded-2xl w-1/2 items-center justify-center hidden">
              <span className="text-5xl font-bold">Welcome to voxcast.ai</span>
              <span className="text-2xl mt-4">find the perfect podcast for any mood</span>
              <Image src='/svgs/sapiens.svg' height={100} width={100} alt="sign-up login img" className="h-[500px] w-auto"/>
              <span>listen to your favourite podcast anywhere !</span>
            </div>
            <div className="md:w-1/2 w-full flex items-center justify-center">
              <SignIn />
            </div>
          </div>
        </div>
  )
}