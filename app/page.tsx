import FirstPage from "@/components/first-page";
import { ModeToggle } from "@/components/mode-toggle";
import Navbar from "@/components/ui/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <FirstPage/>
    </div>
  );
}
