import { Content } from "@/components/Content";

async function getTasks() {
  const res = await fetch("http://localhost:3000/api/v1/tasks", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export default async function Home() {
  const { data } = await getTasks();

  return <Content data={data} />;
}
