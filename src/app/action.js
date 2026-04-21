"use server";

import { addTask } from "@/lib/task";

export const createTask = async (formData) => {
  addTask(Object.fromEntries(formData.entries()));
};
