import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Techno WebShop</h1>
        <p className="text-lg text-gray-700">Welcome to our store!</p>
        <Link href="/products">
          <button className="bg-red-900 hover:bg-red-800 text-white font-bold py-2 px-4 rounded mt-15">
            See products
          </button>
        </Link>
      </div>
    </main>
  );
}
