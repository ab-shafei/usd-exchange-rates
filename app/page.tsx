import { Dashboard } from "@/components/dashboard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="mt-4 font-bold text-2xl">$USD Exchange Rate</h1>
      <Dashboard />
    </div>
  );
}
