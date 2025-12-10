/**
 * Image Components
 * Centralized exports for easy importing
 */

// Base image components
export {
  OptimizedImage,
  ProfileImage,
  HeroImage,
  CardImage,
} from './optimized-image'

// Gallery components
export {
  ImageGallery,
  ImageGrid,
  MasonryGrid,
  type GalleryImage,
} from './image-gallery'

// Upload components
export {
  ImageUpload,
  MultiImageUpload,
} from './image-upload'

/**
 * Usage Examples:
 *
 * // Import what you need
 * import { OptimizedImage, ProfileImage, ImageGallery } from '@/components/ui'
 *
 * // Or import from specific files
 * import { OptimizedImage } from '@/components/ui/optimized-image'
 * import { ImageGallery } from '@/components/ui/image-gallery'
 */
