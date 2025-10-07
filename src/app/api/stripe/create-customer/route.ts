import { NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { name, email } = await request.json()

    const customer = await stripe.customers.create({
      name: name || session.user.name || "",
      email: email || session.user.email,
      metadata: {
        userId: session.user.id,
      },
    })

    return NextResponse.json({
      customerId: customer.id,
    })
  } catch (error) {
    console.error("Customer creation error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
