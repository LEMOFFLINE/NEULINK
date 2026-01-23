import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function CapabilitiesPage() {
  return (
    <>
      <Header />
      <section className="py-32 px-16">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-6xl font-bold text-gray-900 mb-8">Capabilities</h1>
          <p className="text-xl text-gray-600 mb-20">
            End-to-end solutions powered by international expertise and robust quality systems
          </p>

          {/* R&D Expertise */}
          <section className="mb-24">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-brand-red flex items-center justify-center flex-shrink-0">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">R&D Expertise</h2>
                <p className="text-xl text-gray-600 mb-6">
                  International expert network providing technical support and application solutions
                </p>
              </div>
            </div>
            <div className="pl-22">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Support</h3>
                  <p className="text-gray-600">
                    Our R&D experts work directly with your team to develop customized solutions, optimize formulations, and troubleshoot technical challenges.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Formula Development</h3>
                  <p className="text-gray-600">
                    From concept to commercialization, we support the entire product development process with technical expertise and market insights.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Ingredient Innovation</h3>
                  <p className="text-gray-600">
                    Access to the latest ingredient innovations and emerging trends through our global research network.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Training</h3>
                  <p className="text-gray-600">
                    Knowledge transfer and training programs to help your team understand ingredient functionality and application best practices.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Supply Chain Management */}
          <section className="mb-24">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-brand-peach flex items-center justify-center flex-shrink-0">
                <span className="text-brand-red text-2xl font-bold">2</span>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Supply Chain Management</h2>
                <p className="text-xl text-gray-600 mb-6">
                  Reliable logistics and inventory management ensuring consistent supply
                </p>
              </div>
            </div>
            <div className="pl-22">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Sourcing Excellence</h3>
                  <p className="text-gray-600">
                    Direct relationships with premium dairy producers globally, ensuring quality and supply security.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Inventory Management</h3>
                  <p className="text-gray-600">
                    Strategic warehousing and just-in-time delivery to optimize your inventory costs while ensuring supply continuity.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Logistics Coordination</h3>
                  <p className="text-gray-600">
                    End-to-end logistics management from origin to destination, including customs clearance and regulatory compliance.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Supply Security</h3>
                  <p className="text-gray-600">
                    Multiple sourcing options and contingency planning to mitigate supply chain risks.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Quality Control */}
          <section className="mb-24">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-brand-red flex items-center justify-center flex-shrink-0">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Quality Control</h2>
                <p className="text-xl text-gray-600 mb-6">
                  Rigorous quality systems ensuring product safety and compliance
                </p>
              </div>
            </div>
            <div className="pl-22">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Certification Management</h3>
                  <p className="text-gray-600">
                    Full certification support including organic, kosher, halal, and food safety standards (ISO, HACCP, FSSC).
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Specification Compliance</h3>
                  <p className="text-gray-600">
                    Strict adherence to product specifications with comprehensive testing and documentation.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Traceability</h3>
                  <p className="text-gray-600">
                    Complete batch traceability from origin to delivery, ensuring transparency and accountability.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Regulatory Support</h3>
                  <p className="text-gray-600">
                    Expert guidance on regulatory requirements for China, Southeast Asia, and international markets.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Process Overview */}
          <section className="bg-[#F8F8F8] p-12 rounded-xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Process</h2>
            <div className="grid md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-brand-red mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Understand</h3>
                <p className="text-sm text-gray-600">Identify requirements</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-brand-red mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Source</h3>
                <p className="text-sm text-gray-600">Select quality suppliers</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-brand-red mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Develop</h3>
                <p className="text-sm text-gray-600">Customize solutions</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-brand-red mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Deliver</h3>
                <p className="text-sm text-gray-600">Ensure timely logistics</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-brand-red mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">5</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Support</h3>
                <p className="text-sm text-gray-600">Ongoing partnership</p>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </>
  )
}
