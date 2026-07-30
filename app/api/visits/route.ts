import Redis from "ioredis";
import { NextResponse } from "next/server";

const redis = new Redis(process.env.KV_REDIS_URL!);

// GET: just read the current count, don't increment
export async function GET() {
  const count = Number((await redis.get("visits")) ?? 0);
  return NextResponse.json({ count });
}

// POST: atomically increment and return the new count
export async function POST() {
  const count = await redis.incr("visits");
  return NextResponse.json({ count });
}