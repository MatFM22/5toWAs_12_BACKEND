import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// Obtener todos los productos (incluye categoría)
export async function GET() {
  const productos = await prisma.producto.findMany({
    include: { categoria: true },
  })
  return NextResponse.json(productos)
}

// Crear nuevo producto
export async function POST(req: Request) {
  const data = await req.json()
  try {
    const nuevoProducto = await prisma.producto.create({
      data,
    })
    return NextResponse.json(nuevoProducto)
  } catch (error) {
    return NextResponse.json({ error: 'Error al crear producto' }, { status: 500 })
  }
}
