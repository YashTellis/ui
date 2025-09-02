import React from 'react'
import { Testimonial } from './testimonial'

export default function TestimonialDemo() {
  const customTestimonials = [
    {
      name: "Alex Thompson",
      role: "Founder",
      company: "StartupXYZ",
      content: "Game-changing solution that helped us scale from 10 to 100+ customers in just 3 months. The ROI has been incredible.",
      rating: 5,
      avatar: "AT"
    },
    {
      name: "Jessica Wang",
      role: "Head of Design",
      company: "CreativeCorp",
      content: "Beautiful, intuitive, and powerful. Our design team productivity increased dramatically. Best tool we've ever used!",
      rating: 5,
      avatar: "JW"
    },
    {
      name: "David Miller",
      role: "VP Engineering",
      company: "TechGiant",
      content: "Robust architecture and seamless integration. Our development cycle is now 50% faster. Highly recommended for any tech team.",
      rating: 5,
      avatar: "DM"
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Customer Testimonials</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers are saying about their experience with our platform
          </p>
        </div>
        
        {/* Default Card Layout */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-gray-900">Card Style</h2>
            <p className="text-gray-600">Clean card design with shadows and hover effects</p>
          </div>
          <Testimonial variant="card" layout="grid" />
        </section>
        
        {/* Featured Dark Style */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-gray-900">Featured Style</h2>
            <p className="text-gray-600">Premium dark gradient design for highlighted testimonials</p>
          </div>
          <Testimonial variant="featured" layout="grid" testimonials={customTestimonials} />
        </section>
        
        {/* Minimal Style */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-gray-900">Minimal Style</h2>
            <p className="text-gray-600">Clean and simple design without borders or shadows</p>
          </div>
          <Testimonial variant="minimal" layout="grid" />
        </section>
        
      </div>
    </div>
  )
}