import { DonationForm } from "@/components/donation-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DonationHistory } from "@/components/donation-history"

export default function DonatePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Make a Contribution</h1>
        <p className="text-muted-foreground">Support the next generation of students and leaders</p>
      </div>

      <Tabs defaultValue="donate">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="donate">Donate</TabsTrigger>
          <TabsTrigger value="history">Donation History</TabsTrigger>
        </TabsList>
        <TabsContent value="donate" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Support the Alumni Association</CardTitle>
              <CardDescription>
                Your contributions help fund scholarships, events, and mentorship programs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DonationForm />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="history" className="mt-6">
          <DonationHistory />
        </TabsContent>
      </Tabs>
    </div>
  )
}

