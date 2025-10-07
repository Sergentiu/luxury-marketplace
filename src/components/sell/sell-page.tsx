"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CurrencyDollarIcon, ShieldCheckIcon, ClockIcon, CameraIcon } from "@heroicons/react/24/outline";

const benefits = [
  {
    icon: CurrencyDollarIcon,
    title: "Competitive Commission",
    description: "Up to 85% commission on your luxury items"
  },
  {
    icon: ShieldCheckIcon,
    title: "Expert Authentication",
    description: "Professional authentication ensures maximum value"
  },
  {
    icon: ClockIcon,
    title: "Fast Processing",
    description: "Quick turnaround from submission to sale"
  }
];

const categories = [
  "Handbags & Purses",
  "Jewelry & Watches",
  "Shoes & Boots",
  "Clothing & Accessories",
  "Scarves & Belts",
  "Sunglasses & Eyewear"
];

const brands = [
  "Chanel", "Hermès", "Louis Vuitton", "Gucci", "Prada", "Dior",
  "Balenciaga", "Saint Laurent", "Bottega Veneta", "Celine", "Loewe", "Givenchy"
];

const conditions = [
  "New with Tags",
  "Like New",
  "Excellent",
  "Very Good",
  "Good",
  "Fair"
];

export function SellPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Contact Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    
    // Item Details
    itemName: "",
    brand: "",
    category: "",
    condition: "",
    purchasePrice: "",
    purchaseYear: "",
    description: "",
    measurements: "",
    color: "",
    material: "",
    
    // Images
    images: [] as File[],
    
    // Terms
    acceptTerms: false,
  });

  const handleInputChange = (field: string, value: string | boolean | File[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData(prev => ({ ...prev, images: [...prev.images, ...files] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sell submission:", formData);
    // Handle form submission
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sell Your Luxury Items
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Turn your designer handbags, jewelry, and accessories into cash. 
            Our expert team ensures you get the best possible value for your items.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <benefit.icon className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm opacity-90">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Submit Your Item</h2>
            <div className="flex items-center space-x-4">
              <div className={`flex items-center ${step >= 1 ? "text-primary" : "text-gray-400"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? "bg-primary text-white" : "bg-gray-200"}`}>
                  1
                </div>
                <span className="ml-2 font-medium">Contact Info</span>
              </div>
              <div className="w-8 h-px bg-gray-300"></div>
              <div className={`flex items-center ${step >= 2 ? "text-primary" : "text-gray-400"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? "bg-primary text-white" : "bg-gray-200"}`}>
                  2
                </div>
                <span className="ml-2 font-medium">Item Details</span>
              </div>
              <div className="w-8 h-px bg-gray-300"></div>
              <div className={`flex items-center ${step >= 3 ? "text-primary" : "text-gray-400"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? "bg-primary text-white" : "bg-gray-200"}`}>
                  3
                </div>
                <span className="ml-2 font-medium">Submit</span>
              </div>
            </div>
          </div>

          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Item Details</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Item Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.itemName}
                        onChange={(e) => handleInputChange("itemName", e.target.value)}
                        placeholder="e.g., Chanel Classic Flap Bag"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Brand
                        </label>
                        <select
                          required
                          value={formData.brand}
                          onChange={(e) => handleInputChange("brand", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select a brand</option>
                          {brands.map((brand) => (
                            <option key={brand} value={brand}>{brand}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Category
                        </label>
                        <select
                          required
                          value={formData.category}
                          onChange={(e) => handleInputChange("category", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select a category</option>
                          {categories.map((category) => (
                            <option key={category} value={category}>{category}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Condition
                        </label>
                        <select
                          required
                          value={formData.condition}
                          onChange={(e) => handleInputChange("condition", e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select condition</option>
                          {conditions.map((condition) => (
                            <option key={condition} value={condition}>{condition}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Original Purchase Price
                        </label>
                        <input
                          type="number"
                          value={formData.purchasePrice}
                          onChange={(e) => handleInputChange("purchasePrice", e.target.value)}
                          placeholder="e.g., 5000"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Year of Purchase
                        </label>
                        <input
                          type="number"
                          value={formData.purchaseYear}
                          onChange={(e) => handleInputChange("purchaseYear", e.target.value)}
                          placeholder="e.g., 2021"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Color
                        </label>
                        <input
                          type="text"
                          value={formData.color}
                          onChange={(e) => handleInputChange("color", e.target.value)}
                          placeholder="e.g., Black"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        placeholder="Describe your item in detail..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Upload Photos
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <CameraIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-4">Upload clear photos of your item</p>
                        <input
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          id="image-upload"
                        />
                        <label htmlFor="image-upload">
                          <Button type="button" variant="outline">
                            Choose Files
                          </Button>
                        </label>
                        {formData.images.length > 0 && (
                          <p className="text-sm text-gray-500 mt-2">
                            {formData.images.length} file(s) selected
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Review & Submit</h3>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-4">Submission Summary</h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>Item:</strong> {formData.itemName}</p>
                        <p><strong>Brand:</strong> {formData.brand}</p>
                        <p><strong>Category:</strong> {formData.category}</p>
                        <p><strong>Condition:</strong> {formData.condition}</p>
                        <p><strong>Photos:</strong> {formData.images.length} uploaded</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        required
                        checked={formData.acceptTerms}
                        onChange={(e) => handleInputChange("acceptTerms", e.target.checked)}
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label className="ml-2 block text-sm text-gray-700">
                        I agree to the{" "}
                        <a href="/terms" className="text-primary hover:underline">
                          Consignment Terms
                        </a>{" "}
                        and understand the commission structure.
                      </label>
                    </div>
                  </div>
                )}

                <div className="flex justify-between pt-6">
                  {step > 1 && (
                    <Button type="button" variant="outline" onClick={prevStep}>
                      Back
                    </Button>
                  )}
                  {step < 3 ? (
                    <Button type="button" onClick={nextStep} className="ml-auto">
                      Continue
                    </Button>
                  ) : (
                    <Button type="submit" className="ml-auto">
                      Submit for Review
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
