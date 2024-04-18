import { NextResponse, type NextRequest } from 'next/server';

import translations from '@/i18n/es.json';

export const POST = async (req: NextRequest) => {
	const { searchParams } = new URL(req.nextUrl);

	const { categories, responses } = translations;

	const q = searchParams.get('q') as string;
	const category = searchParams.get('category') as string;
	const page = Number(searchParams.get('page')) || 0;

	const itemsPerPage = 12;
	const startIndex = page * itemsPerPage;
	const endIndex = (page + 1) * itemsPerPage;

	switch (category) {
		case categories.cpu.value:
			const cpuData = (await import('@/data/json/cpu.json')).default;

			const cpus = cpuData
				.filter((val) =>
					val.name.toLowerCase().includes(q.toLowerCase()),
				)
				.slice(startIndex, endIndex);

			return NextResponse.json(cpus, { status: 200 });

		case categories.gpu.value:
			const gpuData = (await import('@/data/json/video-card.json'))
				.default;

			const pattern = new RegExp(q.split(' ').join('|'), 'i');

			const gpus = gpuData
				.filter((val) => pattern.test(val.name))
				.slice(startIndex, endIndex);

			return NextResponse.json(gpus, { status: 200 });

		default:
			return NextResponse.json(responses['endpoint.products'].notFound, {
				status: 404,
			});
	}
};
