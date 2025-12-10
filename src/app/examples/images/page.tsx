import Navigation from '@/components/carl-watkins/Navigation'
import Footer from '@/components/carl-watkins/Footer'
import { OptimizedImage, ProfileImage, CardImage, HeroImage } from '@/components/ui/optimized-image'
import { ImageGallery, ImageGrid, MasonryGrid } from '@/components/ui/image-gallery'
import { Users, Camera, Image as ImageIcon } from 'lucide-react'

export default function ImageExamplesPage() {
  // Example image data (replace with actual images)
  const sampleImages = [
    {
      src: '/images/placeholder.svg',
      alt: 'Sample image 1',
      caption: 'Professional consulting session',
      width: 800,
      height: 600,
    },
    {
      src: '/images/placeholder.svg',
      alt: 'Sample image 2',
      caption: 'Leadership workshop',
      width: 800,
      height: 600,
    },
    {
      src: '/images/placeholder.svg',
      alt: 'Sample image 3',
      caption: 'Team collaboration',
      width: 800,
      height: 600,
    },
    {
      src: '/images/placeholder.svg',
      alt: 'Sample image 4',
      caption: 'Executive coaching',
      width: 800,
      height: 600,
    },
    {
      src: '/images/placeholder.svg',
      alt: 'Sample image 5',
      caption: 'Speaking engagement',
      width: 800,
      height: 600,
    },
    {
      src: '/images/placeholder.svg',
      alt: 'Sample image 6',
      caption: 'Conference presentation',
      width: 800,
      height: 600,
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero with Background Image Example */}
      <section className="relative bg-gradient-purple text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Image System Examples</h1>
            <p className="lead mb-8 opacity-90">
              Comprehensive image handling across the site with optimized loading, responsive layouts, and beautiful presentations
            </p>
          </div>
        </div>
      </section>

      {/* Basic Image Components */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">Basic Image Components</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* OptimizedImage */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Standard Image</h3>
              <OptimizedImage
                src="/images/placeholder.svg"
                alt="Standard optimized image"
                width={600}
                height={400}
                aspectRatio="landscape"
                caption="Optimized with lazy loading"
              />
            </div>

            {/* ProfileImage */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Profile Image</h3>
              <div className="flex justify-center">
                <ProfileImage
                  src="/images/placeholder.svg"
                  alt="Profile photo"
                  width={200}
                  height={200}
                />
              </div>
              <p className="text-center mt-4 text-muted-foreground">
                Circular with border styling
              </p>
            </div>

            {/* CardImage */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Card Image</h3>
              <CardImage
                src="/images/placeholder.svg"
                alt="Card image"
                width={600}
                height={400}
                caption="Hover to zoom"
              />
            </div>
          </div>

          {/* Aspect Ratios */}
          <h3 className="text-2xl font-semibold mb-6">Aspect Ratio Variations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <OptimizedImage
                src="/images/placeholder.svg"
                alt="Square aspect ratio"
                width={400}
                height={400}
                aspectRatio="square"
                caption="Square (1:1)"
              />
            </div>
            <div>
              <OptimizedImage
                src="/images/placeholder.svg"
                alt="Video aspect ratio"
                width={800}
                height={450}
                aspectRatio="video"
                caption="Video (16:9)"
              />
            </div>
            <div>
              <OptimizedImage
                src="/images/placeholder.svg"
                alt="Portrait aspect ratio"
                width={600}
                height={800}
                aspectRatio="portrait"
                caption="Portrait (3:4)"
              />
            </div>
            <div>
              <OptimizedImage
                src="/images/placeholder.svg"
                alt="Landscape aspect ratio"
                width={800}
                height={600}
                aspectRatio="landscape"
                caption="Landscape (4:3)"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery with Lightbox */}
      <section className="section bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Interactive Image Gallery</h2>
            <p className="lead max-w-3xl mx-auto">
              Click any image to open the lightbox viewer with keyboard navigation
            </p>
          </div>

          <ImageGallery images={sampleImages} columns={3} enableLightbox />
        </div>
      </section>

      {/* Image Grid (No Lightbox) */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Simple Image Grid</h2>
            <p className="lead max-w-3xl mx-auto">
              Standard grid layout without lightbox functionality
            </p>
          </div>

          <ImageGrid images={sampleImages.slice(0, 4)} columns={4} aspectRatio="square" />
        </div>
      </section>

      {/* Masonry Layout */}
      <section className="section bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Masonry Grid Layout</h2>
            <p className="lead max-w-3xl mx-auto">
              Pinterest-style cascading grid with varying heights
            </p>
          </div>

          <MasonryGrid images={sampleImages} columns={3} />
        </div>
      </section>

      {/* Usage Examples */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">How to Use Images</h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ImageIcon size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Add to Pages</h3>
                <p className="text-muted-foreground">
                  Use image props in Hero, ServiceCard, and Testimonial components
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Camera size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Upload Images</h3>
                <p className="text-muted-foreground">
                  Use the upload API to save images to /public/images/uploads
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Create Galleries</h3>
                <p className="text-muted-foreground">
                  Build image galleries with ImageGallery or ImageGrid components
                </p>
              </div>
            </div>

            {/* Code Examples */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Quick Start Examples</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">1. Add Hero Background Image</h4>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{`<Hero
  heading="Your Heading"
  subheading="Your subheading"
  ctaText="Get Started"
  ctaLink="/contact"
  backgroundStyle="image"
  backgroundImage="/images/hero/consulting.jpg"
  backgroundImageAlt="Leadership consulting"
/>`}</code>
                  </pre>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">2. Add Service Card Images</h4>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{`<ServiceCard
  image="/images/services/coaching.jpg"
  imageAlt="Executive coaching"
  title="Executive Coaching"
  description="One-on-one guidance..."
  link="/coaching"
/>`}</code>
                  </pre>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">3. Add Testimonial Photos</h4>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{`<Testimonial
  quote="Carl helped me transform..."
  author="Sarah Mitchell"
  role="Managing Partner"
  company="Mitchell & Associates"
  image="/images/testimonials/sarah.jpg"
  imageAlt="Sarah Mitchell"
/>`}</code>
                  </pre>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">4. Create Image Gallery</h4>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{`<ImageGallery
  images={[
    { src: '/images/gallery/1.jpg', alt: 'Workshop' },
    { src: '/images/gallery/2.jpg', alt: 'Speaking' },
    { src: '/images/gallery/3.jpg', alt: 'Team' }
  ]}
  columns={3}
  enableLightbox
/>`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
