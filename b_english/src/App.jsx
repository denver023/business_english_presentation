import React, { useState } from 'react';
// Importing icons from lucide-react for a modern look
import { CheckCircle, Users, Settings, MessageSquare, Star, Briefcase, Cloud, ShieldCheck, Menu, X, Code } from 'lucide-react'; // Added Code icon
import './App.css';

// Main App component
function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to handle smooth scrolling
  const handleScroll = (e, targetId) => {
    e.preventDefault(); // Prevent default jump behavior
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile menu after clicking a link
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800">
      {/* Navigation Bar */}
      <header className="bg-white shadow-lg py-4 px-6 md:px-12 sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <a href="#hero" onClick={(e) => handleScroll(e, 'hero')} className="text-3xl font-extrabold text-blue-600 tracking-tight">
            Techspire Solutions
          </a>
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            <li><a href="#hero" onClick={(e) => handleScroll(e, 'hero')} className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">Home</a></li>
            <li><a href="#features" onClick={(e) => handleScroll(e, 'features')} className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">Features</a></li>
            <li><a href="#services" onClick={(e) => handleScroll(e, 'services')} className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">Services</a></li>
            <li><a href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">About Us</a></li>
            <li><a href="#testimonials" onClick={(e) => handleScroll(e, 'testimonials')} className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">Testimonials</a></li>
            <li><a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">Contact</a></li>
          </ul>
          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </nav>

        {/* Mobile Navigation (Conditional Rendering with Animation) */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 z-40
            transition-all duration-300 ease-in-out transform
            ${isMobileMenuOpen ? 'max-h-screen opacity-100 translate-y-0 pointer-events-auto' : 'max-h-0 opacity-0 -translate-y-2 overflow-hidden pointer-events-none'}`}
        >
          <ul className="flex flex-col items-center space-y-4">
            <li><a href="#hero" onClick={(e) => handleScroll(e, 'hero')} className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition duration-300">Home</a></li>
            <li><a href="#features" onClick={(e) => handleScroll(e, 'features')} className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition duration-300">Features</a></li>
            <li><a href="#services" onClick={(e) => handleScroll(e, 'services')} className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition duration-300">Services</a></li>
            <li><a href="#about" onClick={(e) => handleScroll(e, 'about')} className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition duration-300">About Us</a></li>
            <li><a href="#testimonials" onClick={(e) => handleScroll(e, 'testimonials')} className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition duration-300">Testimonials</a></li>
            <li><a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition duration-300">Contact</a></li>
          </ul>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-24 px-6 md:py-36 md:px-12 text-center rounded-b-3xl shadow-xl">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            Transform Your Business with Our Cutting-Edge Solutions
          </h1>
          <p className="text-lg md:text-xl mb-10 opacity-90 animate-fade-in-up delay-200">
            Empowering companies worldwide with innovative technology and unparalleled support.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up delay-400">
            <button className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75">
              Get Started Free
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 md:py-28 md:px-12 bg-white">
        <div className="container mx-auto text-center max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Powerful Features for Your Success</h2>
          <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
            Discover how our comprehensive tools can streamline your operations and boost productivity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Feature Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex justify-center mb-6">
                <CheckCircle className="w-16 h-16 text-green-500 bg-green-100 p-3 rounded-full" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Intuitive Dashboard</h3>
              <p className="text-gray-600 leading-relaxed">
                Easily manage all your projects and tasks from a single, user-friendly interface. Stay organized and efficient.
              </p>
            </div>
            {/* Feature Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex justify-center mb-6">
                <Users className="w-16 h-16 text-purple-500 bg-purple-100 p-3 rounded-full" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Collaborative Tools</h3>
              <p className="text-gray-600 leading-relaxed">
                Work seamlessly with your team, share ideas, and track progress in real-time, no matter where you are.
              </p>
            </div>
            {/* Feature Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex justify-center mb-6">
                <Settings className="w-16 h-16 text-orange-500 bg-orange-100 p-3 rounded-full" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Advanced Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                Gain valuable insights with detailed reports and customizable analytics to make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 md:py-28 md:px-12 bg-gray-100">
        <div className="container mx-auto text-center max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Comprehensive Services</h2>
          <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
            We offer a wide range of services designed to meet your unique business needs and drive growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Service Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex justify-center mb-6">
                <Briefcase className="w-16 h-16 text-blue-500 bg-blue-100 p-3 rounded-full" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Consulting & Strategy</h3>
              <p className="text-gray-600 leading-relaxed">
                Expert guidance to develop robust strategies and optimize your business processes for maximum efficiency.
              </p>
            </div>
            {/* Service Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex justify-center mb-6">
                <Cloud className="w-16 h-16 text-teal-500 bg-teal-100 p-3 rounded-full" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Cloud Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Seamless migration and management of your infrastructure to the cloud, ensuring scalability and security.
              </p>
            </div>
            {/* Service Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex justify-center mb-6">
                <ShieldCheck className="w-16 h-16 text-red-500 bg-red-100 p-3 rounded-full" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Cybersecurity</h3>
              <p className="text-gray-600 leading-relaxed">
                Protect your valuable data and systems with our advanced cybersecurity measures and proactive monitoring.
              </p>
            </div>
          </div>

          {/* --- Our Recent Projects Section --- */}
          <div className="mt-20 pt-16 border-t border-gray-200">
            <h3 className="text-4xl font-bold text-gray-800 mb-6 flex items-center justify-center">
              <Code className="w-9 h-9 mr-3 text-blue-600" />
              Our Recent Projects
            </h3>
            <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
              Explore some of our latest successful projects and see the quality of our work firsthand.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Project Card 1: Pizza Web App */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border border-gray-100">
                <img
                  src="assets/image/nightpizza.jpg"
                  alt="Pizza Web App" // Updated alt text
                  className="rounded-lg mb-6 w-full h-auto object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x350/E0F2F7/000000?text=Pizza+Web+App"; }}
                />
                <h4 className="text-2xl font-semibold text-gray-700 mb-3">Pizza Web App</h4> {/* Updated title */}
                <p className="text-gray-600 leading-relaxed">
                  Developed a user-friendly online platform for ordering custom pizzas, featuring real-time order tracking and secure payment integration.
                </p>
                <a href="https://night-pizza-i19fbfb4v-denver023s-projects.vercel.app" className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium transition duration-300">
                  View &rarr;
                </a>
              </div>
              {/* Project Card 2: Inventory System */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border border-gray-100">
                <img
                  src="assets/image/dinventory.jpg"
                  alt="Inventory System" // Updated alt text
                  className="rounded-lg mb-6 w-full h-auto object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x350/E0F2F7/000000?text=Inventory+System"; }}
                />
                <h4 className="text-2xl font-semibold text-gray-700 mb-3">Inventory System</h4> {/* Updated title */}
                <p className="text-gray-600 leading-relaxed">
                  Created a robust inventory management system to streamline stock control, track product movements, and optimize supply chain efficiency for businesses.
                </p>
                <a href="https://inventory-omega-pink.vercel.app/" className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium transition duration-300">
                  View &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:py-28 md:px-12 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 max-w-6xl">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Techspire Solutions, we believe in the power of technology to simplify complex challenges. Our journey began with a vision to create tools that are not only powerful but also incredibly easy to use, enabling businesses of all sizes to thrive in the digital age.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We are a passionate team of innovators, designers, and developers dedicated to delivering excellence. Our commitment to continuous improvement and customer satisfaction drives everything we do.
            </p>
            <button className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
              Meet the Team
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* Placeholder Image */}
            <img
              src="assets/image/team.jpg"
              alt="About Us"
              className="rounded-xl shadow-xl w-full max-w-md md:max-w-full h-auto object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/ADD8E6/000000?text=Image+Not+Found"; }}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 md:py-28 md:px-12 bg-gray-100">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
            Hear directly from the businesses that have transformed their operations with Techspire Solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Testimonial Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg italic text-gray-700 mb-6">
                "Techspire Solutions has revolutionized how we manage our projects. The intuitive interface and powerful features have significantly boosted our team's productivity. Highly recommended!"
              </p>
              <div className="flex items-center justify-center">
                <img
                  src="https://placehold.co/60x60/D3D3D3/000000?text=JD"
                  alt="Client Avatar"
                  className="w-14 h-14 rounded-full mr-4 object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/60x60/D3D3D3/000000?text=JD"; }}
                />
                <div>
                  <p className="font-semibold text-gray-800">Jane Doe</p>
                  <p className="text-sm text-gray-500">CEO, Tech Solutions</p>
                </div>
              </div>
            </div>
            {/* Testimonial Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg italic text-gray-700 mb-6">
                "The support team is exceptional, and the platform's analytics have given us insights we never had before. A game-changer for our marketing strategy!"
              </p>
              <div className="flex items-center justify-center">
                <img
                  src="https://placehold.co/60x60/D3D3D3/000000?text=AS"
                  alt="Client Avatar"
                  className="w-14 h-14 rounded-full mr-4 object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/60x60/D3D3D3/000000?text=AS"; }}
                />
                <div>
                  <p className="font-semibold text-gray-800">Alex Smith</p>
                  <p className="text-sm text-gray-500">Marketing Director, Global Corp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="contact" className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20 px-6 md:py-28 md:px-12 text-center rounded-t-3xl shadow-xl">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Business?</h2>
          <p className="text-lg md:text-xl mb-10 opacity-90">
            Join thousands of satisfied customers who are already experiencing the benefits. Don't miss out!
          </p>
          <button className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75">
            Contact Our Sales Team
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-10 px-6 md:px-12 text-center">
        <div className="container mx-auto">
          <p className="mb-4">&copy; {new Date().getFullYear()} Techspire Solutions. All rights reserved.</p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="hover:text-blue-400 transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition duration-300">Terms of Service</a>
            <a href="#" className="hover:text-400 transition duration-300">FAQ</a>
          </div>
          <div className="mt-8 flex justify-center space-x-6">
            {/* Social Media Icons - Placeholder */}
            <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c-1.096.376-2.275.602-3.494.602C2.062 20.853 0 18.791 0 16.297c0-2.494 2.062-4.556 4.796-4.556 1.219 0 2.4.226 3.494.602 1.096.376 2.062.88 2.89 1.488.828.608 1.488 1.29 1.98 2.032.492.742.742 1.55.742 2.428 0 .878-.25 1.686-.742 2.428-.492.742-1.152 1.424-1.98 2.032-.828.608-1.794 1.112-2.89 1.488zM24 8.703c0-2.494-2.062-4.556-4.796-4.556-1.219 0-2.4.226-3.494.602-1.096.376-2.062.88-2.89 1.488-.828.608-1.488 1.29-1.98 2.032-.492.742-.742 1.55-.742 2.428 0 .878.25 1.686.742 2.428.492.742 1.152 1.424 1.98 2.032.828.608 1.794 1.112 2.89 1.488 1.096.376 2.275.602 3.494.602 2.734 0 4.796-2.062 4.796-4.556 0-2.494-2.062-4.556-4.796-4.556z"/></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.772 1.691 4.91 4.91.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.252-1.691 4.772-4.91 4.91-.058.003-1.265.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.772-1.691-4.91-4.91-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.252 1.691-4.772 4.91-4.91zM12 0C8.74 0 8.333.014 7.05.072c-3.58.158-5.07 1.66-5.228 5.228-.058 1.28-.072 1.687-.072 4.95s.014 3.67.072 4.95c.158 3.58 1.66 5.07 5.228 5.228 1.28.058 1.687.072 4.95.072s3.67-.014 4.95-.072c3.58-.158 5.07-1.66 5.228-5.228.058-1.28.072-1.687.072-4.95s-.014-3.67-.072-4.95c-.158-3.58-1.66-5.07-5.228-5.228C15.667 0 15.26 0 12 0zm0 4.768c-3.092 0-5.23 2.139-5.23 5.23s2.138 5.23 5.23 5.23 5.23-2.139 5.23-5.23-2.138-5.23-5.23-5.23zm0 8.68c-1.928 0-3.45-1.522-3.45-3.45s1.522-3.45 3.45-3.45 3.45 1.522 3.45 3.45-1.522 3.45-3.45 3.45z"/></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.46 6.07c-.66.29-1.37.49-2.1.58.76-.46 1.34-1.18 1.62-2.04-.71.42-1.5.73-2.34.9-.67-.72-1.62-1.17-2.68-1.17-2.03 0-3.67 1.64-3.67 3.67 0 .29.03.57.08.84-3.05-.15-5.76-1.61-7.57-3.88-.32.55-.5 1.19-.5 1.88 0 1.27.64 2.39 1.62 3.06-.6-.02-1.17-.18-1.67-.46v.05c0 1.78 1.27 3.27 2.95 3.61-.31.08-.64.12-.98.12-.24 0-.47-.02-.7-.07.47 1.46 1.83 2.53 3.45 2.56-1.26.99-2.85 1.58-4.58 1.58-.3 0-.6-.02-.89-.06 1.63 1.05 3.57 1.66 5.65 1.66 6.78 0 10.49-5.62 10.49-10.49v-.48c.72-.52 1.34-1.17 1.83-1.9z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
