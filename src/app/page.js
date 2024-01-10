export default async function Home() {

  return (
    <div className="grid grid-cols-4 gap-6 h-[calc(100vh-220px)]">
      {/* LEFT */}
      <div className="border p-5 rounded-2xl overflow-auto bg-gray-300/10"></div>
      {/* CENTER */}
      <div className="col-span-2 border p-5 rounded-2xl overflow-auto bg-gray-300/10"></div>
      {/* RIGHT */}
      <div className="border p-5 rounded-2xl overflow-auto bg-gray-300/10"></div>
    </div>
  );
}
