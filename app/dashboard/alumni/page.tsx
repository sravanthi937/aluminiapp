import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Calendar, Users, TrendingUp, DollarSign, Clock } from "lucide-react"
import { UpcomingMentorings } from "@/components/upcoming-mentorings"
import { MentorshipRequests } from "@/components/mentorship-requests"
import { BusyToggle } from "@/components/busy-toggle"

export default function AlumniDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Alumni Dashboard</h1>
          <p className="text-muted-foreground">Give back to your community and help shape the future</p>
        </div>
        <div className="flex items-center gap-4">
          <BusyToggle />
          <Button>Mentor a Student</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Students Mentored</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">24</div>
              <Badge variant="secondary">Impact Score: High</Badge>
            </div>
            <div className="flex items-center mt-4 text-sm text-muted-foreground">
              <Users className="mr-1 h-4 w-4" />4 ongoing relationships
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Contribution Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">Silver</div>
              <Trophy className="h-5 w-5 text-gray-400" />
            </div>
            <div className="flex items-center mt-4 text-sm text-muted-foreground">
              <TrendingUp className="mr-1 h-4 w-4" />
              25% to Gold status
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">3</div>
              <Badge variant="secondary">Next: Today</Badge>
            </div>
            <div className="flex items-center mt-4 text-sm text-muted-foreground">
              <Calendar className="mr-1 h-4 w-4" />2 this week, 1 next week
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">$1,250</div>
              <DollarSign className="h-5 w-5 text-green-500" />
            </div>
            <div className="flex items-center mt-4 text-sm text-muted-foreground">
              <Clock className="mr-1 h-4 w-4" />
              Last contribution: 2 weeks ago
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UpcomingMentorings />
        <MentorshipRequests />
      </div>
    </div>
  )
}

