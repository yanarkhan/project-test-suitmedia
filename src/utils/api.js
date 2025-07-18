import { API_ENDPOINTS, DEFAULT_PARAMS } from "./constants";

export const fetchIdeas = async (params = {}) => {
  const {
    page = DEFAULT_PARAMS.page,
    size = DEFAULT_PARAMS.size,
    sort = DEFAULT_PARAMS.sort,
  } = params;

  const queryParams = new URLSearchParams({
    "page[number]": page,
    "page[size]": size,
    "append[]": "small_image",
    sort: sort,
  });

  // Menambahkan medium_image sebagai append terpisah
  queryParams.append("append[]", "medium_image");

  try {
    const response = await fetch(`${API_ENDPOINTS.IDEAS}?${queryParams}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      mode: "cors",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching ideas:", error);
    throw error;
  }
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
