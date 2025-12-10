'use client'

import { useState } from 'react'
import { OptimizedImage } from './optimized-image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface GalleryImage {
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
}

interface ImageGalleryProps {
  images: GalleryImage[]
  columns?: 2 | 3 | 4
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape'
  gap?: 'sm' | 'md' | 'lg'
  enableLightbox?: boolean
  className?: string
}

export function ImageGallery({
  images,
  columns = 3,
  aspectRatio = 'landscape',
  gap = 'md',
  enableLightbox = true,
  className,
}: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    if (enableLightbox) {
      setCurrentIndex(index)
      setLightboxOpen(true)
      // Prevent body scroll
      document.body.style.overflow = 'hidden'
    }
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = 'unset'
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') goToNext()
    if (e.key === 'ArrowLeft') goToPrevious()
  }

  const gapClass = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
  }[gap]

  const columnClass = `grid-cols-${columns}`

  return (
    <>
      {/* Gallery Grid */}
      <div
        className={cn(
          'grid',
          columnClass,
          gapClass,
          'md:grid-cols-' + columns,
          'sm:grid-cols-2',
          'grid-cols-1',
          className
        )}
      >
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => openLightbox(index)}
            className={cn(
              'cursor-pointer overflow-hidden rounded-lg',
              enableLightbox && 'hover:opacity-90 transition-opacity'
            )}
          >
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              width={image.width || 800}
              height={image.height || 600}
              aspectRatio={aspectRatio}
              hoverZoom={enableLightbox}
              caption={image.caption}
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {enableLightbox && lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close lightbox"
          >
            <X size={24} className="text-white" />
          </button>

          {/* Previous Button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute left-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} className="text-white" />
            </button>
          )}

          {/* Next Button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={32} className="text-white" />
            </button>
          )}

          {/* Image Container */}
          <div
            className="relative max-w-7xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <OptimizedImage
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              width={1920}
              height={1080}
              objectFit="contain"
              className="max-h-[85vh] w-auto"
              showPlaceholder
            />

            {/* Caption */}
            {images[currentIndex].caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-center">
                <p className="text-lg">{images[currentIndex].caption}</p>
              </div>
            )}

            {/* Counter */}
            {images.length > 1 && (
              <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                {currentIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

/**
 * Simple Image Grid without lightbox functionality
 */
interface ImageGridProps {
  images: GalleryImage[]
  columns?: 2 | 3 | 4
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape'
  gap?: 'sm' | 'md' | 'lg'
  className?: string
}

export function ImageGrid({
  images,
  columns = 3,
  aspectRatio = 'square',
  gap = 'md',
  className,
}: ImageGridProps) {
  const gapClass = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
  }[gap]

  return (
    <div className={cn('img-grid-' + columns, gapClass, className)}>
      {images.map((image, index) => (
        <div key={index} className="overflow-hidden rounded-lg">
          <OptimizedImage
            src={image.src}
            alt={image.alt}
            width={image.width || 800}
            height={image.height || 600}
            aspectRatio={aspectRatio}
            caption={image.caption}
          />
        </div>
      ))}
    </div>
  )
}

/**
 * Masonry Grid Layout (Pinterest-style)
 */
export function MasonryGrid({
  images,
  columns = 3,
  gap = 'md',
  className,
}: Omit<ImageGridProps, 'aspectRatio'>) {
  const gapClass = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
  }[gap]

  return (
    <div
      className={cn(
        'columns-1 md:columns-2 lg:columns-' + columns,
        gapClass,
        className
      )}
    >
      {images.map((image, index) => (
        <div key={index} className="break-inside-avoid mb-4">
          <OptimizedImage
            src={image.src}
            alt={image.alt}
            width={image.width || 800}
            height={image.height || 600}
            caption={image.caption}
            className="w-full"
          />
        </div>
      ))}
    </div>
  )
}
