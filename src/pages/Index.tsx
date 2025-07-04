
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart, Search, Menu, User } from "lucide-react";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const featuredJerseys = [
    {
      id: 1,
      name: "Barcelona Home 23/24",
      team: "FC Barcelona",
      price: 89.99,
      originalPrice: 109.99,
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 234,
      category: "la-liga",
      isNew: true,
      isFeatured: true
    },
    {
      id: 2,
      name: "Manchester United Away 23/24",
      team: "Manchester United",
      price: 84.99,
      originalPrice: 99.99,
      image: "/placeholder.svg",
      rating: 4.7,
      reviews: 189,
      category: "premier-league",
      isClassic: true
    },
    {
      id: 3,
      name: "Real Madrid Home 23/24",
      team: "Real Madrid",
      price: 92.99,
      originalPrice: 112.99,
      image: "/placeholder.svg",
      rating: 4.9,
      reviews: 312,
      category: "la-liga",
      isNew: true
    },
    {
      id: 4,
      name: "Liverpool Third 23/24",
      team: "Liverpool FC",
      price: 79.99,
      originalPrice: 94.99,
      image: "/placeholder.svg",
      rating: 4.6,
      reviews: 156,
      category: "premier-league"
    },
    {
      id: 5,
      name: "PSG Home 23/24",
      team: "Paris Saint-Germain",
      price: 87.99,
      originalPrice: 105.99,
      image: "/placeholder.svg",
      rating: 4.5,
      reviews: 203,
      category: "ligue-1"
    },
    {
      id: 6,
      name: "Arsenal Home Retro 04/05",
      team: "Arsenal FC",
      price: 74.99,
      originalPrice: 89.99,
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 445,
      category: "premier-league",
      isClassic: true
    }
  ];

  const categories = [
    { id: "all", name: "All Jerseys", count: featuredJerseys.length },
    { id: "premier-league", name: "Premier League", count: 3 },
    { id: "la-liga", name: "La Liga", count: 2 },
    { id: "ligue-1", name: "Ligue 1", count: 1 },
    { id: "retro", name: "Retro Collection", count: 2 }
  ];

  const filteredJerseys = selectedCategory === "all" 
    ? featuredJerseys 
    : selectedCategory === "retro"
    ? featuredJerseys.filter(jersey => jersey.isClassic)
    : featuredJerseys.filter(jersey => jersey.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                Jersey Legends
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Jerseys</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Teams</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Sale</a>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-red-900 text-white py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Iconic Football
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Jerseys
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Discover authentic jerseys from the world's greatest clubs. Wear the legends, feel the passion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 text-lg font-semibold">
              Shop Now
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg font-semibold">
              View Collections
            </Button>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                placeholder="Search for jerseys, teams, or players..."
                className="pl-10 pr-4 py-3 w-full border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${
                    selectedCategory === category.id 
                      ? "bg-blue-600 hover:bg-blue-700" 
                      : "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600"
                  }`}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {selectedCategory === "all" ? "Featured Jerseys" : 
               selectedCategory === "retro" ? "Retro Collection" :
               categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Authentic jerseys from the world's most legendary football clubs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJerseys.map((jersey) => (
              <Card key={jersey.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden">
                <div className="relative">
                  <img 
                    src={jersey.image} 
                    alt={jersey.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {jersey.isNew && (
                      <Badge className="bg-green-500 hover:bg-green-600 text-white">
                        NEW
                      </Badge>
                    )}
                    {jersey.isClassic && (
                      <Badge className="bg-amber-500 hover:bg-amber-600 text-white">
                        CLASSIC
                      </Badge>
                    )}
                    {jersey.isFeatured && (
                      <Badge className="bg-blue-500 hover:bg-blue-600 text-white">
                        FEATURED
                      </Badge>
                    )}
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white hover:text-red-500"
                  >
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < Math.floor(jersey.rating) 
                              ? "text-yellow-400 fill-current" 
                              : "text-gray-300"
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({jersey.reviews})</span>
                  </div>
                  
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{jersey.name}</h3>
                  <p className="text-gray-600 mb-3">{jersey.team}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-blue-600">${jersey.price}</span>
                      {jersey.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">${jersey.originalPrice}</span>
                      )}
                    </div>
                    {jersey.originalPrice && (
                      <Badge variant="destructive" className="bg-red-500">
                        SAVE ${(jersey.originalPrice - jersey.price).toFixed(2)}
                      </Badge>
                    )}
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest jersey releases and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 flex-1"
            />
            <Button className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent mb-4">
                Jersey Legends
              </div>
              <p className="text-gray-400">
                Your destination for authentic football jerseys from legendary clubs worldwide.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Shop</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Premier League</a></li>
                <li><a href="#" className="hover:text-white transition-colors">La Liga</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Serie A</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bundesliga</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Jersey Legends. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
