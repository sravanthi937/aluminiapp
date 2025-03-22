"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  Home,
  Calendar,
  Users,
  Gift,
  MessageSquare,
  Settings,
  User,
  LogOut,
  Award,
  DollarSign,
  Briefcase,
  BookOpen,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface DashboardSidebarProps {
  userType: "student" | "alumni"
}

export function DashboardSidebar({ userType }: DashboardSidebarProps) {
  const pathname = usePathname()

  // Update the href paths to match our new structure
  const commonMenuItems = [
    {
      title: "Dashboard",
      icon: Home,
      href: `/dashboard/${userType === "student" ? "student" : "alumni"}`,
    },
    {
      title: "Events",
      icon: Calendar,
      href: "/dashboard/events",
    },
    {
      title: "Mentorship",
      icon: Users,
      href: "/dashboard/mentorship",
    },
    {
      title: "Gamification",
      icon: Gift,
      href: "/dashboard/gamification",
    },
    {
      title: "Chat Support",
      icon: MessageSquare,
      href: "/dashboard/chat",
    },
  ]

  const alumniMenuItems = [
    {
      title: "Donate",
      icon: DollarSign,
      href: "/dashboard/alumni/donate",
    },
    {
      title: "Job Board",
      icon: Briefcase,
      href: "/dashboard/jobs",
    },
  ]

  const studentMenuItems = [
    {
      title: "Resources",
      icon: BookOpen,
      href: "/dashboard/resources",
    },
    {
      title: "Achievements",
      icon: Award,
      href: "/dashboard/achievements",
    },
  ]

  // Determine which menu items to show based on user type
  const menuItems = [...commonMenuItems, ...(userType === "alumni" ? alumniMenuItems : studentMenuItems)]

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-medium leading-none">Alumni Connect</p>
            <p className="text-xs text-muted-foreground truncate">
              {userType === "student" ? "Student Portal" : "Alumni Portal"}
            </p>
          </div>
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Profile">
              <Link href="/profile">
                <User />
                <span>Profile</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Settings">
              <Link href="/settings">
                <Settings />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Logout">
              <Link href="/">
                <LogOut />
                <span>Logout</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

