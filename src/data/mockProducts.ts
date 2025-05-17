export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  rating: number;
  stock: number;
  colors: {
    name: string;
    hexCode: string;
    thumbnail: string;
    images: string[];
  }[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: 199.99,
    description: "Experience crystal-clear sound with our premium wireless headphones. Features noise cancellation and 30-hour battery life. Perfect for music lovers and professionals alike.",
    images: [
      "https://images.unsplash.com/photo-1491927570842-0261e477d937?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800&q=80",
      "https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=2868&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1593121925328-369cc8459c08?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    category: "Electronics",
    rating: 4.5,
    stock: 50,
    colors: [
      {
        name: "White",
        hexCode: "#1A1A1A",
        thumbnail: "https://images.unsplash.com/photo-1491927570842-0261e477d937?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        images: [
          "https://images.unsplash.com/photo-1491927570842-0261e477d937?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800&q=80",
          "https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=2868&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1593121925328-369cc8459c08?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ]
      },
      {
        name: "Black",
        hexCode: "#F5F5F5",
        thumbnail: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800&q=80",
          "https://images.unsplash.com/photo-1491927570842-0261e477d937?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=2868&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1593121925328-369cc8459c08?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ]
      },
      {
        name: "Baige",
        hexCode: "#8E8E93",
        thumbnail: "https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=2868&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        images: [
          "https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=2868&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1491927570842-0261e477d937?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800&q=80",
          "https://images.unsplash.com/photo-1593121925328-369cc8459c08?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ]
      },
      {
        name: "Midnight Blue",
        hexCode: "#191970",
        thumbnail: "https://images.unsplash.com/photo-1593121925328-369cc8459c08?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        images: [
          "https://images.unsplash.com/photo-1593121925328-369cc8459c08?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1491927570842-0261e477d937?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800&q=80",
          "https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=2868&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ]
      }
    ]
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    price: 149.99,
    description: "Track your fitness goals with this advanced smart watch. Includes heart rate monitoring, GPS tracking, and 7-day battery life. Water-resistant and perfect for all your workouts.",
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80"
    ],
    category: "Electronics",
    rating: 4.3,
    stock: 35,
    colors: [
      {
        name: "Onyx Black",
        hexCode: "#000000",
        thumbnail: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80",
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
          "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80"
        ]
      },
      {
        name: "Ocean Blue",
        hexCode: "#0066CC",
        thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
          "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80",
          "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80"
        ]
      },
      {
        name: "Rose Gold",
        hexCode: "#B76E79",
        thumbnail: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80",
          "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80",
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"
        ]
      }
    ]
  },
  {
    id: "3",
    name: "Professional DSLR Camera",
    price: 899.99,
    description: "Capture stunning photos with this professional-grade DSLR camera. Includes 24-70mm lens, 4K video recording, and advanced autofocus system. Perfect for photographers and videographers.",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
      "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=800&q=80",
      "https://images.unsplash.com/photo-1493804714600-6edb1cd93080?w=800&q=80"
    ],
    category: "Electronics",
    rating: 4.8,
    stock: 20,
    colors: [
      {
        name: "Carbon Black",
        hexCode: "#1C1C1C",
        thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
          "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=800&q=80",
          "https://images.unsplash.com/photo-1493804714600-6edb1cd93080?w=800&q=80"
        ]
      },
      {
        name: "Titanium Silver",
        hexCode: "#C0C0C0",
        thumbnail: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=800&q=80",
          "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
          "https://images.unsplash.com/photo-1493804714600-6edb1cd93080?w=800&q=80"
        ]
      }
    ]
  },
  {
    id: "4",
    name: "Wireless Gaming Mouse",
    price: 79.99,
    description: "High-precision wireless gaming mouse with customizable RGB lighting and programmable buttons. Features 20,000 DPI sensor and 70-hour battery life. Perfect for gamers and professionals.",
    images: [
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&q=80",
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&q=80",
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&q=80"
    ],
    category: "Electronics",
    rating: 4.4,
    stock: 100,
    colors: [
      {
        name: "Stealth Black",
        hexCode: "#000000",
        thumbnail: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&q=80",
          "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&q=80",
          "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&q=80"
        ]
      },
      {
        name: "Arctic White",
        hexCode: "#FFFFFF",
        thumbnail: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&q=80",
          "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&q=80",
          "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&q=80"
        ]
      },
      {
        name: "Neon Pink",
        hexCode: "#FF69B4",
        thumbnail: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&q=80",
          "https://images.unsplash.com/photo-1527814050087-3793815479db?w=800&q=80",
          "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&q=80"
        ]
      }
    ]
  }
]; 