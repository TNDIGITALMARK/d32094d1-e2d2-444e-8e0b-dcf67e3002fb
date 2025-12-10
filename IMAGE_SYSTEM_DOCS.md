# Image System Documentation

Complete guide to using images across the Carl Shawn Watkins website.

## Table of Contents

1. [Overview](#overview)
2. [Directory Structure](#directory-structure)
3. [Components](#components)
4. [Usage Examples](#usage-examples)
5. [Image Upload](#image-upload)
6. [Best Practices](#best-practices)
7. [API Reference](#api-reference)

---

## Overview

The image system provides:

- ✅ **Optimized Loading**: Automatic Next.js Image optimization with lazy loading
- ✅ **Responsive Images**: Multiple sizes generated automatically
- ✅ **Lazy Loading**: Images load as they enter viewport
- ✅ **Placeholder**: Loading skeletons while images load
- ✅ **Error Handling**: Graceful fallbacks for missing images
- ✅ **Upload System**: Built-in API for image uploads
- ✅ **Gallery Components**: Interactive lightbox galleries
- ✅ **Accessibility**: Proper alt text and ARIA labels

---

## Directory Structure

```
public/images/
├── hero/           # Hero section backgrounds (1920x1080px+)
├── team/           # Team member photos (400x400px+)
├── services/       # Service images (800x600px)
├── testimonials/   # Client photos (200x200px or 400x400px)
├── gallery/        # Portfolio and gallery images
└── uploads/        # User-uploaded images (dynamic)
```

### File Naming Conventions

- Use lowercase with hyphens: `leadership-consulting.jpg`
- Be descriptive: `carl-watkins-speaking-event.jpg`
- Include context: `testimonial-sarah-mitchell.jpg`

### Recommended Formats

- **Photos**: `.jpg` or `.webp` (best compression)
- **Graphics with transparency**: `.png`
- **Logos and icons**: `.svg` (vector, scalable)

---

## Components

### 1. OptimizedImage

Base image component with smart defaults.

```tsx
import { OptimizedImage } from '@/components/ui/optimized-image'

<OptimizedImage
  src="/images/hero/consulting.jpg"
  alt="Leadership consulting session"
  width={1920}
  height={1080}
  aspectRatio="video"
  hoverZoom={true}
  showPlaceholder={true}
  overlay={false}
  caption="Executive team workshop"
/>
```

**Props:**
- `src` (string, required): Image path
- `alt` (string, required): Alt text for accessibility
- `width` (number, required): Image width
- `height` (number, required): Image height
- `aspectRatio` ('square' | 'video' | 'portrait' | 'landscape' | string): Container aspect ratio
- `objectFit` ('cover' | 'contain' | 'fill'): How image fills container
- `hoverZoom` (boolean): Enable zoom effect on hover
- `showPlaceholder` (boolean): Show loading skeleton
- `overlay` (boolean): Add gradient overlay
- `rounded` ('none' | 'sm' | 'default' | 'lg' | 'full'): Border radius
- `caption` (string): Image caption text

### 2. ProfileImage

Circular profile photos with border.

```tsx
import { ProfileImage } from '@/components/ui/optimized-image'

<ProfileImage
  src="/images/team/carl-watkins.jpg"
  alt="Carl Shawn Watkins"
  width={200}
  height={200}
/>
```

**Features:**
- Always circular (rounded-full)
- Purple border from brand colors
- Square aspect ratio (1:1)

### 3. HeroImage

Large hero/banner images with overlay support.

```tsx
import { HeroImage } from '@/components/ui/optimized-image'

<HeroImage
  src="/images/hero/leadership-background.jpg"
  alt="Leadership transformation"
  fill
  priority
  overlay={true}
/>
```

**Features:**
- Priority loading (loads immediately)
- Overlay gradient for text readability
- Optimized for hero sections

### 4. CardImage

Service card images with hover effects.

```tsx
import { CardImage } from '@/components/ui/optimized-image'

<CardImage
  src="/images/services/coaching.jpg"
  alt="Executive coaching"
  width={800}
  height={600}
  aspectRatio="landscape"
/>
```

**Features:**
- Default hover zoom
- Landscape aspect ratio
- Perfect for cards and grid layouts

### 5. ImageGallery

Interactive gallery with lightbox viewer.

```tsx
import { ImageGallery } from '@/components/ui/image-gallery'

const images = [
  {
    src: '/images/gallery/workshop-1.jpg',
    alt: 'Leadership workshop',
    caption: 'Annual leadership summit 2024',
    width: 1920,
    height: 1080
  },
  // ... more images
]

<ImageGallery
  images={images}
  columns={3}
  aspectRatio="landscape"
  gap="md"
  enableLightbox={true}
/>
```

**Features:**
- Click to open lightbox
- Keyboard navigation (Arrow keys, Escape)
- Image counter
- Captions
- Responsive columns

### 6. ImageGrid

Simple grid layout without lightbox.

```tsx
import { ImageGrid } from '@/components/ui/image-gallery'

<ImageGrid
  images={images}
  columns={4}
  aspectRatio="square"
  gap="sm"
/>
```

### 7. MasonryGrid

Pinterest-style cascading layout.

```tsx
import { MasonryGrid } from '@/components/ui/image-gallery'

<MasonryGrid
  images={images}
  columns={3}
  gap="md"
/>
```

---

## Usage Examples

### Adding Images to Existing Components

#### Hero Component

```tsx
<Hero
  heading="Transform Your Leadership"
  subheading="Embrace vulnerability as strength"
  ctaText="Get Started"
  ctaLink="/contact"
  backgroundStyle="image"
  backgroundImage="/images/hero/leadership-hero.jpg"
  backgroundImageAlt="Professional consulting environment"
/>
```

#### ServiceCard Component

```tsx
<ServiceCard
  image="/images/services/coaching.jpg"
  imageAlt="One-on-one executive coaching"
  title="Executive Coaching"
  description="Personalized guidance for legal leaders"
  link="/coaching"
/>

// Or use icon instead of image
<ServiceCard
  icon={Users}
  title="Leadership Consulting"
  description="Transform your firm's culture"
  link="/consulting"
/>
```

#### Testimonial Component

```tsx
<Testimonial
  quote="Carl helped me rediscover my passion for law"
  author="Sarah Mitchell"
  role="Managing Partner"
  company="Mitchell & Associates"
  image="/images/testimonials/sarah-mitchell.jpg"
  imageAlt="Sarah Mitchell headshot"
/>
```

### Creating Custom Image Sections

```tsx
// Team Section with Profile Images
<section className="section bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-center mb-12">Meet the Team</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {teamMembers.map((member) => (
        <div key={member.name} className="text-center">
          <ProfileImage
            src={member.image}
            alt={member.name}
            width={200}
            height={200}
          />
          <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
          <p className="text-muted-foreground">{member.role}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

---

## Image Upload

### Using the Upload API

```typescript
import { uploadImage } from '@/lib/image-utils'

const handleUpload = async (file: File) => {
  const result = await uploadImage(file)

  if (result.success) {
    console.log('Image uploaded:', result.url)
    // result.url will be: /images/uploads/filename-timestamp.jpg
  } else {
    console.error('Upload failed:', result.error)
  }
}
```

### ImageUpload Component

```tsx
import { ImageUpload } from '@/components/ui/image-upload'

<ImageUpload
  onUploadComplete={(url) => {
    console.log('Uploaded to:', url)
  }}
  onError={(error) => {
    console.error('Upload error:', error)
  }}
  maxSizeInMB={10}
  allowedFormats={['image/jpeg', 'image/png', 'image/webp']}
  preview={true}
/>
```

### Multi-Image Upload

```tsx
import { MultiImageUpload } from '@/components/ui/image-upload'

<MultiImageUpload
  onUploadComplete={(urls) => {
    console.log('Uploaded images:', urls)
  }}
  maxImages={10}
/>
```

---

## Best Practices

### 1. Image Optimization

```bash
# Before uploading, optimize images:
# - Use tools like TinyPNG, ImageOptim, or Squoosh
# - Target file sizes:
#   - Thumbnails: < 50KB
#   - Cards: < 200KB
#   - Hero: < 500KB
# - Use WebP format when possible
```

### 2. Accessibility

Always provide descriptive alt text:

```tsx
// ❌ Bad
<OptimizedImage src="/image.jpg" alt="Image" />

// ✅ Good
<OptimizedImage
  src="/team/carl-watkins.jpg"
  alt="Carl Shawn Watkins presenting at legal conference"
/>
```

### 3. Responsive Images

Let Next.js handle responsive sizes:

```tsx
// Next.js automatically generates:
// - Multiple sizes (640w, 750w, 828w, 1080w, 1200w, 1920w)
// - WebP versions
// - Proper srcset attributes

<OptimizedImage
  src="/images/hero.jpg"
  alt="Hero image"
  width={1920}
  height={1080}
  // Next.js handles the rest!
/>
```

### 4. Performance

```tsx
// Use priority for above-the-fold images
<HeroImage
  src="/images/hero.jpg"
  alt="Hero"
  fill
  priority  // ← Loads immediately
/>

// Lazy load everything else (default behavior)
<CardImage
  src="/images/service.jpg"
  alt="Service"
  width={800}
  height={600}
  // Loads when near viewport
/>
```

### 5. Error Handling

The OptimizedImage component automatically handles errors:

```tsx
// If image fails to load, shows placeholder with error message
<OptimizedImage
  src="/images/might-not-exist.jpg"
  alt="Example"
  width={800}
  height={600}
  // Automatically shows error UI if image fails
/>
```

---

## API Reference

### Image Upload API

**Endpoint:** `POST /api/upload-image`

**Request:**
```typescript
const formData = new FormData()
formData.append('image', file)

const response = await fetch('/api/upload-image', {
  method: 'POST',
  body: formData
})
```

**Response:**
```json
{
  "success": true,
  "url": "/images/uploads/filename-1234567890.jpg",
  "filename": "filename-1234567890.jpg",
  "size": 123456,
  "type": "image/jpeg"
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "File size exceeds 10MB limit"
}
```

### List Uploaded Images

**Endpoint:** `GET /api/upload-image`

**Response:**
```json
{
  "images": [
    {
      "filename": "image-1.jpg",
      "url": "/images/uploads/image-1.jpg"
    }
  ]
}
```

---

## Troubleshooting

### Images not loading?

1. Check file path (should be `/images/...`, not `images/...`)
2. Verify file exists in `public/images/`
3. Check file permissions
4. Clear Next.js cache: `rm -rf .next`

### Images too large?

1. Optimize before upload (use TinyPNG or similar)
2. Use appropriate dimensions (don't upload 4K for thumbnails)
3. Consider WebP format for better compression

### Upload failing?

1. Check file size (max 10MB by default)
2. Verify file format (JPEG, PNG, WebP, GIF allowed)
3. Check server logs in console
4. Ensure `public/images/uploads` directory exists

---

## Examples in Action

Visit `/examples/images` to see all components in action with live examples and code snippets.

---

## Quick Reference

| Component | Use Case | Size Recommendation |
|-----------|----------|---------------------|
| HeroImage | Hero backgrounds | 1920x1080px+ |
| ProfileImage | Team photos, avatars | 400x400px |
| CardImage | Service cards, grid items | 800x600px |
| OptimizedImage | General purpose | Varies |
| ImageGallery | Portfolio, photo galleries | 1200x800px |

| Format | Best For | Compression |
|--------|----------|-------------|
| .jpg | Photos, natural images | Excellent |
| .webp | All images (modern) | Best |
| .png | Graphics, transparency | Good |
| .svg | Icons, logos | Vector (smallest) |

---

For more help, consult:
- Next.js Image documentation: https://nextjs.org/docs/api-reference/next/image
- Image optimization guide: https://web.dev/fast/#optimize-your-images
