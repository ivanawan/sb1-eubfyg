"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  ChevronRight, 
  LayoutDashboard, 
  Settings, 
  Users, 
  BarChart, 
  FileText, 
  HelpCircle, 
  Menu,
  Briefcase,
  Calendar,
  Trello
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { TeamSwitcher } from '@/components/team-switcher'

const sidebarNavItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/"
  },
  {
    title: "Modules",
    icon: Briefcase,
    submenu: [
      { title: "Marketing", href: "/modules/marketing" },
      { title: "Operational", href: "/modules/operational" },
      { title: "Sales", href: "/modules/sales" },
      { title: "Finance", href: "/modules/finance" },
      { title: "HR", href: "/modules/hr" },
    ]
  },
  {
    title: "Documents",
    icon: FileText,
    href: "/documents"
  },
  {
    title: "Projects",
    icon: Users,
    href: "/projects"
  },
  {
    title: "Board",
    icon: Trello,
    href: "/board"
  },
  {
    title: "Calendar",
    icon: Calendar,
    href: "/calendar"
  },
  {
    title: "Reports",
    icon: BarChart,
    href: "/reports"
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings"
  },
  {
    title: "Help & Support",
    icon: HelpCircle,
    href: "/help"
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  return (
    <motion.div 
      className={cn("flex h-screen flex-col border-r glassy", 
        isCollapsed ? "w-16" : "w-64")}
      animate={{ width: isCollapsed ? 64 : 256 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex h-14 items-center justify-between border-b px-4">
        {!isCollapsed && (
          <Link className="flex items-center gap-2 font-semibold" href="/">
            <LayoutDashboard className="h-6 w-6" />
            <span>SaaS Dashboard</span>
          </Link>
        )}
        <Button variant="ghost" size="icon" onClick={() => setIsCollapsed(!isCollapsed)}>
          <Menu className="h-4 w-4" />
        </Button>
      </div>
      <div className="p-4">
        <TeamSwitcher />
      </div>
      <ScrollArea className="flex-1">
        <div className="flex flex-col gap-2 p-4">
          {sidebarNavItems.map((item, index) => (
            <div key={index}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start",
                  pathname === item.href && "bg-secondary",
                  isCollapsed && "justify-center p-2"
                )}
                onClick={() => item.submenu ? setOpenSubmenu(openSubmenu === item.title ? null : item.title) : null}
              >
                <item.icon className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
                {!isCollapsed && (
                  <>
                    <span>{item.title}</span>
                    {item.submenu && (
                      <ChevronRight
                        className={cn(
                          "ml-auto h-4 w-4 transition-transform",
                          openSubmenu === item.title && "rotate-90"
                        )}
                      />
                    )}
                  </>
                )}
              </Button>
              <AnimatePresence>
                {!isCollapsed && item.submenu && openSubmenu === item.title && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-2 flex flex-col space-y-1 pl-6"
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <Button
                        key={subIndex}
                        asChild
                        variant={pathname === subItem.href ? "secondary" : "ghost"}
                        size="sm"
                      >
                        <Link href={subItem.href}>{subItem.title}</Link>
                      </Button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </ScrollArea>
    </motion.div>
  )
}