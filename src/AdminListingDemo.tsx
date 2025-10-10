import { useCallback, useEffect, useMemo, useState } from "react";
import {
  AdminListingFilters,
  AdminListingHeader,
  AdminListingLayout,
  AdminListingSidebar,
  BusinessApprovalCard,
  BusinessCardGrid,
  BusinessDetailPanel,
  PaginationControls,
} from "@/ui/components/admin";
import type {
  BusinessListing,
  FilterOptions,
  PriorityLevel,
  SidebarItem,
} from "@/ui/components/types/admin.types";
import {
  Building2,
  Clock,
  Flag,
  Settings,
  TrendingUp,
  Users,
} from "lucide-react";

const sidebarItems: SidebarItem[] = [
  { id: "overview", label: "Overview", icon: TrendingUp, section: "Management" },
  { id: "pending", label: "Pending Approvals", icon: Clock, section: "Moderation", badgeCount: 23 },
  { id: "businesses", label: "Businesses", icon: Building2, section: "Management" },
  { id: "teams", label: "Team Members", icon: Users, section: "Management" },
  { id: "flags", label: "Flagged", icon: Flag, section: "Moderation", badgeCount: 5 },
  { id: "settings", label: "Settings", icon: Settings, section: "Insights" },
];

const filterOptions: FilterOptions = {
  categories: [
    "All Categories",
    "Restaurants",
    "Retail",
    "Health & Wellness",
    "Automotive",
    "Services",
    "Hospitality",
  ],
  priorities: ["high", "normal"],
  timeframes: ["All Time", "Today", "This Week", "This Month"],
};

