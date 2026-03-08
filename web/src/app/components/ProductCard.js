import { getProducts } from "../services/products";

export default async function ProductCard() {
  let products = [];
  try {
    products = await getProducts();
  } catch (err) {
    console.error("Failed to load products:", err);
  }

  return (
    <div>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
          </div>
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
}
