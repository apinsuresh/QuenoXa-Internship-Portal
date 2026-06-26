import { NextRequest, NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";
import streamifier from "streamifier";

export async function POST(request: NextRequest) {

  console.log("🔥 CLOUDINARY ROUTE IS RUNNING");

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        {
          error: "Only PDF, DOC and DOCX files are allowed.",
        },
        { status: 400 }
      );
    }

    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        {
          error: "Maximum file size is 5MB.",
        },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const uploadResult = await new Promise<any>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: "auto",
          folder: "quenoxa/internship-resumes",
          use_filename: true,
          unique_filename: true,
          overwrite: false,
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );

      streamifier.createReadStream(buffer).pipe(uploadStream);
    });

    return NextResponse.json({
      success: true,
      url: uploadResult.secure_url,
      publicId: uploadResult.public_id,
      name: file.name,
      size: file.size,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to upload resume.",
      },
      { status: 500 }
    );
  }
}