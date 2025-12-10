import { Quote } from 'lucide-react'

interface TestimonialProps {
  quote: string
  author: string
  role: string
  company?: string
}

export default function Testimonial({ quote, author, role, company }: TestimonialProps) {
  return (
    <div className="bg-white border border-border rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
      <Quote size={40} className="text-primary mb-4 opacity-30" />
      <p className="text-lg text-foreground mb-6 leading-relaxed italic">
        "{quote}"
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
          {author.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <p className="font-semibold text-foreground">{author}</p>
          <p className="text-sm text-muted-foreground">
            {role}{company && `, ${company}`}
          </p>
        </div>
      </div>
    </div>
  )
}
