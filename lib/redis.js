import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: "YOUR_URL",
  token: "YOUR_TOKEN",
});

export { redis };
