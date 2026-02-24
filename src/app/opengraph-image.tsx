import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'PromptLens — Upload designs. Get perfect AI prompts.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1e293b 0%, #1e40af 50%, #7c3aed 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: 'rgba(255,255,255,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '36px',
              color: 'white',
              fontFamily: 'monospace',
            }}
          >
            🔍
          </div>
          <span
            style={{
              fontSize: '64px',
              fontWeight: 800,
              color: 'white',
              letterSpacing: '-2px',
            }}
          >
            PromptLens
          </span>
        </div>
        <p
          style={{
            fontSize: '32px',
            color: 'rgba(255,255,255,0.85)',
            textAlign: 'center',
            maxWidth: '700px',
            lineHeight: 1.4,
          }}
        >
          Upload designs. Get perfect AI prompts.
        </p>
      </div>
    ),
    { ...size }
  )
}
