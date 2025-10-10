import { useEffect, useMemo, useState } from "react";
import {
  Award,
  BadgeCheck,
  Calendar,
  Check,
  Clock,
  Globe,
  Heart,
  Info,
  Leaf,
  MessageSquare,
  Navigation,
  Phone,
  RefreshCw,
} from "lucide-react";

import {
  BusinessListingLayout,
  BusinessHeader,
  Breadcrumb,
  BusinessHero,
  ImageGallery,
  BusinessDetails,
  BusinessSidebar,
  ContactInfo,
  HoursDisplay,
  CredentialsDisplay,
  ReviewsPlaceholder,
  LastUpdatedBadge,
} from "../ui/components/business-listing";

import type {
  Business,
  BusinessHours,
  BusinessStatus,
  Weekday,
} from "../ui/components/types/business-listing.types";

const WEEK_ORDER: Weekday[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const parseTimeToMinutes = (time: string | null | undefined): number | null => {
  if (!time) {
    return null;
  }

  const [timePart, meridiem] = time.trim().split(" ");
  const [hourPart, minutePart] = timePart.split(":");

  let hours = Number(hourPart) % 12;
  const minutes = Number(minutePart ?? "0");

  if (meridiem?.toLowerCase() === "pm") {
    hours += 12;
  }

  return hours * 60 + minutes;
};

const calculateStatus = (hours: BusinessHours, reference: Date): BusinessStatus => {
  const currentDay = WEEK_ORDER[reference.getDay()];
  const currentMinutes = reference.getHours() * 60 + reference.getMinutes();
  const todayHours = hours[currentDay];

  if (todayHours && !todayHours.isClosed && todayHours.open && todayHours.close) {
    const openMinutes = parseTimeToMinutes(todayHours.open);
    const closeMinutes = parseTimeToMinutes(todayHours.close);

    if (
      openMinutes !== null &&
      closeMinutes !== null &&
      currentMinutes >= openMinutes &&
      currentMinutes < closeMinutes
    ) {
      return {
        isOpen: true,
        closesAt: todayHours.close,
        message: `Open until ${todayHours.close}`,
      };
    }

    if (openMinutes !== null && currentMinutes < openMinutes) {
      return {
        isOpen: false,
        opensAt: todayHours.open,
        nextOpenDay: currentDay,
        message: `Closed • Opens today at ${todayHours.open}`,
      };
    }
  }

  for (let offset = 1; offset <= 7; offset += 1) {
    const nextIndex = (WEEK_ORDER.indexOf(currentDay) + offset) % WEEK_ORDER.length;
    const nextDay = WEEK_ORDER[nextIndex];
    const entry = hours[nextDay];

    if (entry && !entry.isClosed && entry.open && entry.close) {
      const opensAt = entry.open;
      const label = offset === 1 ? "tomorrow" : `on ${nextDay}`;

      return {
        isOpen: false,
        opensAt,
        nextOpenDay: nextDay,
        message: `Closed • Opens ${label} at ${opensAt}`,
      };
    }
  }

  return {
    isOpen: false,
    message: "Temporarily closed",
  };
};

const formatDistance = (miles: number) => `${miles.toFixed(1)} miles away`;

const bakeryHours: BusinessHours = {
  Sunday: { open: "7:00 AM", close: "3:00 PM" },
  Monday: { open: "6:00 AM", close: "7:00 PM" },
  Tuesday: { open: "6:00 AM", close: "7:00 PM" },
  Wednesday: { open: "6:00 AM", close: "7:00 PM" },
  Thursday: { open: "6:00 AM", close: "7:00 PM" },
  Friday: { open: "6:00 AM", close: "8:00 PM" },
  Saturday: { open: "6:00 AM", close: "8:00 PM" },
};

const grillHours: BusinessHours = {
  Sunday: { open: "11:00 AM", close: "9:00 PM" },
  Monday: { open: "11:00 AM", close: "10:00 PM" },
  Tuesday: { open: "11:00 AM", close: "10:00 PM" },
  Wednesday: { open: "11:00 AM", close: "10:00 PM" },
  Thursday: { open: "11:00 AM", close: "10:00 PM" },
  Friday: { open: "11:00 AM", close: "11:00 PM" },
  Saturday: { open: "11:00 AM", close: "11:00 PM" },
};

const coffeeHours: BusinessHours = {
  Sunday: { open: "7:00 AM", close: "4:00 PM" },
  Monday: { open: "6:30 AM", close: "6:00 PM" },
  Tuesday: { open: "6:30 AM", close: "6:00 PM" },
  Wednesday: { open: "6:30 AM", close: "6:00 PM" },
  Thursday: { open: "6:30 AM", close: "6:00 PM" },
  Friday: { open: "6:30 AM", close: "7:00 PM" },
  Saturday: { open: "7:00 AM", close: "7:00 PM" },
};

const boutiqueHours: BusinessHours = {
  Sunday: { open: null, close: null, isClosed: true },
  Monday: { open: "10:00 AM", close: "8:00 PM" },
  Tuesday: { open: "10:00 AM", close: "8:00 PM" },
  Wednesday: { open: "10:00 AM", close: "8:00 PM" },
  Thursday: { open: "10:00 AM", close: "8:00 PM" },
  Friday: { open: "10:00 AM", close: "8:00 PM" },
  Saturday: { open: "10:00 AM", close: "7:00 PM" },
};

const businesses: Business[] = [
  {
    id: "sunrise-bakery",
    name: "Sunrise Bakery & Café",
    categories: ["Bakery", "Café", "Breakfast"],
    verified: true,
    distanceMiles: 0.8,
    description:
      "Sunrise Bakery & Café crafts small-batch pastries, breads, and breakfast plates inspired by Midwest farms and French patisserie techniques.",
    about:
      "Every morning before dawn, our pastry team mills grains, laminates dough, and roasts seasonal produce to create a menu that feels comforting yet fresh. From heritage sourdough boules to custard-filled cruffins, each item is hand finished, thoughtfully sourced, and served with genuine hospitality.",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=80",
        alt: "Freshly baked sourdough loaves cooling on wooden shelves",
      },
      {
        src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1600&q=80",
        alt: "Barista pouring latte art in a bright café interior",
      },
      {
        src: "https://images.unsplash.com/photo-1483695028931-1262df28ab33?auto=format&fit=crop&w=1600&q=80",
        alt: "Plates of croissants and fruit tarts on a marble counter",
      },
      {
        src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1600&q=80",
        alt: "Dining guests enjoying breakfast inside a sunlit bakery",
      },
      {
        src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80",
        alt: "Stack of pancakes topped with berries and maple syrup",
      },
    ],
    rating: { score: 4.8, count: 127 },
    contact: {
      address: "425 Oak Street, Springfield, IL 62701",
      phone: "(217) 555-1234",
      website: "https://sunrisebakery.com",
      email: "hello@sunrisebakery.com",
      directionsUrl: "https://maps.google.com/?q=425+Oak+Street,+Springfield,+IL+62701",
    },
    hours: bakeryHours,
    credentials: [
      {
        id: "established",
        icon: Calendar,
        title: "Established in 2018",
        description: "Six years serving Springfield mornings with small-batch breads.",
      },
      {
        id: "licensed",
        icon: BadgeCheck,
        title: "Licensed Food Service Establishment",
        description: "Compliant with Sangamon County health & safety standards.",
      },
      {
        id: "organic",
        icon: Leaf,
        title: "Certified Organic Ingredients",
        description: "Partner farms provide seasonal fruit, eggs, and dairy.",
      },
      {
        id: "community-choice",
        icon: Heart,
        title: "Community Choice Award 2023",
        description: "Voted #1 local bakery by the Springfield Neighborhood Council.",
      },
    ],
    lastUpdated: "March 15, 2024",
    breadcrumb: [
      { label: "Home", href: "#" },
      { label: "Restaurants", href: "#" },
      { label: "Bakeries", href: "#" },
      { label: "Sunrise Bakery & Café" },
    ],
    actions: [
      {
        label: "Call Now",
        href: "tel:12175551234",
        icon: Phone,
        variant: "primary",
        onClick: () => console.info("Call initiated for Sunrise Bakery & Café"),
      },
      {
        label: "Get Directions",
        href: "https://maps.google.com/?q=425+Oak+Street,+Springfield,+IL+62701",
        icon: Navigation,
        variant: "secondary",
        external: true,
        onClick: () => console.info("Directions requested for Sunrise Bakery & Café"),
      },
      {
        label: "Visit Website",
        href: "https://sunrisebakery.com",
        icon: Globe,
        variant: "outline",
        external: true,
        onClick: () => console.info("Website visit for Sunrise Bakery & Café"),
      },
    ],
    specialties: [
      "Artisan sourdough and seeded boules",
      "Hand-laminated pastries with seasonal fruit",
      "Farm-to-table breakfast and brunch menu",
      "Locally roasted espresso and cold brew",
    ],
    highlights: [
      {
        title: "Handcrafted Every Morning",
        description:
          "Grains are milled in-house and laminated dough rests for 72 hours, creating layered textures and deep flavor.",
      },
      {
        title: "Community-Driven Sourcing",
        description:
          "Partnerships with Springfield farms ensure eggs, dairy, and produce are always fresh and sustainably grown.",
      },
      {
        title: "Elevated Coffee Program",
        description:
          "Single-origin beans roasted weekly pair with house-made syrups, creating drinks tailored to each season.",
      },
      {
        title: "Weekday Breakfast Catering",
        description:
          "Corporate platters and pastry boxes are delivered within a 5-mile radius with complimentary setup.",
      },
    ],
  },
  {
    id: "mediterranean-grill",
    name: "Mediterranean Grill House",
    categories: ["Restaurant", "Mediterranean", "Healthy"],
    verified: true,
    distanceMiles: 1.2,
    description:
      "Fresh-off-the-fire kebabs, vibrant meze spreads, and family recipes from the Aegean coast served in a warm dining room.",
    about:
      "Chef-owner Elias Kostas slow-marinates meats overnight with mountain herbs, while the kitchen prepares pillowy pita, bright salads, and roasted vegetable platters. Guests can dine in, order mezze flights to-go, or schedule private tastings.",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1543352634-873f17a7a088?auto=format&fit=crop&w=1600&q=80",
        alt: "Grilled kebabs and vegetables served on a platter",
      },
      {
        src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
        alt: "Mediterranean restaurant interior with communal seating",
      },
      {
        src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1600&q=80",
        alt: "Spread of colorful mezze dishes on a table",
      },
      {
        src: "https://images.unsplash.com/photo-1459448696212-0ab5120c773c?auto=format&fit=crop&w=1600&q=80",
        alt: "Chef slicing roasted meats in a kitchen",
      },
      {
        src: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=1600&q=80",
        alt: "Fresh salad with feta cheese and olives",
      },
    ],
    rating: { score: 4.6, count: 89 },
    contact: {
      address: "88 Market Square, Springfield, IL 62701",
      phone: "(217) 555-5876",
      website: "https://medgrillhouse.com",
      email: "reservations@medgrillhouse.com",
      directionsUrl: "https://maps.google.com/?q=88+Market+Square,+Springfield,+IL+62701",
    },
    hours: grillHours,
    credentials: [
      {
        id: "since2012",
        icon: Calendar,
        title: "Serving since 2012",
        description: "Twelve years of family-owned Mediterranean cuisine downtown.",
      },
      {
        id: "zagat",
        icon: Award,
        title: "2023 Zagat Rated",
        description: "Recognized for exceptional hospitality and authentic flavors.",
      },
      {
        id: "halal",
        icon: BadgeCheck,
        title: "Certified Halal Kitchen",
        description: "All meats sourced from certified Midwestern suppliers.",
      },
    ],
    lastUpdated: "April 2, 2024",
    breadcrumb: [
      { label: "Home", href: "#" },
      { label: "Restaurants", href: "#" },
      { label: "Mediterranean", href: "#" },
      { label: "Mediterranean Grill House" },
    ],
    actions: [
      {
        label: "Call Now",
        href: "tel:12175555876",
        icon: Phone,
        variant: "primary",
        onClick: () => console.info("Call initiated for Mediterranean Grill House"),
      },
      {
        label: "Reserve Table",
        href: "https://medgrillhouse.com/reservations",
        icon: Globe,
        variant: "secondary",
        external: true,
        onClick: () => console.info("Reservation link opened for Mediterranean Grill House"),
      },
      {
        label: "Get Directions",
        href: "https://maps.google.com/?q=88+Market+Square,+Springfield,+IL+62701",
        icon: Navigation,
        variant: "outline",
        external: true,
        onClick: () => console.info("Directions requested for Mediterranean Grill House"),
      },
    ],
    specialties: [
      "Charcoal-grilled lamb and chicken kebabs",
      "Build-your-own mezze platters",
      "Cold-pressed olive oil tasting flights",
      "Plant-forward menu with gluten-free options",
    ],
    highlights: [
      {
        title: "Live Fire Cooking",
        description:
          "An open kitchen showcases charcoal grills, bringing visual drama and smoky depth to each plate.",
      },
      {
        title: "Seasonal Mezze Menu",
        description:
          "Frequent menu updates highlight local produce in vibrant dips, spreads, and salads.",
      },
      {
        title: "Catering & Private Events",
        description:
          "Family-style platters and on-site chefs available for weddings, conferences, and celebrations.",
      },
      {
        title: "Wellness-Focused",
        description:
          "Customizable plates make it easy to balance proteins, grains, and vegetables for any diet.",
      },
    ],
  },
  {
    id: "artisan-coffee",
    name: "Artisan Coffee Roasters",
    categories: ["Coffee Shop", "Roastery", "Café"],
    verified: true,
    distanceMiles: 0.3,
    description:
      "Micro-batch coffee roastery with a Scandinavian-inspired tasting bar and weekly brew workshops.",
    about:
      "Beans are sourced directly from smallholder farms, roasted on-site, and profiled through a curated tasting flight. Guests can sample espresso, pour-over, and nitro cold brew while learning about origin stories and brew science.",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=1600&q=80",
        alt: "Barista weighing coffee beans on a scale",
      },
      {
        src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=80",
        alt: "Latte art being poured into a ceramic cup",
      },
      {
        src: "https://images.unsplash.com/photo-1432107294469-414527cb5c65?auto=format&fit=crop&w=1600&q=80",
        alt: "Coffee roasting machine with beans in motion",
      },
      {
        src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1600&q=80",
        alt: "Guests enjoying coffee at a minimalist café table",
      },
      {
        src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
        alt: "Coffee bar with pour-over setup and brewing tools",
      },
    ],
    rating: { score: 4.9, count: 203 },
    contact: {
      address: "19 Artisan Alley, Springfield, IL 62701",
      phone: "(217) 555-0412",
      website: "https://artisancoffee.co",
      email: "hello@artisancoffee.co",
      directionsUrl: "https://maps.google.com/?q=19+Artisan+Alley,+Springfield,+IL+62701",
    },
    hours: coffeeHours,
    credentials: [
      {
        id: "roaster-choice",
        icon: Award,
        title: "2024 Roaster's Choice",
        description: "Recognized by the Midwest Coffee Collective for farm-direct sourcing.",
      },
      {
        id: "fairtrade",
        icon: Leaf,
        title: "Fair Trade Certified",
        description: "Direct relationships ensure equitable pay for farming partners.",
      },
      {
        id: "qgrader",
        icon: BadgeCheck,
        title: "Licensed Q Grader on Staff",
        description: "Certified tasters calibrate each roast for balance and clarity.",
      },
    ],
    lastUpdated: "May 6, 2024",
    breadcrumb: [
      { label: "Home", href: "#" },
      { label: "Coffee Shops", href: "#" },
      { label: "Artisan Coffee Roasters" },
    ],
    actions: [
      {
        label: "Call Now",
        href: "tel:12175550412",
        icon: Phone,
        variant: "primary",
        onClick: () => console.info("Call initiated for Artisan Coffee Roasters"),
      },
      {
        label: "Order Beans",
        href: "https://artisancoffee.co/store",
        icon: Globe,
        variant: "secondary",
        external: true,
        onClick: () => console.info("Online store opened for Artisan Coffee Roasters"),
      },
      {
        label: "Get Directions",
        href: "https://maps.google.com/?q=19+Artisan+Alley,+Springfield,+IL+62701",
        icon: Navigation,
        variant: "outline",
        external: true,
        onClick: () => console.info("Directions requested for Artisan Coffee Roasters"),
      },
    ],
    specialties: [
      "Direct-trade single origin beans",
      "Public cupping sessions every Saturday",
      "Seasonal signature drinks",
      "Wholesale partnerships for cafes and offices",
    ],
    highlights: [
      {
        title: "Roasted On-Site",
        description:
          "Guests can see the roasting process and sample beans minutes after they leave the drum.",
      },
      {
        title: "Brew Education Lab",
        description:
          "Workshops teach latte art, pour-over techniques, and home espresso dial-in skills.",
      },
      {
        title: "Sustainable Packaging",
        description:
          "Compostable bags and reusable growlers reduce waste for subscriptions and walk-ins alike.",
      },
      {
        title: "Community Workspace",
        description:
          "High-speed Wi-Fi, soft seating, and power-ready tables welcome remote workers and creatives.",
      },
    ],
  },
  {
    id: "urban-outfitters-boutique",
    name: "Urban Outfitters Boutique",
    categories: ["Retail", "Fashion", "Accessories"],
    verified: false,
    distanceMiles: 2.1,
    description:
      "Curated collection of independent fashion labels, handcrafted jewelry, and ethically sourced accessories.",
    about:
      "Owner Maya Thompson scouts designers across the Midwest and curates quarterly capsules featuring limited runs. Shoppers find inclusive sizing, locally made goods, and styling appointments tailored to lifestyle, not trends.",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1600&q=80",
        alt: "Clothing rack with colorful garments in a boutique",
      },
      {
        src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1600&q=80",
        alt: "Display of accessories on a wooden table",
      },
      {
        src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80",
        alt: "Boutique storefront with mannequins in the window",
      },
      {
        src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80",
        alt: "Customer browsing clothing rack in boutique",
      },
      {
        src: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1600&q=80",
        alt: "Table display with folded clothes and plants",
      },
    ],
    rating: { score: 4.5, count: 45 },
    contact: {
      address: "612 Northside Avenue, Springfield, IL 62702",
      phone: "(217) 555-7780",
      website: "https://urbanoutfittersboutique.com",
      directionsUrl: "https://maps.google.com/?q=612+Northside+Avenue,+Springfield,+IL+62702",
    },
    hours: boutiqueHours,
    credentials: [
      {
        id: "women-owned",
        icon: Heart,
        title: "Women-Owned Small Business",
        description: "Member of the Springfield Collective of Independent Retailers.",
      },
      {
        id: "sustainable",
        icon: Leaf,
        title: "Sustainable Style Coalition",
        description: "Commits to ethical production and recycled packaging.",
      },
    ],
    lastUpdated: "February 20, 2024",
    breadcrumb: [
      { label: "Home", href: "#" },
      { label: "Shopping", href: "#" },
      { label: "Boutiques", href: "#" },
      { label: "Urban Outfitters Boutique" },
    ],
    actions: [
      {
        label: "Call Now",
        href: "tel:12175557780",
        icon: Phone,
        variant: "primary",
        onClick: () => console.info("Call initiated for Urban Outfitters Boutique"),
      },
      {
        label: "Book Styling",
        href: "https://urbanoutfittersboutique.com/styling",
        icon: Globe,
        variant: "secondary",
        external: true,
        onClick: () => console.info("Styling session link opened for Urban Outfitters Boutique"),
      },
    ],
    specialties: [
      "Limited-run designer capsules",
      "Inclusive sizing from XS to 4X",
      "Private styling appointments",
      "Handcrafted accessories from Midwest makers",
    ],
    highlights: [
      {
        title: "Local Designer Showcase",
        description:
          "Monthly pop-ups feature trunk shows from regional designers with proceeds supporting artisan grants.",
      },
      {
        title: "Tailored Appointments",
        description:
          "Stylists build outfits for travel, events, and everyday wardrobes with lookbooks sent after each session.",
      },
      {
        title: "Sustainability Pledge",
        description:
          "Garments are sourced from brands committed to ethical labor and reduced water usage.",
      },
      {
        title: "Community Closet",
        description:
          "Quarterly clothing swaps allow gently used items to find new homes while raising funds for local shelters.",
      },
    ],
  },
];

