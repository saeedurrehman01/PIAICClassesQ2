import Stopwatch from "./components/Stopwatch/Stopwatch";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <main className="p-4">
        <Stopwatch />
      </main>
    </div>
  );
}
