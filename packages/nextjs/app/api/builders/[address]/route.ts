import { NextResponse } from "next/server";
import { readdir } from "fs/promises";
import path from "path";

export async function GET(request: Request, { params }: { params: { address: string } }) {
  const buildersPath = path.join(process.cwd(), "app/builders");
  try {
    const directories = await readdir(buildersPath, { withFileTypes: true });
    const address = directories
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)
      .filter(name => name.startsWith("0x"))
      .filter(address => address === params.address);

    const exists = address.length > 0;

    return NextResponse.json({ exists });
  } catch (error) {
    console.error("Error checking profile:", error);
    return NextResponse.json({ exists: false });
  }
}
