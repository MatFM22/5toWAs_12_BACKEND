// /app/categorias/page.tsx
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import FormWrapper from '../../components/FormWrapper'

export default function NuevaCategoria() {
  const [nombre, setNombre] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!nombre.trim()) return alert('El nombre es obligatorio')

    await fetch('/api/categorias', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre })
    })
    router.push('/categorias')
  }

  return (
    <FormWrapper title="Nueva Categoría">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          placeholder="Nombre"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Guardar</button>
      </form>
    </FormWrapper>
  )
}
