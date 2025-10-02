import { Search, Heart, ShoppingBag } from 'lucide-react';
import { ProductDetailPage } from '@/ui/components/ecommerce';
import type { Product, Review, ReviewStats, BrandInfo, DeliveryOption } from '@/ui/components/ecommerce';

const sampleProduct: Product = {
  id: '1',
  name: 'Rare Beauty Soft Pinch Liquid Blush',
  brand: 'Rare Beauty',
  description: 'Weightless, long-lasting liquid blush',
  price: 23,
  originalPrice: 26,
  rating: 4.6,
  reviewCount: 8247,
  images: [
    {
      id: 'img1',
      url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
      alt: 'Rare Beauty Soft Pinch Liquid Blush - Main View',
      thumbnail: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=320&q=80',
    },
    {
      id: 'img2',
      url: 'https://images.unsplash.com/photo-1631214524020-7e18db3a8c87?w=800&q=80',
      alt: 'Rare Beauty Soft Pinch Liquid Blush - Application',
      thumbnail: 'https://images.unsplash.com/photo-1631214524020-7e18db3a8c87?w=320&q=80',
    },
    {
      id: 'img3',
      url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80',
      alt: 'Rare Beauty Soft Pinch Liquid Blush - Swatches',
      thumbnail: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=320&q=80',
    },
    {
      id: 'img4',
      url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80',
      alt: 'Rare Beauty Soft Pinch Liquid Blush - Packaging',
      thumbnail: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=320&q=80',
    },
  ],
  variants: [
    {
      id: 'joy',
      name: 'Joy',
      description: 'warm peachy pink',
      color: '#FFB3BA',
      inStock: true,
    },
    {
      id: 'hope',
      name: 'Hope',
      description: 'soft berry',
      color: '#FF6B9D',
      inStock: true,
      price: 23,
    },
    {
      id: 'bliss',
      name: 'Bliss',
      description: 'coral pink',
      color: '#FF8C94',
      inStock: true,
    },
    {
      id: 'happy',
      name: 'Happy',
      description: 'bright pink',
      color: '#FF4C61',
      inStock: false,
    },
  ],
  features: [
    'Weightless, buildable liquid formula',
    'Long-wearing, up to 12 hours',
    'True-color payoff with seamless blending',
    'Vegan and cruelty-free formula',
  ],
  ingredients: [
    'Water/Aqua/Eau',
    'Dimethicone',
    'Isododecane',
    'Alcohol Denat.',
    'Butylene Glycol',
    'PEG-10 Dimethicone',
  ],
  stock: {
    inStock: true,
    quantity: 150,
    lowStockThreshold: 20,
  },
  badges: [
    { label: 'Bestseller', type: 'bestseller' },
    { label: 'Sephora Favorite', type: 'favorite' },
  ],
  specifications: [
    { label: 'Dimethicone', value: 'Creates a smooth, silky texture and helps with blendability' },
    { label: 'Butylene Glycol', value: 'Helps maintain skin hydration and improves formula stability' },
    { label: 'Water/Aqua/Eau', value: 'Base ingredient for the lightweight liquid formula' },
  ],
  howToUse: [
    'Start with a small amount - a little goes a long way',
    'Apply to the apples of your cheeks using the doe-foot applicator or your fingertips',
    'Blend outward and upward toward your temples',
    'Build coverage gradually for desired intensity',
    'Can be applied over or under makeup',
  ],
};

