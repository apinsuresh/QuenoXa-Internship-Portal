"use server";

import connectToDatabase from "@/lib/mongodb";
import { Applicant } from "@/models/Applicant";
import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitApplication(formData: any) {
  try {
    await connectToDatabase();

    // Check if email already exists
    const existing = await Applicant.findOne({ email: formData.email });
    if (existing) {
      return { success: false, error: "An application with this email already exists." };
    }

    // Create applicant
    const applicant = await Applicant.create(formData);

    // TODO: Send success email via Resend
    // if (process.env.RESEND_API_KEY) {
    //   await resend.emails.send({
    //     from: "Quenoxa <hello@quenoxa.com>",
    //     to: formData.email,
    //     subject: "Application Received - Quenoxa Internships",
    //     html: "<p>Hi " + formData.name + ",</p><p>We received your application! Our team will review it shortly.</p>"
    //   });
    // }

    return { success: true, id: applicant._id.toString() };
  } catch (error: any) {
    console.error("Submission Error:", error);
    return { success: false, error: "Something went wrong while submitting the application." };
  }
}
