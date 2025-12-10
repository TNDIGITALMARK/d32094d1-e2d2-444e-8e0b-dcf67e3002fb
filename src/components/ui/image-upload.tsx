'use client'

import { useState, useRef, ChangeEvent } from 'react'
import { Upload, X, Image as ImageIcon, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { validateImage, formatFileSize, uploadImage } from '@/lib/image-utils'
import { OptimizedImage } from './optimized-image'

interface ImageUploadProps {
  onUploadComplete?: (url: string) => void
  onError?: (error: string) => void
  maxSizeInMB?: number
  allowedFormats?: string[]
  className?: string
  preview?: boolean
  multiple?: boolean
}

export function ImageUpload({
  onUploadComplete,
  onError,
  maxSizeInMB = 10,
  allowedFormats = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
  className,
  preview = true,
  multiple = false,
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [dragActive, setDragActive] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return

    const file = files[0] // Handle single file for now

    // Clear previous errors
    setError(null)

    // Validate file
    const validation = validateImage(file, { maxSizeInMB, allowedFormats })
    if (!validation.valid) {
      setError(validation.error || 'Invalid file')
      onError?.(validation.error || 'Invalid file')
      return
    }

    // Show preview
    if (preview) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setPreviewUrl(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }

    // Upload file
    setUploading(true)
    try {
      const result = await uploadImage(file)

      if (result.success && result.url) {
        onUploadComplete?.(result.url)
      } else {
        setError(result.error || 'Upload failed')
        onError?.(result.error || 'Upload failed')
        setPreviewUrl(null)
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Upload failed'
      setError(errorMessage)
      onError?.(errorMessage)
      setPreviewUrl(null)
    } finally {
      setUploading(false)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files)
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files)
    }
  }

  const clearPreview = () => {
    setPreviewUrl(null)
    setError(null)
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  const openFilePicker = () => {
    inputRef.current?.click()
  }

  return (
    <div className={cn('w-full', className)}>
      {/* Upload Area */}
      {!previewUrl ? (
        <div
          onClick={openFilePicker}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={cn(
            'relative border-2 border-dashed rounded-lg p-8 transition-all cursor-pointer',
            'hover:border-primary hover:bg-muted/50',
            dragActive ? 'border-primary bg-muted/50' : 'border-border',
            uploading && 'opacity-50 pointer-events-none'
          )}
        >
          <input
            ref={inputRef}
            type="file"
            accept={allowedFormats.join(',')}
            onChange={handleChange}
            multiple={multiple}
            className="hidden"
          />

          <div className="flex flex-col items-center justify-center text-center">
            {uploading ? (
              <>
                <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
                <p className="text-sm text-muted-foreground">Uploading...</p>
              </>
            ) : (
              <>
                <Upload className="w-12 h-12 text-muted-foreground mb-4" />
                <p className="text-lg font-medium text-foreground mb-2">
                  Click to upload or drag and drop
                </p>
                <p className="text-sm text-muted-foreground">
                  {allowedFormats.map((format) => format.split('/')[1].toUpperCase()).join(', ')}{' '}
                  up to {maxSizeInMB}MB
                </p>
              </>
            )}
          </div>
        </div>
      ) : (
        /* Preview */
        <div className="relative rounded-lg overflow-hidden border border-border">
          <OptimizedImage
            src={previewUrl}
            alt="Upload preview"
            width={800}
            height={600}
            aspectRatio="landscape"
            className="w-full"
          />

          {/* Remove Button */}
          <button
            onClick={clearPreview}
            className="absolute top-2 right-2 p-2 bg-destructive text-destructive-foreground rounded-full hover:bg-destructive/90 transition-colors shadow-lg"
            aria-label="Remove image"
          >
            <X size={20} />
          </button>

          {/* Upload Success Indicator */}
          {!uploading && (
            <div className="absolute bottom-2 left-2 right-2 bg-success text-success-foreground px-4 py-2 rounded-lg text-sm font-medium">
              Upload successful!
            </div>
          )}
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mt-4 p-4 bg-destructive/10 border border-destructive rounded-lg">
          <p className="text-sm text-destructive font-medium">{error}</p>
        </div>
      )}
    </div>
  )
}

/**
 * Multiple Image Upload Component
 */
interface MultiImageUploadProps extends Omit<ImageUploadProps, 'onUploadComplete' | 'multiple'> {
  onUploadComplete?: (urls: string[]) => void
  maxImages?: number
}

export function MultiImageUpload({
  onUploadComplete,
  onError,
  maxImages = 10,
  ...props
}: MultiImageUploadProps) {
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([])

  const handleSingleUpload = (url: string) => {
    const newUrls = [...uploadedUrls, url]
    setUploadedUrls(newUrls)
    onUploadComplete?.(newUrls)
  }

  const removeImage = (index: number) => {
    const newUrls = uploadedUrls.filter((_, i) => i !== index)
    setUploadedUrls(newUrls)
    onUploadComplete?.(newUrls)
  }

  return (
    <div className="space-y-4">
      {/* Upload Area */}
      {uploadedUrls.length < maxImages && (
        <ImageUpload
          {...props}
          onUploadComplete={handleSingleUpload}
          onError={onError}
          preview={false}
        />
      )}

      {/* Uploaded Images Grid */}
      {uploadedUrls.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {uploadedUrls.map((url, index) => (
            <div key={index} className="relative group">
              <OptimizedImage
                src={url}
                alt={`Upload ${index + 1}`}
                width={400}
                height={400}
                aspectRatio="square"
                className="w-full"
              />
              <button
                onClick={() => removeImage(index)}
                className="absolute top-2 right-2 p-2 bg-destructive text-destructive-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                aria-label="Remove image"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Upload Counter */}
      <p className="text-sm text-muted-foreground text-center">
        {uploadedUrls.length} / {maxImages} images uploaded
      </p>
    </div>
  )
}
