import Dash from "@/components/dash/Dash";

export default async function NotasPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Dash />

      <h1>Users</h1>
      <p>A list of users retrieved from a Postgres database</p>
    </main>
  );
}
