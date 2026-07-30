import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

// GET: just read the current count, don't increment
export async function GET() {
  const count = (await kv.get<number>("visits")) ?? 0;
  return NextResponse.json({ count });
}

// POST: atomically increment and return the new count
export async function POST() {
  const count = await kv.incr("visits");
  return NextResponse.json({ count });
}
