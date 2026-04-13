import { motion } from "framer-motion";
import { ArrowLeft, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BlogsPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container-narrow section-padding !py-6">
        <button
          onClick={() => navigate("/")}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </button>
      </div>

      {/* Content */}
      <section className="container-narrow section-padding !pt-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center justify-center text-center py-24"
        >
          {/* Icon */}
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <BookOpen className="w-7 h-7 text-primary" />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-semibold text-foreground mb-2">
            Blogs Coming Soon
          </h1>

          {/* Subtitle */}
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            We’re currently working on publishing articles, design insights,
            and development tips. Stay tuned — something great is coming.
          </p>
        </motion.div>
      </section>
    </main>
  );
}