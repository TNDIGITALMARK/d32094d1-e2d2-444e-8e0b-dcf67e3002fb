import Link from 'next/link'
import { LucideIcon } from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import { CardImage } from '@/components/ui/optimized-image'

interface ServiceCardProps {
  icon?: LucideIcon
  image?: string
  imageAlt?: string
  title: string
  description: string
  link: string
  linkText?: string
}

export default function ServiceCard({
  icon: Icon,
  image,
  imageAlt,
  title,
  description,
  link,
  linkText = "Learn More"
}: ServiceCardProps) {
  return (
    <div className="group bg-card border border-border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image or Icon */}
      {image ? (
        <CardImage
          src={image}
          alt={imageAlt || title}
          width={800}
          height={600}
          aspectRatio="landscape"
          hoverZoom
        />
      ) : Icon ? (
        <div className="w-full p-8 pb-0">
          <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
            <Icon size={32} className="text-primary-foreground" />
          </div>
        </div>
      ) : null}

      {/* Content */}
      <div className="p-8">
        <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>
        <Link
          href={link}
          className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors group-hover:gap-3"
        >
          {linkText}
          <ArrowRight size={18} className="transition-transform" />
        </Link>
      </div>
    </div>
  )
}
