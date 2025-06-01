import Image from "next/image";
import Landing from "@/public/landing.png";
import { FaGraduationCap } from "react-icons/fa";

export default function Home() {
  return (
    <main className="py-20 px-6 md:px-16 bg-[#f7fefa] min-h-screen flex items-center">
      <div className="flex flex-col md:flex-row items-start gap-10 max-w-7xl mx-auto">
        {/* Text Section */}
        <div className="flex-1 space-y-6 text-center md:text-left pt-6 md:pt-16">
          <h1 className="text-4xl font-bold text-gray-900">
            <FaGraduationCap className="text-[#20af55] inline-block w-14 h-14 pr-2" />
            Welcome to Your Aethergate University Dashboard
          </h1>
          <h2 className="text-lg text-gray-700 leading-relaxed">
            Your personalized university experience starts here. Log in to view
            your enrolled courses, check your grades, manage your schedule, and
            stay up to date with the latest announcements and campus resources.
            Everything you need — all in one place.
          </h2>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <Image
            src={Landing}
            height={500}
            width={500}
            alt="students"
            className="rounded-xl object-contain"
            priority
          />
        </div>
      </div>
    </main>
  );
}
