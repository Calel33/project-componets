import {
  AlertTriangle,
  Award,
  BadgeCheck,
  Calculator,
  Car,
  CreditCard,
  ExternalLink,
  Leaf,
  MapPin,
  Navigation,
  Phone,
  Shield,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Sprout,
  Star,
  UtensilsCrossed,
  Wifi,
  Smartphone,
} from "lucide-react";

import BusinessListing from "../ui/components/business/BusinessListing";

import type {
  BusinessListingProps,
  ContactInfoProps,
  FeatureListProps,
  HealthSafetyProps,
  HoursProps,
  MenuTab,
  NutritionLegendProps,
  QuickAction,
  Weekday,
  WeeklyHours,
} from "../ui/components/types/business.types";

const weeklyHours: WeeklyHours = {
  Monday: { open: "10:00 AM", close: "9:00 PM" },
  Tuesday: { open: "10:00 AM", close: "9:00 PM" },
  Wednesday: { open: "10:00 AM", close: "9:00 PM" },
  Thursday: { open: "10:00 AM", close: "9:00 PM" },
  Friday: { open: "10:00 AM", close: "10:00 PM" },
  Saturday: { open: "9:00 AM", close: "10:00 PM" },
  Sunday: { open: "9:00 AM", close: "8:00 PM" },
};

const getCurrentWeekday = (): Weekday => {
  const formatter = new Intl.DateTimeFormat("en-US", { weekday: "long" });
  return formatter.format(new Date()) as Weekday;
};

