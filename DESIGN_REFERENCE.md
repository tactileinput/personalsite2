# Design Reference - Personal Site Reference

**Source**: https://personalsite-ten-omega.vercel.app/
**Document Date**: November 28, 2025

---

## 1. Typography & Fonts

### Font Stack
- **Primary Font**: Geist Sans (Google Fonts via Next.js font optimization)
- **Fallback Stack**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif`
- **Monospace Font**: Geist Mono (for code/technical content if needed)
- **Rendering**: `antialiased` class applied for smooth font rendering

### Font Sizing & Weights
- **Body Text**: Default system size (inherited)
- **Links**: Same as body text (no size override)
- **Font Weight**: Regular (400) - no bold or light variants used
- **Letter Spacing**: Default (not customized)
- **Line Height**: Default (not customized)

---

## 2. Colors

### Core Palette
| Element | Color | Hex Value | Notes |
|---------|-------|-----------|-------|
| Background | White | `#ffffff` | Full page background |
| Text/Foreground | Near-black | `#171717` | Primary text color |
| Links | Black | Inherits from foreground | Underlined |
| Links Hover | Browser default | N/A | Not customized |
| Shadows | Black with opacity | `rgba(0, 0, 0, 0.25)` | Used on image drop shadow |

### Color Scheme Summary
- **Theme**: Light mode only (no dark mode)
- **Approach**: Minimalist monochromatic
- **No Accent Colors**: Everything is white, black, or gray
- **No Hover Color Changes**: Links remain black on hover

---

## 3. Spacing & Layout

### Container Sizing
- **Viewport Height**: `min-h-screen` (minimum 100vh)
- **Max Width**: Unrestricted (full viewport width)
- **Outer Flex Container**: 
  - `display: flex`
  - `flex-direction: column`
  - `align-items: center`
  - `justify-content: center`
  - `gap: 24px` (`gap-6` in Tailwind)

### Margins & Padding
- **Body**: `margin: 0; padding: 0` (reset defaults)
- **HTML**: Default margins removed
- **Containers**: No padding applied to outer containers
- **Overall Offset**: Content is centered via flexbox, not margins

### Gap/Spacing Between Elements
- **Gap Between Image and Links**: `gap-6` = 24px (Tailwind default)
- **Link Separators**: " | " character with spaces
- **No Additional Padding**: Around text elements

### Paragraph/Text Spacing
- **Paragraph Text**: Single `<p>` tag, no multiple paragraphs
- **Line Breaks**: Within links separated by pipes " | "
- **Margins**: No custom margins on text elements

---

## 4. Layout Structure

### Main Layout Pattern
```
Viewport (100vh min)
└── Flex Container (flex-col, centered)
    ├── Image Container (384px × 384px)
    │   └── Image (object-cover)
    └── Links Container
        └── Paragraph with inline links
```

### Flexbox Configuration
- **Main Container**: `flex min-h-screen items-center justify-center`
- **Content Wrapper**: `flex flex-col items-center gap-6`
- **Image Container**: `w-96 h-96 overflow-hidden shadow-2xl`
- **Text Container**: `text-black text-center` (paragraph)

### Max-width Constraints
- **Page**: No max-width (uses full viewport)
- **Image**: Fixed 384px (96 units in Tailwind)
- **Text**: No explicit max-width (inherits from paragraph width)

### Responsive Behavior (Current)
- **Breakpoints Defined**: Tailwind defaults (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)
- **Currently Used**: None - layout is the same across all screen sizes
- **Potential Issue**: 384px image on screens < 400px may overflow

---

## 5. Borders & Visual Treatment

### Borders
- **No borders** on any elements (no border styles defined)

### Border Radius
- **No border-radius** applied to any elements
- **Images**: Sharp, square corners

### Shadows
- **Image Shadow**: `shadow-2xl` (Tailwind)
  - **Values**: `0 25px 50px -12px rgba(0, 0, 0, 0.25)`
  - **Effect**: Subtle drop shadow below image
- **No other shadows** on other elements

### Outlines
- **No outlines** used

---

## 6. Images

### Image Properties
- **Filename**: `artwork_atonal.u.png`
- **Dimensions**: 384px × 384px (square 1:1 ratio)
- **Container**: `<div class="w-96 h-96 overflow-hidden shadow-2xl">`
- **Image Tag Properties**:
  - `src="/artwork_atonal.u.png"`
  - `alt="Atonal artwork"`
  - `class="w-full h-full object-cover"`
- **Object Fit**: `object-cover` (fills container, may crop)
- **Overflow**: `overflow-hidden` (clips outside edges)

### Image Display
- **Sizing**: Fixed 384 × 384px on all screen sizes
- **Aspect Ratio**: 1:1 (square)
- **Quality**: Optimized via Next.js Image component (in deployment)
- **Alt Text**: "Atonal artwork"

---

## 7. Links & Text Styling

### Link Structure
```
Nina Protocol (https://www.ninaprotocol.com/releases/gabriel-hollis-genesis) | 
Bandcamp (https://tactileinput.bandcamp.com/track/genesis) | 
SoundCloud (https://soundcloud.com/tactileinput/genesis)
```

