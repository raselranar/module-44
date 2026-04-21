import { revalidatePath } from "next/cache";
import task from "../data/task.json";
export const getTasks = async () => {
  return task;
};

export const addTask = async (data) => {
  const newTask = {
    id: task.length + 1,
    ...data,
  };
  task.push(newTask);
  console.log(task);
  revalidatePath("/task");
};
