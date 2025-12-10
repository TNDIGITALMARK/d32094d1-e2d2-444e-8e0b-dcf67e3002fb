import Navigation from '@/components/carl-watkins/Navigation'
import Hero from '@/components/carl-watkins/Hero'
import ServiceCard from '@/components/carl-watkins/ServiceCard'
import Testimonial from '@/components/carl-watkins/Testimonial'
import ContactForm from '@/components/carl-watkins/ContactForm'
import Footer from '@/components/carl-watkins/Footer'
import { Users, Mic, Heart, Target, BookOpen, Award } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <Hero
        preHeading="We see you. We understand your struggle."
        heading="Authentic Leadership in Law is Found in the Courage to Embrace Vulnerability"
        subheading="Transform from overwhelmed legal professional to confident, authentic leader. Reclaim your passion and lead with purpose."
        ctaText="Schedule a Consultation"
        ctaLink="#contact"
        secondaryCtaText="Learn More"
        secondaryCtaLink="#about"
        backgroundStyle="gradient"
      />

      {/* Introduction Section */}
      <section id="about" className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Leadership Transformation for Legal Professionals</h2>
            <p className="lead mb-8">
              The legal profession demands excellence, but at what cost? You're not alone in feeling the weight of expectations,
              the isolation of leadership, or the struggle to maintain your authentic self while meeting professional demands.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              I'm Carl Shawn Watkins, and I specialize in helping lawyers, partners, and legal executives rediscover their
              purpose through vulnerability-based leadership. Together, we'll transform pressure into power and isolation into connection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/coaching"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-accent hover:text-accent-foreground transition-all shadow-md hover:shadow-lg font-semibold"
              >
                Explore Courage2Connect Coaching
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all font-semibold"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="section bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Transformational Services</h2>
            <p className="lead max-w-3xl mx-auto">
              Comprehensive support designed specifically for legal professionals ready to embrace authentic leadership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <ServiceCard
              icon={Users}
              title="Leadership Consulting"
              description="Transform your firm's culture through authentic leadership development programs designed specifically for legal professionals"
              link="#leadership-consulting"
            />
            <ServiceCard
              icon={Target}
              title="Executive Coaching"
              description="One-on-one guidance for legal leaders ready to embrace vulnerability as a strength while maintaining professional excellence"
              link="/coaching"
            />
            <ServiceCard
              icon={Mic}
              title="Keynote Speaking"
              description="Powerful presentations on authentic leadership, overcoming legal industry pressure, and building human-first law firms"
              link="#speaking"
            />
            <ServiceCard
              icon={Heart}
              title="DEI Transformation"
              description="Comprehensive diversity, equity, and inclusion programs that create lasting cultural change in legal organizations"
              link="#dei"
            />
            <ServiceCard
              icon={BookOpen}
              title="Transformation Programs"
              description="Structured programs combining coaching, workshops, and peer support for sustained leadership development"
              link="#programs"
            />
            <ServiceCard
              icon={Award}
              title="Notary Services"
              description="Professional notary and document services for individuals and businesses in need of reliable, efficient solutions"
              link="/notary"
            />
          </div>
        </div>
      </section>

      {/* Leadership Consulting Deep Dive */}
      <section id="leadership-consulting" className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Leadership Consulting</h2>
              <p className="text-lg mb-6">
                Your law firm is more than a business—it's a community of talented professionals navigating immense pressure.
                I work with firms to create cultures where vulnerability is valued, authenticity is celebrated, and
                excellence is achieved through human connection, not despite it.
              </p>
              <h3 className="text-xl font-semibold mb-4">What We'll Address:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs text-on-dark">✓</span>
                  </div>
                  <span>Building trust-based leadership frameworks that reduce burnout</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs text-on-dark">✓</span>
                  </div>
                  <span>Creating psychological safety within high-pressure environments</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs text-on-dark">✓</span>
                  </div>
                  <span>Developing authentic communication practices for partners and teams</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs text-on-dark">✓</span>
                  </div>
                  <span>Implementing sustainable success models that honor human needs</span>
                </li>
              </ul>
              <Link
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-accent hover:text-accent-foreground transition-all shadow-md hover:shadow-lg font-semibold"
              >
                Reclaim Your Passion
              </Link>
            </div>
            <div className="bg-primary rounded-2xl p-12 text-white dark-bg-container">
              <h3 className="text-2xl font-semibold mb-6 text-on-dark">Your Firm's Transformation Journey</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-accent mb-2 text-on-dark">Phase 1: Discovery</h4>
                  <p className="opacity-90 text-on-dark-90">Assessment of current culture, pain points, and leadership dynamics</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2 text-on-dark">Phase 2: Foundation</h4>
                  <p className="opacity-90 text-on-dark-90">Building trust, establishing vulnerability-based leadership principles</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2 text-on-dark">Phase 3: Implementation</h4>
                  <p className="opacity-90 text-on-dark-90">Rolling out programs, coaching leaders, transforming communication</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2 text-on-dark">Phase 4: Sustainability</h4>
                  <p className="opacity-90 text-on-dark-90">Creating systems for ongoing growth and cultural reinforcement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking Section */}
      <section id="speaking" className="section bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Keynote Speaking</h2>
            <p className="lead mb-12">
              Inspiring presentations that challenge conventional thinking about leadership in the legal profession
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-12">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-semibold mb-4">Popular Topics</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>The Courage to Lead with Vulnerability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>From Burnout to Breakthrough: Reclaiming Your Legal Career</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Building Human-First Law Firms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Authentic Leadership in High-Pressure Environments</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-semibold mb-4">Perfect For</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Legal conferences and summits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Firm retreats and leadership events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Bar association gatherings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Professional development programs</span>
                  </li>
                </ul>
              </div>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-accent hover:text-accent-foreground transition-all shadow-md hover:shadow-lg font-semibold"
            >
              Book a Consultation Today
            </Link>
          </div>
        </div>
      </section>

      {/* DEI Section */}
      <section id="dei" className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-6">DEI Transformation</h2>
            <p className="lead text-center mb-12">
              Creating meaningful, lasting change through authentic diversity, equity, and inclusion initiatives
            </p>
            <div className="bg-secondary rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-semibold mb-6">Our Approach</h3>
              <p className="text-lg mb-8">
                True DEI transformation goes beyond policies and training—it requires cultural evolution grounded in
                vulnerability and authentic connection. I help legal organizations build inclusive environments where
                every voice is valued and diverse perspectives drive innovation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Core Components</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Comprehensive cultural assessments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Leadership vulnerability training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Inclusive policy development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Ongoing measurement and refinement</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3">Outcomes</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Increased team cohesion and trust</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Enhanced recruitment and retention</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Improved innovation and problem-solving</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Stronger organizational reputation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Client Success Stories</h2>
            <p className="lead max-w-3xl mx-auto">
              Real transformations from legal professionals who found their authentic leadership voice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial
              quote="Carl helped me rediscover why I became a lawyer in the first place. His approach to vulnerable leadership transformed not just my practice, but my entire relationship with the law."
              author="Sarah Mitchell"
              role="Managing Partner"
              company="Mitchell & Associates"
            />
            <Testimonial
              quote="The Courage2Connect program gave me tools to lead with authenticity while still commanding respect in the courtroom. I'm more effective and far less burnt out."
              author="Michael Rodriguez"
              role="Trial Attorney"
            />
            <Testimonial
              quote="Our firm culture has completely shifted. Partners are more open, associates feel heard, and our retention rates have never been better. Carl's work is transformative."
              author="Jennifer Park"
              role="Senior Partner"
              company="Park & Williams LLP"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Let's Begin Your Transformation</h2>
              <p className="lead">
                Ready to reclaim your passion and lead with authentic confidence? Schedule a consultation today.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <p className="text-lg mb-8">
                  Whether you're seeking individual coaching, firm-wide consulting, or speaking services,
                  I'm here to support your journey to authentic leadership.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-on-dark">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Schedule Consultation</h4>
                      <p className="text-sm text-muted-foreground">Submit the form or call directly</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-on-dark">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Discovery Call</h4>
                      <p className="text-sm text-muted-foreground">We'll discuss your needs and goals</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-on-dark">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Begin Transformation</h4>
                      <p className="text-sm text-muted-foreground">Start your journey to authentic leadership</p>
                    </div>
                  </div>
                </div>
                <div className="bg-primary text-white rounded-xl p-6 dark-bg-container">
                  <p className="text-lg font-medium mb-2 text-on-dark">
                    "Authentic leadership in law is found in the courage to embrace vulnerability."
                  </p>
                  <p className="opacity-90 text-on-dark-90">— Carl Shawn Watkins</p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
