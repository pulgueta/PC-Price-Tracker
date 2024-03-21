import { NextRequest } from 'next/server';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const GET = async (req: NextRequest) => {
	const { searchParams } = new URL(req.nextUrl);

	const hasQuery = searchParams.get('q') as string;

	const q =
		hasQuery.length >= 3
			? `Búsqueda: ${hasQuery}`
			: 'Búsqueda de productos';

	return new ImageResponse(
		(
			<div
				style={{
					display: 'flex',
					height: '100%',
					width: '100%',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
					backgroundImage:
						'linear-gradient(to bottom, #dbf4ff, #fff1f1)',
					fontSize: 64,
					letterSpacing: -2,
					fontWeight: 900,
					textAlign: 'center',
				}}
			>
				<strong>{q}</strong>
			</div>
		),
	);
};
