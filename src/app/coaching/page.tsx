import Navigation from '@/components/carl-watkins/Navigation'
import Hero from '@/components/carl-watkins/Hero'
import Testimonial from '@/components/carl-watkins/Testimonial'
import ContactForm from '@/components/carl-watkins/ContactForm'
import Footer from '@/components/carl-watkins/Footer'
import { Heart, Target, Users, TrendingUp, Calendar, Award, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Courage2Connect Coaching | Carl Shawn Watkins",
  description: "6-month transformative coaching program for legal professionals. Break free from isolation, reconnect with your purpose, and lead with confidence through vulnerability-based leadership.",
}

export default function CoachingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <Hero
        preHeading="Courage2Connect Coaching"
        heading="Break Free From Isolation. Reconnect With Your Purpose. Lead With Confidence."
        subheading="A transformative 6-month coaching program designed exclusively for legal professionals ready to reclaim their passion and authentic leadership voice."
        ctaText="Start Your Journey"
        ctaLink="#enrollment"
        secondaryCtaText="Learn More"
        secondaryCtaLink="#program"
        backgroundStyle="gradient"
      />

      {/* The Problem Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Does This Sound Familiar?</h2>
            <p className="lead mb-12">
              You've achieved professional success, but something feels... off.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-muted rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-destructive">The Weight of Isolation</h3>
                <p>
                  You carry the burden alone. Partners expect perfection. Clients demand results. Associates look to you for guidance.
                  But who do you turn to when you're struggling?
                </p>
              </div>
              <div className="bg-muted rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-destructive">The Loss of Purpose</h3>
                <p>
                  You remember why you became a lawyer—to help people, to make a difference. But somewhere between billable hours
                  and partner meetings, that fire dimmed.
                </p>
              </div>
              <div className="bg-muted rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-destructive">The Mask of Strength</h3>
                <p>
                  You've mastered the art of appearing confident, composed, unshakeable. But inside, doubt whispers.
                  Vulnerability feels like weakness. So you keep pretending.
                </p>
              </div>
              <div className="bg-muted rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3 text-destructive">The Leadership Trap</h3>
                <p>
                  You lead by authority, not connection. You drive results, but lose people. You command respect, but crave
                  authentic relationships. The old playbook isn't working anymore.
                </p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-primary text-white rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4">There Is Another Way</h3>
              <p className="text-lg opacity-90">
                Leadership doesn't require you to sacrifice your humanity. Strength isn't found in hiding your struggles—it's
                discovered in the courage to face them. Connection isn't a distraction from excellence—it's the foundation of it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section id="program" className="section bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-4">The Courage2Connect Program</h2>
              <p className="lead">
                A comprehensive 6-month transformation designed to reconnect you with your purpose, your people, and your authentic leadership power.
              </p>
            </div>

            {/* Program Structure */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <Calendar size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">6-Month Journey</h3>
                <p className="text-muted-foreground">
                  Bi-weekly 90-minute sessions providing continuity, accountability, and sustained transformation.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <Target size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Personalized Focus</h3>
                <p className="text-muted-foreground">
                  Tailored to your unique challenges, goals, and leadership context within the legal profession.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <Award size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Proven Framework</h3>
                <p className="text-muted-foreground">
                  Built on vulnerability-based leadership principles designed specifically for high-pressure legal environments.
                </p>
              </div>
            </div>

            {/* What You'll Gain */}
            <div className="bg-white rounded-2xl p-8 md:p-12 mb-12">
              <h3 className="text-2xl font-semibold mb-8 text-center">What You'll Gain</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Authentic Connection</h4>
                    <p className="text-muted-foreground">Build genuine relationships with partners, clients, and teams without sacrificing professional authority.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Vulnerability as Strength</h4>
                    <p className="text-muted-foreground">Learn to leverage openness and authenticity as powerful leadership tools, not liabilities.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Renewed Purpose</h4>
                    <p className="text-muted-foreground">Reconnect with the passion that brought you to law and align your practice with your values.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Sustainable Excellence</h4>
                    <p className="text-muted-foreground">Create rhythms and practices that sustain high performance without burnout.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Confident Decision-Making</h4>
                    <p className="text-muted-foreground">Trust your instincts, navigate complexity, and lead with clarity and conviction.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Expanded Influence</h4>
                    <p className="text-muted-foreground">Increase your impact through authentic presence and human-centered leadership.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Program Phases */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-center mb-8">Your Transformation Journey</h3>

              <div className="bg-gradient-purple text-white rounded-xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <h4 className="text-xl font-semibold">Months 1-2: Reconnection</h4>
                </div>
                <p className="opacity-90 mb-4">
                  We begin by understanding your story, identifying core values, and confronting the narratives that hold you back.
                  You'll complete a comprehensive leadership assessment and begin building vulnerability practices.
                </p>
                <p className="text-sm opacity-75">
                  Key Tools: Leadership Assessment, Vulnerability Workbook, Values Alignment Exercise
                </p>
              </div>

              <div className="bg-primary text-white rounded-xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <h4 className="text-xl font-semibold">Months 3-4: Rebuilding</h4>
                </div>
                <p className="opacity-90 mb-4">
                  With self-awareness established, we construct new leadership frameworks grounded in authenticity.
                  You'll develop communication strategies, relationship practices, and confidence-building routines.
                </p>
                <p className="text-sm opacity-75">
                  Key Tools: Communication Playbook, Confidence-Building Exercises, Relationship Mapping
                </p>
              </div>

              <div className="bg-accent text-accent-foreground rounded-xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <h4 className="text-xl font-semibold">Months 5-6: Thriving</h4>
                </div>
                <p className="mb-4">
                  In the final phase, we solidify your transformation and create sustainability plans. You'll lead authentically,
                  navigate challenges with confidence, and establish ongoing practices for continued growth.
                </p>
                <p className="text-sm opacity-75">
                  Key Tools: Sustainability Plan, Leadership Legacy Framework, Ongoing Support Network
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Materials */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Exclusive Bonus Materials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Leadership Assessment</h3>
                <p className="text-muted-foreground">
                  Comprehensive diagnostic tool revealing your strengths, blind spots, and growth opportunities.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Vulnerability Workbook</h3>
                <p className="text-muted-foreground">
                  Guided exercises for building comfort with authentic expression and emotional intelligence.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Confidence Toolkit</h3>
                <p className="text-muted-foreground">
                  Practical strategies for building unshakeable confidence rooted in self-awareness, not bravado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Transformation Stories</h2>
            <p className="lead max-w-3xl mx-auto">
              Legal professionals who found their authentic voice through Courage2Connect
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Testimonial
              quote="The Courage2Connect program gave me tools to lead with authenticity while still commanding respect in the courtroom. I'm more effective and far less burnt out."
              author="Michael Rodriguez"
              role="Trial Attorney"
            />
            <Testimonial
              quote="Carl helped me rediscover why I became a lawyer in the first place. His approach to vulnerable leadership transformed not just my practice, but my entire relationship with the law."
              author="Sarah Mitchell"
              role="Managing Partner"
              company="Mitchell & Associates"
            />
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Investment in Your Future</h2>

            <div className="bg-primary text-white rounded-2xl p-12 text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Complete Program: $5,000</h3>
              <p className="text-xl opacity-90 mb-6">6-month intensive coaching experience</p>
              <ul className="text-left max-w-2xl mx-auto space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="flex-shrink-0" />
                  <span>12 bi-weekly 90-minute coaching sessions</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="flex-shrink-0" />
                  <span>Leadership assessment tool & detailed analysis</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="flex-shrink-0" />
                  <span>Vulnerability workbook with guided exercises</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="flex-shrink-0" />
                  <span>Confidence-building toolkit and resources</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="flex-shrink-0" />
                  <span>Email support between sessions</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="flex-shrink-0" />
                  <span>Sustainability plan for ongoing growth</span>
                </li>
              </ul>
              <div className="border-t border-white border-opacity-30 pt-6">
                <p className="text-sm opacity-75">Payment plans available • Limited spots to ensure personalized attention</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Is This Right For You?</h3>
              <p className="text-lg text-muted-foreground mb-8">
                This program is designed for legal professionals who are ready to do the inner work required for authentic transformation.
                If you're seeking quick fixes or surface-level changes, this isn't the program for you. But if you're ready to
                courageously confront what's holding you back and commit to sustained growth, let's talk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">How is this different from traditional executive coaching?</h3>
                <p className="text-muted-foreground">
                  Courage2Connect is specifically designed for legal professionals and centers on vulnerability-based leadership.
                  Unlike generic executive coaching, this program addresses the unique pressures, cultural norms, and relationship
                  dynamics within the legal profession.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">Will this make me appear weak or less authoritative?</h3>
                <p className="text-muted-foreground">
                  Absolutely not. Vulnerability isn't weakness—it's the courage to be authentic. You'll learn to lead with greater
                  authority because your leadership will be grounded in genuine connection and self-awareness, not pretense.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">What if I can't commit to the full 6 months?</h3>
                <p className="text-muted-foreground">
                  Transformation requires time and consistency. While we can discuss flexible scheduling, the 6-month commitment
                  ensures you have adequate time to internalize new practices and see lasting results. Shorter engagements
                  typically produce temporary changes, not sustainable transformation.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">Can this help with specific challenges like partner conflicts or client relationships?</h3>
                <p className="text-muted-foreground">
                  Yes. While the program focuses on foundational leadership transformation, we address real-world challenges you're
                  facing. The frameworks you develop will apply to partner dynamics, client relationships, team management, and
                  personal sustainability.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">Is this confidential?</h3>
                <p className="text-muted-foreground">
                  Absolutely. Everything discussed in our sessions is completely confidential. Creating a safe space for
                  vulnerability and honest reflection is foundational to the program's effectiveness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Section */}
      <section id="enrollment" className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Ready to Begin Your Transformation?</h2>
              <p className="lead">
                Take the first step toward authentic leadership. Schedule your discovery call today.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">What Happens Next</h3>
                <div className="space-y-6 mb-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Submit Enrollment Form</h4>
                      <p className="text-muted-foreground">Tell me about your current challenges and what you hope to achieve.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Discovery Call (30 minutes)</h4>
                      <p className="text-muted-foreground">We'll discuss your goals, answer questions, and determine if the program is the right fit.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Program Kickoff</h4>
                      <p className="text-muted-foreground">Complete your leadership assessment and schedule your first session within 7 days.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary rounded-xl p-6">
                  <h4 className="font-semibold mb-3">Limited Availability</h4>
                  <p className="text-muted-foreground">
                    To ensure personalized attention, I only work with a small number of clients at a time.
                    Current availability: <span className="font-semibold text-foreground">3 spots remaining</span> for the next cohort
                    starting in January 2025.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-6">Enrollment Form</h3>
                <ContactForm showMessage={true} />
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Questions? Call <a href="tel:+15551234567" className="text-primary hover:text-accent">(555) 123-4567</a>
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
