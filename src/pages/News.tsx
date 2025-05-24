
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Award, TrendingUp, Newspaper, Rss } from "lucide-react";

// Sample news data
const newsData = {
  latest: [
    {
      id: 1,
      title: "Revolutionary CNC Machine Series Launched",
      excerpt: "Introducing our latest high-precision CNC machines with advanced automation capabilities.",
      date: "2024-05-20",
      category: "Product Launch",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      author: "Engineering Team"
    },
    {
      id: 2,
      title: "Major Contract Secured with Automotive Giant",
      excerpt: "₹50 Crore deal signed for supplying specialized manufacturing equipment.",
      date: "2024-05-18",
      category: "Business News",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      author: "Business Development"
    },
    {
      id: 3,
      title: "Industry 4.0 Integration Success Story",
      excerpt: "How our smart manufacturing solutions helped a client achieve 40% efficiency gains.",
      date: "2024-05-15",
      category: "Case Study",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      author: "Technical Team"
    }
  ],
  achievements: [
    {
      id: 4,
      title: "ISO 9001:2015 Certification Renewed",
      excerpt: "Successfully renewed our quality management certification for another 3 years.",
      date: "2024-05-10",
      category: "Achievement",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      author: "Quality Assurance"
    },
    {
      id: 5,
      title: "Best Industrial Equipment Supplier Award",
      excerpt: "Recognized as the leading supplier in Western India by Manufacturing Excellence Council.",
      date: "2024-05-05",
      category: "Award",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
      author: "Management"
    }
  ],
  articles: [
    {
      id: 6,
      title: "The Future of Manufacturing: Trends for 2024",
      excerpt: "Exploring emerging technologies and their impact on industrial manufacturing.",
      date: "2024-05-12",
      category: "Article",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      author: "R&D Team"
    },
    {
      id: 7,
      title: "Sustainable Manufacturing Practices",
      excerpt: "How eco-friendly approaches are reshaping the industrial landscape.",
      date: "2024-05-08",
      category: "Blog",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      author: "Sustainability Team"
    }
  ]
};

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allNews = [...newsData.latest, ...newsData.achievements, ...newsData.articles];
  
  const filteredNews = selectedCategory === 'all' 
    ? allNews 
    : allNews.filter(item => item.category.toLowerCase().includes(selectedCategory));

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'product launch': return <TrendingUp className="h-4 w-4" />;
      case 'achievement': case 'award': return <Award className="h-4 w-4" />;
      case 'article': case 'blog': return <Newspaper className="h-4 w-4" />;
      default: return <Rss className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'product launch': return 'bg-blue-100 text-blue-800';
      case 'business news': return 'bg-green-100 text-green-800';
      case 'achievement': case 'award': return 'bg-yellow-100 text-yellow-800';
      case 'article': case 'blog': return 'bg-purple-100 text-purple-800';
      case 'case study': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Updates</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Stay updated with the latest developments, achievements, and insights from Paras Hi Tech Engineers
            </p>
          </div>
        </section>

        {/* News Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {/* Featured News */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-8">Featured News</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="overflow-hidden">
                  <img 
                    src={newsData.latest[0].image} 
                    alt={newsData.latest[0].title}
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className={getCategoryColor(newsData.latest[0].category)}>
                        {getCategoryIcon(newsData.latest[0].category)}
                        {newsData.latest[0].category}
                      </Badge>
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(newsData.latest[0].date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3">{newsData.latest[0].title}</h3>
                    <p className="text-gray-600 mb-4">{newsData.latest[0].excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {newsData.latest[0].author}
                      </span>
                      <Button variant="outline" size="sm">Read More</Button>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  {newsData.latest.slice(1, 3).map((item) => (
                    <Card key={item.id} className="overflow-hidden">
                      <div className="flex">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-32 h-24 object-cover flex-shrink-0"
                        />
                        <CardContent className="p-4 flex-grow">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={`${getCategoryColor(item.category)} text-xs`}>
                              {item.category}
                            </Badge>
                            <span className="text-xs text-gray-500">
                              {new Date(item.date).toLocaleDateString()}
                            </span>
                          </div>
                          <h4 className="text-sm font-semibold text-navy mb-2">{item.title}</h4>
                          <p className="text-xs text-gray-600 line-clamp-2">{item.excerpt}</p>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Categorized News Tabs */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy mb-8">Browse by Category</h2>
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
                  <TabsTrigger value="all">All News</TabsTrigger>
                  <TabsTrigger value="product">Products</TabsTrigger>
                  <TabsTrigger value="achievement">Achievements</TabsTrigger>
                  <TabsTrigger value="article">Articles</TabsTrigger>
                  <TabsTrigger value="business">Business</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allNews.map((item) => (
                      <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-48 object-cover"
                        />
                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge className={getCategoryColor(item.category)}>
                              {getCategoryIcon(item.category)}
                              {item.category}
                            </Badge>
                          </div>
                          <h3 className="text-lg font-semibold text-navy mb-3">{item.title}</h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.excerpt}</p>
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {new Date(item.date).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              {item.author}
                            </span>
                          </div>
                          <Button className="w-full mt-4" variant="outline">Read Full Story</Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="product" className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allNews.filter(item => item.category.toLowerCase().includes('product')).map((item) => (
                      <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-48 object-cover"
                        />
                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge className={getCategoryColor(item.category)}>
                              {getCategoryIcon(item.category)}
                              {item.category}
                            </Badge>
                          </div>
                          <h3 className="text-lg font-semibold text-navy mb-3">{item.title}</h3>
                          <p className="text-gray-600 text-sm mb-4">{item.excerpt}</p>
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {new Date(item.date).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              {item.author}
                            </span>
                          </div>
                          <Button className="w-full mt-4" variant="outline">Read Full Story</Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="achievement" className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {newsData.achievements.map((item) => (
                      <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-48 object-cover"
                        />
                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge className={getCategoryColor(item.category)}>
                              {getCategoryIcon(item.category)}
                              {item.category}
                            </Badge>
                          </div>
                          <h3 className="text-lg font-semibold text-navy mb-3">{item.title}</h3>
                          <p className="text-gray-600 text-sm mb-4">{item.excerpt}</p>
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {new Date(item.date).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              {item.author}
                            </span>
                          </div>
                          <Button className="w-full mt-4" variant="outline">Read Full Story</Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="article" className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {newsData.articles.map((item) => (
                      <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-48 object-cover"
                        />
                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge className={getCategoryColor(item.category)}>
                              {getCategoryIcon(item.category)}
                              {item.category}
                            </Badge>
                          </div>
                          <h3 className="text-lg font-semibold text-navy mb-3">{item.title}</h3>
                          <p className="text-gray-600 text-sm mb-4">{item.excerpt}</p>
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {new Date(item.date).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              {item.author}
                            </span>
                          </div>
                          <Button className="w-full mt-4" variant="outline">Read Full Story</Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="business" className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allNews.filter(item => item.category.toLowerCase().includes('business')).map((item) => (
                      <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-48 object-cover"
                        />
                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge className={getCategoryColor(item.category)}>
                              {getCategoryIcon(item.category)}
                              {item.category}
                            </Badge>
                          </div>
                          <h3 className="text-lg font-semibold text-navy mb-3">{item.title}</h3>
                          <p className="text-gray-600 text-sm mb-4">{item.excerpt}</p>
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {new Date(item.date).toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              {item.author}
                            </span>
                          </div>
                          <Button className="w-full mt-4" variant="outline">Read Full Story</Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-gradient text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-lg mb-6">Subscribe to our newsletter for the latest news and updates</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 rounded-lg text-gray-900"
                />
                <Button className="bg-orange hover:bg-orange/90 text-white px-6">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default News;
