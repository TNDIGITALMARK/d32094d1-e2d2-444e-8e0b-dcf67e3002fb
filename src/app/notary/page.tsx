import Navigation from '@/components/carl-watkins/Navigation'
import Hero from '@/components/carl-watkins/Hero'
import ContactForm from '@/components/carl-watkins/ContactForm'
import Footer from '@/components/carl-watkins/Footer'
import { FileCheck, Home, Building2, Clock, Shield, CheckCircle2, MapPin } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "WatkinsIV Notary Services | Professional Notary & Document Services",
  description: "Reliable mobile notary services for individuals and businesses. Real estate closings, document preparation, business formation, and more. Flexible scheduling and competitive pricing.",
}

export default function NotaryPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <Hero
        heading="WatkinsIV Notary Services"
        subheading="Professional, reliable notary services for individuals and businesses. Fast turnaround, mobile availability, and expert document handling."
        ctaText="Book Appointment"
        ctaLink="#booking"
        secondaryCtaText="View Services"
        secondaryCtaLink="#services"
        backgroundStyle="solid"
      />

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Why Choose WatkinsIV Notary Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Certified Professional</h3>
                <p className="text-muted-foreground">
                  Licensed and bonded notary public with years of experience handling sensitive legal documents.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Flexible Scheduling</h3>
                <p className="text-muted-foreground">
                  Monday through Friday 8am to 6pm, with Saturday appointments available by request.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Mobile Service</h3>
                <p className="text-muted-foreground">
                  Convenient mobile notary services available within 20-mile radius. We come to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Pricing Section */}
      <section id="services" className="section bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-4">Services & Pricing</h2>
              <p className="lead">
                Transparent, competitive pricing for all your notarization needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mobile Notary */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                    <MapPin size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">Mobile Notary</h3>
                    <p className="text-accent text-xl font-bold">$75 base fee</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  We come to your home, office, or preferred location within a 20-mile radius.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span>Includes travel within 20 miles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span>Same-day service available</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span>Evening appointments by request</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span>Additional documents: $10/signature</span>
                  </li>
                </ul>
              </div>

              {/* Document Preparation */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                    <FileCheck size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">Document Preparation</h3>
                    <p className="text-accent text-xl font-bold">$25 per document</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Professional preparation of standard legal forms and documents.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span>Affidavits and sworn statements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span>Power of attorney forms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span>Certified copies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span>Standard legal templates</span>
                  </li>
                </ul>
              </div>

              {/* Real Estate Closings */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                    <Home size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">Real Estate Closings</h3>
                    <p className="text-accent text-xl font-bold">$150</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Complete notarization service for real estate transactions and closings.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span>All closing documents notarized</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span>Flexible scheduling for closings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span>Mortgage documents included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span>Experience with title companies</span>
                  </li>
                </ul>
              </div>

              {/* Business Formation */}
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                    <Building2 size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">Business Formation</h3>
                    <p className="text-accent text-xl font-bold">$100</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Notarization services for LLC formation, incorporation, and business documents.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span>LLC operating agreements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span>Articles of incorporation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span>Corporate resolutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span>Partnership agreements</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-primary text-white rounded-xl p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Need Something Else?</h3>
              <p className="text-lg opacity-90 mb-6">
                We handle a wide variety of documents including wills, trusts, contracts, and more.
                Contact us for a custom quote for your specific needs.
              </p>
              <Link
                href="#booking"
                className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground rounded-lg hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg font-semibold"
              >
                Request Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">How It Works</h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-2xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Schedule Your Appointment</h3>
                  <p className="text-muted-foreground">
                    Use our booking form below or call us directly. Let us know what documents you need notarized
                    and your preferred date, time, and location.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-2xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Prepare Your Documents</h3>
                  <p className="text-muted-foreground mb-3">
                    Have your documents ready and bring valid government-issued photo ID (driver's license, passport, etc.).
                    Do not sign documents before the notary appointment.
                  </p>
                  <div className="bg-secondary rounded-lg p-4">
                    <p className="font-semibold mb-2">Required ID Types:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Driver's license or state ID</li>
                      <li>• U.S. passport</li>
                      <li>• Military ID</li>
                      <li>• Other government-issued photo ID</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-2xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Meet for Notarization</h3>
                  <p className="text-muted-foreground">
                    For mobile services, we come to you. For office visits, we'll provide our address upon booking.
                    The notarization process typically takes 15-30 minutes depending on the number of documents.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-2xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Receive Notarized Documents</h3>
                  <p className="text-muted-foreground">
                    Your documents will be properly notarized with official seal and signature. We accept cash, check,
                    and major credit cards for payment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Service Area</h2>
            <p className="lead mb-8">
              We proudly serve the greater metropolitan area with mobile notary services
            </p>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-semibold mb-6">Mobile Service Coverage</h3>
              <p className="text-muted-foreground mb-6">
                Our mobile notary service covers a 20-mile radius from our office. This includes most major
                neighborhoods, business districts, and surrounding communities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-8">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-1" />
                  <span>Downtown and central business district</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-1" />
                  <span>Suburban residential areas</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-1" />
                  <span>Medical facilities and hospitals</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-1" />
                  <span>Law offices and professional buildings</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-1" />
                  <span>Real estate offices and title companies</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-1" />
                  <span>Senior living facilities</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Located outside our standard service area? Contact us for availability and additional travel fee information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="border-b border-border pb-6">
                <h3 className="text-lg font-semibold mb-3">What types of documents can you notarize?</h3>
                <p className="text-muted-foreground">
                  We can notarize most documents including affidavits, powers of attorney, wills, trusts, deeds,
                  contracts, loan documents, medical forms, and more. If you're unsure whether your document requires
                  notarization, feel free to contact us.
                </p>
              </div>

              <div className="border-b border-border pb-6">
                <h3 className="text-lg font-semibold mb-3">Do I need an appointment?</h3>
                <p className="text-muted-foreground">
                  Yes, we work by appointment to ensure we can give each client proper attention and meet your scheduling
                  needs. Same-day appointments are often available depending on availability.
                </p>
              </div>

              <div className="border-b border-border pb-6">
                <h3 className="text-lg font-semibold mb-3">What should I bring to the appointment?</h3>
                <p className="text-muted-foreground">
                  Bring your documents (unsigned), valid government-issued photo ID, and any other signers who need to be
                  present. All parties must appear in person and provide valid identification.
                </p>
              </div>

              <div className="border-b border-border pb-6">
                <h3 className="text-lg font-semibold mb-3">How long does the notarization process take?</h3>
                <p className="text-muted-foreground">
                  Most notarizations take 15-30 minutes depending on the complexity and number of documents. Real estate
                  closings may take longer due to the volume of documents involved.
                </p>
              </div>

              <div className="border-b border-border pb-6">
                <h3 className="text-lg font-semibold mb-3">What forms of payment do you accept?</h3>
                <p className="text-muted-foreground">
                  We accept cash, personal checks, business checks, and all major credit cards (Visa, MasterCard,
                  American Express, Discover). Payment is due at the time of service.
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-lg font-semibold mb-3">Are your services confidential?</h3>
                <p className="text-muted-foreground">
                  Absolutely. We maintain strict confidentiality regarding all documents and client information.
                  Your privacy and security are our top priorities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="section bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Book Your Appointment</h2>
              <p className="lead">
                Fast, professional notary services when you need them
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Hours of Operation</h3>
                <div className="bg-white rounded-xl p-8 mb-8 shadow-md">
                  <div className="space-y-3">
                    <div className="flex justify-between border-b border-border pb-2">
                      <span className="font-semibold">Monday - Friday</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between border-b border-border pb-2">
                      <span className="font-semibold">Saturday</span>
                      <span>By Appointment</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>

                <div className="bg-primary text-white rounded-xl p-6 mb-6">
                  <h4 className="font-semibold text-lg mb-3">Need Immediate Service?</h4>
                  <p className="mb-4 opacity-90">
                    Same-day appointments often available. Call us directly for urgent notarization needs.
                  </p>
                  <a
                    href="tel:+15551234567"
                    className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-opacity-90 transition-all font-semibold"
                  >
                    Call (555) 123-4567
                  </a>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h4 className="font-semibold mb-3">What to Expect</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>Confirmation email within 2 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>Reminder call 24 hours before appointment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>Professional, efficient service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>Documents ready immediately after notarization</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-6">Request Appointment</h3>
                <ContactForm showMessage={true} />
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  We'll contact you within 2 hours to confirm your appointment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
