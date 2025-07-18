export const NAVIGATION_ITEMS = [
  { name: "Work", path: "/work" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Ideas", path: "/ideas" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

export const SORT_OPTIONS = [
  { value: "-published_at", label: "Newest" },
  { value: "published_at", label: "Oldest" },
];

export const PAGE_SIZE_OPTIONS = [10, 20, 50];

export const API_ENDPOINTS = {
  IDEAS: import.meta.env.VITE_API_IDEAS,
};

export const DEFAULT_PARAMS = {
  page: 1,
  size: 10,
  sort: "-published_at",
};
