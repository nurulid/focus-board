import React from "react";
import { TaskCard } from "./tasks/TaskCard";
import { PomodoroTimer } from "./additional/PomodoroTimer";
import { RelaxSounds } from "./additional/RelaxSounds";
import { Button } from "@nextui-org/react";
import { PlusSquare } from "lucide-react";

export const Content = ({ data }) => {
  const audioSource = "rain_light.webm";

  return (
    <div className="grid grid-cols-4 gap-6 h-[calc(100vh-220px)]">
      <div className="border p-5 rounded-2xl overflow-auto">left</div>
      <div className="col-span-2 border p-5 rounded-2xl overflow-auto">
        <div className="mb-6 flex justify-between">
            <div>
                <h2 className="text-3xl font-semibold">Today's tasks</h2>
                <p className="text-gray-400 text-lg">12-12-2023</p>
            </div>
            <Button isIconOnly size="lg" variant="flat" color="success">
                <PlusSquare />
            </Button>
        </div>
        <TaskCard data={data} />
      </div>
      <div className="border p-5 rounded-2xl overflow-auto">
        <PomodoroTimer />
        <RelaxSounds src={audioSource} autoRepeat={true} />
      </div>
    </div>
  );
};
