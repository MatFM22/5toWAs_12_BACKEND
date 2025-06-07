'use client'
import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import FormWrapper from '../../../components/FormWrapper'

export default function EditarProducto() {
  const { id } = useParams()
  const router = useRouter()

  const [producto, setProducto] = useState<any>(null)

  useEffect(() => {
    fetch(`/api/productos/${id}`)
      .then(res => res.json())
      .then(setProducto)
  }, [id])

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!producto.nombre || !producto.precio || !producto.stock) {
      return alert('Todos los campos son obligatorios')
    }

    await fetch(`/api/productos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...producto,
        precio: parseFloat(producto.precio),
        stock: parseInt(producto.stock)
      })
    })
    router.push('/productos')
  }

  if (!producto) return <p className="p-4">Cargando...</p>

  return (
    <FormWrapper title="Editar Producto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          placeholder="Nombre"
          value={producto.nombre}
          onChange={e => setProducto({ ...producto, nombre: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Precio"
          value={producto.precio}
          onChange={e => setProducto({ ...producto, precio: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Stock"
          value={producto.stock}
          onChange={e => setProducto({ ...producto, stock: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Actualizar</button>
      </form>
    </FormWrapper>
  )
}