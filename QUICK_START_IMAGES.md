# Quick Start: Adding Images to Your Site

## 🚀 3-Minute Setup

### Step 1: Add Images to Public Folder

Place your images in the appropriate directory:

```
public/images/
├── hero/              # Background images (1920x1080px)
├── services/          # Service card images (800x600px)
├── testimonials/      # Client photos (400x400px)
└── team/             # Team member photos (400x400px)
```

### Step 2: Update Your Components

#### Add Hero Background Image

In `src/app/page.tsx`, update the Hero component:

```tsx
<Hero
  preHeading="We see you. We understand your struggle."
  heading="Authentic Leadership in Law..."
  subheading="Transform from overwhelmed..."
  ctaText="Schedule a Consultation"
  ctaLink="#contact"
  backgroundStyle="image"  // ← Change from "gradient" to "image"
  backgroundImage="/images/hero/leadership-background.jpg"  // ← Add this
  backgroundImageAlt="Professional leadership consulting"   // ← Add this
/>
```

#### Add Service Images

Update ServiceCard components:

```tsx
<ServiceCard
  image="/images/services/coaching.jpg"  // ← Add this
  imageAlt="Executive coaching session"  // ← Add this
  icon={Target}  // ← Keep icon as fallback (optional)
  title="Executive Coaching"
  description="One-on-one guidance..."
  link="/coaching"
/>
```

#### Add Testimonial Photos

Update Testimonial components:

```tsx
<Testimonial
  quote="Carl helped me rediscover..."
  author="Sarah Mitchell"
  role="Managing Partner"
  company="Mitchell & Associates"
  image="/images/testimonials/sarah-mitchell.jpg"  // ← Add this
  imageAlt="Sarah Mitchell"                        // ← Add this
/>
```

### Step 3: Test It Out

1. Start the dev server: `npm run dev`
2. Visit your site
3. Images should load with optimization and lazy loading

---

## 🎨 Common Use Cases

### 1. Create a Gallery Page

```tsx
import { ImageGallery } from '@/components/ui/image-gallery'

const galleryImages = [
  { src: '/images/gallery/event-1.jpg', alt: 'Leadership summit', caption: '2024 Annual Summit' },
  { src: '/images/gallery/event-2.jpg', alt: 'Workshop session', caption: 'Team Workshop' },
  { src: '/images/gallery/event-3.jpg', alt: 'Speaking event', caption: 'Keynote Address' },
]

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Event Gallery</h1>
      <ImageGallery images={galleryImages} columns={3} enableLightbox />
    </div>
  )
}
```

### 2. Add Team Photos

```tsx
import { ProfileImage } from '@/components/ui/optimized-image'

const team = [
  { name: 'Carl Watkins', role: 'Founder', image: '/images/team/carl.jpg' },
  { name: 'Team Member', role: 'Coach', image: '/images/team/member.jpg' },
]

<section className="py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {team.map((member) => (
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

### 3. Upload Images from Admin Panel

```tsx
import { ImageUpload } from '@/components/ui/image-upload'

<ImageUpload
  onUploadComplete={(url) => {
    console.log('Image saved to:', url)
    // Save URL to database or state
  }}
  maxSizeInMB={10}
/>
```

---

## 📋 File Naming Guide

Use descriptive, lowercase names with hyphens:

- ✅ `carl-watkins-speaking-2024.jpg`
- ✅ `executive-coaching-session.jpg`
- ✅ `testimonial-sarah-mitchell.jpg`
- ❌ `IMG_1234.jpg`
- ❌ `photo.jpg`
- ❌ `Carl Watkins Photo.jpg` (no spaces)

---

## 🎯 Recommended Image Sizes

| Type | Size | Format | Max File Size |
|------|------|--------|---------------|
| Hero backgrounds | 1920x1080px | JPG/WebP | 500KB |
| Service cards | 800x600px | JPG/WebP | 200KB |
| Team photos | 400x400px | JPG/WebP | 100KB |
| Testimonials | 200x200px | JPG/WebP | 50KB |
| Gallery images | 1200x800px | JPG/WebP | 300KB |

---

## 🔧 Optimize Your Images

Before uploading, compress your images:

1. **Online Tools:**
   - TinyPNG: https://tinypng.com
   - Squoosh: https://squoosh.app
   - Compressor.io: https://compressor.io

2. **Desktop Apps:**
   - ImageOptim (Mac)
   - FileOptimizer (Windows)

3. **Convert to WebP:**
   - Squoosh (online)
   - cwebp (command line)

---

## ❓ Troubleshooting

**Images not showing?**
- Check file path starts with `/images/...`
- Verify file exists in `public/images/`
- Try clearing cache: `rm -rf .next && npm run dev`

**Images too slow?**
- Optimize/compress images before upload
- Use WebP format
- Check file sizes (see table above)

**Upload failing?**
- Max size is 10MB
- Allowed: JPG, PNG, WebP, GIF
- Check console for errors

---

## 📚 Full Documentation

For complete documentation, see `IMAGE_SYSTEM_DOCS.md`

For live examples, visit: `/examples/images`

---

## 🎉 You're Ready!

Your site now has:
- ✅ Optimized image loading
- ✅ Lazy loading for performance
- ✅ Responsive images
- ✅ Image upload capability
- ✅ Gallery components
- ✅ Error handling

Start adding images and watch your site come to life!
