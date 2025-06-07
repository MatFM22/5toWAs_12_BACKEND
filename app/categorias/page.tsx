// /app/categorias/page.tsx
'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function ListaCategorias() {
  const [categorias, setCategorias] = useState<any[]>([])

  const cargarCategorias = () => {
    fetch('/api/categorias')
      .then(res => res.json())
      .then(setCategorias)
  }

  useEffect(() => {
    cargarCategorias()
  }, [])

  const eliminarCategoria = async (id: number) => {
    if (confirm('¿Estás seguro de eliminar esta categoría?')) {
      await fetch(`/api/categorias/${id}`, { method: 'DELETE' })
      cargarCategorias()
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Lista de Categorías</h2>
        <Link href="/categorias/new" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Nueva Categoría</Link>
      </div>
      <table className="min-w-full border text-sm text-left">
        <thead className="bg-blue-100">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Nombre</th>
            <th className="border px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map(c => (
            <tr key={c.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{c.id}</td>
              <td className="border px-4 py-2">{c.nombre}</td>
              <td className="border px-4 py-2 space-x-2">
                <Link href={`/categorias/${c.id}/edit`} className="text-blue-600 hover:underline">Editar</Link>
                <button onClick={() => eliminarCategoria(c.id)} className="text-red-600 hover:underline">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
