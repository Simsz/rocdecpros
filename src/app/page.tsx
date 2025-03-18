import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-black z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 z-10" />
          <Image 
            src="/images/hero-deck.jpg" 
            alt="Beautiful deck in Rochester, NY" 
            fill
            style={{ objectFit: 'cover' }}
            priority
            quality={90}
          />
        </div>
        <div className="container mx-auto px-4 z-20 text-white">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">
              Premium Deck Building in <span className="text-red-600">Rochester, NY</span>
            </h1>
            <p className="text-xl mb-8">
              Transform your outdoor space with Rochester's most trusted deck building experts. 
              Quality craftsmanship, exceptional designs, and unmatched durability.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="btn-primary">
                Explore Our Services
              </Link>
              <Link href="/gallery" className="btn-outline">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-gray-100">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-lg mb-6">
                Rochester's Premier <span className="text-red-600">Deck Builders</span>
              </h2>
              <p className="mb-4">
                At Rochester Deck Pros, we bring over 15 years of experience to every project. 
                Our team of skilled craftsmen is dedicated to creating beautiful, functional outdoor spaces 
                that withstand the unique Rochester climate.
              </p>
              <p className="mb-6">
                From concept to completion, we work closely with our clients to ensure their vision comes to life.
                Our attention to detail and commitment to quality have made us the top choice for deck building 
                throughout Monroe County.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Fully licensed and insured</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Premium materials built to last Rochester winters</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Award-winning designs</span>
                </li>
              </ul>
              <Link href="/services" className="btn-primary">
                Our Services
              </Link>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/about-deck.jpg" 
                alt="Custom deck in Rochester" 
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our <span className="text-red-600">Services</span></h2>
            <p className="max-w-3xl mx-auto text-lg">
              From design to maintenance, we provide comprehensive deck services tailored to Rochester's unique environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-100 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Deck Design</h3>
              <p className="mb-4">Personalized designs that complement your home and maximize your outdoor space.</p>
              <Link href="/services#design" className="text-red-600 hover:text-red-800 font-medium inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            
            {/* Service 2 */}
            <div className="bg-gray-100 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Deck Construction</h3>
              <p className="mb-4">Expert construction with premium materials built to withstand Rochester's harsh weather.</p>
              <Link href="/services#construction" className="text-red-600 hover:text-red-800 font-medium inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            
            {/* Service 3 */}
            <div className="bg-gray-100 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Deck Repair & Maintenance</h3>
              <p className="mb-4">Keep your deck looking and performing its best with our expert repair and maintenance services.</p>
              <Link href="/services#maintenance" className="text-red-600 hover:text-red-800 font-medium inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-black relative py-20">
        <div className="absolute inset-0 opacity-30 z-0">
          <Image 
            src="/images/rochester-skyline.jpg" 
            alt="Rochester skyline" 
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="heading-lg mb-6">Ready to Transform Your Outdoor Space?</h2>
            <p className="text-xl mb-8">
              Contact us today for a free consultation and estimate. Let's create the perfect deck for your Rochester home.
            </p>
            <Link href="#contact" className="btn-primary">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
