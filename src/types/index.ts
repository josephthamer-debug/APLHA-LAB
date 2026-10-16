export type Language = 'en' | 'ar';

export interface DentalCase {
  id: string;
  orderNumber: string;
  patientName: string;
  dentistName: string;
  clinicName: string;
  restorationType: string;
  teethUnits: string[];
  shade: string;
  stage: 'cad_design' | 'milling' | 'sintering' | 'layering' | 'qc' | 'ready' | 'delivered';
  assignedTechnician: string;
  receivedDate: string;
  deliveryDate: string;
  price: number;
  paidAmount: number;
  priority: 'normal' | 'urgent';
}

export interface ClinicAccount {
  id: string;
  dentistName: string;
  clinicName: string;
  phone: string;
  activeCasesCount: number;
  totalBilled: number;
  totalPaid: number;
  balanceDue: number;
  lastPaymentDate: string;
  statementPeriod: string;
}

export interface TechnicianRecord {
  id: string;
  name: string;
  specialty: string;
  activeJobs: number;
  completedThisMonth: number;
  efficiencyRate: number;
  commissionEarned: number;
}

export interface PaymentVoucher {
  voucherNumber: string;
  clinicName: string;
  amount: number;
  paymentMethod: 'cash' | 'bank_transfer' | 'cheque' | 'card';
  date: string;
  receivedBy: string;
  notes: string;
}

export interface ScreenshotItem {
  id: string;
  titleEn: string;
  titleAr: string;
  category: 'cases' | 'finance' | 'technicians' | 'analytics';
  categoryLabelEn: string;
  categoryLabelAr: string;
  descriptionEn: string;
  descriptionAr: string;
  detailsEn: string[];
  detailsAr: string[];
  viewMode: 'dashboard' | 'case_entry' | 'clinic_ledger' | 'tech_queue' | 'invoice' | 'analytics';
}

export interface FaqItem {
  id: string;
  questionEn: string;
  questionAr: string;
  answerEn: string;
  answerAr: string;
}