const menuTabs: MenuTab[] = [
  {
    id: "build-your-bowl",
    label: "Build Your Bowl",
    description: "Bases, proteins, veggies, and sauces",
    categories: [
      {
        id: "bowl-builder",
        title: "Build Your Bowl",
        description:
          "Start with a base, add your protein, load up on veggies, and finish with a signature sauce.",
        items: [
          {
            id: "choose-your-base",
            name: "Choose Your Base",
            description:
              "Quinoa, brown rice, cauliflower rice, mixed greens, or spinach. Portion-controlled for optimal nutrition.",
            calorieRange: "50-180 cal",
            badges: [
              { id: "base-gluten-free", label: "Gluten-Free Options", variant: "glutenFree" },
              { id: "base-vegan", label: "Vegan", variant: "vegan" },
            ],
            action: {
              label: "Customize",
              onSelect: () => console.info("Customize Green Bowl base"),
            },
          },
          {
            id: "select-your-protein",
            name: "Select Your Protein",
            description:
              "Grilled chicken, grass-fed beef, wild salmon, tofu, tempeh, or plant-based protein with house spice blends.",
            calorieRange: "120-280 cal",
            badges: [
              { id: "protein-high", label: "High Protein", variant: "proteinPlus" },
              { id: "protein-vegan", label: "Vegan Options", variant: "vegan" },
            ],
            action: {
              label: "Customize",
              onSelect: () => console.info("Customize Green Bowl protein"),
            },
          },
          {
            id: "load-your-veggies",
            name: "Load Your Veggies",
            description:
              "Choose from 15+ vegetables including roasted sweet potato, steamed broccoli, cucumber, and seasonal specials.",
            calorieRange: "15-80 cal",
            badges: [
              { id: "veggies-unlimited", label: "Unlimited Veggies", variant: "info" },
              { id: "veggies-vegan", label: "Vegan", variant: "vegan" },
            ],
            action: {
              label: "Customize",
              onSelect: () => console.info("Customize Green Bowl veggies"),
            },
          },
          {
            id: "signature-sauces",
            name: "Signature Sauces",
            description:
              "Tahini goddess, spicy peanut, cilantro lime, balsamic vinaigrette, and house green sauce made fresh daily.",
            calorieRange: "25-120 cal",
            badges: [
              { id: "sauce-nuts", label: "Contains Nuts", variant: "warning" },
              { id: "sauce-vegan", label: "Vegan Options", variant: "vegan" },
            ],
            action: {
              label: "Customize",
              onSelect: () => console.info("Customize Green Bowl sauces"),
            },
          },
        ],
      },
    ],
  },
  {
    id: "signature-bowls",
    label: "Signature Bowls",
    description: "Chef-crafted favorites",
    categories: [
      {
        id: "signature-collection",
        title: "Signature Bowls",
        description:
          "Curated bowls featuring our most-loved combinations. Perfect when you want bold flavors without the decisions.",
        items: [
          {
            id: "green-goddess",
            name: "The Green Goddess",
            description:
              "Quinoa, grilled chicken, avocado, cucumber, cherry tomatoes, hemp hearts, and house green sauce.",
            calorieRange: "485 cal",
            priceLabel: "$12.95",
            badges: [
              { id: "goddess-protein", label: "High Protein", variant: "proteinPlus" },
              { id: "goddess-gluten", label: "Gluten-Free", variant: "glutenFree" },
            ],
            action: {
              label: "Order Bowl",
              onSelect: () => console.info("Order Green Goddess bowl"),
            },
          },
          {
            id: "plant-power",
            name: "Plant Power",
            description:
              "Brown rice, seasoned tempeh, roasted sweet potato, steamed broccoli, chickpeas, and tahini goddess sauce.",
            calorieRange: "420 cal",
            priceLabel: "$11.95",
            badges: [
              { id: "plant-vegan", label: "Vegan", variant: "vegan" },
              { id: "plant-protein", label: "High Protein", variant: "proteinPlus" },
            ],
            action: {
              label: "Order Bowl",
              onSelect: () => console.info("Order Plant Power bowl"),
            },
          },
          {
            id: "protein-powerhouse",
            name: "Protein Powerhouse",
            description:
              "Cauliflower rice, grass-fed beef, hard-boiled egg, spinach, bell peppers, and spicy peanut sauce.",
            calorieRange: "520 cal",
            priceLabel: "$14.95",
            badges: [
              { id: "protein-keto", label: "Keto-Friendly", variant: "info" },
              { id: "protein-nuts", label: "Contains Nuts", variant: "warning" },
            ],
            action: {
              label: "Order Bowl",
              onSelect: () => console.info("Order Protein Powerhouse bowl"),
            },
          },
        ],
      },
    ],
  },
  {
    id: "smoothies",
    label: "Smoothies",
    description: "Blended wellness boosts",
    categories: [
      {
        id: "smoothie-menu",
        title: "Signature Smoothies",
        description:
          "Whole-fruit blends powered by superfoods, cold-pressed juices, and plant-based proteins.",
        items: [
          {
            id: "tropical-green",
            name: "Tropical Green Glow",
            description:
              "Kale, pineapple, mango, coconut water, and hemp protein with a citrus boost for hydration and recovery.",
            calorieRange: "190 cal",
            priceLabel: "$7.95",
            badges: [
              { id: "smoothie-vegan", label: "Vegan", variant: "vegan" },
              { id: "smoothie-protein", label: "High Protein", variant: "proteinPlus" },
            ],
            action: {
              label: "Add to Order",
              onSelect: () => console.info("Order Tropical Green Glow smoothie"),
            },
          },
          {
            id: "berry-shield",
            name: "Berry Antioxidant Shield",
            description:
              "Blueberries, strawberries, açai, almond milk, chia seeds, and a drizzle of raw honey for immunity support.",
            calorieRange: "210 cal",
            priceLabel: "$8.25",
            badges: [
              { id: "smoothie-vegetarian", label: "Vegetarian", variant: "vegetarian" },
              { id: "smoothie-gluten", label: "Gluten-Free", variant: "glutenFree" },
            ],
            action: {
              label: "Add to Order",
              onSelect: () => console.info("Order Berry Antioxidant Shield smoothie"),
            },
          },
        ],
      },
    ],
  },
  {
    id: "sides",
    label: "Sides",
    description: "Snacks and seasonal bites",
    categories: [
      {
        id: "sides-menu",
        title: "Sides & Shareables",
        description:
          "Pair your bowl with crisp veggies, warm grains, and crunchy add-ons crafted for snacking.",
        items: [
          {
            id: "avocado-cups",
            name: "Stuffed Avocado Cups",
            description:
              "Avocado halves filled with citrus quinoa, roasted corn, and chile-lime pepitas.",
            calorieRange: "240 cal",
            priceLabel: "$5.95",
            badges: [
              { id: "sides-vegan", label: "Vegan", variant: "vegan" },
              { id: "sides-gluten", label: "Gluten-Free", variant: "glutenFree" },
            ],
            action: {
              label: "Add Side",
              onSelect: () => console.info("Add Stuffed Avocado Cups"),
            },
          },
          {
            id: "crispy-chickpeas",
            name: "Smoky Crispy Chickpeas",
            description:
              "Slow-roasted chickpeas tossed in smoked paprika, sea salt, and rosemary.",
            calorieRange: "180 cal",
            priceLabel: "$3.95",
            badges: [
              { id: "sides-protein", label: "High Protein", variant: "proteinPlus" },
              { id: "sides-vegetarian", label: "Vegetarian", variant: "vegetarian" },
            ],
            action: {
              label: "Add Side",
              onSelect: () => console.info("Add Smoky Crispy Chickpeas"),
            },
          },
        ],
      },
    ],
  },
];

const nutritionLegend: NutritionLegendProps = {
  title: "Nutrition Guide",
  items: [
    { id: "legend-vegan", label: "Vegan", variant: "vegan" },
    { id: "legend-vegetarian", label: "Vegetarian", variant: "vegetarian" },
    { id: "legend-gluten", label: "Gluten-Free", variant: "glutenFree" },
    { id: "legend-protein", label: "High Protein (25g+)", variant: "proteinPlus" },
  ],
};

const quickActions: QuickAction[] = [
  {
    id: "order",
    label: "Order Online",
    href: "https://greenbowlco.com/order",
    icon: ShoppingCart,
    variant: "primary",
    onClick: () => console.info("Order Online clicked"),
  },
  {
    id: "call",
    label: "Call Restaurant",
    href: "tel:15551232695",
    icon: Phone,
    variant: "secondary",
    onClick: () => console.info("Call Restaurant clicked"),
  },
  {
    id: "directions",
    label: "Get Directions",
    href: "https://maps.google.com/?q=456+Health+Street,+Downtown,+CA+90210",
    icon: Navigation,
    variant: "secondary",
    onClick: () => console.info("Get Directions clicked"),
  },
];

