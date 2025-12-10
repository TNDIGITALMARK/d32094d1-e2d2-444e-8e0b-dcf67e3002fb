import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface HeroProps {
  preHeading?: string
  heading: string
  subheading: string
  ctaText: string
  ctaLink: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
  backgroundStyle?: 'gradient' | 'solid' | 'image'
  className?: string
}

export default function Hero({
  preHeading,
  heading,
  subheading,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundStyle = 'gradient',
  className = ''
}: HeroProps) {
  const bgClass = backgroundStyle === 'gradient'
    ? 'gradient-purple text-white'
    : backgroundStyle === 'solid'
    ? 'bg-secondary text-foreground'
    : 'bg-muted text-foreground'

  return (
    <section className={`relative ${bgClass} pt-32 pb-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {preHeading && (
            <p className="text-lg md:text-xl font-medium mb-4 opacity-90">
              {preHeading}
            </p>
          )}
          <h1 className="mb-6">
            {heading}
          </h1>
          <p className="lead mb-8 opacity-90">
            {subheading}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={ctaLink}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl font-semibold text-lg"
            >
              {ctaText}
              <ArrowRight size={20} />
            </Link>
            {secondaryCtaText && secondaryCtaLink && (
              <Link
                href={secondaryCtaLink}
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-current rounded-lg hover:bg-white hover:bg-opacity-10 transition-all font-semibold text-lg"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
