import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ExternalLink,
  FileText,
  Video,
  Book,
  Target
} from "lucide-react";

interface Resource {
  type: "video" | "article";
  label: string;
  url: string;
}

interface WeekToggleProps {
  week: string;
  title: string;
  details?: string[];
  resources?: Resource[];
  task: string;
}

export const WeekToggle = ({
  week,
  title,
  details,
  resources,
  task
}: WeekToggleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderTask = (text: string) =>
    text.split("\n\n").map((para, i) => (
      <p key={i} className={i > 0 ? "mt-3" : ""}>
        {para}
      </p>
    ));

  return (
    <div className="border-b border-border/60">
      {/* HEADER */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-4 py-5 px-2 hover:bg-secondary/40 transition-colors text-left group"
      >
        <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </motion.div>

        <span className="font-mono text-sm text-primary/50 font-bold">
          {week}
        </span>

        <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </span>
      </button>

      {/* BODY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pl-12 pr-4 pb-8 space-y-6">
              
              {/* DETAILS */}
              {details?.length > 0 && (
                <div className="text-sm text-muted-foreground leading-relaxed max-w-2xl space-y-2">
                  {details.map((d, i) => (
                    <p key={i}>{d}</p>
                  ))}
                </div>
              )}

              {/* RESOURCES */}
              {resources?.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    <Book className="w-3 h-3" /> Study Materials
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {resources.map((res, i) => (
                      <a
                        key={i}
                        href={res.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary border border-border text-xs font-medium hover:bg-border transition-colors group"
                      >
                        {res.type === "video" ? (
                          <Video className="w-3 h-3 text-red-500" />
                        ) : (
                          <FileText className="w-3 h-3 text-blue-500" />
                        )}

                        {res.label}

                        <ExternalLink className="w-2.5 h-2.5 opacity-40 group-hover:opacity-100" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* TASK */}
              <div className="p-5 rounded-xl bg-primary/5 border border-primary/10">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-2 mb-3">
                  <Target className="w-3 h-3" /> Assignment
                </h4>

                <div className="text-sm text-foreground/80 font-medium leading-relaxed">
                  {renderTask(task)}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};