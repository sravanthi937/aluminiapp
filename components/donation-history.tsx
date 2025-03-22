import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Download, ExternalLink } from "lucide-react"

export function DonationHistory() {
  const donations = [
    {
      id: "DON-001",
      date: "2023-03-15",
      amount: 100,
      type: "One-time",
      fundType: "Scholarship",
      status: "Completed",
    },
    {
      id: "DON-002",
      date: "2023-02-10",
      amount: 50,
      type: "Monthly",
      fundType: "General",
      status: "Completed",
    },
    {
      id: "DON-003",
      date: "2023-01-05",
      amount: 500,
      type: "One-time",
      fundType: "Infrastructure",
      status: "Completed",
    },
    {
      id: "DON-004",
      date: "2022-12-20",
      amount: 75,
      type: "One-time",
      fundType: "Events",
      status: "Completed",
    },
    {
      id: "DON-005",
      date: "2022-11-01",
      amount: 50,
      type: "Monthly",
      fundType: "General",
      status: "Completed",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Fund</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {donations.map((donation) => (
              <TableRow key={donation.id}>
                <TableCell className="font-medium">{donation.id}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                    {new Date(donation.date).toLocaleDateString()}
                  </div>
                </TableCell>
                <TableCell>${donation.amount}</TableCell>
                <TableCell>{donation.type}</TableCell>
                <TableCell>{donation.fundType}</TableCell>
                <TableCell>
                  <Badge
                    variant={donation.status === "Completed" ? "outline" : "secondary"}
                    className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                  >
                    {donation.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Download receipt</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">View details</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-center">
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Download All Receipts
        </Button>
      </div>
    </div>
  )
}

