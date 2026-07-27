// Soliqly Shared TypeScript Data Types & DTO Schemas Foundation

export interface UserProfileDTO {
  id: string;
  phone_number: string;
  email?: string;
  full_name: string;
  is_active: boolean;
  created_at: string;
}

export interface TaxCalculationResultDTO {
  company_id: string;
  tax_period: string;
  tax_regime: 'TURNOVER_TAX_4%' | 'FIXED_TAX' | 'SELF_EMPLOYED_EXEMPT';
  gross_revenue_uzs: number;
  turnover_tax_uzs: number;
  social_tax_uzs: number;
  total_tax_due_uzs: number;
  payment_deadline: string;
}
