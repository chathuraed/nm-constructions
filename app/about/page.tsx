import CTAButton from '../components/CTAButton';

export default function AboutPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-charcoal to-stone-gray text-white py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About NM Constructions & Landscaping</h1>
                    <p className="text-xl">Building trust through quality, reliability, and craftsmanship</p>
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="mb-12">
                        <h2 className="section-title">Who We Are</h2>
                        <p className="text-lg text-stone-gray leading-relaxed mb-4">
                            NM Constructions & Landscaping is a trusted name in Sri Lanka's construction and landscaping industry.
                            We specialize in delivering high-quality residential and commercial construction projects, along with
                            comprehensive landscaping solutions for hotels, private homes, and commercial properties.
                        </p>
                        <p className="text-lg text-stone-gray leading-relaxed">
                            Our team of experienced engineers, architects, and landscape designers work together to transform
                            your vision into reality. From foundation to finishing touches, we ensure every project meets the
                            highest standards of quality, safety, and durability.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-sand bg-opacity-20 p-6 rounded-lg">
                            <h3 className="text-2xl font-bold text-charcoal mb-3">Our Mission</h3>
                            <p className="text-stone-gray">
                                To deliver exceptional construction and landscaping services that exceed client expectations
                                while maintaining the highest standards of quality, safety, and environmental responsibility.
                            </p>
                        </div>

                        <div className="bg-sand bg-opacity-20 p-6 rounded-lg">
                            <h3 className="text-2xl font-bold text-charcoal mb-3">Our Vision</h3>
                            <p className="text-stone-gray">
                                To be the leading construction and landscaping company in Sri Lanka, recognized for innovation,
                                reliability, and creating spaces that enhance the quality of life.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience & Expertise */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="section-title">Our Expertise</h2>
                        <p className="section-subtitle">Years of experience delivering exceptional results</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="text-center">
                            <div className="text-5xl font-bold text-navy-blue mb-2">100+</div>
                            <h3 className="text-xl font-semibold text-charcoal mb-2">Projects Completed</h3>
                            <p className="text-stone-gray">Residential, commercial, and hospitality projects</p>
                        </div>

                        <div className="text-center">
                            <div className="text-5xl font-bold text-navy-blue mb-2">10+</div>
                            <h3 className="text-xl font-semibold text-charcoal mb-2">Years Experience</h3>
                            <p className="text-stone-gray">Proven track record of excellence</p>
                        </div>

                        <div className="text-center">
                            <div className="text-5xl font-bold text-navy-blue mb-2">50+</div>
                            <h3 className="text-xl font-semibold text-charcoal mb-2">Skilled Professionals</h3>
                            <p className="text-stone-gray">Expert engineers, designers, and craftsmen</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="section-title text-center mb-12">Our Core Values</h2>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-navy-blue text-white rounded-full flex items-center justify-center text-xl font-bold">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-charcoal mb-2">Quality & Craftsmanship</h3>
                                <p className="text-stone-gray">
                                    We never compromise on quality. Every project is executed with precision and attention to detail,
                                    using premium materials and proven construction methods.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-navy-blue text-white rounded-full flex items-center justify-center text-xl font-bold">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-charcoal mb-2">Reliability & Trust</h3>
                                <p className="text-stone-gray">
                                    We build lasting relationships with our clients through honest communication, transparent pricing,
                                    and consistent delivery on our commitments.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-navy-blue text-white rounded-full flex items-center justify-center text-xl font-bold">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-charcoal mb-2">Safety First</h3>
                                <p className="text-stone-gray">
                                    Safety is paramount in all our operations. We maintain strict safety protocols to protect our workers,
                                    clients, and the environment.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-navy-blue text-white rounded-full flex items-center justify-center text-xl font-bold">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-charcoal mb-2">Innovation & Sustainability</h3>
                                <p className="text-stone-gray">
                                    We embrace modern construction techniques and sustainable practices to create environmentally
                                    responsible and future-ready structures.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-navy-blue to-light-navy text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Work With Us?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Let's discuss your construction or landscaping project. Our team is ready to help you build your dream.
                    </p>
                    <CTAButton text="Get in Touch" href="/contact" variant="secondary" />
                </div>
            </section>
        </main>
    );
}
