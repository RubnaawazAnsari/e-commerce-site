export interface Specification {
  name: string;
  value: string;
}

export interface Color {
  name: string;
  hexCode: string;
  thumbnail: string;
  images: string[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  colors: Color[];
  sizes?: string[];
  selectedColor?: string;
  selectedSize?: string;
  specifications?: Specification[];
} 