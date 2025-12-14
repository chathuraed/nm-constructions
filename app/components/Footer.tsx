import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-charcoal text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">NM Constructions & Landscaping</h3>
                        <p className="text-gray-300 mb-4">
                            Building strong homes and designing beautiful landscapes across Sri Lanka.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-300 hover:text-sage-green">About Us</Link></li>
                            <li><Link href="/services" className="text-gray-300 hover:text-sage-green">Services</Link></li>
                            <li><Link href="/projects" className="text-gray-300 hover:text-sage-green">Projects</Link></li>
                            <li><Link href="/contact" className="text-gray-300 hover:text-sage-green">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Our Services</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>Residential Construction</li>
                            <li>Commercial Buildings</li>
                            <li>Hotel Landscaping</li>
                            <li>Swimming Pools</li>
                            <li>Garden Design</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>📞 Phone: +94 XX XXX XXXX</li>
                            <li>📱 WhatsApp: +94 XX XXX XXXX</li>
                            <li>📧 Email: info@nmconstructions.lk</li>
                            <li>📍 Location: Sri Lanka</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} NM Constructions & Landscaping. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
