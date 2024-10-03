import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Star, ChevronRight, CheckCircle, Users, Zap, BookMarked, MessageCircle, Shield, Award } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <header className="px-4 lg:px-6 h-20 flex items-center border-b border-gray-800">
        <Link className="flex items-center justify-center" href="#">
          <BookOpen className="h-8 w-8 text-purple-400" />
          <span className="ml-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            LeaderReads
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-purple-400 transition-colors" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:text-purple-400 transition-colors" href="#featured-founders">
            Featured Founders
          </Link>
          <Link className="text-sm font-medium hover:text-purple-400 transition-colors" href="#pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:text-purple-400 transition-colors" href="#testimonials">
            Testimonials
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 md:px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-indigo-900 opacity-50"></div>
          <div className="container mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                  Unlock the Minds of Visionary Leaders
                </h1>
                <p className="mx-auto lg:mx-0 max-w-[700px] text-white text-xl mb-8 leading-relaxed">
                  Join thousands of ambitious entrepreneurs transforming their businesses with curated insights from world-class leaders. Start your journey to extraordinary success today!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105" size="lg">
                    Start Your 7-Day Free Trial
                  </Button>
                  <Button variant="outline" className="text-purple-400 border-purple-400 hover:bg-purple-400 hover:text-gray-900 text-lg px-8 py-3 rounded-full transition-all duration-300" size="lg">
                    Explore Our Library
                  </Button>
                </div>
                <p className="mt-4 text-sm text-gray-300">No credit card required. Cancel anytime.</p>
              </div>
              <div className="flex-1 relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
                <div className="relative bg-gray-800 p-6 rounded-lg shadow-2xl border border-gray-700">
                  <div className="flex flex-col space-y-4">
                    <div className="flex justify-start">
                      <div className="bg-blue-600 rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm">LeaderReads has completely transformed my approach to business strategy!</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-gray-700 rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm">That's amazing! What makes it so special?</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-blue-600 rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm">It's not just books - it's a premium experience with curated insights from top founders and an incredible community of like-minded entrepreneurs!</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-gray-700 rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm">Wow, that sounds like exactly what I need to level up my leadership skills!</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-blue-600 rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm">The ROI is incredible. I've already seen a 30% increase in my team's productivity since joining.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gray-800" id="featured-founders">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              This Month's Featured Visionary
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-2xl opacity-30"></div>
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Featured Founder"
                  width={400}
                  height={400}
                  className="rounded-full mx-auto relative z-10"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-4 text-white">Elon Musk</h3>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Dive into the mind of the visionary behind Tesla, SpaceX, and more. Elon's reading list spans from sci-fi classics that inspired his innovations to groundbreaking physics texts that shaped his understanding of the universe.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105" size="lg">
                  Unlock Elon's Reading List
                  <ChevronRight className="ml-2 h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24" id="how-it-works">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Your Path to Extraordinary Leadership
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BookMarked className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Curated Wisdom</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Receive carefully chosen books that have shaped the minds of today's most successful entrepreneurs and visionaries.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Exclusive Network</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Connect with an elite community of ambitious leaders, sharing insights and fostering game-changing collaborations.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Actionable Insights</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Gain exclusive access to author interviews, in-depth analyses, and practical applications to skyrocket your business growth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gray-800" id="pricing">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Invest in Your Leadership Journey
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-center mb-4 text-white">Aspiring Leader</h3>
                  <p className="text-4xl font-bold text-center mb-4 text-purple-400">$39.99/mo</p>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-center text-white">
                      <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                      <span>1 curated book per month</span>
                    </li>
                    <li className="flex items-center text-white">
                      <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                      <span>Access to online community</span>
                    </li>
                    <li className="flex items-center text-white">
                      <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                      <span>Monthly newsletter with key insights</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg rounded-full transition-all duration-300 transform hover:scale-105">Start Your Journey</Button>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-2 border-purple-500 transform scale-105 hover:border-pink-500 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">MOST POPULAR</div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-white">Visionary</h3>
                  <p className="text-4xl font-bold text-center mb-4 text-purple-400">$59.99/mo</p>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-center text-white">
                      <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                      <span>2 curated books per month</span>
                    </li>
                    <li className="flex items-center text-white">
                      <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                      <span>Premium community access</span>
                    </li>
                    <li className="flex items-center text-white">
                      <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                      <span>Exclusive author interviews</span>
                    </li>
                    <li className="flex items-center text-white">
                      <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                      <span>Quarterly virtual networking events</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg rounded-full transition-all duration-300 transform hover:scale-105">Unlock Your Potential</Button>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-center mb-4 text-white">Titan</h3>
                  <p className="text-4xl font-bold text-center mb-4 text-purple-400">$99.99/mo</p>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-center text-white">
                      <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                      <span>3 curated books per month</span>
                    </li>
                    <li className="flex items-center text-white">
                      <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                      <span>VIP community access</span>
                    </li>
                    <li className="flex items-center text-white">
                      <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                      <span>Monthly 1-on-1 coaching session</span>
                    </li>
                    <li className="flex items-center text-white">
                      <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                      <span>Early access to new features</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg rounded-full transition-all duration-300 transform hover:scale-105">Elevate Your Leadership</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24" id="testimonials">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Success Stories from Our Community
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Sarah J."
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold text-lg text-white">Sarah J.</p>
                      <p className="text-sm text-gray-400">CEO, Tech Innovators</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                    "LeaderReads has been the catalyst for my company's exponential growth. The curated insights and vibrant community have shaped my leadership style and business strategies in ways I never imagined. Our revenue has grown by 200% since I joined!"
                  </p>
                  <div className="flex">
                    <Star className="text-yellow-400 w-5 h-5" />
                    <Star className="text-yellow-400 w-5 h-5" />
                    <Star className="text-yellow-400 w-5 h-5" />
                    <Star className="text-yellow-400 w-5 h-5" />
                    <Star className="text-yellow-400 w-5 h-5" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Michael T."
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold text-lg text-white">Michael T.</p>
                      <p className="text-sm text-gray-400">Startup Founder</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                    "As a busy entrepreneur, LeaderReads is my secret weapon. The carefully selected books and exclusive insights have given me a competitive edge, while the community connections have opened doors I never knew existed. My startup secured $2M in funding thanks to a connection I made here!"
                  </p>
                  <div className="flex">
                    <Star className="text-yellow-400 w-5 h-5" />
                    <Star className="text-yellow-400 w-5 h-5" />
                    <Star className="text-yellow-400 w-5 h-5" />
                    <Star className="text-yellow-400 w-5 h-5" />
                    <Star className="text-yellow-400 w-5 h-5" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Emily R."
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold text-lg text-white">Emily R.</p>
                      <p className="text-sm text-gray-400">Marketing Director</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                    "The insights I've gained from LeaderReads have revolutionized my team's performance. It's not just about the books; it's about the transformative power of shared knowledge and a supportive community of visionaries. Our marketing ROI has increased by 150% since implementing strategies I learned here!"
                  </p>
                  <div className="flex">
                    <Star className="text-yellow-400 w-5 h-5" />
                    <Star className="text-yellow-400 w-5 h-5" />
                    <Star className="text-yellow-400 w-5 h-5" />
                    <Star className="text-yellow-400 w-5 h-5" />
                    <Star className="text-yellow-400 w-5 h-5" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gray-800">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Join the LeaderReads Revolution
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed">
              Don't miss out on the opportunity to transform your leadership skills and connect with visionary entrepreneurs. Start your journey to extraordinary success today!
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105" size="lg">
              Start Your 7-Day Free Trial
            </Button>
            <p className="mt-4 text-sm text-gray-300">No credit card required. Cancel anytime.</p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-white">
                  Trusted by Industry Leaders
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Join thousands of successful entrepreneurs and business leaders who have transformed their careers with LeaderReads.
                </p>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4 md:gap-8">
                <div className="flex items-center justify-center bg-gray-800 p-4 rounded-lg">
                  <Image
                    src="/placeholder.svg?height=80&width=180"
                    alt="Company Logo 1"
                    width={180}
                    height={80}
                    className="max-h-12 w-auto"
                  />
                </div>
                <div className="flex items-center justify-center bg-gray-800 p-4 rounded-lg">
                  <Image
                    src="/placeholder.svg?height=80&width=180"
                    alt="Company Logo 2"
                    width={180}
                    height={80}
                    className="max-h-12 w-auto"
                  />
                </div>
                <div className="flex items-center justify-center bg-gray-800 p-4 rounded-lg">
                  <Image
                    src="/placeholder.svg?height=80&width=180"
                    alt="Company Logo 3"
                    width={180}
                    height={80}
                    className="max-h-12 w-auto"
                  />
                </div>
                <div className="flex items-center justify-center bg-gray-800 p-4 rounded-lg">
                  <Image
                    src="/placeholder.svg?height=80&width=180"
                    alt="Company Logo 4"
                    width={180}
                    height={80}
                    className="max-h-12 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-12 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link className="flex items-center" href="#">
                <BookOpen className="h-6 w-6 text-purple-400 mr-2" />
                <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  LeaderReads
                </span>
              </Link>
              <p className="text-sm text-gray-400">
                Empowering the next generation of visionary leaders through curated knowledge and community.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <nav className="flex flex-col space-y-2">
                <Link className="text-sm text-gray-400 hover:text-purple-400 transition-colors" href="#how-it-works">
                  How It Works
                </Link>
                <Link className="text-sm text-gray-400 hover:text-purple-400 transition-colors" href="#featured-founders">
                  Featured Founders
                </Link>
                <Link className="text-sm text-gray-400 hover:text-purple-400 transition-colors" href="#pricing">
                  Pricing
                </Link>
                <Link className="text-sm text-gray-400 hover:text-purple-400 transition-colors" href="#testimonials">
                  Testimonials
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
              <nav className="flex flex-col space-y-2">
                <Link className="text-sm text-gray-400 hover:text-purple-400 transition-colors" href="#">
                  Terms of Service
                </Link>
                <Link className="text-sm text-gray-400 hover:text-purple-400 transition-colors" href="#">
                  Privacy Policy
                </Link>
                <Link className="text-sm text-gray-400 hover:text-purple-400 transition-colors" href="#">
                  Cookie Policy
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Connect With Us</h3>
              <nav className="flex flex-col space-y-2">
                <Link className="text-sm text-gray-400 hover:text-purple-400 transition-colors" href="#">
                  Twitter
                </Link>
                <Link className="text-sm text-gray-400 hover:text-purple-400 transition-colors" href="#">
                  LinkedIn
                </Link>
                <Link className="text-sm text-gray-400 hover:text-purple-400 transition-colors" href="#">
                  Instagram
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">
              © 2024 LeaderReads. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}