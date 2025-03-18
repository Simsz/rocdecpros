import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Services | Rochester Deck Pros",
  description: "Explore our comprehensive deck building, repair, and maintenance services in Rochester, NY. From custom designs to seasonal maintenance, we've got you covered."
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900">
        <div className="absolute inset-0 bg-black/70 z-0">
          <Image 
            src="/images/services-hero.jpg" 
            alt="Deck builder working in Rochester, NY" 
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="heading-xl mb-6">Our <span className="text-red-600">Services</span></h1>
          <p className="text-xl max-w-3xl mx-auto">
            We offer a complete range of deck services designed specifically for Rochester's unique climate and lifestyle needs.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section">
        <div className="container">
          {/* Design Service */}
          <div id="design" className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-16 border-b border-gray-200">
            <div className="order-2 md:order-1">
              <h2 className="heading-lg mb-6">Custom Deck Design</h2>
              <p className="mb-4">
                Every great deck begins with a great design. Our design services focus on creating outdoor spaces 
                that are beautiful, functional, and perfectly suited to Rochester's climate.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span><strong>3D Visualization</strong> - See your deck before it's built with our advanced 3D rendering tools.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span><strong>Material Selection</strong> - Choose from a variety of premium woods and composites that stand up to Rochester winters.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span><strong>Custom Features</strong> - From built-in seating to pergolas and outdoor kitchens, we can design the perfect features for your lifestyle.</span>
                </li>
              </ul>
              <p className="text-gray-700 italic">
                "Our design process starts with understanding how you want to use your space. We consider Rochester's seasonal changes, 
                the architecture of your home, and your personal style to create a design that works perfectly."
              </p>
            </div>
            <div className="order-1 md:order-2 relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/images/deck-design.jpg" 
                alt="Custom deck design for Rochester home" 
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Construction Service */}
          <div id="construction" className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-16 border-b border-gray-200">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/images/deck-construction.jpg" 
                alt="Deck construction in Rochester" 
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="heading-lg mb-6">Deck Construction</h2>
              <p className="mb-4">
                Our skilled craftsmen bring decades of experience to every deck construction project. 
                We build decks that last through Rochester's harsh winters and hot summers.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span><strong>Quality Craftsmanship</strong> - Every nail, screw, and board is installed with precision and care.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span><strong>Premium Materials</strong> - We use only the highest quality materials that can withstand Rochester's weather.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span><strong>Proper Permits</strong> - We handle all necessary permits and inspections to ensure your deck is built to code.</span>
                </li>
              </ul>
              <p className="text-gray-700 italic">
                "We understand Rochester's unique building requirements and climate challenges. Our construction techniques 
                are specifically designed to create decks that remain beautiful and structurally sound for decades."
              </p>
            </div>
          </div>

          {/* Maintenance Service */}
          <div id="maintenance" className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-16">
            <div className="order-2 md:order-1">
              <h2 className="heading-lg mb-6">Repair & Maintenance</h2>
              <p className="mb-4">
                Keep your deck looking its best with our comprehensive repair and maintenance services, 
                designed specifically for decks in the Rochester area.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span><strong>Annual Inspections</strong> - Spot and address problems before they become serious.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span><strong>Repair Services</strong> - From board replacements to structural repairs, we can fix any deck issue.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span><strong>Seasonal Cleaning & Staining</strong> - Protect your deck from Rochester's harsh seasonal changes.</span>
                </li>
              </ul>
              <p className="text-gray-700 italic">
                "Regular maintenance is crucial in Rochester's climate. From winter snow load damage to summer sun exposure, 
                our maintenance programs are specifically designed to address the unique challenges faced by local decks."
              </p>
            </div>
            <div className="order-1 md:order-2 relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/images/deck-maintenance.jpg" 
                alt="Deck maintenance in Rochester, NY" 
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gray-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Contact us today for a free consultation and estimate on your Rochester deck project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#contact" className="btn-primary">
                Get a Free Quote
              </Link>
              <Link href="/gallery" className="btn-outline">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 