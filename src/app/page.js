import AddTask from "@/components/AddTask";
import { Button } from "@heroui/react";
import Image from "next/image";
import { createTask } from "./action";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-4 font-sans">
      <AddTask />
    </div>
  );
}
