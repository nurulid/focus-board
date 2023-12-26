import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Button,
} from "@nextui-org/react";
import { Pencil, Trash2, CheckSquare } from "lucide-react";

export const TaskCard = ({ data }) => {
  return (
    <>
      {data.map(({ id, name, description }) => {
        return (
          <Card key={id} className="mb-4 shadow border border-gray-100">
            <CardBody>
              <h3 className="text-xl">{name}</h3>
              <p className="text-gray-500">{description}</p>
            </CardBody>
            <Divider />
            <CardFooter className="flex justify-between items-center">
              <div className="space-x-1">
                <Button className="px-1 min-w-0 text-sm" size="sm" variant="light" color="primary">
                  <Pencil className="w-5" />
                </Button>
                <Button className="px-1 min-w-0 text-sm" size="sm" variant="light" color="danger">
                  <Trash2 className="w-5" />
                </Button>
              </div>
              <Button className="px-1 min-w-0 text-sm" size="sm" variant="light" color="success">
                <CheckSquare className="w-5" />
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </>
  );
};