### Link Styling
- **Text Color**: Black (inherits `text-black`)
- **Text Decoration**: `underline`
- **Font Size**: Inherited from body
- **Font Family**: Geist Sans
- **Hover State**: Browser default (typically blue underline for visited state)
- **No Visited Styling**: Default browser styling applies

### Separator Styling
- **Character**: Pipe ` | `
- **Spacing**: Space before and after ` | `
- **Color**: Black (same as text)
- **Rendering**: Plain text characters, not special HTML entities

### Paragraph Container
- **Class**: `text-black text-center`
- **Text Alignment**: Center
- **Color**: Black (`#171717`)
- **Line Height**: Default

---

## 8. Navigation & Information Architecture

### Navigation Type
- **Style**: No traditional navigation menu
- **Type**: Inline text links
- **Location**: Below main image content
- **Visual Hierarchy**: Secondary to image (smaller, below)

### Link Destinations
1. **Nina Protocol**: https://www.ninaprotocol.com/releases/gabriel-hollis-genesis
2. **Bandcamp**: https://tactileinput.bandcamp.com/track/genesis
3. **SoundCloud**: https://soundcloud.com/tactileinput/genesis

### Navigation Pattern
- **All external links**: Open in current tab
- **No internal navigation**: Single-page layout
- **No page hierarchy**: All links at same level

---

## 9. Responsive Design

### Current Approach
- **Mobile-First**: Tailwind CSS mobile-first syntax
- **Breakpoints Available**: 
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
  - `2xl`: 1536px
- **Currently Implemented**: No responsive variants (same layout at all sizes)

### Potential Improvements
- **< 400px**: 384px image may overflow
- **Mobile Optimization**: Could reduce image size on small screens
- **Text Wrapping**: Links may wrap on very small screens
- **No Media Queries**: Currently relying on flexbox centering

### Current Behavior
- **Desktop (1024px+)**: Image 384×384px centered, links below
- **Tablet (768px-1023px)**: Same as desktop
- **Mobile (< 768px)**: Same as desktop (may overflow on < 400px)

---

## 10. Global Page Settings

### HTML/Body
- **Lang**: `en` (English)
- **Margin**: 0
- **Padding**: 0
- **Width**: 100%
- **Height**: 100%
- **Overflow**: `hidden` (content larger than viewport may be cut)
- **Background Color**: `#ffffff` (white)

### CSS Custom Properties
```css
--background: #ffffff;
--foreground: #171717;
--font-sans: var(--font-geist-sans);
--font-mono: var(--font-geist-mono);
```

### Theme System
- **Light Mode Only**: No dark mode toggle
- **CSS Variables**: Used for theming (could extend for multiple themes)
- **Tailwind Integration**: Using `@theme inline` directive (v4 syntax)

---

## 11. Technical Stack

### Framework & Libraries
- **Framework**: Next.js 16.0.5
- **React Version**: 19.2.0
- **CSS Framework**: Tailwind CSS v4
- **CSS Processing**: PostCSS with Tailwind plugin

### Font Loading
- **Method**: Next.js `next/font/google`
- **Fonts Imported**: Geist, Geist_Mono
- **Optimization**: Automatic by Next.js (preloading, self-hosting)
- **Variables**: 
  - `--font-geist-sans`: Applied to page
  - `--font-geist-mono`: Available for future use

### Styling Approach
- **Utility-First**: Tailwind CSS classes on elements
- **No CSS Modules**: Inline Tailwind classes
- **Global CSS**: `globals.css` with base styles and theme
- **No Component Library**: Pure HTML/React + Tailwind

---

## 12. Design Principles Observed

### Minimalism
- **White background**: Pure, clean
- **One focal point**: Large centered image
- **No unnecessary elements**: Just image + links
- **No decorations**: No gradients, patterns, or visual noise

### Focus & Hierarchy
- **Primary**: Large centered image (384×384px)
- **Secondary**: Text links below
- **Visual Weight**: Image dominates via size

### Alignment & Centering
- **Horizontal Centering**: Flexbox `justify-center`
- **Vertical Centering**: Flexbox `items-center` + `min-h-screen`
- **Text Centering**: `text-center` on links

### Spacing Consistency
- **Single Gap Value**: `gap-6` (24px) used throughout
- **No Excessive Padding**: Content-focused
- **Natural Breathing Room**: 24px sufficient separation

### Typography Simplicity
- **Single Font Family**: Geist Sans for all text
- **No Font Size Variations**: All text same size
- **No Weight Variations**: All regular weight
- **Clean & Readable**: System font stack fallbacks

### Color Discipline
- **Monochromatic**: Black, white, gray only
- **No Color Coding**: No visual indicators via color
- **High Contrast**: Black text on white background
- **Accessible**: Meets WCAG standards

---

## 13. Design Decisions & Patterns

### Why This Layout?
- **Centered Layout**: Draws attention to artwork (music release art)
- **Minimal Distractions**: Focus on the music/art
- **Links Below**: Secondary information (where to listen)
- **Fixed Image Size**: Consistent aspect ratio, predictable