const sampleReviews: Review[] = [
  {
    id: 'r1',
    author: 'Sarah Johnson',
    rating: 5,
    date: '2 weeks ago',
    title: 'Best blush I\'ve ever used!',
    content: 'This blush is incredible! The formula is so smooth and blends beautifully. A tiny amount goes such a long way. The color Joy is perfect for my medium skin tone - it gives the most natural, healthy flush. Stays put all day without fading.',
    verified: true,
    helpful: 142,
    skinType: 'Combination',
    ageRange: '25-34',
  },
  {
    id: 'r2',
    author: 'Emily Chen',
    rating: 5,
    date: '1 month ago',
    title: 'Holy grail blush',
    content: 'I was skeptical at first because of the price, but this is worth every penny. The pigmentation is amazing - you really only need one tiny dot. It blends seamlessly and looks so natural. I\'ve gotten so many compliments!',
    verified: true,
    helpful: 98,
    skinType: 'Dry',
    ageRange: '35-44',
  },
  {
    id: 'r3',
    author: 'Jessica Martinez',
    rating: 4,
    date: '3 weeks ago',
    title: 'Love it but be careful!',
    content: 'This blush is gorgeous but extremely pigmented. I learned the hard way that you need to use the tiniest amount. Once you get the hang of it though, it\'s amazing. Lasts all day and looks so natural.',
    verified: true,
    helpful: 73,
    skinType: 'Oily',
    ageRange: '18-24',
  },
];

const reviewStats: ReviewStats = {
  averageRating: 4.6,
  totalReviews: 8247,
  ratingBreakdown: {
    5: 6185,
    4: 1237,
    3: 412,
    2: 206,
    1: 207,
  },
  recommendations: 94,
};

const brandInfo: BrandInfo = {
  name: 'Rare Beauty by Selena Gomez',
  description: 'Clean beauty brand focused on self-acceptance and mental health',
  rating: 4.7,
  ratingCount: 850000,
  badges: ['clean', 'vegan'],
};

const deliveryOptions: DeliveryOption[] = [
  {
    id: 'standard',
    type: 'standard',
    label: 'Standard Delivery',
    description: 'Free on orders $35+',
    timeframe: '3-5 days',
    cost: 0,
    available: true,
  },
  {
    id: 'pickup',
    type: 'pickup',
    label: 'Same-day pickup',
    description: 'Sephora Union Square',
    timeframe: 'Today',
    cost: 0,
    available: true,
  },
];

export default function EcommerceProductDemo() {
  const handleAddToCart = (quantity: number, variantId: string) => {
    console.log('Added to cart:', { quantity, variantId });
    alert(`Added ${quantity} item(s) to cart - Variant: ${variantId}`);
  };

  const handleAddToWishlist = () => {
    console.log('Added to wishlist');
    alert('Added to wishlist!');
  };

  const handleShare = () => {
    console.log('Share product');
    alert('Share functionality would open here');
  };

  const handleBuyNow = () => {
    console.log('Buy now clicked');
    alert('Proceeding to checkout...');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200/50 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo & Navigation */}
            <div className="flex items-center gap-10">
              <a href="#" className="flex items-center gap-3 transition-transform hover:scale-105">
                <span className="text-xl font-semibold tracking-tight text-gray-900">Sephora</span>
              </a>

              {/* Navigation */}
              <nav className="hidden lg:flex items-center gap-8">
                <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                  Makeup
                </a>
                <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                  Skincare
                </a>
                <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                  Fragrance
                </a>
                <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                  Hair
                </a>
                <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                  Tools
                </a>
                <a href="#" className="text-sm font-medium text-blue-600">
                  Rare Beauty
                </a>
              </nav>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <button className="p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-200">
                <Search className="h-4 w-4" />
              </button>
              <button className="p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-200">
                <Heart className="h-4 w-4" />
              </button>
              <button className="relative p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-200">
                <ShoppingBag className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-blue-600 text-white text-xs font-medium rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Product Detail Page */}
      <ProductDetailPage
        product={sampleProduct}
        reviews={sampleReviews}
        reviewStats={reviewStats}
        brandInfo={brandInfo}
        deliveryOptions={deliveryOptions}
        onAddToCart={handleAddToCart}
        onAddToWishlist={handleAddToWishlist}
        onShare={handleShare}
        onBuyNow={handleBuyNow}
      />
    </div>
  );
}
