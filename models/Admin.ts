import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  role: { type: String, enum: ['SuperAdmin', 'Reviewer'], default: 'Reviewer' },
  createdAt: { type: Date, default: Date.now }
});

export const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);
