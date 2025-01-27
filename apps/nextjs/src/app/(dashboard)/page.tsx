import { LogoutButton } from "./_components/logout-button";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <p className="text-xl">Welcome to your dashboard!</p>
      <LogoutButton />
    </div>
  );
}