### Why These Colors?
- **Pure White**: Cleanliness, simplicity, sophistication
- **Black Text**: Maximum contrast, readability
- **No Color Accents**: Lets artwork color speak
- **Gray Shadow**: Subtle depth without visual weight

### Why This Typography?
- **Geist Sans**: Modern, clean, premium feeling
- **System Font Fallback**: Fast loading, familiar
- **No Size Variation**: Egalitarian, all content equal
- **No Bold/Italic**: Consistency, minimalism

### Why These Link Patterns?
- **Underlined Text**: Clear indication of links
- **Pipe Separators**: Visual grouping, organized
- **External Links Only**: Focus on music platforms
- **No Button Style**: Blend into content (minimalism)

---

## 14. Implementation Checklist for Recreation

### Core Components
- [ ] White background (`bg-white`)
- [ ] Flexbox centered layout (`flex items-center justify-center min-h-screen`)
- [ ] 384×384px square image container (`w-96 h-96`)
- [ ] Image with object-cover (`object-cover`)
- [ ] Drop shadow on image (`shadow-2xl`)
- [ ] Text links below image (`text-black underline`)
- [ ] Link separators (" | ")
- [ ] Gap between image and links (`gap-6`)

### Typography
- [ ] Geist Sans font (import via `next/font/google`)
- [ ] Fallback system font stack
- [ ] `antialiased` rendering
- [ ] Black text color (`#171717`)

### Colors
- [ ] White background (`#ffffff`)
- [ ] Black text (`#171717`)
- [ ] Drop shadow with opacity

### Layout
- [ ] Full viewport height minimum
- [ ] Centered alignment (vertical + horizontal)
- [ ] Flex column direction
- [ ] 24px gap between sections

### Responsive
- [ ] Consider breakpoint for smaller screens (< 400px)
- [ ] Consider text wrapping on mobile

---

## 15. Future Enhancement Ideas (Not in Current Site)

### Potential Additions
- [ ] Add responsive breakpoints for mobile devices
- [ ] Add hover effects on links (color change, etc.)
- [ ] Add smooth transitions on interactive elements
- [ ] Add page transitions (fade in/out)
- [ ] Add multiple pages with navigation
- [ ] Add dark mode support
- [ ] Add animations on scroll or page load
- [ ] Optimize image container for mobile (smaller on < 400px)
- [ ] Add favicon customization
- [ ] Add Open Graph meta tags for social sharing

### Design Variations to Consider
- [ ] Alternate color schemes (dark mode, accent color themes)
- [ ] Different layout patterns (grid of images, list layout)
- [ ] Additional navigation (menu, breadcrumbs)
- [ ] Media query specific styling for mobile

---

## 16. File Structure Reference

```
personalsite2/
├── src/
│   └── app/
│       ├── layout.tsx          (Root layout with font imports)
│       ├── page.tsx            (Main page with image + links)
│       ├── globals.css         (Global styles, theme, tailwind)
│       └── favicon.ico
├── public/
│   └── artwork_atonal.u.png    (Square image asset)
├── package.json                (Dependencies)
├── next.config.ts              (Next.js configuration)
├── tailwind.config.ts          (Tailwind configuration)
├── tsconfig.json               (TypeScript configuration)
└── postcss.config.mjs          (PostCSS configuration)
```

---

## 17. CSS Custom Properties

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --font-sans: var(--font-geist-sans);  /* Populated by next/font */
  --font-mono: var(--font-geist-mono);  /* Populated by next/font */
}

/* CSS Variable Usage */
body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-sans);
}
```

---

## 18. Tailwind Classes Used

### Layout Classes
- `flex` - Flexbox display
- `min-h-screen` - Minimum viewport height
- `items-center` - Align items center (vertical in flex-col)
- `justify-center` - Justify content center (horizontal in flex-col)
- `flex-col` - Flex direction column
- `gap-6` - Gap between flex items (24px)
- `overflow-hidden` - Hide overflow content

### Sizing Classes
- `w-96` - Width 384px (96 * 4px)
- `h-96` - Height 384px
- `w-full` - Width 100% (image)
- `h-full` - Height 100% (image)

### Color Classes
- `bg-white` - Background color white
- `text-black` - Text color black

### Typography Classes
- `text-center` - Center text alignment
- `underline` - Add underline (on links)

### Visual Effects Classes
- `shadow-2xl` - Drop shadow (large)
- `object-cover` - Image object-fit

### Responsive Classes
- None currently used (all breakpoints have same styling)

---

## Notes for Implementation

1. **Image Sizing**: 384px is fixed - consider making responsive for screens < 400px
2. **Overflow**: Body `overflow: hidden` may cut content on very small screens
3. **Links**: Currently use browser default hover state - could enhance with custom colors
4. **No Dark Mode**: Currently light-only - could add with CSS variables
5. **Single Page**: No routing needed for current layout
6. **Meta Tags**: Consider adding Open Graph tags for social sharing
7. **Accessibility**: All text is readable, but could add focus states for keyboard navigation
8. **Performance**: Minimal assets, should load very quickly

---

**Last Updated**: November 28, 2025
**Reference Site**: https://personalsite-ten-omega.vercel.app/
