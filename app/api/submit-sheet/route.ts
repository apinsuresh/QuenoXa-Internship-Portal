import { NextRequest, NextResponse } from "next/server";
import GOOGLE_SCRIPT_URL from "@/src/services/googleSheetApi";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Google Apps Script returned status ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Error in submit-sheet API proxy:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to submit to Google Sheet" },
      { status: 500 }
    );
  }
}
