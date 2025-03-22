import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Trophy, Users, TrendingUp, Clock } from "lucide-react"
import { UpcomingEvents } from "@/components/upcoming-events"
import { AvailableMentors } from "@/components/available-mentors"

export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Student Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, your journey continues</p>
        </div>
        <Button>Schedule a Mentorship Call</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Gamification Points</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">120</div>
              <Badge variant="secondary">+20 this week</Badge>
            </div>
            <Progress className="h-2 mt-4" value={40} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Mentorship Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">3</div>
              <Badge variant="secondary">1 upcoming</Badge>
            </div>
            <div className="flex items-center mt-4 text-sm text-muted-foreground">
              <Clock className="mr-1 h-4 w-4" />
              Next: Monday, 2pm
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Available Mentors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">18</div>
              <Badge variant="secondary">5 new</Badge>
            </div>
            <div className="flex items-center mt-4 text-sm text-muted-foreground">
              <Users className="mr-1 h-4 w-4" />
              From various industries
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Skill Badges Earned</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">7</div>
              <Trophy className="h-5 w-5 text-yellow-500" />
            </div>
            <div className="flex items-center mt-4 text-sm text-muted-foreground">
              <TrendingUp className="mr-1 h-4 w-4" />2 more to next level
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UpcomingEvents />
        <AvailableMentors />
      </div>
    </div>
  )
}

