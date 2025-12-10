# Image Directory Structure

This directory contains all static images used throughout the site.

## Directory Organization

- **hero/** - Hero section background images and large banner images
- **team/** - Team member photos and profile images
- **services/** - Service-related imagery and icons
- **testimonials/** - Client photos and testimonial avatars
- **gallery/** - Gallery and portfolio images
- **uploads/** - User-uploaded images (dynamic content)

## Image Guidelines

### File Naming Conventions
- Use lowercase with hyphens: `team-member-name.jpg`
- Be descriptive: `leadership-consulting-hero.jpg`
- Include dimensions if multiple sizes: `profile-thumbnail-200.jpg`

### Recommended Formats
- **Photos**: Use `.jpg` or `.webp` (smaller file sizes)
- **Graphics with transparency**: Use `.png`
- **Icons and logos**: Use `.svg` when possible

### Size Recommendations
- **Hero images**: 1920x1080px or larger
- **Profile images**: 400x400px minimum
- **Thumbnails**: 200x200px or 300x300px
- **Service cards**: 800x600px

### Optimization
All images should be optimized before upload:
- Compress images to reduce file size
- Use appropriate dimensions (don't upload 4K images for thumbnails)
- Next.js will automatically optimize images, but starting with reasonable sizes helps performance

## Usage in Components

```tsx
import { OptimizedImage } from '@/components/ui/optimized-image'

<OptimizedImage
  src="/images/hero/leadership-hero.jpg"
  alt="Leadership consulting session"
  width={1920}
  height={1080}
  priority
/>
```
