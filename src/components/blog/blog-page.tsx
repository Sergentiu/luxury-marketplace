"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { CalendarIcon, UserIcon, TagIcon } from "@heroicons/react/24/outline";

// Mock blog posts
const blogPosts = [
  {
    id: "1",
    title: "How to Authenticate a Chanel Classic Flap Bag",
    slug: "how-to-authenticate-chanel-classic-flap-bag",
    excerpt: "Learn the key indicators that distinguish authentic Chanel Classic Flap bags from counterfeits. Our expert guide covers hardware, stitching, and serial numbers.",
    content: "",
    featuredImage: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Sarah Chen",
    publishedAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
    tags: ["authentication", "chanel", "handbags", "guide"],
    category: "Authentication"
  },
  {
    id: "2",
    title: "Luxury Fashion Trends for Spring 2024",
    slug: "luxury-fashion-trends-spring-2024",
    excerpt: "Discover the must-have luxury pieces and emerging trends for the spring season. From statement bags to elegant jewelry, stay ahead of the fashion curve.",
    content: "",
    featuredImage: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Emma Rodriguez",
    publishedAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-01-10"),
    tags: ["trends", "spring", "fashion", "luxury"],
    category: "Fashion Trends"
  },
  {
    id: "3",
    title: "Caring for Your Luxury Leather Goods",
    slug: "caring-for-luxury-leather-goods",
    excerpt: "Essential tips and techniques to maintain the beauty and longevity of your luxury leather handbags, shoes, and accessories.",
    content: "",
    featuredImage: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Michael Thompson",
    publishedAt: new Date("2024-01-05"),
    updatedAt: new Date("2024-01-05"),
    tags: ["care", "leather", "maintenance", "tips"],
    category: "Care Guides"
  },
  {
    id: "4",
    title: "The History of Hermès Birkin Bag",
    slug: "history-of-hermes-birkin-bag",
    excerpt: "Explore the fascinating story behind one of the world's most coveted handbags, from its inspiration to its status as a luxury icon.",
    content: "",
    featuredImage: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Isabella Martinez",
    publishedAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
    tags: ["hermes", "birkin", "history", "luxury"],
    category: "Brand Spotlight"
  },
  {
    id: "5",
    title: "Investment Pieces: Which Luxury Items Hold Their Value",
    slug: "investment-pieces-luxury-items-value",
    excerpt: "Discover which luxury items are not just beautiful but also smart investments that retain or increase in value over time.",
    content: "",
    featuredImage: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "David Park",
    publishedAt: new Date("2023-12-28"),
    updatedAt: new Date("2023-12-28"),
    tags: ["investment", "value", "luxury", "market"],
    category: "Marketplace News"
  },
  {
    id: "6",
    title: "Sustainable Luxury: The Future of Fashion",
    slug: "sustainable-luxury-future-fashion",
    excerpt: "How the luxury fashion industry is embracing sustainability and what it means for conscious consumers.",
    content: "",
    featuredImage: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: "Sophie Anderson",
    publishedAt: new Date("2023-12-20"),
    updatedAt: new Date("2023-12-20"),
    tags: ["sustainability", "luxury", "fashion", "future"],
    category: "Marketplace News"
  }
];

const categories = [
  "All",
  "Authentication",
  "Fashion Trends", 
  "Care Guides",
  "Brand Spotlight",
  "Marketplace News"
];

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Blog & Editorial
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Stay informed with the latest in luxury fashion, authentication guides, 
            and marketplace insights from our expert team.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {selectedCategory === "All" && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Article</h2>
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={blogPosts[0].featuredImage}
                    alt={blogPosts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <CardContent className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {blogPosts[0].category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {formatDate(blogPosts[0].publishedAt)}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <UserIcon className="h-4 w-4 mr-2" />
                      {blogPosts[0].author}
                    </div>
                    <Button asChild>
                      <Link href={`/blog/${blogPosts[0].slug}`}>
                        Read More
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="group cursor-pointer overflow-hidden">
              <Link href={`/blog/${post.slug}`}>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-xs text-gray-500">
                      <CalendarIcon className="h-3 w-3 mr-1" />
                      {formatDate(post.publishedAt)}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-500">
                      <UserIcon className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center space-x-1">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs text-gray-400">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white rounded-lg shadow-sm p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get the latest articles, authentication guides, and luxury fashion insights 
            delivered directly to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
