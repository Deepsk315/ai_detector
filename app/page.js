import Image from "next/image";
import Detection from "../components/object-detection";

export default function Home() {
  return (
    <>
      <main className="flex bg-slate-800 min-h-screen flex-col items-center justify-between p-8">
        <div>
          <h3 className="font-bold dark:text-white lg: text-5xl md:text-lg tracking-tighter md:px-6 text-center gradient-title">
            Checkin for stuffs
          </h3>
          <Detection />
        </div>
      </main>
    </>
  );
}