const mockBusinesses: BusinessListing[] = [
  {
    id: "bistro-01",
    name: "Bella Vista Bistro",
    category: "Restaurants",
    location: "530 Market Street",
    address: "530 Market Street, Seattle, WA",
    avatarUrl:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=200&h=200&fit=crop",
    tags: ["Italian", "Dinner"],
    submittedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    owner: "Elena Rossi",
    ownerEmail: "elena@bellavistabistro.com",
    ownerPhone: "(206) 555-0132",
    priority: "high",
    description:
      "Authentic Italian dining with locally sourced ingredients and a curated wine program.",
    documents: [
      { id: "menu", name: "Seasonal Menu", type: "PDF", lastUpdated: "2 days ago" },
    ],
  },
  {
    id: "books-02",
    name: "Chapter & Verse Books",
    category: "Retail",
    location: "18 Willow Lane",
    address: "18 Willow Lane, Portland, OR",
    avatarUrl:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=200&h=200&fit=crop",
    tags: ["Independent", "Events"],
    submittedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    owner: "James Carter",
    ownerEmail: "james@chapterverse.com",
    priority: "normal",
    description:
      "Community-driven bookstore hosting weekly author readings and poetry nights.",
  },
  {
    id: "yoga-03",
    name: "Zen Flow Yoga Studio",
    category: "Health & Wellness",
    location: "902 Evergreen Terrace",
    address: "902 Evergreen Terrace, Austin, TX",
    avatarUrl:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=200&h=200&fit=crop",
    tags: ["Yoga", "Workshops"],
    submittedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    owner: "Maya Patel",
    ownerEmail: "maya@zenflowstudio.co",
    ownerPhone: "(512) 555-0182",
    priority: "high",
    documents: [
      { id: "insurance", name: "Liability Insurance", type: "PDF", lastUpdated: "5 days ago" },
    ],
  },
  {
    id: "coffee-04",
    name: "Grind Coffee Co.",
    category: "Hospitality",
    location: "44 Harbor Drive",
    address: "44 Harbor Drive, San Diego, CA",
    avatarUrl:
      "https://images.unsplash.com/photo-1459257868276-5e65389e2722?w=200&h=200&fit=crop",
    tags: ["Cafe", "Roastery"],
    submittedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    owner: "Lena Ortiz",
    ownerEmail: "lena@grindcoffee.co",
    priority: "normal",
    description: "Neighborhood coffee bar with small-batch roasting and curated pastries.",
  },
  {
    id: "auto-05",
    name: "Premier Auto Care",
    category: "Automotive",
    location: "768 Industrial Way",
    address: "768 Industrial Way, Denver, CO",
    avatarUrl:
      "https://images.unsplash.com/photo-1515923163646-4b37d0c4efcb?w=200&h=200&fit=crop",
    tags: ["Repair", "Detailing"],
    submittedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    owner: "Marcus Lee",
    ownerEmail: "marcus@premierauto.com",
    ownerPhone: "(303) 555-0199",
    priority: "normal",
  },
  {
    id: "fashion-06",
    name: "Urban Threads Boutique",
    category: "Retail",
    location: "220 Elm Street",
    address: "220 Elm Street, Brooklyn, NY",
    avatarUrl:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=200&h=200&fit=crop",
    tags: ["Fashion", "Local Designers"],
    submittedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    owner: "Priya Das",
    ownerEmail: "priya@urbanthreads.co",
    priority: "high",
    documents: [
      { id: "lookbook", name: "Spring Lookbook", type: "PDF", lastUpdated: "1 day ago" },
    ],
  },
  {
    id: "spa-07",
    name: "Aura Wellness Spa",
    category: "Health & Wellness",
    location: "455 Sunrise Blvd",
    address: "455 Sunrise Blvd, Miami, FL",
    avatarUrl:
      "https://images.unsplash.com/photo-1600334129128-685c5585968e?w=200&h=200&fit=crop",
    tags: ["Spa", "Massage"],
    submittedAt: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000).toISOString(),
    owner: "Tara Chen",
    ownerEmail: "tara@aurawellness.com",
    priority: "normal",
  },
  {
    id: "studio-08",
    name: "Frame & Light Studio",
    category: "Services",
    location: "78 Artist Alley",
    address: "78 Artist Alley, Nashville, TN",
    avatarUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=200&h=200&fit=crop",
    tags: ["Photography", "Portrait"],
    submittedAt: new Date(Date.now() - 11 * 24 * 60 * 60 * 1000).toISOString(),
    owner: "Jordan Blake",
    ownerEmail: "jordan@frameandlight.com",
    priority: "normal",
  },
  {
    id: "lounge-09",
    name: "Skyline Rooftop Lounge",
    category: "Hospitality",
    location: "350 Heights Ave",
    address: "350 Heights Ave, Chicago, IL",
    avatarUrl:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=200&fit=crop",
    tags: ["Lounge", "Events"],
    submittedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    owner: "Alex Morgan",
    ownerEmail: "alex@skylinerooftop.com",
    ownerPhone: "(773) 555-0142",
    priority: "high",
  },
  {
    id: "clinic-10",
    name: "Bright Smile Dental Clinic",
    category: "Health & Wellness",
    location: "610 Oak Grove",
    address: "610 Oak Grove, Sacramento, CA",
    avatarUrl:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=200&h=200&fit=crop",
    tags: ["Dental", "Family"],
    submittedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    owner: "Dr. Nina Alvarez",
    ownerEmail: "nina@brightsmileclinic.com",
    priority: "high",
  },
  {
    id: "brewery-11",
    name: "North Pier Brewery",
    category: "Hospitality",
    location: "910 Lakeside Rd",
    address: "910 Lakeside Rd, Milwaukee, WI",
    avatarUrl:
      "https://images.unsplash.com/photo-1513189737554-b1bbd839b9a1?w=200&h=200&fit=crop",
    tags: ["Craft", "Taproom"],
    submittedAt: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000).toISOString(),
    owner: "Chris Elliott",
    ownerEmail: "chris@northpierbrew.com",
    priority: "normal",
  },
  {
    id: "gallery-12",
    name: "Canvas & Co. Gallery",
    category: "Retail",
    location: "55 Harbor Ave",
    address: "55 Harbor Ave, Boston, MA",
    avatarUrl:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=200&h=200&fit=crop",
    tags: ["Art", "Studio"],
    submittedAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
    owner: "Riley Thompson",
    ownerEmail: "riley@canvasco.art",
    priority: "normal",
  },
  {
    id: "music-13",
    name: "SoundWave Music School",
    category: "Services",
    location: "102 Harmony Rd",
    address: "102 Harmony Rd, Atlanta, GA",
    avatarUrl:
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=200&h=200&fit=crop",
    tags: ["Music", "Education"],
    submittedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    owner: "Samira Khan",
    ownerEmail: "samira@soundwaveacademy.com",
    priority: "normal",
  },
  {
    id: "tech-14",
    name: "Quantum IT Solutions",
    category: "Services",
    location: "420 Innovation Way",
    address: "420 Innovation Way, San Jose, CA",
    avatarUrl:
      "https://images.unsplash.com/photo-1580894894513-541e068a05c3?w=200&h=200&fit=crop",
    tags: ["IT", "Cloud"],
    submittedAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    owner: "Derrick Mills",
    ownerEmail: "derrick@quantumit.io",
    priority: "high",
  },
  {
    id: "green-15",
    name: "Verdant Landscaping",
    category: "Services",
    location: "88 Garden Path",
    address: "88 Garden Path, Phoenix, AZ",
    avatarUrl:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=200&h=200&fit=crop",
    tags: ["Landscaping", "Sustainable"],
    submittedAt: new Date(Date.now() - 16 * 24 * 60 * 60 * 1000).toISOString(),
    owner: "Morgan Blake",
    ownerEmail: "morgan@verdantland.com",
    priority: "normal",
  },
  {
    id: "studio-16",
    name: "Nova Dance Collective",
    category: "Health & Wellness",
    location: "390 Rhythm Street",
    address: "390 Rhythm Street, Los Angeles, CA",
    avatarUrl:
      "https://images.unsplash.com/photo-1481068164146-e8beb686f4d2?w=200&h=200&fit=crop",
    tags: ["Dance", "Classes"],
    submittedAt: new Date(Date.now() - 26 * 60 * 60 * 1000).toISOString(),
    owner: "Bianca Rivera",
    ownerEmail: "bianca@novadancecollective.com",
    priority: "normal",
  },
  {
    id: "clinic-17",
    name: "Harborview Vet Clinic",
    category: "Services",
    location: "77 Ocean Ave",
    address: "77 Ocean Ave, Charleston, SC",
    avatarUrl:
      "https://images.unsplash.com/photo-1550831107-1553da8c8464?w=200&h=200&fit=crop",
    tags: ["Veterinary", "Emergency"],
    submittedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    owner: "Dr. Leo Martinez",
    ownerEmail: "leo@harborviewvet.com",
    priority: "high",
  },
  {
    id: "events-18",
    name: "Elevate Event Planning",
    category: "Services",
    location: "245 Meridian Blvd",
    address: "245 Meridian Blvd, Charlotte, NC",
    avatarUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&h=200&fit=crop",
    tags: ["Events", "Corporate"],
    submittedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    owner: "Hannah Lee",
    ownerEmail: "hannah@elevateevents.co",
    priority: "normal",
  },
  {
    id: "fitness-19",
    name: "Pulse Athletic Club",
    category: "Health & Wellness",
    location: "98 Endurance Rd",
    address: "98 Endurance Rd, Minneapolis, MN",
    avatarUrl:
      "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?w=200&h=200&fit=crop",
    tags: ["Fitness", "Training"],
    submittedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    owner: "Kevin Marshall",
    ownerEmail: "kevin@pulseathletic.com",
    priority: "normal",
  },
  {
    id: "catering-20",
    name: "Gather & Graze Catering",
    category: "Hospitality",
    location: "315 Harvest Lane",
    address: "315 Harvest Lane, Kansas City, MO",
    avatarUrl:
      "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=200&h=200&fit=crop",
    tags: ["Catering", "Events"],
    submittedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    owner: "Olivia Chen",
    ownerEmail: "olivia@gatherandgraze.com",
    ownerPhone: "(816) 555-0178",
    priority: "high",
  },
];

