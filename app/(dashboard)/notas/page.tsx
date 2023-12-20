export default async function IndexPage({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? "";
  console.log("search", search);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <h1>Users</h1>
      <p>A list of users retrieved from a Postgres database. {search}</p>
    </main>
  );
}
