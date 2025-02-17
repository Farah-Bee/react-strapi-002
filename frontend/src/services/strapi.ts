import axios from "axios";
const API_URL = "http://localhost:1337/api";

// Axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to fetch articles
export const fetchArticles = async () => {
  try {
    const response = await api.get("/articles?populate=*"); // Ensure we get the image field
    if (!response.data || !response.data.data) {
      throw new Error("Invalid API response format.");
    }

    console.log("Fetched raw data:", response.data);
    return response.data.data.map((item: any) => ({
      id: item.id,
      documentId: item.documentId,
      Title: item.Title,
      Slug: item.Slug,
      Content: item.Content || [], // Ensure content is fetched
      Image: item.Image ? item.Image : null,
    }));
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
};
