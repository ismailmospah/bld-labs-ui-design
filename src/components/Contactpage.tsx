import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const SERVICE_PRODUCT = "product_design";
const SERVICE_UX = "ux_research";
const SERVICE_UI = "ui_design";
const SERVICE_DEV = "development";
const SERVICE_OTHER = "other";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const COUNTRY_OPTIONS = [
  "Egypt",
  "Saudi Arabia",
  "UAE",
  "Kuwait",
  "Qatar",
  "Bahrain",
  "Oman",
  "Jordan",
  "Other",
];

const SERVICE_LABELS: Record<string, string> = {
  [SERVICE_PRODUCT]: "Product Design",
  [SERVICE_UX]: "UX Research",
  [SERVICE_UI]: "UI Design",
  [SERVICE_DEV]: "Development",
  [SERVICE_OTHER]: "Other",
};

interface FormState {
  name: string;
  whatsapp: string;
  country: string;
  countryOther: string;
  companyName: string;
  service: string;
  customServiceName: string;
  budget: string;
  industry: string;
  details: string;
}

const EMPTY_FORM: FormState = {
  name: "",
  whatsapp: "",
  country: "",
  countryOther: "",
  companyName: "",
  service: "",
  customServiceName: "",
  budget: "",
  industry: "",
  details: "",
};

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-border/60 bg-card text-foreground placeholder:text-muted-foreground/60 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/10 transition-all";
const labelClass =
  "block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wide";

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isOther = form.service === SERVICE_OTHER;
  const isOtherCountry = form.country === "Other";
  const showProjectFields = Boolean(form.service);

  const set =
    (key: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (isOther && !form.customServiceName.trim()) {
      setError("Please describe the service you need.");
      return;
    }

    setLoading(true);
    const serviceLabel = isOther
      ? `Other: ${form.customServiceName.trim()}`
      : (SERVICE_LABELS[form.service] ?? form.service);

    try {
      
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error("EmailJS environment variables are missing");
      }
      const emailjs = (await import("@emailjs/browser")).default;

      const payload = {
        from_name: form.name,
        whatsapp_number: form.whatsapp,
        country: isOtherCountry ? form.countryOther : form.country,
        company_name: form.companyName,
        service: serviceLabel,
        budget: form.budget || "Not specified",
        industry: form.industry || "Not specified",
        message: form.details || "Not specified",
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        payload,
        EMAILJS_PUBLIC_KEY,
      );

      if (response.status !== 200) {
        throw new Error("Failed to send message");
      }

      setSent(true);
      setForm(EMPTY_FORM); 
    } catch (err) {
      console.error("EmailJS Error:", err);

      setError(
        err?.message ||
          "Something went wrong — please try again or reach us on WhatsApp.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Back link */}
      <div className="container-narrow section-padding !py-6">
        <a
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
        >
          ← Back to home
        </a>
      </div>

      <section className="container-narrow section-padding !pt-0 ">
        <div className="flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl lg:text-5xl font-medium text-foreground leading-[1.15]">
              Let's build something <span className="text-primary">great</span>{" "}
              together
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 className="text-xl font-medium text-foreground mb-2">
                  Message sent!
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                  Thanks for reaching out. We'll review your project and get
                  back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm(EMPTY_FORM);
                  }}
                  className="mt-6 text-sm text-primary underline-offset-2 hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="px-4 py-3 rounded-lg bg-destructive/5 border border-destructive/20 text-destructive text-sm">
                    {error}
                  </div>
                )}

                {/* Name + WhatsApp */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Full name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className={inputClass}
                      value={form.name}
                      onChange={set("name")}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 234 567 8900"
                      className={inputClass}
                      value={form.whatsapp}
                      onChange={set("whatsapp")}
                    />
                  </div>
                </div>

                {/* Country + Company */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Country *</label>
                    <select
                      required
                      className={inputClass}
                      value={form.country}
                      onChange={(e) =>
                        setForm((f) => ({
                          ...f,
                          country: e.target.value,
                          countryOther:
                            e.target.value !== "Other" ? "" : f.countryOther,
                        }))
                      }
                    >
                      <option value="">Select country…</option>
                      {COUNTRY_OPTIONS.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Company *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your company"
                      className={inputClass}
                      value={form.companyName}
                      onChange={set("companyName")}
                    />
                  </div>
                </div>

                {isOtherCountry && (
                  <div>
                    <label className={labelClass}>Your country *</label>
                    <input
                      type="text"
                      required
                      placeholder="Please specify"
                      className={inputClass}
                      value={form.countryOther}
                      onChange={set("countryOther")}
                    />
                  </div>
                )}

                {/* Service */}
                <div>
                  <label className={labelClass}>Service *</label>
                  <select
                    required
                    className={inputClass}
                    value={form.service}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        service: e.target.value,
                        customServiceName: "",
                        budget: "",
                        industry: "",
                        details: "",
                      }))
                    }
                  >
                    <option value="">Select a service…</option>
                    <option value={SERVICE_PRODUCT}>Product Design</option>
                    <option value={SERVICE_UX}>UX Research</option>
                    <option value={SERVICE_UI}>UI Design</option>
                    <option value={SERVICE_DEV}>Development</option>
                    <option value={SERVICE_OTHER}>Other</option>
                  </select>
                </div>

                {showProjectFields && (
                  <>
                    {isOther && (
                      <div>
                        <label className={labelClass}>
                          Describe the service *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="What do you need?"
                          className={inputClass}
                          value={form.customServiceName}
                          onChange={set("customServiceName")}
                        />
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Budget *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. $2,000–5,000"
                          className={inputClass}
                          value={form.budget}
                          onChange={set("budget")}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Industry *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Healthcare"
                          className={inputClass}
                          value={form.industry}
                          onChange={set("industry")}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Project details *</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Briefly describe your project, goals, and timeline…"
                        className={`${inputClass} resize-none`}
                        value={form.details}
                        onChange={set("details")}
                      />
                    </div>
                  </>
                )}

                <Button
                  type="submit"
                  variant="hero"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? (
                    "Sending…"
                  ) : (
                    <>
                      Send message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
