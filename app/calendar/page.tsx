import { Sidebar } from '@/components/sidebar'
import { Header } from '@/components/header'
import { Breadcrumb } from '@/components/breadcrumb'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar as CalendarIcon, Clock, Users } from 'lucide-react'

export default function CalendarPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <Breadcrumb items={[{ href: '/', label: 'Dashboard' }, { href: '/calendar', label: 'Calendar' }]} />
          <h1 className="text-3xl font-bold mb-6">Calendar</h1>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="glassy glow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
                <CalendarIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between">
                    <span>Team Meeting</span>
                    <span className="text-sm text-muted-foreground">Today, 2:00 PM</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Project Deadline</span>
                    <span className="text-sm text-muted-foreground">Tomorrow, 5:00 PM</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Client Presentation</span>
                    <span className="text-sm text-muted-foreground">May 15, 10:00 AM</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="glassy glow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Today's Schedule</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between">
                    <span>Daily Standup</span>
                    <span className="text-sm text-muted-foreground">9:00 AM</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Team Meeting</span>
                    <span className="text-sm text-muted-foreground">2:00 PM</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Code Review</span>
                    <span className="text-sm text-muted-foreground">4:00 PM</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="glassy glow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Team Availability</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between">
                    <span>John Doe</span>
                    <span className="text-sm text-green-500">Available</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Jane Smith</span>
                    <span className="text-sm text-yellow-500">In a meeting</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Bob Johnson</span>
                    <span className="text-sm text-red-500">Out of office</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}