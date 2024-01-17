import React from "react";

export const AllTasks = ({ tasks }) => {
  const taskLength = tasks.length;
  return (
    <div className="space-y-3">
      <h2>Tasks: {taskLength}</h2>
      {tasks.map(({ id, title, description }) => {
        return (
          <div key={id} className="bg-white border rounded-xl py-2 px-4">
            <h3>{title}</h3>
            <p className="text-gray-400 text-xs">{description ? description : "..."}</p>
          </div>
        );
      })}
    </div>
  );
};
