import { Droplets, Phone, MapPin, Clock, FileText, Users, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="bg-blue-600 text-white shadow-lg relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Droplets size={40} className="text-blue-200" />
              <div>
                <h1 className="text-2xl font-bold">Santa Cruz Water District</h1>
                <p className="text-sm text-blue-100">Serving the Community Since 1995</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#services" className="hover:text-blue-200 transition-colors">Services</a>
              <a href="#about" className="hover:text-blue-200 transition-colors">About</a>
              <a href="#contact" className="hover:text-blue-200 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* HERO SECTION – FULL BACKGROUND IMAGE */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/tao.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Clean Water for Every Home
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Providing reliable, safe, and affordable water services to the community of Santa Cruz, Laguna
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/login"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg text-center"
              >
                Login to Account
              </a>
              <a
                href="/register"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors text-center"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-100 hover:border-blue-300 transition-all">
              <Users className="text-blue-600 mb-4" size={40} />
              <h4 className="text-xl font-semibold mb-3 text-gray-900">New Connection</h4>
              <p className="text-gray-600">Apply for water service connection for your home or business</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-100 hover:border-blue-300 transition-all">
              <FileText className="text-blue-600 mb-4" size={40} />
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Billing & Payments</h4>
              <p className="text-gray-600">View and pay your water bills online or at our office</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-100 hover:border-blue-300 transition-all">
              <CheckCircle className="text-blue-600 mb-4" size={40} />
              <h4 className="text-xl font-semibold mb-3 text-gray-900">Maintenance & Repairs</h4>
              <p className="text-gray-600">24/7 emergency response for water service issues</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Droplets size={24} className="text-blue-400" />
            <p className="text-lg font-semibold">Santa Cruz Water District</p>
          </div>
          <p className="text-gray-400">© 2026 Santa Cruz Water District. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
