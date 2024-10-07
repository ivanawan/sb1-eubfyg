import { Sidebar } from '@/components/sidebar'
import { Header } from '@/components/header'
import { Breadcrumb } from '@/components/breadcrumb'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, UserPlus, GraduationCap } from 'lucide-react'

export default function HRPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <Breadcrumb items={[{ href: '/', label: 'Dashboard' }, { href: '/modules', label: 'Modules' }, { href: '/modules/hr', label: 'HR' }]} />
          <h1 className="text-3xl font-bold mb-6">HR Module</h1>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="glassy glow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground">Across all departments</p>
              </CardContent>
            </Card>
            <Card className="glassy glow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">New Hires</CardTitle>
                <UserPlus className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">37</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>
            <Card className="glassy glow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Training Programs</CardTitle>
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">Active programs</p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}