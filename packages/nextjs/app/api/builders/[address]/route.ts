import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: Request, { params }: { params: { address: string } }) {
  try {
    const address = params.address;
    const profilePath = path.join(process.cwd(), "app", "builders", address, "page.tsx");

    // Check if the profile page exists
    const exists = fs.existsSync(profilePath);

    return NextResponse.json({ exists });
  } catch (error) {
    console.error("Error checking profile:", error);
    return NextResponse.json({ exists: false });
  }
}
