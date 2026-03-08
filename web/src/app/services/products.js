const BASE_URL = process.env.MEDUSA_API;
const API_KEY = process.env.MEDUSA_API_KEY;

export async function getProducts() {
  try {
    const response = await fetch(`${BASE_URL}/store/products`, {
      headers: {
        "x-publishable-api-key": API_KEY,
      },
    });
    const data = await response.json();
    return data.products || [];
  } catch (err) {
    console.error("Fetch error:", err);
    throw err;
  }
}
