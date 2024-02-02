"use client";

import { Button, Input, Textarea, Tooltip } from "@nextui-org/react";
import { useState } from "react";
import { useUser } from "@/components/auth/hooks/useUser";
import { checkEnvironment } from "@/config/apiUrl";
import toast from "react-hot-toast";
import { Plus, X } from "lucide-react";
import { useRouter } from "next/navigation";

export const CreateTask = () => {
  const router = useRouter();
  const { user } = useUser();
  const [isShow, setIsShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const userId = user?.id;

  const validateForm = () => {
    const newErrors = {};

    if (!task.title.trim()) {
      newErrors.title = "Title can't be empty";
    }

    setErrors(newErrors);
    // Return true if there are no errors, indicating the form is valid
    return Object.keys(newErrors).length === 0;
  };

  const handleShowFormTask = () => {
    setIsShow(!isShow);
  };

  const handleTaskChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const { title, description } = task;
  const apiUrl = `${checkEnvironment()}/tasks`;

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      description,
      userId: "c8890d52-38eb-40b2-b242-104cd382a621",
    }),
  };

  async function handleCreateTask() {
    // Ensure that form data has default values
    const defaultTaskData = {
      title: "",
      description: "",
    };

    let res;

    if (validateForm()) {
      setLoading(true);
      const res = await fetch(apiUrl, requestOptions);

      const { message, errorMessage } = await res.json();

      if (errorMessage) {
        toast.error(errorMessage);
        setLoading(false);
        return;
      }

      setLoading(false);
      toast.success(message);
      setTask(defaultTaskData);
      router.refresh();
    } else {
      res = await fetch(apiUrl);
      setLoading(false);
    }
  }

  return (
    <>
      <div className="flex justify-between">
        <div className="mb-5">
          <h1 className="mb-2">Today's tasks</h1>
          <p className="text-gray-400 px-1">12-1-2024</p>
        </div>
        <Tooltip content={!isShow ? "Add new task" : "Cancel"}>
          <Button
            isIconOnly
            color={!isShow ? "success" : "danger"}
            variant="flat"
            onClick={handleShowFormTask}
          >
            {!isShow ? <Plus /> : <X />}
          </Button>
        </Tooltip>
      </div>
      {isShow && (
        <div className="mb-5">
          <h2 className="mb-3">Add your new task</h2>
          <form className="create-task space-y-3 text-right p-4 border border-dashed border-green-200 rounded-xl bg-white shadow-md transition-all">
            <Input
              name="title"
              label="Title"
              variant="underlined"
              value={task.title}
              onChange={handleTaskChange}
            />
            {errors.title && <p className="text-red-500">{errors.title}</p>}
            <Textarea
              name="description"
              label="Description"
              variant="underlined"
              value={task.description}
              onChange={handleTaskChange}
            />
            <Button
              isLoading={loading}
              isDisabled={loading}
              color="success"
              variant="flat"
              className="ml-auto"
              onClick={handleCreateTask}
            >
              Create
            </Button>
          </form>
        </div>
      )}
    </>
  );
};