const BusinessListingDemo = () => {
  const [selectedBusinessIndex, setSelectedBusinessIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setNow(new Date());
    }, 60000);

    return () => window.clearInterval(interval);
  }, []);

  const currentBusiness = businesses[selectedBusinessIndex];

  useEffect(() => {
    setActiveImageIndex(0);
  }, [selectedBusinessIndex]);

  const status = useMemo(
    () => calculateStatus(currentBusiness.hours, now),
    [currentBusiness, now],
  );

  const currentDay = WEEK_ORDER[now.getDay()];

  return (
    <BusinessListingLayout
      header={
        <BusinessHeader
          brand={{ name: "LocalConnect", href: "#" }}
          navLinks={[
            { label: "Directory", href: "#" },
            { label: "Categories", href: "#" },
            { label: "Add Business", href: "#" },
            { label: "Sign In", href: "#" },
          ]}
          primaryAction={{
            label: "List Your Business",
            href: "#",
            icon: Navigation,
          }}
        />
      }
      breadcrumb={<Breadcrumb items={currentBusiness.breadcrumb} />}
      hero={
        <BusinessHero
          gallery={
            <ImageGallery
              images={currentBusiness.gallery}
              activeIndex={activeImageIndex}
              onSelect={setActiveImageIndex}
            />
          }
          details={
            <BusinessDetails
              name={currentBusiness.name}
              categories={currentBusiness.categories}
              verified={currentBusiness.verified}
              rating={currentBusiness.rating}
              distanceLabel={formatDistance(currentBusiness.distanceMiles)}
              status={status}
              description={currentBusiness.description}
              actions={currentBusiness.actions}
            />
          }
        />
      }
      main={
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {businesses.map((business, index) => {
              const isActive = index === selectedBusinessIndex;
              return (
                <button
                  key={business.id}
                  type="button"
                  onClick={() => {
                    setSelectedBusinessIndex(index);
                    console.info(`Switched to business profile: ${business.name}`);
                  }}
                  aria-pressed={isActive}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
                    isActive
                      ? "border-blue-600 bg-blue-50 text-blue-700"
                      : "border-slate-200 bg-white text-slate-600 hover:border-blue-300"
                  }`}
                >
                  {business.name}
                </button>
              );
            })}
          </div>

          <section className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
            <h2 className="text-xl font-semibold text-slate-900">About {currentBusiness.name}</h2>
            <p className="mt-3 text-base text-slate-600">{currentBusiness.about}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {currentBusiness.highlights.map((highlight) => (
                <article
                  key={highlight.title}
                  className="rounded-2xl bg-slate-50 p-5"
                >
                  <h3 className="text-sm font-semibold text-slate-800">{highlight.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{highlight.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Specialties
              </h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {currentBusiness.specialties.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="text-blue-600">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      }
      sidebar={
        <BusinessSidebar>
          <ContactInfo title="Business Information" icon={Info} contact={currentBusiness.contact} />
          <HoursDisplay
            title="Hours of Operation"
            icon={Clock}
            hours={currentBusiness.hours}
            currentDay={currentDay}
          />
          <CredentialsDisplay
            title="Credentials & Recognition"
            icon={Award}
            credentials={currentBusiness.credentials}
          />
          <ReviewsPlaceholder
            title="Customer Reviews"
            icon={MessageSquare}
            message="Review system coming soon! Help us build trust in our community."
          />
          <LastUpdatedBadge updatedAt={currentBusiness.lastUpdated} icon={RefreshCw} />
        </BusinessSidebar>
      }
    />
  );
};

export default BusinessListingDemo;
