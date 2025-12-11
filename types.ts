export interface TourPackage {
  id: string;
  title: string;
  description: string;
  priceUsd: number;
  priceEth: number;
  imageUrl: string;
  duration: string;
  rating: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  avatar: string;
  rating: number;
}

export interface LeadFormState {
  name: string;
  email: string;
  interest: string;
}
