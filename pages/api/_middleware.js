import { NextResponse } from "next/server";
import { redis } from "../../lib/redis";

export default async function middleware(request) {
  const response = NextResponse.next();

  const time = Date.now();
  const timeStr = new Date(time).toLocaleDateString();

  const logData = {
    time: timeStr,
    url: request.url,
    ip: request.ip,
    ua: request.ua,
    geo: request.geo,
  };

  redis.lpush("api-request-log", logData);

  return response;
}
