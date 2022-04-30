import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: "https://eu2-tough-tomcat-30031.upstash.io",
  token:
    "AXVPACQgMGRhNWMwMWUtODBhZS00ZThkLWExMGEtYWZhY2JjYTAyZjE1MzY5YTNjMWE1NmNiNDRlMjgxZmFkNzA1OWJlOGE1OWQ=",
});

export { redis };
