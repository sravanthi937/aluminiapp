"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, Search, X, ChevronDown, MessageSquare } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"

interface DashboardHeaderProps {
  userType: "student" | "alumni"
}

export function DashboardHeader({ userType }: DashboardHeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const router = useRouter()

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <SidebarTrigger className="mr-2" />

        {isSearchOpen ? (
          <div className="relative flex-1 md:max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search..." className="w-full bg-background pl-8 md:w-[300px]" />
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-9 w-9 rounded-full"
              onClick={() => setIsSearchOpen(false)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        ) : (
          <Button
            variant="outline"
            size="sm"
            className="ml-auto h-8 gap-1 md:ml-0"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search className="h-4 w-4" />
            <span className="hidden md:inline-flex">Search</span>
          </Button>
        )}

        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 text-[0.6rem]">3</Badge>
                <span className="sr-only">Notifications</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="flex items-center justify-between px-4 py-2">
                <div className="font-medium">Notifications</div>
                <Button variant="ghost" size="sm" className="h-auto p-0 text-xs">
                  Mark all as read
                </Button>
              </div>
              <DropdownMenuSeparator />
              <div className="flex flex-col gap-2 p-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-4 rounded-lg p-2 hover:bg-muted">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={`/placeholder.svg?height=36&width=36`} />
                      <AvatarFallback>U{i}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm">
                        {i === 1 ? "New mentorship request" : i === 2 ? "Event reminder" : "New message"}
                      </p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                ))}
              </div>
              <DropdownMenuSeparator />
              <div className="p-2">
                <Button variant="ghost" className="w-full justify-center" size="sm">
                  View all notifications
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="outline" size="icon" onClick={() => router.push("/dashboard/chat")} className="relative">
            <MessageSquare className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 text-[0.6rem]">2</Badge>
            <span className="sr-only">Messages</span>
          </Button>

          <ThemeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="pl-1 pr-1.5 md:pl-2 md:pr-2.5">
                <Avatar className="h-6 w-6 md:h-8 md:w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="ml-2 hidden md:flex">
                  <span className="mr-1">John Doe</span>
                  <ChevronDown className="h-4 w-4" />
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <div className="flex items-center gap-2 p-2">
                <div className="flex flex-col space-y-0.5">
                  <span className="text-sm font-medium">John Doe</span>
                  <span className="text-xs text-muted-foreground">john.doe@example.com</span>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              {userType === "student" && <DropdownMenuItem>Switch to Alumni</DropdownMenuItem>}
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.push("/")}>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}

