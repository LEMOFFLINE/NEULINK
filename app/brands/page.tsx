import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function BrandsPage() {
  return (
    <>
      <Header />
      <section className="py-32 px-16">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-6xl font-bold text-gray-900 mb-8">Our Brands</h1>
          <p className="text-xl text-gray-600">
            Three specialized brands delivering comprehensive dairy ingredient solutions
          </p>
        </div>
      </section>

      {/* NEULINK Section */}
      <section className="py-16 px-16">
        <div className="container mx-auto max-w-6xl">
          <div className="flex gap-8 mb-8">
            <div className="w-32">
              <div className="bg-brand-red py-3 px-6 rounded text-center">
                <span className="text-lg font-bold text-white">NEULINK</span>
              </div>
            </div>
            <h2 className="text-5xl font-bold text-gray-900">Trusted Connections</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our proprietary ingredient brand built on the principle of reducing information asymmetry.
                NEULINK embodies our core philosophy: Linking Trust. Creating Value.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through transparent connections and honest communication, we create efficient, value-added
                solutions tailored to our customers' specific needs.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Key Features:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-brand-red">✓</span>
                  <span className="text-gray-700">Custom solutions based on customer needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-red">✓</span>
                  <span className="text-gray-700">Transparent sourcing and specifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-red">✓</span>
                  <span className="text-gray-700">Application support from R&D network</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOONEXUS Section */}
      <section className="bg-[#F8F8F8] py-16 px-16">
        <div className="container mx-auto max-w-6xl">
          <div className="flex gap-8 mb-8">
            <div className="w-32">
              <div className="bg-brand-green py-3 px-6 rounded text-center">
                <span className="text-lg font-bold text-white">FOONEXUS</span>
              </div>
            </div>
            <h2 className="text-5xl font-bold text-gray-900">Organic Excellence</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our specialized organic product line serving the growing demand for certified organic ingredients
                in infant nutrition and health products.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                FOONEXUS represents our commitment to sustainable, traceable organic ingredients. Every product
                maintains full certification and meets the strictest organic standards.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Portfolio:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                  <span className="text-gray-700">Organic Lactose</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                  <span className="text-gray-700">Organic D90</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                  <span className="text-gray-700">Organic WPC</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                  <span className="text-gray-700">Organic GOS</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LVEO Section */}
      <section className="py-16 px-16">
        <div className="container mx-auto max-w-6xl">
          <div className="flex gap-8 mb-8">
            <div className="w-32">
              <div className="bg-brand-blue py-3 px-6 rounded text-center">
                <span className="text-lg font-bold text-white">LVEO</span>
              </div>
            </div>
            <h2 className="text-5xl font-bold text-gray-900">Protein Innovation</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Premium whey protein line with leading market influence in China's protein sector.
                LVEO delivers high-quality ingredients for performance and recovery nutrition.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our whey proteins are sourced from premium suppliers and processed to maintain optimal
                nutritional value and functional properties. LVEO serves sports nutrition, clinical nutrition, and specialized formula markets.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Portfolio:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
                  <span className="text-gray-700">WPC80</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
                  <span className="text-gray-700">WPI</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
                  <span className="text-gray-700">Hydrolyzed WPC80</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Comparison */}
      <section className="bg-[#FAFAFA] py-16 px-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Brand Overview</h2>
          <div className="space-y-4">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <span className="text-brand-red font-bold text-lg">NEULINK</span>
                </div>
                <div className="text-gray-900">Custom Solutions</div>
                <div className="text-gray-600">Tailored solutions, application support</div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <span className="text-brand-green font-bold text-lg">FOONEXUS</span>
                </div>
                <div className="text-gray-900">Organic Ingredients</div>
                <div className="text-gray-600">Organic Lactose, D90, WPC, GOS</div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <span className="text-brand-blue font-bold text-lg">LVEO</span>
                </div>
                <div className="text-gray-900">Whey Proteins</div>
                <div className="text-gray-600">WPC80, WPI, Hydrolyzed WPC80</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-red py-24 px-16 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-white mb-6">Find Your Solution</h2>
          <p className="text-xl text-white opacity-90 mb-10">
            Explore our product portfolio or contact us for customized solutions
          </p>
          <a
            href="/products"
            className="inline-block bg-white text-brand-red px-12 py-5 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            View Products
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
