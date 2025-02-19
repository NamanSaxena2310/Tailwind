import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import VideoCard from "@/components/VideoCard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <VideoCard title = {"How to learn coding in 30 days | 30 days plan | Code with me "} image ={"/thumbnail.jpg"} author={"Naman Saxena "} timestamp={"13 days ago"} views ={"10M"}/>
    </div>
  );
}
