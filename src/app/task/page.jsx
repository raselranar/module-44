import { getTasks } from "@/lib/task";
import TaskCard from "./TaskCard";
import { createTask } from "../action";
import { Button } from "@heroui/react";
import AddTask from "@/components/AddTask";

const page = async () => {
  const task = await getTasks();
  return (
    <div className="mt-5">
      <AddTask />
      <h2 className="text-3xl text-center">Total Task {task.length}</h2>

      <div className="flex flex-col mx-auto  mt-4 items-center gap-4">
        {task.map((item) => (
          <TaskCard key={item.id} task={item} />
        ))}
      </div>
    </div>
  );
};
export default page;
