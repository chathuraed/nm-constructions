import CTAButton from './components/CTAButton';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-forest-green to-sage-green text-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Building Strong Homes.<br />Designing Beautiful Landscapes.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Professional construction and landscaping services for residential, commercial, and hospitality projects across Sri Lanka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton text="Get a Free Site Visit" href="/contact" variant="secondary" />
              <CTAButton text="Request a Quotation" href="/contact" variant="outline" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Comprehensive construction and landscaping solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-sand bg-opacity-20 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-2xl font-bold text-charcoal mb-3">Construction</h3>
              <p className="text-stone-gray mb-4">
                Residential homes (1-2 storey) and commercial buildings up to 10 floors. Quality workmanship guaranteed.
              </p>
              <Link href="/services" className="text-forest-green font-semibold hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="bg-sand bg-opacity-20 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌳</div>
              <h3 className="text-2xl font-bold text-charcoal mb-3">Landscaping</h3>
              <p className="text-stone-gray mb-4">
                Hotel and residential landscaping, garden design and maintenance, creating stunning outdoor spaces.
              </p>
              <Link href="/services" className="text-forest-green font-semibold hover:underline">
                Learn More →
              </Link>
            </div>

            <div className="bg-sand bg-opacity-20 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏊</div>
              <h3 className="text-2xl font-bold text-charcoal mb-3">Pools & Water Features</h3>
              <p className="text-stone-gray mb-4">
                Indoor and outdoor swimming pools, decorative ponds, and custom water features for any property.
              </p>
              <Link href="/services" className="text-forest-green font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose NM Constructions?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Quality Workmanship</h3>
              <p className="text-stone-gray">
                Precision engineering and attention to detail in every project
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Timely Delivery</h3>
              <p className="text-stone-gray">
                Projects completed on schedule without compromising quality
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-charcoal mb-2">Safety First</h3>
              <p className="text-stone-gray">
                Strict safety protocols and quality standards on every site
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <CTAButton text="Learn More About Us" href="/why-choose-us" variant="primary" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-ocean-blue to-sky-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch with our team of experienced engineers and designers. We're here to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton text="Talk to Our Engineer" href="/contact" variant="primary" />
            <CTAButton text="View Our Projects" href="/projects" variant="outline" />
          </div>
        </div>
      </section>
    </main>
  );
}

