import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
  // При переходе в /api высветит содержимое NextResponse в формате json
  return NextResponse.json({hello: 'world'});
}