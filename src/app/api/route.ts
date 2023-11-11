import { NextResponse } from 'next/server'

import prisma from '../prisma'

export async function GET() {
	const identifiers = await prisma.alphaAccessRequest.count()

	return NextResponse.json({
		count: identifiers
	})
}

export async function POST(request: Request) {
	const body = await request.json()

	const { identifier } = body

	if (!identifier) {
		return NextResponse.json({
			error: 'No identifier provided'
		})
	}

	const createdRequest = await prisma.alphaAccessRequest.upsert({
		where: {
			identifier
		},
		update: {},
		create: {
			identifier
		}
	})

	if (!createdRequest) {
		return NextResponse.json({
			error: 'Request not created'
		})
	}

	const id = createdRequest.id
	const count = await prisma.alphaAccessRequest.count()

	return NextResponse.json({ id, count })
}
