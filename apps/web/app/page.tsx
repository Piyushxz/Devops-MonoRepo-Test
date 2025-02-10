
import { dbClient } from "@repo/db/client";

export default async function Home() {
  const user = await dbClient.user.findFirst();
  return (
    <div className={""}>
      <h5 style={{ color: "black" }}>Development test</h5>
      {user?.username}
      {user?.password}

      <h5 style={{ color: "pink" }}>Hey test</h5>

      <p style={{ color: "blue" }}>This is a test deployment change.</p>

      <button>Click Me</button>
    </div>
  );
}
