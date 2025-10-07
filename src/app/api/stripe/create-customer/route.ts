import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!(session as any)?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    await request.json() // Mock customer creation

    // Mock customer for build purposes
    // In production, you'll create a real Stripe customer here
    return NextResponse.json({
      customerId: "cus_mock_customer_id_for_build",
    })
  } catch (error) {
    console.error("Customer creation error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}