const PAGE_SIZE = 6;

function formatRelativeTime(timestamp: string) {
  const date = new Date(timestamp);
  const now = new Date();
  const diffMs = date.getTime() - now.getTime();
  const diffMinutes = Math.round(diffMs / 60000);

  const units: Array<[Intl.RelativeTimeFormatUnit, number]> = [
    ["year", 60 * 24 * 365],
    ["month", 60 * 24 * 30],
    ["week", 60 * 24 * 7],
    ["day", 60 * 24],
    ["hour", 60],
    ["minute", 1],
  ];

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  for (const [unit, minutesInUnit] of units) {
    const value = diffMinutes / minutesInUnit;
    if (Math.abs(value) >= 1) {
      return rtf.format(Math.round(value), unit);
    }
  }

  return "just now";
}

function isWithinTimeframe(timestamp: string, timeframe: string) {
  if (timeframe === "All Time") {
    return true;
  }

  const submitted = new Date(timestamp).getTime();
  const now = Date.now();
  const diffHours = (now - submitted) / (1000 * 60 * 60);

  if (timeframe === "Today") {
    return diffHours <= 24;
  }

  if (timeframe === "This Week") {
    return diffHours <= 24 * 7;
  }

  if (timeframe === "This Month") {
    return diffHours <= 24 * 30;
  }

  return true;
}

