import type { LucideIcon } from 'lucide-react';
import {
  CreditCard, Landmark, Home, Building2, Shield, Heart,
  FileText, Wifi, Stethoscope, ShoppingBag,
} from 'lucide-react';

export const industryIconBySlug: Record<string, LucideIcon> = {
  'credit-cards':    CreditCard,
  'personal-loans':  Landmark,
  'mortgage':        Home,
  'retail-banking':  Building2,
  'insurance':       Shield,
  'non-profit':      Heart,
  'collections':     FileText,
  'telecom':         Wifi,
  'healthcare':      Stethoscope,
  'd2c-ecommerce':   ShoppingBag,
};
