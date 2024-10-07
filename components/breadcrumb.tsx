"use client"

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface BreadcrumbProps {
  items: { href: string; label: string }[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <motion.nav 
      className="flex mb-4" 
      aria-label="Breadcrumb"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />}
            <Link
              href={item.href}
              className={`inline-flex items-center text-sm font-medium ${
                index === items.length - 1
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </motion.nav>
  )
}