const contactInfo: ContactInfoProps = {
  title: "Contact Information",
  details: [
    {
      id: "address",
      icon: MapPin,
      label: "Address",
      value: "456 Health Street, Downtown, CA 90210",
      href: "https://maps.google.com/?q=456+Health+Street,+Downtown,+CA+90210",
    },
    {
      id: "phone",
      icon: Phone,
      label: "Phone",
      value: "(555) 123-BOWL",
      href: "tel:15551232695",
    },
    {
      id: "website",
      icon: ExternalLink,
      label: "Website",
      value: "greenbowlco.com",
      href: "https://greenbowlco.com",
    },
    {
      id: "email",
      icon: BadgeCheck,
      label: "Email",
      value: "hello@greenbowlco.com",
      href: "mailto:hello@greenbowlco.com",
    },
  ],
};

const hoursProps = (currentDay: Weekday): HoursProps => ({
  title: "Hours",
  hours: weeklyHours,
  currentDay,
});

const features: FeatureListProps = {
  title: "Features",
  items: [
    { id: "wifi", icon: Wifi, label: "Free WiFi" },
    { id: "parking", icon: Car, label: "Free Parking" },
    { id: "payments", icon: CreditCard, label: "Accepts Credit Cards" },
    { id: "mobile", icon: Smartphone, label: "Mobile Orders" },
    { id: "sustainable", icon: Sprout, label: "Sustainable Packaging" },
    { id: "organic", icon: Award, label: "Certified Organic Options" },
  ],
};

const healthSafety: HealthSafetyProps = {
  title: "Health & Safety",
  items: [
    { id: "rating", icon: Shield, label: "Health Department A+ Rating" },
    { id: "allergens", icon: AlertTriangle, label: "Allergen Information Available" },
    { id: "prep", icon: UtensilsCrossed, label: "Separate Prep Areas" },
    { id: "sanitization", icon: Sparkles, label: "Enhanced Sanitization" },
  ],
};

const businessListingProps = (currentDay: Weekday): BusinessListingProps => ({
  header: {
    brand: {
      label: "LocalConnect",
      href: "#",
    },
    links: [
      { id: "directory", label: "Directory", href: "#directory" },
      { id: "categories", label: "Categories", href: "#categories" },
      { id: "about", label: "About", href: "#about" },
      { id: "contact", label: "Contact", href: "#contact" },
    ],
    primaryAction: {
      label: "Order Online",
      href: "https://greenbowlco.com/order",
      icon: ShoppingCart,
    },
  },
  hero: {
    image: {
      src: "https://storage.googleapis.com/forge-sites/4a4ca32560f6d77eb4e90d6e44a87a90cbe8644179be6ea1b0f590fcf92430de.webp",
      alt: "Green Bowl Co. restaurant interior with fresh ingredients on display",
    },
    name: "Green Bowl Co.",
    tagline: "Fresh. Healthy. Customizable.",
    verifiedLabel: "Verified Business",
    description:
      "Build your perfect bowl with fresh, locally-sourced ingredients. Enjoy endless customization, transparent nutrition, and bold flavors that make healthy eating exciting.",
    features: [
      {
        id: "fresh-daily",
        icon: Leaf,
        title: "Fresh Daily",
        description: "Ingredients sourced daily from local farms.",
      },
      {
        id: "calorie-counter",
        icon: Calculator,
        title: "Calorie Counter",
        description: "Real-time nutrition tracking as you build.",
      },
      {
        id: "order-ahead",
        icon: Smartphone,
        title: "Order Ahead",
        description: "Skip the line with mobile ordering.",
      },
      {
        id: "earn-rewards",
        icon: Star,
        title: "Earn Rewards",
        description: "Points with every healthy choice.",
      },
    ],
  },
  loyalty: {
    title: "Green Rewards Program",
    description:
      "Earn points with every bowl, enjoy exclusive discounts, early menu access, and celebratory birthday treats.",
    icon: ShieldCheck,
    benefits: [
      { id: "points", value: "1 pt", description: "Per $1 spent" },
      { id: "free-bowl", value: "100 pts", description: "Free bowl reward" },
      { id: "birthday", value: "$5 off", description: "Birthday treat" },
    ],
  },
  menu: {
    title: "Build Your Perfect Bowl",
    subtitle: "Customize every ingredient to match your taste and nutrition goals",
  },
  menuTabs,
  nutritionLegend,
  quickActions,
  contact: contactInfo,
  hours: hoursProps(currentDay),
  features,
  healthSafety,
});

const BusinessListingDemo = () => {
  const currentDay = getCurrentWeekday();
  const props = businessListingProps(currentDay);

  return <BusinessListing {...props} />;
};

export default BusinessListingDemo;
