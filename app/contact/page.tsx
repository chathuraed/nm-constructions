'use client';

import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            setSubmitMessage('Thank you! We will contact you within 24 hours.');
            setIsSubmitting(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                projectType: '',
                message: ''
            });
        }, 1500);
    };

    return (
        <main>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-ocean-blue to-sky-blue text-white py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl">Let's discuss your next construction or landscaping project</p>
                </div>
            </section>

            {/* Contact Information & Form */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-bold text-charcoal mb-6">Get in Touch</h2>
                            <p className="text-lg text-stone-gray mb-8">
                                Have a question or ready to start your project? We're here to help. Contact us through
                                any of the following methods or fill out the form.
                            </p>

                            <div className="space-y-6">
                                {/* Phone */}
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-navy-blue text-white rounded-full flex items-center justify-center text-xl">
                                        📞
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-charcoal mb-1">Phone</h3>
                                        <p className="text-stone-gray">+94 XX XXX XXXX</p>
                                        <p className="text-sm text-stone-gray">Mon-Sat: 8:00 AM - 6:00 PM</p>
                                    </div>
                                </div>

                                {/* WhatsApp */}
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-light-navy text-white rounded-full flex items-center justify-center text-xl">
                                        💬
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-charcoal mb-1">WhatsApp</h3>
                                        <p className="text-stone-gray">+94 XX XXX XXXX</p>
                                        <p className="text-sm text-stone-gray">Available 24/7</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-ocean-blue text-white rounded-full flex items-center justify-center text-xl">
                                        📧
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-charcoal mb-1">Email</h3>
                                        <p className="text-stone-gray">info@nmconstructions.lk</p>
                                        <p className="text-sm text-stone-gray">We'll respond within 24 hours</p>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-charcoal text-white rounded-full flex items-center justify-center text-xl">
                                        📍
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-charcoal mb-1">Office Location</h3>
                                        <p className="text-stone-gray">Colombo, Sri Lanka</p>
                                        <p className="text-sm text-stone-gray">Visit by appointment</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media (Optional) */}
                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <h3 className="text-lg font-bold text-charcoal mb-4">Follow Us</h3>
                                <div className="flex gap-4">
                                    <a href="#" className="w-10 h-10 bg-navy-blue text-white rounded-full flex items-center justify-center hover:bg-opacity-80 transition">
                                        f
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-navy-blue text-white rounded-full flex items-center justify-center hover:bg-opacity-80 transition">
                                        in
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-navy-blue text-white rounded-full flex items-center justify-center hover:bg-opacity-80 transition">
                                        📷
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-gray-50 p-8 rounded-lg">
                            <h2 className="text-2xl font-bold text-charcoal mb-6">Send Us a Message</h2>

                            {submitMessage && (
                                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                                    {submitMessage}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-blue"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-blue"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-charcoal mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-blue"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="projectType" className="block text-sm font-semibold text-charcoal mb-2">
                                        Project Type *
                                    </label>
                                    <select
                                        id="projectType"
                                        name="projectType"
                                        value={formData.projectType}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-blue"
                                    >
                                        <option value="">Select a project type</option>
                                        <option value="residential-construction">Residential Construction</option>
                                        <option value="commercial-construction">Commercial Construction</option>
                                        <option value="landscaping">Landscaping</option>
                                        <option value="swimming-pool">Swimming Pool</option>
                                        <option value="water-features">Water Features/Ponds</option>
                                        <option value="renovation">Renovation/Extension</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-2">
                                        Project Details *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-blue resize-none"
                                        placeholder="Tell us about your project requirements, location, timeline, etc."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-navy-blue text-white py-3 px-6 rounded-md font-semibold hover:bg-opacity-90 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call-to-Actions */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-charcoal mb-4">Ready to Get Started?</h2>
                        <p className="text-lg text-stone-gray">Choose how you'd like to proceed</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                            <div className="text-5xl mb-4">🏗️</div>
                            <h3 className="text-xl font-bold text-charcoal mb-3">Free Site Visit</h3>
                            <p className="text-stone-gray mb-4">
                                Our engineer will visit your site to assess and provide professional recommendations.
                            </p>
                            <a href="tel:+94XXXXXXXXX" className="text-navy-blue font-semibold hover:underline">
                                Call Now →
                            </a>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                            <div className="text-5xl mb-4">💰</div>
                            <h3 className="text-xl font-bold text-charcoal mb-3">Get a Quotation</h3>
                            <p className="text-stone-gray mb-4">
                                Receive a detailed, transparent quotation for your project with no obligations.
                            </p>
                            <a href="#contact-form" className="text-navy-blue font-semibold hover:underline">
                                Request Quote →
                            </a>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                            <div className="text-5xl mb-4">👷</div>
                            <h3 className="text-xl font-bold text-charcoal mb-3">Talk to Our Engineer</h3>
                            <p className="text-stone-gray mb-4">
                                Speak directly with our experienced engineers about your project requirements.
                            </p>
                            <a href="https://wa.me/94XXXXXXXXX" className="text-navy-blue font-semibold hover:underline">
                                WhatsApp Us →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section (Placeholder) */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-charcoal text-center mb-8">Find Us</h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                            <p className="text-stone-gray text-lg">
                                🗺️ Map Integration Area<br />
                                <span className="text-sm">(Google Maps can be embedded here)</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
