import { Sidebar } from '@/components/sidebar'
import { Header } from '@/components/header'
import { Breadcrumb } from '@/components/breadcrumb'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Clock, Truck } from 'lucide-react'

export default function OperationalPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <Breadcrumb items={[{ href: '/', label: 'Dashboard' }, { href: '/modules', label: 'Modules' }, { href: '/modules/operational', label: 'Operational' }]} />
          <h1 className="text-3xl font-bold mb-6">Operational Module</h1>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="glassy glow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Productivity</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87%</div>
                <p className="text-xs text-muted-foreground">Overall efficiency rate</p>
              </CardContent>
            </Card>
            <Card className="glassy glow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Turnaround Time</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.3 days</div>
                <p className="text-xs text-muted-foreground">Average processing time</p>
              </CardContent>
            </Card>
            <Card className="glassy glow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Logistics</CardTitle>
                <Truck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">98.5%</div>
                <p className="text-xs text-muted-foreground">On-time delivery rate</p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}