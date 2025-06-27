import { ImageResponse } from 'next/og'

// This config enables static generation for this route
export const dynamic = 'force-static';

export function GET(request: Request) {
  // Use a default title since we can't rely on request.url in static export
  const title = 'Aditya Mandke';

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
        <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
          <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left">
            {title}
          </h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
