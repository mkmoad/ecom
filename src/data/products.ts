import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Classic Cotton T-Shirt',
    price: 29.99,
    description: 'A timeless cotton t-shirt made from premium materials for everyday comfort and style.',
    images: [
      'https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    ],
    colors: ['White', 'Black', 'Navy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'men',
    featured: true,
  },
  {
    id: 2,
    name: 'Structured Blazer',
    price: 149.99,
    description: 'A sophisticated blazer with a tailored fit, perfect for both casual and formal occasions.',
    images: [
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    ],
    colors: ['Black', 'Navy', 'Grey'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'women',
    featured: true,
  },
  {
    id: 3,
    name: 'Slim Fit Jeans',
    price: 79.99,
    description: 'Modern slim fit jeans crafted from premium denim with just the right amount of stretch for comfort.',
    images: [
      'https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    ],
    colors: ['Blue', 'Black', 'Grey'],
    sizes: ['28', '30', '32', '34', '36'],
    category: 'men',
  },
  {
    id: 4,
    name: 'Cashmere Sweater',
    price: 129.99,
    originalPrice: 159.99,
    description: 'Luxuriously soft cashmere sweater designed for warmth and style during cooler months.',
    images: [
      'https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/6311144/pexels-photo-6311144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    ],
    colors: ['Cream', 'Grey', 'Black'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'women',
    featured: true,
  },
  {
    id: 5,
    name: 'Leather Weekend Bag',
    price: 199.99,
    description: 'Handcrafted leather weekend bag with ample storage and sophisticated design for short trips.',
    images: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/934673/pexels-photo-934673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    ],
    colors: ['Brown', 'Black'],
    sizes: ['One Size'],
    category: 'accessories',
    featured: true,
  },
  {
    id: 6,
    name: 'Silk Blouse',
    price: 89.99,
    description: 'Elegant silk blouse with a relaxed fit and timeless design, perfect for any occasion.',
    images: [
      'https://images.pexels.com/photos/6766262/pexels-photo-6766262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/6766290/pexels-photo-6766290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    ],
    colors: ['White', 'Black', 'Blush'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'women',
  },
  {
    id: 7,
    name: 'Minimalist Watch',
    price: 129.99,
    description: 'A sleek, minimalist watch with a leather strap and precise Japanese movement.',
    images: [
      'https://images.pexels.com/photos/9978231/pexels-photo-9978231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    ],
    colors: ['Black', 'Brown'],
    sizes: ['One Size'],
    category: 'accessories',
    isNew: true,
  },
  {
    id: 8,
    name: 'Wool Coat',
    price: 249.99,
    description: 'A premium wool coat designed to keep you warm while maintaining a sophisticated silhouette.',
    images: [
      'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/6770028/pexels-photo-6770028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    ],
    colors: ['Camel', 'Grey', 'Black'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'women',
    isNew: true,
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};