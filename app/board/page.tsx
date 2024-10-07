import { Sidebar } from '@/components/sidebar'
import { Header } from '@/components/header'
import { Breadcrumb } from '@/components/breadcrumb'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trello, List, CheckSquare } from 'lucide-react'

export default function BoardPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <Breadcrumb items={[{ href: '/', label: 'Dashboard' }, { href: '/board', label: 'Board' }]} />
          <h1 className="text-3xl font-bold mb-6">Project Board</h1>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="glassy glow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">To Do</CardTitle>
                <List className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Design new landing page</li>
                  <li>Implement user authentication</li>
                  <li>Create API documentation</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="glassy glow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">In Progress</CardTitle>
                <Trello className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Refactor backend code</li>
                  <li>Optimize database queries</li>
                  <li>Implement new feature: dark mode</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="glassy glow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Done</CardTitle>
                <CheckSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Fix login page bug</li>
                  <li>Update dependencies</li>
                  <li>Create user onboarding flow</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}