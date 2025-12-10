import Link from 'next/link'
import { Mail, Phone, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Carl Shawn Watkins
            </h3>
            <p className="opacity-90 mb-4">
              Transforming legal professionals into confident, authentic leaders through vulnerability-based coaching and consulting.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#leadership-consulting" className="opacity-90 hover:text-accent transition-colors">
                  Leadership Consulting
                </Link>
              </li>
              <li>
                <Link href="/coaching" className="opacity-90 hover:text-accent transition-colors">
                  Executive Coaching
                </Link>
              </li>
              <li>
                <Link href="/#speaking" className="opacity-90 hover:text-accent transition-colors">
                  Keynote Speaking
                </Link>
              </li>
              <li>
                <Link href="/#dei" className="opacity-90 hover:text-accent transition-colors">
                  DEI Transformation
                </Link>
              </li>
              <li>
                <Link href="/notary" className="opacity-90 hover:text-accent transition-colors">
                  Notary Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="opacity-90 hover:text-accent transition-colors">
                  About Carl
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="opacity-90 hover:text-accent transition-colors">
                  Client Success Stories
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="opacity-90 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/coaching#faq" className="opacity-90 hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={20} />
                <a href="mailto:carl@carlshawnwatkins.com" className="opacity-90 hover:text-accent transition-colors">
                  carl@carlshawnwatkins.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} />
                <a href="tel:+15551234567" className="opacity-90 hover:text-accent transition-colors">
                  (555) 123-4567
                </a>
              </li>
            </ul>
            <Link
              href="/#contact"
              className="inline-block mt-6 px-6 py-2.5 bg-accent text-accent-foreground rounded-lg hover:bg-opacity-90 transition-all shadow-md font-medium"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white border-opacity-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-90">
          <p>© {new Date().getFullYear()} Carl Shawn Watkins. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
