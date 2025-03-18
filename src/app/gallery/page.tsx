'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Project Gallery | Rochester Deck Pros",
  description: "Browse our showcase of completed deck projects in the Rochester, NY area. Get inspired for your own outdoor space transformation."
};

// Image gallery data - in a real application, this would come from a database
const galleryProjects = [
  {
    id: 1,
    title: "Modern Composite Deck in Brighton",
    description: "A spacious multi-level composite deck with glass railings and built-in lighting.",
    location: "Brighton, NY",
    category: "Composite Decks",
    featuredImage: "/images/gallery/brighton-deck.jpg",
    images: [
      "/images/gallery/brighton-deck.jpg",
      "/images/gallery/brighton-deck-2.jpg",
      "/images/gallery/brighton-deck-3.jpg",
    ]
  },
  {
    id: 2,
    title: "Cedar Pergola and Deck",
    description: "Natural cedar deck with a custom-built pergola and integrated seating area.",
    location: "Pittsford, NY",
    category: "Wood Decks",
    featuredImage: "/images/gallery/pittsford-deck.jpg",
    images: [
      "/images/gallery/pittsford-deck.jpg",
      "/images/gallery/pittsford-deck-2.jpg",
      "/images/gallery/pittsford-deck-3.jpg",
    ]
  },
  {
    id: 3,
    title: "Lakefront Deck with View",
    description: "Waterfront composite deck with cable railings designed to maximize the lake view.",
    location: "Irondequoit, NY",
    category: "Waterfront Decks",
    featuredImage: "/images/gallery/irondequoit-deck.jpg",
    images: [
      "/images/gallery/irondequoit-deck.jpg",
      "/images/gallery/irondequoit-deck-2.jpg",
      "/images/gallery/irondequoit-deck-3.jpg",
    ]
  },
  {
    id: 4,
    title: "Traditional Wood Deck with Fire Pit",
    description: "Pressure-treated pine deck with a stone fire pit and custom lighting.",
    location: "Greece, NY",
    category: "Wood Decks",
    featuredImage: "/images/gallery/greece-deck.jpg",
    images: [
      "/images/gallery/greece-deck.jpg",
      "/images/gallery/greece-deck-2.jpg",
      "/images/gallery/greece-deck-3.jpg",
    ]
  },
  {
    id: 5,
    title: "Multi-Level Entertainment Deck",
    description: "Three-tiered composite deck with outdoor kitchen and dining area.",
    location: "Henrietta, NY",
    category: "Composite Decks",
    featuredImage: "/images/gallery/henrietta-deck.jpg",
    images: [
      "/images/gallery/henrietta-deck.jpg",
      "/images/gallery/henrietta-deck-2.jpg",
      "/images/gallery/henrietta-deck-3.jpg",
    ]
  },
  {
    id: 6,
    title: "Deck Restoration Project",
    description: "Complete restoration of a weathered deck, including structural repairs and refinishing.",
    location: "Webster, NY",
    category: "Restoration",
    featuredImage: "/images/gallery/webster-deck.jpg",
    images: [
      "/images/gallery/webster-deck.jpg",
      "/images/gallery/webster-deck-2.jpg",
      "/images/gallery/webster-deck-3.jpg",
    ]
  },
];

// Categories for filtering
const categories = [
  "All Projects",
  "Composite Decks", 
  "Wood Decks", 
  "Waterfront Decks", 
  "Restoration"
];

export default function GalleryPage() {
  // State for modal and filtering
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Filter projects by category
  const filteredProjects = activeCategory === "All Projects" 
    ? galleryProjects 
    : galleryProjects.filter(project => project.category === activeCategory);

  // Open modal with project details
  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  // Close modal
  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Navigate to next image in modal
  const nextImage = () => {
    if (!selectedProject) return;
    const newIndex = (currentImageIndex + 1) % selectedProject.images.length;
    setCurrentImageIndex(newIndex);
  };

  // Navigate to previous image in modal
  const prevImage = () => {
    if (!selectedProject) return;
    const newIndex = (currentImageIndex - 1 + selectedProject.images.length) % selectedProject.images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900">
        <div className="absolute inset-0 bg-black/70 z-0">
          <Image 
            src="/images/gallery-hero.jpg" 
            alt="Deck project in Rochester, NY" 
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="heading-xl mb-6">Our <span className="text-red-600">Project Gallery</span></h1>
          <p className="text-xl max-w-3xl mx-auto">
            Browse our collection of completed deck projects throughout the Rochester area.
            Get inspired for your own outdoor transformation.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section">
        <div className="container">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeCategory === category 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => openModal(project)}
              >
                <div className="relative h-64">
                  <Image 
                    src={project.featuredImage} 
                    alt={project.title} 
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-red-600 text-white rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-2">{project.location}</p>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold mb-2">No projects found</h3>
              <p className="text-gray-600">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="max-w-5xl w-full bg-white rounded-lg overflow-hidden relative">
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 z-10 bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center"
              onClick={closeModal}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative h-[60vh]">
              <Image 
                src={selectedProject.images[currentImageIndex]} 
                alt={selectedProject.title} 
                fill
                style={{ objectFit: 'cover' }}
              />
              
              {/* Navigation Arrows */}
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {selectedProject.images.length}
              </div>
            </div>
            
            {/* Project Info */}
            <div className="p-6">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-red-600 text-white rounded-full mb-2">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-gray-600 mb-4">{selectedProject.location}</p>
              <p className="text-gray-700 mb-6">{selectedProject.description}</p>
              <div className="flex justify-end">
                <Link href="#contact" onClick={closeModal} className="btn-primary">
                  Get a Similar Deck
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="section bg-gray-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">Ready to Transform Your Outdoor Space?</h2>
            <p className="text-xl mb-8">
              Contact us today to discuss your project and receive a free estimate.
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