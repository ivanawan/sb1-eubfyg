"use client"

import { Bell, Search, User, Plus, ChevronDown } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { motion } from 'framer-motion'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const headerMenuItems = [
  {
    title: "Create",
    icon: Plus,
    submenu: [
      { title: "New Project", href: "/new-project" },
      { title: "New Task", href: "/new-task" },
      { title: "New Document", href: "/new-document" },
    ]
  },
  {
    title: "Notifications",
    icon: Bell,
    submenu: [
      { title: "View All", href: "/notifications" },
      { title: "Mark All as Read", href: "#" },
    ]
  },
  {
    title: "Account",
    icon: User,
    submenu: [
      { title: "Profile", href: "/profile" },
      { title: "Settings", href: "/settings" },
      { title: "Logout", href: "/logout" },
    ]
  },
]

export function Header() {
  return (
    <motion.header 
      className="flex h-14 items-center gap-4 border-b glassy glow px-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <form className="flex-1">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full appearance-none bg-transparent pl-8 sm:w-64 xl:w-80"
          />
        </div>
      </form>
      {headerMenuItems.map((item, index) => (
        <DropdownMenu key={index}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              <item.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{item.title}</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>{item.title}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {item.submenu.map((subItem, subIndex) => (
              <DropdownMenuItem key={subIndex}>
                {subItem.title}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
      <ThemeToggle />
    </motion.header>
  )
}