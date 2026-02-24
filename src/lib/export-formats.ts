export interface ExtractedStyles {
  colours: Array<{ hex: string; name: string; usage: string }>
  typography: Array<{ font: string; size: string; weight: string; usage: string }>
  spacing: Array<{ value: string; usage: string }>
  borders: Array<{ value: string; usage: string }>
  shadows: Array<{ value: string; usage: string }>
  layout: string
}

export function formatForStitch(prompt: string, styles: ExtractedStyles): string {
  const colourTokens = styles.colours
    .map((c) => `--colour-${c.name.toLowerCase().replace(/\s+/g, '-')}: ${c.hex};`)
    .join('\n')

  return `# Google Stitch — Design Specification

## Visual Design Tokens
\`\`\`css
${colourTokens}
\`\`\`

## Typography
${styles.typography.map((t) => `- **${t.usage}**: ${t.font}, ${t.size}, ${t.weight}`).join('\n')}

## Spacing System
${styles.spacing.map((s) => `- ${s.usage}: ${s.value}`).join('\n')}

## Layout
${styles.layout}

## Full Design Prompt
${prompt}

Build this design using a component-based approach. Match the exact colour values, typography, and spacing. Use CSS Grid/Flexbox for layout.`
}

export function formatForCursor(prompt: string, styles: ExtractedStyles): string {
  return `# Cursor AI — Build Instructions

## Design System
${styles.colours.map((c) => `- \`${c.hex}\` — ${c.name} (${c.usage})`).join('\n')}

## Typography
${styles.typography.map((t) => `- ${t.usage}: font-family: "${t.font}"; font-size: ${t.size}; font-weight: ${t.weight};`).join('\n')}

## Spacing
${styles.spacing.map((s) => `- ${s.usage}: ${s.value}`).join('\n')}

## Borders & Shadows
${styles.borders.map((b) => `- border: ${b.value} (${b.usage})`).join('\n')}
${styles.shadows.map((s) => `- box-shadow: ${s.value} (${s.usage})`).join('\n')}

## Layout Pattern
${styles.layout}

## Implementation
${prompt}

Use Tailwind CSS classes where possible. Follow Next.js App Router conventions. Use TypeScript. Components should be accessible with proper ARIA attributes.`
}

export function formatForAnima(prompt: string, styles: ExtractedStyles): string {
  return `# Anima — Design-to-Code Specification

## Colour Palette
${styles.colours.map((c) => `| ${c.name} | ${c.hex} | ${c.usage} |`).join('\n')}

## Typography Scale
${styles.typography.map((t) => `| ${t.usage} | ${t.font} | ${t.size} | ${t.weight} |`).join('\n')}

## Spacing Tokens
${styles.spacing.map((s) => `| ${s.usage} | ${s.value} |`).join('\n')}

## Visual Effects
### Borders
${styles.borders.map((b) => `- ${b.usage}: ${b.value}`).join('\n')}
### Shadows
${styles.shadows.map((s) => `- ${s.usage}: ${s.value}`).join('\n')}

## Layout
${styles.layout}

## Design Description
${prompt}

Generate responsive React components matching this specification exactly. Include hover states and transitions.`
}

export function formatGeneric(prompt: string, styles: ExtractedStyles): string {
  return `# Design Prompt

## Colour Palette
${styles.colours.map((c) => `- ${c.name} (${c.hex}) — ${c.usage}`).join('\n')}

## Typography
${styles.typography.map((t) => `- ${t.usage}: ${t.font}, ${t.size}, ${t.weight}`).join('\n')}

## Spacing
${styles.spacing.map((s) => `- ${s.usage}: ${s.value}`).join('\n')}

## Borders
${styles.borders.map((b) => `- ${b.usage}: ${b.value}`).join('\n')}

## Shadows
${styles.shadows.map((s) => `- ${s.usage}: ${s.value}`).join('\n')}

## Layout
${styles.layout}

## Description
${prompt}`
}
