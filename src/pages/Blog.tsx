import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "The Future of AI in Business: 2024 and Beyond",
    excerpt: "Explore how artificial intelligence is reshaping industries and what businesses need to prepare for the AI revolution.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    author: "Alex Thompson",
    date: "Nov 28, 2024",
    readTime: "8 min read",
    category: "AI",
  },
  {
    id: 2,
    title: "Building Scalable SaaS Applications: Best Practices",
    excerpt: "Learn the architectural patterns and development strategies for building software that scales with your business.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    author: "Sarah Williams",
    date: "Nov 25, 2024",
    readTime: "12 min read",
    category: "Development",
  },
  {
    id: 3,
    title: "SEO Strategies That Actually Work in 2024",
    excerpt: "Cut through the noise and discover the SEO techniques that are driving real results for modern businesses.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop",
    author: "Michael Chen",
    date: "Nov 22, 2024",
    readTime: "6 min read",
    category: "Marketing",
  },
  {
    id: 4,
    title: "Cloud Security: Protecting Your Digital Assets",
    excerpt: "Essential security measures every business should implement to protect their cloud infrastructure.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop",
    author: "Emily Rodriguez",
    date: "Nov 18, 2024",
    readTime: "10 min read",
    category: "Security",
  },
  {
    id: 5,
    title: "The Psychology of Great UX Design",
    excerpt: "Understanding user behavior and cognitive patterns to create interfaces that people love to use.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    author: "David Park",
    date: "Nov 15, 2024",
    readTime: "7 min read",
    category: "Design",
  },
  {
    id: 6,
    title: "DevOps Pipeline Optimization Guide",
    excerpt: "Streamline your development workflow with these proven DevOps practices and tools.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop",
    author: "Alex Thompson",
    date: "Nov 12, 2024",
    readTime: "9 min read",
    category: "DevOps",
  },
];

const Blog = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-hero-gradient">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal/20 text-teal text-sm font-medium mb-4">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Insights & <span className="gradient-text">Resources</span>
            </h1>
            <p className="text-xl text-primary-foreground/70">
              Stay updated with the latest trends, tips, and insights from our team of experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <img
                src={posts[0].image}
                alt={posts[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                  Featured
                </span>
              </div>
            </div>
            <div>
              <span className="text-secondary font-medium">{posts[0].category}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                {posts[0].title}
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                {posts[0].excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {posts[0].author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {posts[0].date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {posts[0].readTime}
                </span>
              </div>
              <button className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all">
                Read Article
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-secondary/50 transition-all duration-300 hover-lift">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-secondary/90 text-secondary-foreground text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        By {post.author}
                      </span>
                      <span className="text-secondary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 rounded-xl border-2 border-secondary text-secondary font-semibold hover:bg-secondary hover:text-secondary-foreground transition-all">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
