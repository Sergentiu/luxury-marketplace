"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { 
  UserIcon, 
  ShoppingBagIcon, 
  HeartIcon, 
  CreditCardIcon,
  MapPinIcon,
  BellIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/outline";

export function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [user, setUser] = useState<Record<string, unknown> | null>(null);
  const [orders, setOrders] = useState<Record<string, unknown>[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/authentication");
      return;
    }

    if (session?.user) {
      // Set user data from session (no mock data)
      setUser({
        name: session.user.name || "User",
        email: session.user.email || "",
        image: session.user.image || "",
        phone: "", // Empty for new users
        memberSince: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        totalOrders: 0,
        totalSpent: 0,
        loyaltyPoints: 0,
      });

      // Empty orders array for new users
      setOrders([]);
    }

    setIsLoading(false);
  }, [session, status, router]);

  if (status === "loading" || isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const tabs = [
    { id: "profile", name: "Profile", icon: UserIcon },
    { id: "orders", name: "Orders", icon: ShoppingBagIcon },
    { id: "wishlist", name: "Wishlist", icon: HeartIcon },
    { id: "payment", name: "Payment", icon: CreditCardIcon },
    { id: "addresses", name: "Addresses", icon: MapPinIcon },
    { id: "notifications", name: "Notifications", icon: BellIcon },
    { id: "security", name: "Security", icon: ShieldCheckIcon },
  ];

  const renderProfileTab = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4 mb-6">
            {user?.image ? (
              <Image
                src={user.image as string}
                alt={user.name as string}
                width={80}
                height={80}
                className="h-20 w-20 rounded-full object-cover"
              />
            ) : (
              <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
                <UserIcon className="h-10 w-10 text-gray-400" />
              </div>
            )}
            <div>
              <h3 className="text-lg font-semibold">{user?.name as string}</h3>
              <p className="text-gray-600">{user?.email as string}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                defaultValue={user?.name as string}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                defaultValue={user?.email as string}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                defaultValue={user?.phone as string}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Member Since
              </label>
              <input
                type="text"
                value={user?.memberSince as string}
                disabled
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
              />
            </div>
          </div>
          <Button className="w-full sm:w-auto">Save Changes</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{user?.totalOrders as number}</div>
              <div className="text-sm text-gray-600">Total Orders</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">${(user?.totalSpent as number)?.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Total Spent</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{user?.loyaltyPoints as number}</div>
              <div className="text-sm text-gray-600">Loyalty Points</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderOrdersTab = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Order History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {orders.length > 0 ? (
              orders.map((order) => (
                <div key={order.id as string} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">Order #{order.id as string}</h3>
                      <p className="text-sm text-gray-600">Placed on {order.date as string}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">${(order.total as number).toLocaleString()}</div>
                      <div className="text-sm text-gray-600">{order.items as number} item(s)</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      (order.status as string) === "Delivered" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-blue-100 text-blue-800"
                    }`}>
                      {order.status as string}
                    </span>
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <ShoppingBagIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Orders Yet</h3>
                <p className="text-gray-600 mb-6">Start shopping to see your order history here.</p>
                <Button>Start Shopping</Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderWishlistTab = () => (
    <div className="text-center py-12">
      <HeartIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Wishlist is Empty</h3>
      <p className="text-gray-600 mb-6">Start adding items to your wishlist to save them for later.</p>
      <Button>Browse Products</Button>
    </div>
  );

  const renderPaymentTab = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Payment Methods</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <CreditCardIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Payment Methods</h3>
            <p className="text-gray-600 mb-6">Add a payment method to make checkout faster and easier.</p>
            <Button>Add Payment Method</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderAddressesTab = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Shipping Addresses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <MapPinIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Addresses Saved</h3>
            <p className="text-gray-600 mb-6">Add a shipping address to make checkout faster and easier.</p>
            <Button>Add Address</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderNotificationsTab = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-semibold">Email Notifications</div>
              <div className="text-sm text-gray-600">Receive updates about your orders and new products</div>
            </div>
            <input type="checkbox" defaultChecked className="h-4 w-4 text-primary" />
          </div>
          <div className="flex justify-between items-center">
            <div>
              <div className="font-semibold">SMS Notifications</div>
              <div className="text-sm text-gray-600">Get text messages about order updates</div>
            </div>
            <input type="checkbox" className="h-4 w-4 text-primary" />
          </div>
          <div className="flex justify-between items-center">
            <div>
              <div className="font-semibold">Marketing Emails</div>
              <div className="text-sm text-gray-600">Receive promotional offers and new arrivals</div>
            </div>
            <input type="checkbox" defaultChecked className="h-4 w-4 text-primary" />
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderSecurityTab = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Security Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              New Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm New Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          <Button>Update Password</Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return renderProfileTab();
      case "orders":
        return renderOrdersTab();
      case "wishlist":
        return renderWishlistTab();
      case "payment":
        return renderPaymentTab();
      case "addresses":
        return renderAddressesTab();
      case "notifications":
        return renderNotificationsTab();
      case "security":
        return renderSecurityTab();
      default:
        return renderProfileTab();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Account</h1>
          <p className="text-gray-600 mt-2">Manage your account settings and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-0">
                <nav className="space-y-1">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center px-4 py-3 text-left text-sm font-medium rounded-none ${
                          activeTab === tab.id
                            ? "bg-primary text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <Icon className="h-5 w-5 mr-3" />
                        {tab.name}
                      </button>
                    );
                  })}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main content */}
          <div className="lg:col-span-3">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
}