import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-gray-50">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Bienvenido al Sistema de Gestión
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Administra fácilmente tus productos y categorías desde un solo lugar.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-10">
        <div className="bg-white shadow-md rounded-lg p-6 w-72 hover:shadow-xl transition-shadow">
          <div className="text-5xl mb-4 text-indigo-500 text-center">📦</div>
          <h2 className="text-xl font-semibold mb-2 text-center">Productos</h2>
          <p className="text-gray-600 text-sm text-center mb-4">
            Crea, edita y gestiona todos los productos disponibles en tu inventario.
          </p>
          <Link
            href="/productos"
            className="block text-center bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
          >
            Ver productos
          </Link>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 w-72 hover:shadow-xl transition-shadow">
          <div className="text-5xl mb-4 text-emerald-500 text-center">🏷️</div>
          <h2 className="text-xl font-semibold mb-2 text-center">Categorías</h2>
          <p className="text-gray-600 text-sm text-center mb-4">
            Organiza tus productos por categorías personalizadas y flexibles.
          </p>
          <Link
            href="/categorias"
            className="block text-center bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600"
          >
            Ver categorías
          </Link>
        </div>
      </div>

      <section className="max-w-2xl text-center">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">¿Qué puedes hacer aquí?</h3>
        <ul className="text-gray-700 space-y-2 mt-4">
          <li>✅ Visualizar y filtrar tus productos rápidamente.</li>
          <li>✅ Crear nuevos productos y asignarlos a categorías.</li>
          <li>✅ Editar precios, stock y detalles en tiempo real.</li>
          <li>✅ Organizar productos por categorías para un mejor control.</li>
        </ul>
        <p className="mt-6 text-gray-500 text-sm">
          Este sistema está diseñado para facilitar la gestión de inventarios de forma eficiente y amigable.
        </p>
      </section>
    </main>
  );
}

