/**
 * Image Utility Functions
 * Helpers for image validation, optimization, and URL generation
 */

export interface ImageDimensions {
  width: number
  height: number
}

export interface ImageValidationOptions {
  maxSizeInMB?: number
  allowedFormats?: string[]
  minWidth?: number
  minHeight?: number
}

/**
 * Validate image file before upload
 */
export function validateImage(
  file: File,
  options: ImageValidationOptions = {}
): { valid: boolean; error?: string } {
  const {
    maxSizeInMB = 10,
    allowedFormats = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'],
    minWidth = 0,
    minHeight = 0,
  } = options

  // Check file type
  if (!allowedFormats.includes(file.type)) {
    return {
      valid: false,
      error: `Invalid file format. Allowed formats: ${allowedFormats.join(', ')}`,
    }
  }

  // Check file size
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024
  if (file.size > maxSizeInBytes) {
    return {
      valid: false,
      error: `File size exceeds ${maxSizeInMB}MB limit`,
    }
  }

  return { valid: true }
}

/**
 * Get image dimensions from file
 */
export function getImageDimensions(file: File): Promise<ImageDimensions> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    const url = URL.createObjectURL(file)

    img.onload = () => {
      URL.revokeObjectURL(url)
      resolve({
        width: img.width,
        height: img.height,
      })
    }

    img.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error('Failed to load image'))
    }

    img.src = url
  })
}

/**
 * Generate optimized image URL with Next.js Image loader
 */
export function getOptimizedImageUrl(
  src: string,
  width?: number,
  quality?: number
): string {
  if (!src) return ''

  // If it's already an external URL, return as-is
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src
  }

  // For local images, ensure they start with /
  const normalizedSrc = src.startsWith('/') ? src : `/${src}`

  return normalizedSrc
}

/**
 * Generate srcset for responsive images
 */
export function generateSrcSet(
  src: string,
  widths: number[] = [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
): string {
  return widths
    .map((width) => {
      const url = getOptimizedImageUrl(src, width)
      return `${url} ${width}w`
    })
    .join(', ')
}

/**
 * Get image placeholder (base64 blur)
 */
export async function getImagePlaceholder(
  src: string
): Promise<string | undefined> {
  // For production, you might want to generate these at build time
  // This is a simplified version
  try {
    // Return undefined for now - Next.js will use default blur placeholder
    return undefined
  } catch (error) {
    console.error('Failed to generate placeholder:', error)
    return undefined
  }
}

/**
 * Convert File to Base64 string
 */
export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result)
      } else {
        reject(new Error('Failed to convert file to base64'))
      }
    }

    reader.onerror = () => {
      reject(new Error('Failed to read file'))
    }

    reader.readAsDataURL(file)
  })
}

/**
 * Sanitize filename for safe storage
 */
export function sanitizeFilename(filename: string): string {
  // Remove path traversal attempts
  const basename = filename.replace(/^.*[\\\/]/, '')

  // Replace spaces and special characters
  const sanitized = basename
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9.-]/g, '')

  // Add timestamp to prevent collisions
  const timestamp = Date.now()
  const extension = sanitized.split('.').pop()
  const nameWithoutExt = sanitized.replace(`.${extension}`, '')

  return `${nameWithoutExt}-${timestamp}.${extension}`
}

/**
 * Image upload helper
 */
export async function uploadImage(
  file: File,
  endpoint: string = '/api/upload-image'
): Promise<{ success: boolean; url?: string; error?: string }> {
  try {
    // Validate image
    const validation = validateImage(file)
    if (!validation.valid) {
      return { success: false, error: validation.error }
    }

    // Create form data
    const formData = new FormData()
    formData.append('image', file)

    // Upload to API
    const response = await fetch(endpoint, {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      const error = await response.json()
      return { success: false, error: error.message || 'Upload failed' }
    }

    const result = await response.json()
    return { success: true, url: result.url }
  } catch (error) {
    console.error('Upload error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Upload failed',
    }
  }
}

/**
 * Calculate aspect ratio from dimensions
 */
export function calculateAspectRatio(width: number, height: number): string {
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b))
  const divisor = gcd(width, height)
  return `${width / divisor}/${height / divisor}`
}

/**
 * Format file size for display
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes'

  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}
