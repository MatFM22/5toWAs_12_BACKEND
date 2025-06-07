'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import FormWrapper from '../../components/FormWrapper'

export default function CrearProducto() {
  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState('')
  const [stock, setStock] = useState('')
  const [categoriaId, setCategoriaId] = useState('')
  const [categorias, setCategorias] = useState<any[]>([])
  const router = useRouter()

  useEffect(() => {
    fetch('/api/categorias').then(res => res.json()).then(setCategorias)
  }, [])

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!nombre || !precio || !stock || !categoriaId) {
      alert('Todos los campos son obligatorios')
      return
    }
    await fetch('/api/productos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, precio: parseFloat(precio), stock: parseInt(stock), categoriaId: parseInt(categoriaId) })
    })
    router.push('/productos')
  }

  return (
    <FormWrapper title="Crear Producto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} className="w-full p-2 border rounded" />
        <input type="number" placeholder="Precio" value={precio} onChange={e => setPrecio(e.target.value)} className="w-full p-2 border rounded" />
        <input type="number" placeholder="Stock" value={stock} onChange={e => setStock(e.target.value)} className="w-full p-2 border rounded" />
        <select value={categoriaId} onChange={e => setCategoriaId(e.target.value)} className="w-full p-2 border rounded">
          <option value="">Selecciona una categoría</option>
          {categorias.map(c => <option key={c.id} value={c.id}>{c.nombre}</option>)}
        </select>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Guardar</button>
      </form>
    </FormWrapper>
  )
}
