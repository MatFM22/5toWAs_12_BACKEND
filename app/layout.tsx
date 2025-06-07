import './globals.css'
import Link from 'next/link'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-800">
        <nav className="bg-blue-800 text-white p-4 flex items-center justify-between">
          {/* Izquierda */}
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:underline font-semibold">Inicio</Link>
            <Link href="/productos" className="hover:underline">Productos</Link>
            <Link href="/categorias" className="hover:underline">Categorías</Link>
          </div>

          {/* Derecha - Búsqueda */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Buscar producto..."
              className="p-2 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-800 px-4 py-2 rounded hover:bg-blue-100">
              Buscar
            </button>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto mt-8 p-4 bg-white rounded-xl shadow-md">
          {children}
        </main>
      </body>
    </html>
  )
}
