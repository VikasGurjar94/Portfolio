import Image from "next/image";
import { Button } from "@/components/ui/button";
import HomePage from "@/components/Home/home";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
export default function Home() {
  return (
    <div>
      <ResponsiveNav/>
     <HomePage/>
    </div>
  );
}
