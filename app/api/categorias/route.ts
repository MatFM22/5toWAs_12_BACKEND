
import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// Obtener todas las categorías (con sus productos)
export async function GET() {
  const categorias = await prisma.categoria.findMany({
    include: { productos: true },
  })
  return NextResponse.json(categorias)
}

// Crear nueva categoría
export async function POST(req: Request) {
  const data = await req.json()
  try {
    const nuevaCategoria = await prisma.categoria.create({
      data,
    })
    return NextResponse.json(nuevaCategoria)
  } catch (error) {
    return NextResponse.json({ error: 'Error al crear categoría' }, { status: 500 })
  }
}
