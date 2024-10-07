import { Sidebar } from '@/components/sidebar'
import { Header } from '@/components/header'
import { Breadcrumb } from '@/components/breadcrumb'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, File, Folder } from 'lucide-react'

export default function DocumentsPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <Breadcrumb items={[{ href: '/', label: 'Dashboard' }, { href: '/documents', label: 'Documents' }]} />
          <h1 className="text-3xl font-bold mb-6">Documents</h1>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="glassy glow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Recent Files</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <File className="mr-2 h-4 w-4" />
                    <span>Q4 Financial Report.pdf</span>
                  </li>
                  <li className="flex items-center">
                    <File className="mr-2 h-4 w-4" />
                    <span>Marketing Strategy 2023.docx</span>
                  </li>
                  <li className="flex items-center">
                    <File className="mr-2 h-4 w-4" />
                    <span>Project Roadmap.xlsx</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="glassy glow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Folders</CardTitle>
                <Folder className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Folder className="mr-2 h-4 w-4" />
                    <span>Financial Reports</span>
                  </li>
                  <li className="flex items-center">
                    <Folder className="mr-2 h-4 w-4" />
                    <span>Marketing Materials</span>
                  </li>
                  <li className="flex items-center">
                    <Folder className="mr-2 h-4 w-4" />
                    <span>Project Documentation</span>
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