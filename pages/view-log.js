import { redis } from "../lib/redis";

export default function ViewLog(props) {
  return (
    <div>
      <h1>Api request log</h1>
      {props.entries.map((entry) => {
        return (
          <div>
            <pre>{JSON.stringify(entry, null, 2)}</pre>
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps(context) {
  const entries = await redis.lrange("api-request-log", 0, -1);
  return {
    props: { entries },
  };
}

// 1. fetch log entries
// 2. display log entries
