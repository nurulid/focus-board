import { DigitalClock } from "@/components/feature/DigitalClock";
import { PomodoroTimer } from "@/components/feature/PomodoroTimer";
import { AllTasks } from "@/components/tasks/components/AllTasks";
import { CreateTask } from "@/components/tasks/components/CreateTask";
import { checkEnvironment } from "@/config/apiUrl";

async function getTasks() {
  const res = await fetch(`${checkEnvironment()}/tasks`, {
    cache: "no-store",
  });
  const tasks = await res.json();
  return tasks;
}

export default async function Home() {
  const { tasks } = await getTasks();  
  const time = new Date();

  time.setSeconds(time.getSeconds() + 1500); // 60 * 1500 = 25 minutes timer

  return (
    <div className="grid grid-cols-4 gap-6 h-[calc(100vh-220px)]">
      {/* LEFT */}
      <div className="border p-5 rounded-2xl overflow-auto bg-gray-300/10"></div>
      {/* CENTER */}
      <div className="col-span-2 border p-5 rounded-2xl overflow-auto bg-gray-300/10">
        <CreateTask />
        <AllTasks tasks={tasks} />
      </div>
      {/* RIGHT */}
      <div className="border p-5 rounded-2xl overflow-auto bg-gray-300/10 space-y-5">
        <DigitalClock />
        <PomodoroTimer expiryTimestamp={time}/>
      </div>
    </div>
  );
}
