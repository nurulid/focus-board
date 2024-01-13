"use client";

import { Button, Input, Textarea } from "@nextui-org/react";
import { useState } from "react";
import { useUser } from "@/components/auth/hooks/useUser";
import { checkEnvironment } from "@/config/apiUrl";
import toast from "react-hot-toast";
import { Plus, X } from "lucide-react";

export const CreateTask = () => {
  const { user } = useUser();
  const [isShow, setIsShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const userId = user?.id;

  const handleShowFormTask = () => {
    setIsShow(!isShow);
  }

  const handleTaskChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  async function handleCreateTask() {
    setLoading(true);
    const { title, description } = task;

    const res = await fetch(`${checkEnvironment()}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        userId: "84634c59-564c-43b3-9321-94ad3cb60013",
      }),
    });
    const {data, message, errorMessage} = await res.json();
    console.log(data);

    if (!data) {
      setLoading(false);
      toast.error(errorMessage);
      return;
    }

    setLoading(false);
    toast.success(message);
    setTask("");
  }

  return (
    <>
      <div className="flex justify-between">
        <div className="mb-5">
          <h1 className="mb-2">Today's tasks</h1>
          <p className="text-gray-400 px-1">12-1-2024</p>
        </div>
        <Button isIconOnly color={!isShow ? "success" : "danger"} variant="flat" onClick={handleShowFormTask}>
          {!isShow ? <Plus/> : <X />}
        </Button>
      </div>
      {isShow && (
        <>
          <h2 className="mb-3">Add your new task</h2>
          <form className="create-task space-y-3 text-right p-5 border border-dashed border-green-200 rounded-xl bg-white">
            <Input
              name="title"
              label="Title"
              variant="underlined"
              onChange={handleTaskChange}
            />
            <Textarea
              name="description"
              label="Description"
              variant="underlined"
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
        </>
      )}
    </>
  );
};
