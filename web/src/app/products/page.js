import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Our Products</h1>
        <ProductCard />
      </div>
    </main>
  );
}
