import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL_NON_POOLING!, { ssl: true, connect_timeout: 30 });

(async () => {
  try {
    const res = await sql`SELECT NOW()`;
    console.log("Connected! Time:", res[0].now);
    process.exit(0);
  } catch (err) {
    console.error("Connection failed:", err);
    process.exit(1);
  }
})();