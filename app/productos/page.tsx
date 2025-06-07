/*
'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function ListaProductos() {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    fetch('/api/productos')
      .then(res => res.json())
      .then(setProductos)
  }, [])

  const eliminarProducto = async (id: number) => {
    await fetch(`/api/productos/${id}`, { method: 'DELETE' })
    setProductos(productos.filter((p: any) => p.id !== id))
  }

  return (
    <div>
      <h1>Productos</h1>
      <Link href="/productos/new">+ Nuevo Producto</Link>
      <ul>
        {productos.map((p: any) => (
          <li key={p.id}>
            {p.nombre} - ${p.precio} - {p.categoria?.nombre}
            <Link href={`/productos/${p.id}/edit`} style={{ marginLeft: 10 }}>Editar</Link>
            <button onClick={() => eliminarProducto(p.id)} style={{ marginLeft: 10 }}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
*/

'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function ListaProductos() {
  const [productos, setProductos] = useState<any[]>([])

  const cargarProductos = () => {
    fetch('/api/productos')
      .then(res => res.json())
      .then(setProductos)
  }

  useEffect(() => {
    cargarProductos()
  }, [])

  const eliminarProducto = async (id: number) => {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      await fetch(`/api/productos/${id}`, { method: 'DELETE' })
      cargarProductos()
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Lista de Productos</h2>
        <Link href="/productos/new" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Nuevo Producto</Link>
      </div>
      <table className="min-w-full border text-sm text-left">
        <thead className="bg-blue-100">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Nombre</th>
            <th className="border px-4 py-2">Precio</th>
            <th className="border px-4 py-2">Stock</th>
            <th className="border px-4 py-2">Categoría</th>
            <th className="border px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(p => (
            <tr key={p.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{p.id}</td>
              <td className="border px-4 py-2">{p.nombre}</td>
              <td className="border px-4 py-2">S/ {p.precio}</td>
              <td className="border px-4 py-2">{p.stock}</td>
              <td className="border px-4 py-2">{p.categoria?.nombre || 'Sin categoría'}</td>
              <td className="border px-4 py-2 space-x-2">
                <Link href={`/productos/${p.id}/edit`} className="text-blue-600 hover:underline">Editar</Link>
                <button onClick={() => eliminarProducto(p.id)} className="text-red-600 hover:underline">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}