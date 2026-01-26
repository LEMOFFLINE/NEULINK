'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Who We Are', href: '/who-we-are' },
  { name: 'Brands', href: '/brands' },
  { name: 'Products', href: '/products' },
  { name: 'Capabilities', href: '/capabilities' },
  { name: 'Markets', href: '/markets' },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="border-b border-gray-200 bg-white h-80">
      <div className="container mx-auto px-16 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img
            src="/AIAG logo.svg"
            alt="Advance Ingredients AG Logo"
            className="h-56 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-12">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-base transition-colors hover:text-brand-red",
                  isActive ? "text-brand-red font-medium" : "text-gray-900"
                )}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        <Link
          href="/contact"
          className="bg-brand-red text-white px-9 py-4 rounded text-base font-semibold hover:bg-brand-redDark transition-colors"
        >
          Contact
        </Link>
      </div>
    </header>
  )
}
