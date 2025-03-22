"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
  rememberMe: z.boolean().optional(),
})

export function LoginForm() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      // This would usually be a role check from your API/authentication provider
      const isAlumni = values.email.includes("alumni")

      toast({
        title: "Login successful!",
        description: "Welcome back to the Alumni Association Platform!",
      })

      // Redirect based on user role
      if (isAlumni) {
        router.push("/dashboard/alumni")
      } else {
        router.push("/dashboard/student")
      }

      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="john.doe@example.com" {...form.register("email")} />
          {form.formState.errors.email && (
            <p className="text-sm font-medium text-destructive">{form.formState.errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link href="/forgot-password" className="text-sm text-primary hover:text-primary/80">
              Forgot password?
            </Link>
          </div>
          <Input id="password" type="password" {...form.register("password")} />
          {form.formState.errors.password && (
            <p className="text-sm font-medium text-destructive">{form.formState.errors.password.message}</p>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="rememberMe"
            checked={form.watch("rememberMe")}
            onCheckedChange={(checked) => form.setValue("rememberMe", checked as boolean)}
          />
          <Label htmlFor="rememberMe">Remember me</Label>
        </div>

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Logging In..." : "Log In"}
        </Button>
      </form>

      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-primary hover:text-primary/80">
          Sign up
        </Link>
      </div>
    </div>
  )
}

