import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  const categoria = await prisma.categoria.findUnique({
    where: { id },
    include: { productos: true },
  })
  if (!categoria) return NextResponse.json({ error: 'Categoría no encontrada' }, { status: 404 })
  return NextResponse.json(categoria)
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  const data = await req.json()
  try {
    const categoriaActualizada = await prisma.categoria.update({
      where: { id },
      data,
    })
    return NextResponse.json(categoriaActualizada)
  } catch (error) {
    return NextResponse.json({ error: 'Error al actualizar categoría' }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  try {
    const categoriaEliminada = await prisma.categoria.delete({
      where: { id },
    })
    return NextResponse.json(categoriaEliminada)
  } catch (error) {
    return NextResponse.json({ error: 'Error al eliminar categoría' }, { status: 500 })
  }
}