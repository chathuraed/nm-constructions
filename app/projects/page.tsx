import CTAButton from '../components/CTAButton';
import Image from 'next/image';

export default function ProjectsPage() {
    const projects = [
        {
            category: 'Hotels & Resorts',
            items: [
                {
                    title: 'Luxury Beach Resort - Bentota',
                    description: 'Complete landscaping with tropical gardens, infinity pool, and water features',
                    features: ['5-acre landscape design', 'Infinity pool (25m)', 'Koi pond', 'Palm gardens'],
                    image: '/images/projects/hotel-bentota.jpg'
                },
                {
                    title: 'Boutique Hotel - Kandy',
                    description: 'Hill country resort with terraced gardens and natural stone features',
                    features: ['Terraced gardens', 'Natural stone pathways', 'Outdoor dining area', 'Native plant selection'],
                    image: '/images/projects/hotel-kandy.jpg'
                }
            ]
        },
        {
            category: 'Residential Projects',
            items: [
                {
                    title: 'Modern Two-Storey Villa - Colombo',
                    description: 'Contemporary 4-bedroom villa with landscaped garden and outdoor pool',
                    features: ['4 bedrooms, 3.5 baths', '3,500 sq ft', 'Swimming pool (8m x 4m)', 'Rooftop garden'],
                    image: '/images/projects/villa-colombo.jpg'
                },
                {
                    title: 'Family Home - Galle',
                    description: 'Traditional single-storey home with coastal garden design',
                    features: ['3 bedrooms, 2 baths', '2,200 sq ft', 'Coastal garden', 'Outdoor entertainment area'],
                    image: '/images/projects/home-galle.jpg'
                },
                {
                    title: 'Luxury Residence - Negombo',
                    description: 'High-end two-storey home with complete landscaping',
                    features: ['5 bedrooms, 4 baths', '4,800 sq ft', 'Infinity pool', 'Tropical garden design'],
                    image: '/images/projects/residence-negombo.jpg'
                }
            ]
        },
        {
            category: 'Commercial Buildings',
            items: [
                {
                    title: 'Office Complex - Colombo',
                    description: '8-storey commercial building with modern amenities',
                    features: ['8 floors', '45,000 sq ft', 'Underground parking', 'Rooftop terrace'],
                    image: '/images/projects/office-colombo.jpg'
                },
                {
                    title: 'Shopping Plaza - Kandy',
                    description: '3-storey retail complex with parking facilities',
                    features: ['3 floors', '25,000 sq ft', 'Multi-level parking', 'Modern facade'],
                    image: '/images/projects/plaza-kandy.jpg'
                }
            ]
        },
        {
            category: 'Swimming Pools & Water Features',
            items: [
                {
                    title: 'Private Pool & Garden - Mount Lavinia',
                    description: 'Custom infinity pool with integrated landscaping',
                    features: ['Infinity edge pool', 'Deck area (150 sq ft)', 'LED lighting', 'Water fountain feature'],
                    image: '/images/projects/pool-mount-lavinia.jpg'
                },
                {
                    title: 'Koi Pond - Colombo',
                    description: 'Traditional Japanese-style koi pond with waterfall',
                    features: ['Natural rock formation', 'Waterfall feature', 'Filtration system', 'Aquatic plants'],
                    image: '/images/projects/koi-pond-colombo.jpg'
                },
                {
                    title: 'Resort Pool Complex - Hikkaduwa',
                    description: 'Multi-level pool system with swim-up bar',
                    features: ['Main pool (20m)', 'Kids pool', 'Swim-up bar', 'Waterfall features'],
                    image: '/images/projects/resort-pool-hikkaduwa.jpg'
                }
            ]
        }
    ];

    return (
        <main>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-charcoal to-stone-gray text-white py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
                    <p className="text-xl">A showcase of our construction and landscaping excellence</p>
                </div>
            </section>

            {/* Portfolio Note */}
            <section className="py-12 bg-sand bg-opacity-30">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-lg text-charcoal max-w-3xl mx-auto">
                        Below is a sample of our completed projects across Sri Lanka. Each project represents our
                        commitment to quality, innovation, and client satisfaction. Contact us to view our complete portfolio.
                    </p>
                </div>
            </section>

            {/* Projects by Category */}
            {projects.map((category, categoryIndex) => (
                <section
                    key={categoryIndex}
                    className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-10 text-center">
                            {category.category}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {category.items.map((project, projectIndex) => (
                                <div
                                    key={projectIndex}
                                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                                >
                                    {/* Project Image */}
                                    <div className="relative h-48 bg-gradient-to-br from-light-navy to-navy-blue">
                                        {/* Uncomment when you add actual images: */}
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />

                                        {/* Placeholder until image is added */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-white text-6xl opacity-50">📸</div>
                                        </div>
                                        <div className="absolute top-2 right-2 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold text-charcoal">
                                            Add: {project.image}
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-charcoal mb-2">{project.title}</h3>
                                        <p className="text-stone-gray mb-4">{project.description}</p>

                                        <div className="border-t border-gray-200 pt-4">
                                            <h4 className="text-sm font-semibold text-charcoal mb-2">Key Features:</h4>
                                            <ul className="space-y-1">
                                                {project.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className="text-sm text-stone-gray flex items-start gap-2">
                                                        <span className="text-navy-blue font-bold">•</span>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* Statistics Section */}
            <section className="py-16 bg-gradient-to-r from-navy-blue to-light-navy text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Track Record</h2>
                        <p className="text-xl">Delivering excellence across Sri Lanka</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
                            <div className="text-lg">Projects Completed</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                            <div className="text-lg">Homes Built</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
                            <div className="text-lg">Commercial Buildings</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold mb-2">30+</div>
                            <div className="text-lg">Pools & Landscapes</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                        Start Your Project Today
                    </h2>
                    <p className="text-xl text-stone-gray mb-8 max-w-2xl mx-auto">
                        Whether it's a new home, commercial building, or landscape transformation, we're ready to make it happen.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <CTAButton text="Request a Quotation" href="/contact" variant="primary" />
                        <CTAButton text="Talk to Our Team" href="/contact" variant="secondary" />
                    </div>
                </div>
            </section>
        </main>
    );
}
