"use client";

import React from "react";
import { Textarea, Tabs, Tab, Card, CardBody } from "@nextui-org/react";

export const Motivation = () => {
  return (
    <div>
      <h2 className="text-[18px] mb-4">What motivates you today?</h2>
      <div className="flex w-full flex-col">
        <Tabs aria-label="Options">
          <Tab key="image" title="Image">
            <Card shadow="none">
              <CardBody>
                <input type="file" />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="quote" title="Quote">
            <Card shadow="none">
              <CardBody>
                <Textarea label="Write the quote here" />
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};
