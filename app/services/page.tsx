import CTAButton from '../components/CTAButton';

export default function ServicesPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-navy-blue to-light-navy text-white py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
                    <p className="text-xl">Comprehensive construction and landscaping solutions for every need</p>
                </div>
            </section>

            {/* Residential Construction */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-12">
                            <div className="text-5xl mb-4">🏠</div>
                            <h2 className="section-title">Residential Construction</h2>
                            <p className="text-lg text-stone-gray mb-6">
                                Build your dream home with our expert residential construction services. We specialize in
                                creating comfortable, durable, and beautiful homes that stand the test of time.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="border-l-4 border-navy-blue pl-4">
                                <h3 className="text-xl font-bold text-charcoal mb-2">Single-Storey Houses</h3>
                                <p className="text-stone-gray">
                                    Perfect for families seeking spacious ground-level living. Modern designs with optimal
                                    use of space and natural light.
                                </p>
                            </div>

                            <div className="border-l-4 border-navy-blue pl-4">
                                <h3 className="text-xl font-bold text-charcoal mb-2">Two-Storey Houses</h3>
                                <p className="text-stone-gray">
                                    Maximize your land with elegant two-storey designs. Ideal for growing families and
                                    those seeking extra space.
                                </p>
                            </div>

                            <div className="border-l-4 border-navy-blue pl-4">
                                <h3 className="text-xl font-bold text-charcoal mb-2">Custom Designs</h3>
                                <p className="text-stone-gray">
                                    Work with our architects to create a home that reflects your unique style and needs.
                                </p>
                            </div>

                            <div className="border-l-4 border-navy-blue pl-4">
                                <h3 className="text-xl font-bold text-charcoal mb-2">Renovations & Extensions</h3>
                                <p className="text-stone-gray">
                                    Upgrade and expand your existing home with quality renovation and extension services.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Commercial Construction */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-12">
                            <div className="text-5xl mb-4">🏢</div>
                            <h2 className="section-title">Commercial Construction</h2>
                            <p className="text-lg text-stone-gray mb-6">
                                Professional commercial building services for businesses of all sizes. We deliver
                                functional, safe, and aesthetically pleasing commercial spaces.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-charcoal mb-3">Multi-Storey Buildings</h3>
                                <p className="text-stone-gray mb-3">
                                    Up to 10 floors of commercial space built to international standards with modern
                                    infrastructure and safety features.
                                </p>
                                <ul className="list-disc list-inside text-stone-gray space-y-1">
                                    <li>Office buildings</li>
                                    <li>Shopping complexes</li>
                                    <li>Mixed-use developments</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-charcoal mb-3">Retail & Hospitality</h3>
                                <p className="text-stone-gray mb-3">
                                    Specialized construction for retail outlets, restaurants, hotels, and other
                                    customer-facing businesses.
                                </p>
                                <ul className="list-disc list-inside text-stone-gray space-y-1">
                                    <li>Hotels & resorts</li>
                                    <li>Retail stores</li>
                                    <li>Restaurants & cafes</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Landscaping Services */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-12">
                            <div className="text-5xl mb-4">🌳</div>
                            <h2 className="section-title">Landscaping Services</h2>
                            <p className="text-lg text-stone-gray mb-6">
                                Transform your outdoor spaces into beautiful, functional landscapes. From hotel gardens
                                to private home lawns, we create stunning green environments.
                            </p>
                        </div>

                        <div className="space-y-6 mb-8">
                            <div className="bg-sand bg-opacity-20 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-charcoal mb-3">Hotel & Resort Landscaping</h3>
                                <p className="text-stone-gray">
                                    Create memorable first impressions with lush, professionally designed hotel landscapes.
                                    We specialize in tropical gardens, water features, and outdoor entertainment areas that
                                    enhance guest experiences.
                                </p>
                            </div>

                            <div className="bg-sand bg-opacity-20 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-charcoal mb-3">Residential Landscaping</h3>
                                <p className="text-stone-gray">
                                    Turn your backyard into a personal paradise. Custom garden designs, lawn installation,
                                    plant selection, and ongoing maintenance to keep your garden looking perfect year-round.
                                </p>
                            </div>

                            <div className="bg-sand bg-opacity-20 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-charcoal mb-3">Garden Design & Maintenance</h3>
                                <p className="text-stone-gray">
                                    Professional garden planning, planting, and regular maintenance services. We handle
                                    everything from soil preparation to seasonal plant care.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Swimming Pools & Water Features */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-12">
                            <div className="text-5xl mb-4">🏊</div>
                            <h2 className="section-title">Swimming Pools & Water Features</h2>
                            <p className="text-lg text-stone-gray mb-6">
                                Expert pool construction and water feature design. Add luxury and value to your property
                                with custom-built pools and decorative water elements.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-charcoal mb-3">Swimming Pools</h3>
                                <ul className="space-y-3 text-stone-gray">
                                    <li className="flex items-start gap-2">
                                        <span className="text-navy-blue font-bold">✓</span>
                                        <span>Indoor swimming pools with climate control</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-navy-blue font-bold">✓</span>
                                        <span>Outdoor pools with various shapes and sizes</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-navy-blue font-bold">✓</span>
                                        <span>Infinity pools and lap pools</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-navy-blue font-bold">✓</span>
                                        <span>Pool maintenance and repair services</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-charcoal mb-3">Decorative Water Features</h3>
                                <ul className="space-y-3 text-stone-gray">
                                    <li className="flex items-start gap-2">
                                        <span className="text-navy-blue font-bold">✓</span>
                                        <span>Koi ponds and decorative fish ponds</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-navy-blue font-bold">✓</span>
                                        <span>Waterfalls and fountains</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-navy-blue font-bold">✓</span>
                                        <span>Stream and creek installations</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-navy-blue font-bold">✓</span>
                                        <span>Custom water garden designs</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-ocean-blue to-sky-blue text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Interested in Our Services?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Contact us today for a free consultation and site visit. Let's discuss how we can bring your project to life.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <CTAButton text="Request a Quotation" href="/contact" variant="primary" />
                        <CTAButton text="View Our Projects" href="/projects" variant="outline" />
                    </div>
                </div>
            </section>
        </main>
    );
}
