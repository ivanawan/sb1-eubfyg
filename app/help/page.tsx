import { Sidebar } from '@/components/sidebar'
import { Header } from '@/components/header'
import { Breadcrumb } from '@/components/breadcrumb'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle, Book, MessageCircle, PhoneCall } from 'lucide-react'

export default function HelpPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <Breadcrumb items={[{ href: '/', label: 'Dashboard' }, { href: '/help', label: 'Help & Support' }]} />
          <h1 className="text-3xl font-bold mb-6">Help & Support</h1>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="glassy glow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">FAQs</CardTitle>
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>How do I reset my password?</li>
                  <li>Can I change my subscription plan?</li>
                  <li>How to export my data?</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="glassy glow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Documentation</CardTitle>
                <Book className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Getting Started Guide</li>
                  <li>API Documentation</li>
                  <li>Best Practices</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="glassy glow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Contact Support</CardTitle>
                <MessageCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Live Chat</li>
                  <li>Email Support</li>
                  <li>Phone Support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}