const AdminListingDemo = () => {
  const [categoryFilter, setCategoryFilter] = useState(filterOptions.categories[0]);
  const [priorityFilter, setPriorityFilter] = useState<PriorityLevel | "all">("all");
  const [timeframeFilter, setTimeframeFilter] = useState(filterOptions.timeframes[0]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeSidebarItem, setActiveSidebarItem] = useState("pending");
  const [panelOpen, setPanelOpen] = useState(false);
  const [focusedBusiness, setFocusedBusiness] = useState<BusinessListing | null>(null);

  const filteredBusinesses = useMemo(() => {
    return mockBusinesses.filter((business) => {
      const matchesCategory =
        categoryFilter === "All Categories" || business.category === categoryFilter;
      const matchesPriority = priorityFilter === "all" || business.priority === priorityFilter;
      const matchesTimeframe = isWithinTimeframe(business.submittedAt, timeframeFilter);
      return matchesCategory && matchesPriority && matchesTimeframe;
    });
  }, [categoryFilter, priorityFilter, timeframeFilter]);

  useEffect(() => {
    setSelectedIds((prev) =>
      prev.filter((id) => filteredBusinesses.some((business) => business.id === id))
    );
  }, [filteredBusinesses]);

  useEffect(() => {
    const totalPages = Math.max(1, Math.ceil(filteredBusinesses.length / PAGE_SIZE));
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [filteredBusinesses, currentPage]);

  const totalItems = filteredBusinesses.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / PAGE_SIZE));
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const paginatedBusinesses = filteredBusinesses.slice(startIndex, startIndex + PAGE_SIZE);

  const bulkState = useMemo(() => {
    const visibleIds = paginatedBusinesses.map((business) => business.id);
    const selectedVisible = visibleIds.filter((id) => selectedIds.includes(id));
    const allSelected = visibleIds.length > 0 && selectedVisible.length === visibleIds.length;
    const indeterminate = selectedVisible.length > 0 && !allSelected;
    return {
      selectedIds,
      allSelected,
      indeterminate,
    };
  }, [paginatedBusinesses, selectedIds]);

  const handleToggleSelect = useCallback((id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((value) => value !== id) : [...prev, id]
    );
  }, []);

  const handleSelectAll = useCallback(() => {
    const visibleIds = paginatedBusinesses.map((business) => business.id);
    if (visibleIds.length === 0) {
      return;
    }

    setSelectedIds((prev) => {
      const allSelected = visibleIds.every((id) => prev.includes(id));
      if (allSelected) {
        return prev.filter((id) => !visibleIds.includes(id));
      }
      const merged = new Set([...prev, ...visibleIds]);
      return Array.from(merged);
    });
  }, [paginatedBusinesses]);

  const handleApproveSelected = useCallback(() => {
    console.log("Bulk approve", selectedIds);
    setSelectedIds([]);
  }, [selectedIds]);

  const handleOpenDetails = useCallback((business: BusinessListing) => {
    setFocusedBusiness(business);
    setPanelOpen(true);
  }, []);

  const handleClosePanel = useCallback(() => {
    setPanelOpen(false);
    setFocusedBusiness(null);
  }, []);

  const handleApprove = useCallback((business: BusinessListing) => {
    console.log("Approved", business.id);
  }, []);

  const handleRequestChanges = useCallback((business: BusinessListing) => {
    console.log("Requested changes", business.id);
  }, []);

  const handleReject = useCallback((business: BusinessListing) => {
    console.log("Rejected", business.id);
  }, []);

  return (
    <AdminListingLayout
      sidebar={
        <AdminListingSidebar
          items={sidebarItems}
          activeItemId={activeSidebarItem}
          onSelect={(item) => setActiveSidebarItem(item.id)}
        />
      }
      header={
        <AdminListingHeader
          title="Pending Approvals"
          pendingCount={totalItems || 0}
          selectedCount={selectedIds.length}
          onApproveSelected={handleApproveSelected}
          onExport={() => console.log("Exported CSV")}
        />
      }
      filters={
        <AdminListingFilters
          filters={filterOptions}
          categoryValue={categoryFilter}
          priorityValue={priorityFilter}
          timeframeValue={timeframeFilter}
          onCategoryChange={(value) => {
            setCategoryFilter(value);
            setCurrentPage(1);
          }}
          onPriorityChange={(value) => {
            setPriorityFilter(value);
            setCurrentPage(1);
          }}
          onTimeframeChange={(value) => {
            setTimeframeFilter(value);
            setCurrentPage(1);
          }}
          bulkState={bulkState}
          onToggleSelectAll={handleSelectAll}
        />
      }
      content={
        paginatedBusinesses.length > 0 ? (
          <BusinessCardGrid>
            {paginatedBusinesses.map((business) => (
              <BusinessApprovalCard
                key={business.id}
                business={business}
                isSelected={selectedIds.includes(business.id)}
                submittedLabel={formatRelativeTime(business.submittedAt)}
                onToggleSelect={handleToggleSelect}
                onViewDetails={handleOpenDetails}
                onApprove={handleApprove}
                onRequestChanges={handleRequestChanges}
                onReject={handleReject}
              />
            ))}
          </BusinessCardGrid>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">
            <p className="text-lg font-semibold text-slate-900">No businesses match your filters yet</p>
            <p className="mt-2 max-w-sm text-sm text-slate-500">
              Adjust the category, priority, or submission time filters to discover more pending
              approvals.
            </p>
          </div>
        )
      }
      footer={
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          pageSize={PAGE_SIZE}
          totalItems={totalItems}
          onPageChange={(page) => {
            const next = Math.min(Math.max(page, 1), totalPages);
            setCurrentPage(next);
          }}
        />
      }
      detailPanel={
        <BusinessDetailPanel business={focusedBusiness} isOpen={panelOpen} onClose={handleClosePanel} />
      }
      panelOpen={panelOpen}
      onBackdropClick={handleClosePanel}
    />
  );
};

export default AdminListingDemo;
