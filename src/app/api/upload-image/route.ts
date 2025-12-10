import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

/**
 * Image Upload API Route
 * Handles image uploads to the public/images/uploads directory
 */

const UPLOAD_DIR = join(process.cwd(), 'public', 'images', 'uploads')
const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']

export async function POST(request: NextRequest) {
  try {
    // Parse form data
    const formData = await request.formData()
    const file = formData.get('image') as File

    if (!file) {
      return NextResponse.json(
        { success: false, message: 'No file provided' },
        { status: 400 }
      )
    }

    // Validate file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        {
          success: false,
          message: `Invalid file type. Allowed types: ${ALLOWED_TYPES.join(', ')}`,
        },
        { status: 400 }
      )
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        {
          success: false,
          message: `File size exceeds ${MAX_FILE_SIZE / (1024 * 1024)}MB limit`,
        },
        { status: 400 }
      )
    }

    // Ensure upload directory exists
    if (!existsSync(UPLOAD_DIR)) {
      await mkdir(UPLOAD_DIR, { recursive: true })
    }

    // Generate safe filename
    const timestamp = Date.now()
    const originalName = file.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9.-]/g, '')
    const extension = originalName.split('.').pop()
    const nameWithoutExt = originalName.replace(`.${extension}`, '')
    const filename = `${nameWithoutExt}-${timestamp}.${extension}`

    // Convert file to buffer and save
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const filepath = join(UPLOAD_DIR, filename)

    await writeFile(filepath, buffer)

    // Return public URL
    const url = `/images/uploads/${filename}`

    return NextResponse.json({
      success: true,
      url,
      filename,
      size: file.size,
      type: file.type,
    })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : 'Upload failed',
      },
      { status: 500 }
    )
  }
}

// Optional: GET endpoint to list uploaded images
export async function GET() {
  try {
    const { readdir } = await import('fs/promises')

    if (!existsSync(UPLOAD_DIR)) {
      return NextResponse.json({ images: [] })
    }

    const files = await readdir(UPLOAD_DIR)
    const images = files
      .filter((file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
      .map((file) => ({
        filename: file,
        url: `/images/uploads/${file}`,
      }))

    return NextResponse.json({ images })
  } catch (error) {
    console.error('Error listing images:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to list images' },
      { status: 500 }
    )
  }
}
