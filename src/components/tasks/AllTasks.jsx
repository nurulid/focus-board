import React from "react";

export const AllTasks = () => {
  return (
    <div>
      {data.map(({ id, name, description }) => {
        return (
          <div key={id} className="p-4 rounded-xl mb-5 shadow-sm">
            <div>{name}</div>
            <div>{description}</div>
          </div>
        );
      })}
    </div>
  );
};
