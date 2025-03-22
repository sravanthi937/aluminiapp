"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/components/ui/use-toast"
import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, CreditCard, Building, School, GraduationCap, Users } from "lucide-react"
import { Label } from "@/components/ui/label"

const formSchema = z.object({
  amount: z.string().min(1, {
    message: "Amount is required.",
  }),
  paymentMethod: z.enum(["creditCard", "bankTransfer", "paypal"]),
  donationType: z.enum(["oneTime", "monthly", "yearly"]),
  fundType: z.enum(["general", "scholarship", "infrastructure", "events"]),
  message: z.string().optional(),
})

export function DonationForm() {
  const { toast } = useToast()
  const [isProcessing, setIsProcessing] = useState(false)
  const [step, setStep] = useState(1)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "50",
      paymentMethod: "creditCard",
      donationType: "oneTime",
      fundType: "general",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (step === 1) {
      setStep(2)
      return
    }

    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Donation successful!",
        description: `Thank you for your ${values.donationType === "oneTime" ? "one-time" : values.donationType} donation of $${values.amount}.`,
      })

      setIsProcessing(false)
      form.reset()
      setStep(1)
    }, 2000)
  }

  const fundTypeIcons = {
    general: Building,
    scholarship: GraduationCap,
    infrastructure: School,
    events: Users,
  }

  return (
    <div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {step === 1 ? (
          <>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 gap-4">
                {["25", "50", "100", "250"].map((amount) => (
                  <Button
                    key={amount}
                    type="button"
                    variant={form.getValues("amount") === amount ? "default" : "outline"}
                    onClick={() => form.setValue("amount", amount)}
                  >
                    ${amount}
                  </Button>
                ))}
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount">Custom Amount</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="amount"
                    type="number"
                    placeholder="Enter amount"
                    className="pl-9"
                    {...form.register("amount")}
                  />
                </div>
                {form.formState.errors.amount && (
                  <p className="text-sm font-medium text-destructive">{form.formState.errors.amount.message}</p>
                )}
              </div>

              <div className="space-y-3">
                <Label>Donation Frequency</Label>
                <RadioGroup
                  onValueChange={(value) => form.setValue("donationType", value as "oneTime" | "monthly" | "yearly")}
                  defaultValue={form.getValues("donationType")}
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-3 space-y-0">
                    <RadioGroupItem value="oneTime" id="oneTime" />
                    <Label htmlFor="oneTime" className="font-normal">
                      One-time donation
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 space-y-0">
                    <RadioGroupItem value="monthly" id="monthly" />
                    <Label htmlFor="monthly" className="font-normal">
                      Monthly donation
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 space-y-0">
                    <RadioGroupItem value="yearly" id="yearly" />
                    <Label htmlFor="yearly" className="font-normal">
                      Yearly donation
                    </Label>
                  </div>
                </RadioGroup>
                {form.formState.errors.donationType && (
                  <p className="text-sm font-medium text-destructive">{form.formState.errors.donationType.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label>Fund Designation</Label>
                <p className="text-sm text-muted-foreground">Choose where you would like your donation to go</p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  {(["general", "scholarship", "infrastructure", "events"] as const).map((type) => {
                    const Icon = fundTypeIcons[type]
                    return (
                      <Card
                        key={type}
                        className={`cursor-pointer transition-colors ${
                          form.getValues("fundType") === type ? "border-primary bg-primary/5" : ""
                        }`}
                        onClick={() => form.setValue("fundType", type)}
                      >
                        <CardContent className="pt-6 text-center">
                          <Icon className="mx-auto h-8 w-8" />
                          <p className="mt-2 font-medium capitalize">{type === "general" ? "General Fund" : type}</p>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
                {form.formState.errors.fundType && (
                  <p className="text-sm font-medium text-destructive">{form.formState.errors.fundType.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Share why you're donating or any special instructions"
                  {...form.register("message")}
                />
                {form.formState.errors.message && (
                  <p className="text-sm font-medium text-destructive">{form.formState.errors.message.message}</p>
                )}
              </div>
            </div>

            <Button type="submit" className="w-full">
              Continue to Payment
            </Button>
          </>
        ) : (
          <>
            <div className="space-y-2">
              <Label htmlFor="paymentMethod">Payment Method</Label>
              <Select
                onValueChange={(value) =>
                  form.setValue("paymentMethod", value as "creditCard" | "bankTransfer" | "paypal")
                }
                defaultValue={form.getValues("paymentMethod")}
              >
                <SelectTrigger id="paymentMethod">
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="creditCard">Credit/Debit Card</SelectItem>
                  <SelectItem value="bankTransfer">Bank Transfer</SelectItem>
                  <SelectItem value="paypal">PayPal</SelectItem>
                </SelectContent>
              </Select>
              {form.formState.errors.paymentMethod && (
                <p className="text-sm font-medium text-destructive">{form.formState.errors.paymentMethod.message}</p>
              )}
            </div>

            {form.watch("paymentMethod") === "creditCard" && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input id="cardNumber" placeholder="4242 4242 4242 4242" className="pl-9" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input id="expiryDate" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nameOnCard">Name on Card</Label>
                  <Input id="nameOnCard" placeholder="John Doe" />
                </div>
              </div>
            )}

            <div className="rounded-lg border p-4">
              <h3 className="font-medium">Donation Summary</h3>
              <div className="mt-3 space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount:</span>
                  <span>${form.watch("amount")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Frequency:</span>
                  <span className="capitalize">
                    {form.watch("donationType") === "oneTime" ? "One-time" : form.watch("donationType")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fund:</span>
                  <span className="capitalize">{form.watch("fundType")}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => setStep(1)}
                disabled={isProcessing}
              >
                Back
              </Button>
              <Button type="submit" className="w-full" disabled={isProcessing}>
                {isProcessing ? "Processing..." : "Complete Donation"}
              </Button>
            </div>
          </>
        )}
      </form>
    </div>
  )
}

