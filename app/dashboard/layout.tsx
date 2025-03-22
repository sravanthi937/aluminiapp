import type React from "react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { SidebarInset } from "@/components/ui/sidebar"
import { Suspense } from "react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // In a real app, you would determine the user type from authentication
  // For now, we'll default to "student" for shared pages
  const userType = "student"

  return (
    <div className="h-screen flex">
      <DashboardSidebar userType={userType} />
      <SidebarInset>
        <DashboardHeader userType={userType} />
        <div className="p-4 md:p-6">
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </div>
      </SidebarInset>
    </div>
  )
}

