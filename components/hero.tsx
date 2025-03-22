import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
      <div className="container relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block text-primary">Connect, Mentor,</span>
            <span className="block">Grow Together</span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-muted-foreground">
            Join our alumni network to connect with fellow graduates, mentor students, and participate in exclusive
            events that foster growth and opportunity.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/signup">
              <Button size="lg" className="px-8">
                Join Now
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="px-8">
                Already a Member
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

