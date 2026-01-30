'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/who-we-are' },
  { name: 'Solutions', href: '/capabilities' },
  { name: 'Brands & Products', href: '/brands' },
  { name: 'Markets', href: '/markets' },
  { name: 'Contact Us', href: '/contact' },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="border-b border-gray-100 bg-bg-primary h-24 shadow-sm">
      <div className="container mx-auto px-16 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img
            src="/AIAG logo.svg"
            alt="Advance Ingredients AG Logo"
            className="h-28 w-auto"
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
                  "text-base transition-colors hover:text-primary",
                  isActive ? "text-primary font-medium" : "text-text-primary"
                )}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        <Link
          href="/contact"
          className="bg-primary text-white px-9 py-4 rounded text-base font-semibold hover:bg-primary-hover transition-all shadow-md hover:shadow-lg"
        >
          Contact
        </Link>
      </div>
    </header>
  )
}
