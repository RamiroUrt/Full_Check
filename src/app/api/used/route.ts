import { NextResponse } from "next/server";
import used from "../../../data/used.json";

export async function GET() {
  return NextResponse.json(used);
}
