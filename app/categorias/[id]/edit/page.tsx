'use client'
import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import FormWrapper from '../../../components/FormWrapper'

export default function EditarCategoria() {
  const { id } = useParams()
  const router = useRouter()
  const [categoria, setCategoria] = useState<any>(null)

  useEffect(() => {
    fetch(`/api/categorias/${id}`)
      .then(res => res.json())
      .then(setCategoria)
  }, [id])

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!categoria.nombre.trim()) return alert('El nombre es obligatorio')

    await fetch(`/api/categorias/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre: categoria.nombre })
    })
    router.push('/categorias')
  }

  if (!categoria) return <p className="p-4">Cargando...</p>

  return (
    <FormWrapper title="Editar Categoría">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          placeholder="Nombre"
          value={categoria.nombre}
          onChange={e => setCategoria({ ...categoria, nombre: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Actualizar</button>
      </form>
    </FormWrapper>
  )
}