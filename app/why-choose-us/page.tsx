import CTAButton from '../components/CTAButton';

export default function WhyChooseUsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-forest-green to-sage-green text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Why Choose NM Constructions?</h1>
          <p className="text-xl">Your trusted partner for construction and landscaping excellence</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xl text-stone-gray leading-relaxed">
            At NM Constructions & Landscaping, we don't just build structures – we build trust, 
            relationships, and lasting value. Here's what sets us apart in Sri Lanka's construction industry.
          </p>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-12">
            {/* Quality Workmanship */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-forest-green text-white rounded-full flex items-center justify-center text-3xl">
                  ✓
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
                    Exceptional Quality & Craftsmanship
                  </h2>
                  <p className="text-lg text-stone-gray mb-4">
                    We never compromise on quality. Every project is a showcase of precision engineering, 
                    premium materials, and meticulous attention to detail.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-stone-gray">
                      <span className="text-forest-green font-bold mt-1">•</span>
                      <span>Premium quality materials sourced from trusted suppliers</span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-gray">
                      <span className="text-forest-green font-bold mt-1">•</span>
                      <span>Experienced craftsmen with years of specialized expertise</span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-gray">
                      <span className="text-forest-green font-bold mt-1">•</span>
                      <span>Rigorous quality control at every stage of construction</span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-gray">
                      <span className="text-forest-green font-bold mt-1">•</span>
                      <span>International standards and best practices</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Timely Delivery */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-ocean-blue text-white rounded-full flex items-center justify-center text-3xl">
                  ⏱️
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
                    On-Time Project Delivery
                  </h2>
                  <p className="text-lg text-stone-gray mb-4">
                    We understand that time is valuable. Our projects are delivered on schedule without 
                    compromising quality or safety standards.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-stone-gray">
                      <span className="text-ocean-blue font-bold mt-1">•</span>
                      <span>Detailed project planning and realistic timelines</span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-gray">
                      <span className="text-ocean-blue font-bold mt-1">•</span>
                      <span>Efficient resource management and scheduling</span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-gray">
                      <span className="text-ocean-blue font-bold mt-1">•</span>
                      <span>Regular progress updates and milestone tracking</span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-gray">
                      <span className="text-ocean-blue font-bold mt-1">•</span>
                      <span>Dedicated project managers for seamless coordination</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Safety First */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-sage-green text-white rounded-full flex items-center justify-center text-3xl">
                  🛡️
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
                    Uncompromising Safety Standards
                  </h2>
                  <p className="text-lg text-stone-gray mb-4">
                    Safety is our top priority. We maintain strict safety protocols to protect our workers, 
                    clients, and the environment on every project.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-stone-gray">
                      <span className="text-sage-green font-bold mt-1">•</span>
                      <span>Comprehensive safety training for all team members</span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-gray">
                      <span className="text-sage-green font-bold mt-1">•</span>
                      <span>Regular safety inspections and compliance checks</span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-gray">
                      <span className="text-sage-green font-bold mt-1">•</span>
                      <span>Modern safety equipment and protective gear</span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-gray">
                      <span className="text-sage-green font-bold mt-1">•</span>
                      <span>Environmental protection and sustainable practices</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Transparent Pricing */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-charcoal text-white rounded-full flex items-center justify-center text-3xl">
                  💰
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
                    Honest & Transparent Pricing
                  </h2>
                  <p className="text-lg text-stone-gray mb-4">
                    No hidden costs, no surprises. We provide clear, detailed quotations and maintain 
                    transparent communication throughout your project.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-stone-gray">
                      <span className="text-charcoal font-bold mt-1">•</span>
                      <span>Detailed breakdown of all costs and materials</span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-gray">
                      <span className="text-charcoal font-bold mt-1">•</span>
                      <span>Clear payment schedules aligned with project milestones</span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-gray">
                      <span className="text-charcoal font-bold mt-1">•</span>
                      <span>Competitive pricing without compromising quality</span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-gray">
                      <span className="text-charcoal font-bold mt-1">•</span>
                      <span>Written contracts protecting your interests</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Expert Team */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-forest-green text-white rounded-full flex items-center justify-center text-3xl">
                  👷
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
                    Experienced Professional Team
                  </h2>
                  <p className="text-lg text-stone-gray mb-4">
                    Our team of qualified engineers, architects, and designers brings decades of combined 
                    experience to every project.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-stone-gray">
                      <span className="text-forest-green font-bold mt-1">•</span>
                      <span>Certified engineers and registered architects</span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-gray">
                      <span className="text-forest-green font-bold mt-1">•</span>
                      <span>Specialized landscape designers and horticulturists</span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-gray">
                      <span className="text-forest-green font-bold mt-1">•</span>
                      <span>Skilled craftsmen and construction professionals</span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-gray">
                      <span className="text-forest-green font-bold mt-1">•</span>
                      <span>Continuous training and professional development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Customer Satisfaction */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-ocean-blue text-white rounded-full flex items-center justify-center text-3xl">
                  ⭐
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
                    Client Satisfaction Guaranteed
                  </h2>
                  <p className="text-lg text-stone-gray mb-4">
                    Your satisfaction is our success. We work closely with you from concept to completion, 
                    ensuring your vision becomes reality.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-stone-gray">
                      <span className="text-ocean-blue font-bold mt-1">•</span>
                      <span>Personalized consultation and design services</span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-gray">
                      <span className="text-ocean-blue font-bold mt-1">•</span>
                      <span>Open communication and regular updates</span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-gray">
                      <span className="text-ocean-blue font-bold mt-1">•</span>
                      <span>Post-completion support and warranty services</span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-gray">
                      <span className="text-ocean-blue font-bold mt-1">•</span>
                      <span>Building long-term relationships with our clients</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty & Support */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="section-title">Our Commitment to You</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-sand bg-opacity-20 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">📋</div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Quality Warranty</h3>
              <p className="text-stone-gray">
                Comprehensive warranty coverage on all our construction and landscaping work
              </p>
            </div>

            <div className="bg-sand bg-opacity-20 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Maintenance Support</h3>
              <p className="text-stone-gray">
                Ongoing maintenance services for landscaping and pool systems
              </p>
            </div>

            <div className="bg-sand bg-opacity-20 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="text-xl font-bold text-charcoal mb-2">24/7 Support</h3>
              <p className="text-stone-gray">
                Dedicated customer support team available to address your concerns
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-forest-green to-sage-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the NM Difference
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have trusted us with their construction and landscaping projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton text="Get a Free Site Visit" href="/contact" variant="secondary" />
            <CTAButton text="View Our Projects" href="/projects" variant="outline" />
          </div>
        </div>
      </section>
    </main>
  );
}
