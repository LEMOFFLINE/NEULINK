import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-[#FAFAFA] py-32 px-16">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <span className="inline-block text-brand-red text-sm font-medium tracking-wider">
              Switzerland · Est. 2019
            </span>
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Linking Trust. Creating Value.
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl">
            Dairy ingredient solutions enabled by international R&D expertise, supply chain management, and quality control.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brand-red text-white px-10 py-5 rounded-lg text-base font-semibold hover:bg-brand-redDark transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Who We Are Summary */}
      <section className="py-24 px-16">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              Advance Ingredients AG is a Swiss company headquartered in Schaffhausen, founded in 2019. We specialize in dairy ingredient solutions, serving the infant formula, medical nutrition, and sports nutrition industries across China and Southeast Asia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <div className="w-16 h-16 rounded-full bg-brand-peach"></div>
              <h3 className="text-xl font-semibold text-gray-900">R&D Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                International research collaboration driving innovative solutions
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-16 h-16 rounded-full bg-brand-peach"></div>
              <h3 className="text-xl font-semibold text-gray-900">Supply Chain</h3>
              <p className="text-gray-600 leading-relaxed">
                Reliable delivery through coordinated global resource management
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-16 h-16 rounded-full bg-brand-peach"></div>
              <h3 className="text-xl font-semibold text-gray-900">Quality Control</h3>
              <p className="text-gray-600 leading-relaxed">
                Consistent standards with full traceability and compliance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="bg-[#F8F8F8] py-24 px-16">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Brands</h2>
            <p className="text-lg text-gray-600">
              Three specialized brands delivering comprehensive dairy ingredient solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* NEULINK */}
            <div className="bg-white rounded-xl p-10 shadow-sm">
              <div className="w-32 mb-6">
                <div className="bg-brand-red py-3 px-6 rounded text-center">
                  <span className="text-sm font-bold text-white">NEULINK</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted Connections</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our proprietary ingredient brand built on the principle of reducing information asymmetry. Linking trust through transparency to create efficient, value-added solutions.
              </p>
              <p className="text-sm text-brand-red font-medium">
                Custom solutions based on customer needs
              </p>
            </div>

            {/* FOONEXUS */}
            <div className="bg-white rounded-xl p-10 shadow-sm">
              <div className="w-32 mb-6">
                <div className="bg-brand-green py-3 px-6 rounded text-center">
                  <span className="text-sm font-bold text-white">FOONEXUS</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Organic Excellence</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Specialized organic product line serving the growing demand for certified organic ingredients in infant nutrition and health products.
              </p>
              <p className="text-sm text-brand-green font-medium">
                Organic Lactose · D90 · WPC · GOS
              </p>
            </div>

            {/* LVEO */}
            <div className="bg-white rounded-xl p-10 shadow-sm">
              <div className="w-32 mb-6">
                <div className="bg-brand-blue py-3 px-6 rounded text-center">
                  <span className="text-sm font-bold text-white">LVEO</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Protein Innovation</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Premium whey protein line with leading market influence in China's protein sector. High-quality ingredients for performance and recovery nutrition.
              </p>
              <p className="text-sm text-brand-blue font-medium">
                WPC80 · WPI · Hydrolyzed WPC80
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 px-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Product Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-xl p-10 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-brand-green mb-6"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Organic Ingredients</h3>
              <p className="text-sm font-bold text-brand-green mb-2">FOONEXUS</p>
              <p className="text-gray-600 leading-relaxed">
                Organic Lactose · Organic D90 · Organic WPC · Organic GOS
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-10 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-brand-blue mb-6"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Whey Proteins</h3>
              <p className="text-sm font-bold text-brand-blue mb-2">LVEO</p>
              <p className="text-gray-600 leading-relaxed">
                WPC80 · WPI · Hydrolyzed WPC80
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-10 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-brand-red mb-6"></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Custom Solutions</h3>
              <p className="text-sm font-bold text-brand-red mb-2">NEULINK</p>
              <p className="text-gray-600 leading-relaxed">
                Tailored solutions based on specific customer requirements and applications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#FAFAFA] py-24 px-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Integrity & Transparency</h2>
          <p className="text-lg text-gray-600 mb-16">
            We believe trust is not a slogan but the result of consistent delivery over time. Being sincere to our customers means communicating clearly, making commitments we can stand behind, and surfacing risks early.
          </p>
          <div className="space-y-12">
            <div className="flex gap-8">
              <span className="text-6xl font-bold text-brand-red opacity-20">1</span>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Speak the truth</h3>
                <p className="text-gray-600 leading-relaxed">
                  No exaggeration and no ambiguity on what matters. We provide clear, verifiable information on origin, specifications, lead time and limitations.
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <span className="text-6xl font-bold text-brand-red opacity-20">2</span>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Share what matters</h3>
                <p className="text-gray-600 leading-relaxed">
                  We proactively reduce information asymmetry so customers can make informed decisions, lowering transaction costs, and improving collaboration efficiency.
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <span className="text-6xl font-bold text-brand-red opacity-20">3</span>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Deliver consistently</h3>
                <p className="text-gray-600 leading-relaxed">
                  Enabled by international R&D expert collaboration, supply chain management, and quality control, we pursue stable delivery and consistent quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Process */}
      <section className="py-24 px-16">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">How We Work</h2>
          <p className="text-lg text-gray-600 mb-12">
            A systematic approach to delivering tailored dairy ingredient solutions
          </p>
          <div className="grid grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-brand-red mx-auto mb-4"></div>
              <h4 className="font-semibold text-gray-900 mb-2">Design</h4>
              <p className="text-sm text-gray-600">Solution design and matching</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-brand-peach mx-auto mb-4"></div>
              <h4 className="font-semibold text-gray-900 mb-2">Validate</h4>
              <p className="text-sm text-gray-600">Sample testing and verification</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-brand-red mx-auto mb-4"></div>
              <h4 className="font-semibold text-gray-900 mb-2">Plan</h4>
              <p className="text-sm text-gray-600">Supply chain planning</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-brand-peach mx-auto mb-4"></div>
              <h4 className="font-semibold text-gray-900 mb-2">Control</h4>
              <p className="text-sm text-gray-600">Quality control & traceability</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-brand-red mx-auto mb-4"></div>
              <h4 className="font-semibold text-gray-900 mb-2">Optimize</h4>
              <p className="text-sm text-gray-600">Review and continuous improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="bg-[#F8F8F8] py-24 px-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Markets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">China</h3>
              <p className="text-gray-600 leading-relaxed">
                The world's largest infant formula market with growing demand for premium ingredients
              </p>
            </div>
            <div className="bg-white rounded-xl p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Southeast Asia</h3>
              <p className="text-gray-600 leading-relaxed">
                Emerging markets with rising middle class and increasing health awareness
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
