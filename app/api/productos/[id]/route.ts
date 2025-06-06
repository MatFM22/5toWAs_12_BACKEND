import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// Obtener por ID
export async function GET(req: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  const producto = await prisma.producto.findUnique({
    where: { id },
    include: { categoria: true },
  })
  if (!producto) return NextResponse.json({ error: 'Producto no encontrado' }, { status: 404 })
  return NextResponse.json(producto)
}

// Actualizar por ID
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  const data = await req.json()
  try {
    const productoActualizado = await prisma.producto.update({
      where: { id },
      data,
    })
    return NextResponse.json(productoActualizado)
  } catch (error) {
    return NextResponse.json({ error: 'Error al actualizar producto' }, { status: 500 })
  }
}

// Eliminar por ID
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  try {
    const productoEliminado = await prisma.producto.delete({
      where: { id },
    })
    return NextResponse.json(productoEliminado)
  } catch (error) {
    return NextResponse.json({ error: 'Error al eliminar producto' }, { status: 500 })
  }
}
