import mongoose from 'mongoose';

const ApplicantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  college: { type: String, required: true },
  department: { type: String, required: true },
  year: { type: String, required: true },
  linkedin: { type: String, required: true },
  github: { type: String, required: true },
  portfolio: { type: String },
  domain: { type: String, required: true },
  reason: { type: String, required: true },
  resumeUrl: { type: String }, // Optional, will be populated if resume uploaded
  status: { type: String, enum: ['Pending', 'Shortlisted', 'Interview', 'Selected', 'Rejected'], default: 'Pending' },
  appliedAt: { type: Date, default: Date.now },
});

export const Applicant = mongoose.models.Applicant || mongoose.model('Applicant', ApplicantSchema);
