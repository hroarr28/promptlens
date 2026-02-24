# ShowDontTell Wireframes

Complete color mockups for the ShowDontTell web app — a tool that analyzes design screenshots and generates AI prompts for design tools like Google Stitch, Cursor, and Anima.

**Available formats:** PNG (lossless), JPEG (smaller file size)

## Image Files

All screens are available as both PNG and JPEG:
- `01-upload.png` / `01-upload.jpg` - Desktop upload screen
- `02-analyzing.png` / `02-analyzing.jpg` - Analysis in progress
- `03-results.png` / `03-results.jpg` - Results & export screen
- `04-dashboard.png` / `04-dashboard.jpg` - Dashboard/history
- `05-mobile-upload.png` / `05-mobile-upload.jpg` - Mobile upload

## Screens

### 01-upload.html
**Desktop upload screen** — main entry point for the workflow
- Drag & drop upload zone with file browser fallback
- Export format selector (Stitch, Cursor, Anima, Generic)
- Toggles for analysis options (typography, spacing, effects)
- Clear call-to-action: "Analyze Design"

### 02-analyzing.html
**Analysis in progress** — loading state while AI processes
- Spinner with status text
- Progressive step indicator showing:
  1. Images uploaded (complete)
  2. Analyzing design (active)
  3. Generating prompt (pending)
- Preview of uploaded images at bottom
- Sets expectations: "Claude Vision is extracting colours, typography, and layout patterns"

### 03-results.html
**Results & export screen** — where users review and copy prompts
- **Two-column layout:**
  - **Left sidebar**: Extracted design system (colours, typography, spacing, borders) — visual reference
  - **Main area**: Generated prompt with editable text
- Format tabs: Switch between Stitch, Cursor, Anima, Generic
- Toolbar: Edit, Download, Copy to Clipboard
- Source images preview at bottom
- All extracted values shown with hex codes, pixel values, font specs

### 04-dashboard.html
**Dashboard/history** — browsing past prompts
- Stats cards: Total prompts, most used format, remaining quota
- Filter bar: Search, format filter, date range, grid/list view toggle
- Prompt cards showing:
  - Preview image placeholder
  - Title (auto-generated or user-edited)
  - Metadata: timestamp, export format
  - Tags: extracted key features (font, colours, components)
  - Actions: View, Copy
- Grid layout (3 columns desktop)

### 05-mobile-upload.html
**Mobile upload** — responsive mobile version
- iPhone frame (390x844px) showing realistic mobile constraints
- Vertical layout with collapsible sections
- "Take Photo" option for mobile camera access
- Bottom action bar fixed to viewport (easy thumb reach)
- Generous touch targets (44px minimum)
- Single-column option rows

## Design Principles

### Layout
- **Desktop**: 12-column grid, max-width containers for readability
- **Mobile-first**: Responsive breakpoints, stacked layouts on small screens
- **Touch targets**: Minimum 44x44px for mobile buttons/toggles

### Visual Style
- **Blue brand color**: Primary #3B82F6, purple gradient accent (#3B82F6 → #8B5CF6)
- **Clean slate UI**: Subtle borders, soft shadows, generous whitespace
- **Professional SaaS aesthetic**: Modern, trustworthy, accessible
- **Consistent spacing**: 8px base unit (8, 12, 16, 24, 32, 48px)
- **Typography hierarchy**: 32px titles, 24px subtitles, 16px body, 14px labels, 12px metadata

### Components
- **Buttons**: Primary blue (#3B82F6), secondary white with border, 8-12px radius
- **Cards**: White background, 1px border (#e2e8f0), subtle shadows, 12px radius
- **Form elements**: 1px border (#e2e8f0), blue focus ring, consistent sizing
- **Upload zones**: Dashed border, gradient icon badges, hover states
- **Color palette**: Slate grays (#0f172a, #64748b, #f8fafc), blue accent (#3B82F6), purple gradient (#8B5CF6)

## User Flow

1. **Landing** (existing page.tsx) → User clicks "Get Started"
2. **Upload** (01-upload.html) → User drags screenshots, selects options, clicks "Analyze Design"
3. **Analyzing** (02-analyzing.html) → Loading state (15-30s) with progress steps
4. **Results** (03-results.html) → User reviews extracted design system, edits/copies prompt
5. **Dashboard** (04-dashboard.html) → User browses past prompts, can re-open/copy

## Key Decisions

### Why show extracted design system in sidebar?
- **Transparency**: Users see exactly what AI detected
- **Editing**: Easier to spot mistakes or missing values before copying prompt
- **Learning**: Users understand what makes a good prompt (colour precision, spacing consistency)

### Why tabs for export formats?
- **Single workflow**: Generate once, export multiple ways (no re-analysis needed)
- **Format comparison**: Users can see differences between Stitch syntax vs Cursor vs Generic
- **Upsell**: Free users might see Pro-only formats (future)

### Why grid view for dashboard?
- **Visual scanning**: Design work is visual — thumbnail previews help recognition
- **Compact**: More prompts visible at once than list view
- **Pattern recognition**: Users spot their own design patterns (e.g. "I always use blue accents")

### Why mobile camera option?
- **Real use case**: Users might photograph whiteboards, sketches, printed mockups
- **Convenience**: No need to screenshot → airdrop → upload on mobile

## Next Steps (for Builder)

1. Implement upload flow with drag & drop (react-dropzone)
2. Build Claude Vision API integration for analysis
3. Create prompt generator with format-specific templates
4. Add dashboard with Supabase storage for prompt history
5. Implement mobile-responsive layouts matching wireframes

## Notes

- All wireframes are static HTML/CSS — no JavaScript interactions yet
- Image placeholders use grey boxes (#e0e0e0) — replace with real screenshots in implementation
- Text content is realistic (not Lorem ipsum) to show actual copy tone
- Wireframes assume Pro plan (unlimited prompts) — adjust for Free tier UI if needed
