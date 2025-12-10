'use client'

import Image, { ImageProps } from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface OptimizedImageProps extends Omit<ImageProps, 'onLoadingComplete'> {
  /**
   * Aspect ratio of the image container
   * @default undefined (uses natural aspect ratio)
   */
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape' | string
  /**
   * Object fit behavior
   * @default 'cover'
   */
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
  /**
   * Enable hover zoom effect
   * @default false
   */
  hoverZoom?: boolean
  /**
   * Show loading skeleton while image loads
   * @default true
   */
  showPlaceholder?: boolean
  /**
   * Overlay gradient (useful for hero images with text)
   * @default false
   */
  overlay?: boolean
  /**
   * Border radius style
   * @default 'default'
   */
  rounded?: 'none' | 'sm' | 'default' | 'lg' | 'full'
  /**
   * Image caption text
   */
  caption?: string
  /**
   * Container class name
   */
  containerClassName?: string
}

export function OptimizedImage({
  aspectRatio,
  objectFit = 'cover',
  hoverZoom = false,
  showPlaceholder = true,
  overlay = false,
  rounded = 'default',
  caption,
  containerClassName,
  className,
  alt,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const aspectRatioClass = aspectRatio
    ? aspectRatio.includes('/')
      ? `aspect-[${aspectRatio}]`
      : `aspect-${aspectRatio}`
    : undefined

  const roundedClass = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    default: 'rounded-lg',
    lg: 'rounded-2xl',
    full: 'rounded-full',
  }[rounded]

  const objectFitClass = objectFit === 'cover' ? 'object-cover' : `object-${objectFit}`

  return (
    <figure className={cn('relative w-full', containerClassName)}>
      <div
        className={cn(
          'relative overflow-hidden',
          aspectRatioClass,
          roundedClass,
          hoverZoom && 'group'
        )}
      >
        {/* Loading Placeholder */}
        {showPlaceholder && isLoading && !hasError && (
          <div className="absolute inset-0 bg-muted animate-pulse" />
        )}

        {/* Error State */}
        {hasError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <div className="text-center p-4">
              <svg
                className="mx-auto h-12 w-12 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="mt-2 text-sm text-muted-foreground">Failed to load image</p>
            </div>
          </div>
        ) : (
          <>
            {/* Image */}
            <Image
              alt={alt}
              className={cn(
                'w-full h-full',
                objectFitClass,
                hoverZoom && 'transition-transform duration-300 group-hover:scale-105',
                isLoading && 'opacity-0',
                !isLoading && 'opacity-100 transition-opacity duration-300',
                className
              )}
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false)
                setHasError(true)
              }}
              {...props}
            />

            {/* Overlay */}
            {overlay && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            )}
          </>
        )}
      </div>

      {/* Caption */}
      {caption && <figcaption className="img-caption">{caption}</figcaption>}
    </figure>
  )
}

/**
 * Profile Image Component - Circular avatar with border
 */
export function ProfileImage({
  className,
  ...props
}: Omit<OptimizedImageProps, 'rounded' | 'aspectRatio'>) {
  return (
    <OptimizedImage
      {...props}
      rounded="full"
      aspectRatio="square"
      className={cn('profile-img', className)}
    />
  )
}

/**
 * Hero Image Component - Large image with overlay support
 */
export function HeroImage({
  overlay = true,
  ...props
}: OptimizedImageProps) {
  return (
    <OptimizedImage
      {...props}
      overlay={overlay}
      priority
      hoverZoom={false}
    />
  )
}

/**
 * Card Image Component - Standard card image with hover effect
 */
export function CardImage({
  hoverZoom = true,
  aspectRatio = 'landscape',
  ...props
}: OptimizedImageProps) {
  return (
    <OptimizedImage
      {...props}
      hoverZoom={hoverZoom}
      aspectRatio={aspectRatio}
    />
  )
}
