import { useMemo, useState } from "react";
import {
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  Circle,
  CreditCard,
  IndianRupee,
  Loader2,
  ShieldCheck,
  Smartphone,
  Sparkles,
  University,
} from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import FormField from "../components/FormField.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import { packages } from "../data/studioData.js";
import { api } from "../services/api.js";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  eventDate: "",
  notes: "",
};

const steps = [
  { id: 1, label: "Select Package" },
  { id: 2, label: "Your Details" },
  { id: 3, label: "Payment" },
];

const paymentMethods = [
  {
    id: "auto",
    title: "Smart Checkout",
    badge: "Recommended",
    detail: "Stripe automatically shows the fastest available option for the customer.",
    hint: "Best when you want card, UPI, and bank options in one flow.",
    icon: BadgeCheck,
  },
  {
    id: "card",
    title: "Card Only",
    badge: "Instant",
    detail: "Use credit or debit card for immediate confirmation.",
    hint: "Good for domestic and international card payments.",
    icon: CreditCard,
  },
  {
    id: "upi",
    title: "UPI",
    badge: "Mobile",
    detail: "Pay using GPay, PhonePe, Paytm, BHIM, and supported UPI apps.",
    hint: "Best for quick mobile payments in India.",
    icon: Smartphone,
  },
  {
    id: "netbanking",
    title: "Netbanking",
    badge: "Bank Transfer",
    detail: "Redirect to a supported bank and complete payment securely there.",
    hint: "Useful when customers prefer direct bank login.",
    icon: University,
  },
];

const paymentPlans = [
  {
    id: "full",
    title: "Pay Full",
    description: "Complete booking in one step and avoid a second payment later.",
  },
  {
    id: "advance",
    title: "Pay 20% Advance",
    description: "Reserve your date now and settle the remaining amount closer to the event.",
  },
];

export default function Booking() {
  const [params] = useSearchParams();
  const preselected = params.get("package");
  const paymentCancelled = params.get("payment") === "cancelled";
  const [step, setStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState(preselected || packages[0].id);
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [paymentType, setPaymentType] = useState("full");
  const [paymentMethod, setPaymentMethod] = useState("auto");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];

  const chosenPackage = useMemo(() => packages.find((item) => item.id === selectedPackage) || packages[0], [selectedPackage]);
  const amount = paymentType === "full" ? chosenPackage.price : Math.round(chosenPackage.price * 0.2);
  const selectedPaymentMethod = paymentMethods.find((method) => method.id === paymentMethod) || paymentMethods[0];

  const updateField = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const next = {};
    const name = form.name.trim();
    const email = form.email.trim();
    const phone = form.phone.replace(/\D/g, "");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) next.name = "Name required";
    if (!email) next.email = "Email required";
    if (email && !emailRegex.test(email)) next.email = "Enter valid email";
    if (!phone) next.phone = "Phone required";
    if (phone && phone.length !== 10) next.phone = "Enter valid 10-digit phone number";
    if (!form.eventDate) next.eventDate = "Date required";
    if (form.eventDate && form.eventDate < today) next.eventDate = "Choose a future date";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const goBack = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const continueFlow = async () => {
    if (loading) return;

    if (step === 1) {
      setErrors({});
      setStep(2);
      return;
    }

    if (step === 2) {
      if (!validate()) return;
      setStep(3);
      return;
    }

    try {
      setLoading(true);
      setErrors({});
      const response = await api.post("/bookings/checkout", {
        customerName: form.name.trim(),
        customerEmail: form.email.trim(),
        customerPhone: form.phone,
        eventDate: form.eventDate,
        notes: form.notes.trim(),
        packageId: chosenPackage.id,
        packageName: chosenPackage.name,
        paymentType,
        paymentMethod,
        amount,
      });

      if (response.data.url) {
        window.location.href = response.data.url;
      } else {
        navigate(`/booking-success?bookingId=${response.data.bookingId}`);
      }
    } catch (error) {
      const message =
        error.message === "Failed to fetch"
          ? "Unable to connect to server. Please start backend and try again."
          : error.message || "Unable to start checkout.";
      setErrors({ submit: message });
    } finally {
      setLoading(false);
    }
  };

  const ctaLabel = step < 3 ? "Continue" : "Proceed to Payment";

  return (
    <div className="premium-container pb-32 pt-28 md:pt-32 md:pb-24">
      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_380px] xl:items-start">
        <section className="space-y-6 sm:space-y-8">
          {paymentCancelled ? (
            <div className="rounded-2xl border border-amber-400/35 bg-amber-400/10 px-4 py-3 text-sm text-amber-200">
              Payment was cancelled. You can continue and complete payment again.
            </div>
          ) : null}

          <div className="rounded-[2rem] border border-[color:var(--line)] bg-[linear-gradient(145deg,color-mix(in_oklab,var(--surface)_96%,transparent),color-mix(in_oklab,var(--bg-soft)_90%,transparent))] px-5 py-8 shadow-2xl sm:px-8 sm:py-9 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[color:var(--gold)] sm:text-sm">Booking Flow</p>
            <h1 className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl xl:text-6xl">Reserve your date with a polished premium checkout.</h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[color:var(--muted)] sm:text-base sm:leading-8">
              Clean multi-step booking optimized for phone, tablet, and laptop with real-time validation and clear payment options.
            </p>

            <div className="mt-7 grid gap-2 sm:grid-cols-3 sm:gap-3">
              {steps.map((item) => {
                const active = step === item.id;
                const complete = step > item.id;
                const Indicator = complete ? CheckCircle2 : active ? Sparkles : Circle;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => (item.id < step ? setStep(item.id) : null)}
                    className={`flex items-center gap-2 rounded-2xl border px-3 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.16em] transition sm:min-h-[4rem] sm:px-4 ${
                      active
                        ? "border-[color:var(--gold)] bg-[color:var(--gold)]/10 text-[color:var(--gold)]"
                        : complete
                          ? "border-[color:var(--gold)]/20 bg-[color:var(--bg-soft)] text-[color:var(--text)]"
                          : "border-[color:var(--line)] bg-[color:var(--surface)] text-[color:var(--muted)]"
                    }`}
                  >
                    <Indicator size={16} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-4 shadow-2xl sm:p-7 lg:p-8">
            {step === 1 ? (
              <div className="grid gap-3 sm:gap-4">
                {packages.map((item) => {
                  const active = selectedPackage === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      className={`w-full rounded-[1.5rem] border p-4 text-left transition sm:p-5 lg:p-6 ${active ? "gold-glow border-[color:var(--gold)]/30 bg-[color:var(--bg-soft)]" : "border-[color:var(--line)] bg-transparent hover:border-[color:var(--gold)]/22"}`}
                      onClick={() => setSelectedPackage(item.id)}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--gold)]">{item.name}</p>
                        {active ? <span className="rounded-full border border-[color:var(--gold)]/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--gold)]">Selected</span> : null}
                      </div>
                      <p className="mt-3 text-xl font-semibold sm:text-2xl">INR {item.price.toLocaleString("en-IN")}</p>
                      <p className="mt-3 text-sm leading-7 text-[color:var(--muted)] sm:text-base sm:leading-8">{item.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.features.slice(0, 4).map((feature) => (
                          <span key={feature} className="rounded-full border border-[color:var(--line)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[color:var(--muted)]">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : null}

            {step === 2 ? (
              <div className="grid gap-4 lg:grid-cols-2">
                <FormField label="Full Name" name="name" value={form.name} onChange={(e) => updateField("name", e.target.value)} error={errors.name} />
                <FormField label="Email" name="email" type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} error={errors.email} />
                <FormField
                  label="Phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  pattern="[0-9]{10}"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
                  error={errors.phone}
                />
                <FormField label="Event Date" name="eventDate" min={today} type="date" value={form.eventDate} onChange={(e) => updateField("eventDate", e.target.value)} error={errors.eventDate} />
                <div className="lg:col-span-2">
                  <FormField label="Vision Notes" name="notes" textarea value={form.notes} onChange={(e) => updateField("notes", e.target.value)} />
                </div>
              </div>
            ) : null}

            {step === 3 ? (
              <div className="grid gap-4">
                <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_300px]">
                  <div className="space-y-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--gold)]">Choose Payment Plan</p>
                      <div className="mt-3 grid gap-3">
                        {paymentPlans.map((option) => {
                          const optionAmount =
                            option.id === "full"
                              ? chosenPackage.price
                              : Math.round(chosenPackage.price * 0.2);
                          const activePlan = paymentType === option.id;

                          return (
                            <button
                              key={option.id}
                              type="button"
                              className={`rounded-[1.5rem] border p-5 text-left transition ${
                                activePlan
                                  ? "gold-glow border-[color:var(--gold)]/35 bg-[color:var(--bg-soft)]"
                                  : "border-[color:var(--line)] bg-transparent hover:border-[color:var(--gold)]/22"
                              }`}
                              onClick={() => setPaymentType(option.id)}
                            >
                              <div className="flex flex-wrap items-start justify-between gap-3">
                                <div>
                                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">{option.title}</p>
                                  <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{option.description}</p>
                                </div>
                                {activePlan ? (
                                  <span className="rounded-full border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--gold)]">
                                    Selected
                                  </span>
                                ) : null}
                              </div>
                              <div className="mt-4 flex items-center gap-2 text-2xl font-semibold">
                                <IndianRupee size={20} className="text-[color:var(--gold)]" />
                                {optionAmount.toLocaleString("en-IN")}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--gold)]">Choose Payment Method</p>
                        <div className="flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--bg-soft)] px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-[color:var(--muted)]">
                          <ShieldCheck size={14} className="text-[color:var(--gold)]" />
                          Secure Stripe Checkout
                        </div>
                      </div>

                      <div className="mt-3 grid gap-3 sm:grid-cols-2">
                        {paymentMethods.map((method) => {
                          const Icon = method.icon;
                          const activeMethod = paymentMethod === method.id;

                          return (
                            <button
                              key={method.id}
                              type="button"
                              onClick={() => setPaymentMethod(method.id)}
                              className={`rounded-[1.5rem] border p-4 text-left transition ${
                                activeMethod
                                  ? "border-[color:var(--gold)]/35 bg-[color:var(--gold)]/10 shadow-[0_18px_36px_rgba(212,175,55,0.08)]"
                                  : "border-[color:var(--line)] hover:border-[color:var(--gold)]/25"
                              }`}
                            >
                              <div className="flex items-start justify-between gap-3">
                                <span className="inline-flex rounded-2xl bg-[color:var(--gold)]/12 p-3 text-[color:var(--gold)]">
                                  <Icon size={18} />
                                </span>
                                <span className="rounded-full border border-[color:var(--line)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--muted)]">
                                  {method.badge}
                                </span>
                              </div>
                              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--gold)]">{method.title}</p>
                              <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{method.detail}</p>
                              <p className="mt-3 text-xs leading-5 text-[color:var(--muted)]/90">{method.hint}</p>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.75rem] border border-[color:var(--line)] bg-[linear-gradient(145deg,color-mix(in_oklab,var(--surface)_94%,transparent),color-mix(in_oklab,var(--bg-soft)_92%,transparent))] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">Payment Snapshot</p>
                    <div className="mt-4 space-y-4">
                      <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-4">
                        <p className="text-[11px] uppercase tracking-[0.14em] text-[color:var(--muted)]">Amount Due Now</p>
                        <p className="mt-2 text-3xl font-semibold">INR {amount.toLocaleString("en-IN")}</p>
                        <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                          {paymentType === "full"
                            ? "Full booking amount will be collected in this checkout."
                            : "Advance amount confirms your booking slot today."}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-4">
                        <p className="text-[11px] uppercase tracking-[0.14em] text-[color:var(--muted)]">Selected Method</p>
                        <p className="mt-2 text-lg font-semibold">{selectedPaymentMethod.title}</p>
                        <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{selectedPaymentMethod.detail}</p>
                      </div>

                      <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-4 text-sm leading-6 text-[color:var(--muted)]">
                        After clicking proceed, you will be redirected to Stripe checkout to complete the payment safely.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            <div className="mt-6 flex items-center justify-between gap-3 border-t border-[color:var(--line)] pt-5">
              <button
                type="button"
                onClick={goBack}
                disabled={step === 1 || loading}
                className="inline-flex min-h-[2.85rem] items-center rounded-full border border-[color:var(--line)] px-4 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)] transition disabled:cursor-not-allowed disabled:opacity-40 hover:border-[color:var(--gold)]/30 hover:text-[color:var(--gold)]"
              >
                Back
              </button>
              <p className="hidden text-xs uppercase tracking-[0.14em] text-[color:var(--muted)] sm:block">
                Step {step} of {steps.length}
              </p>
              <PrimaryButton onClick={continueFlow} disabled={loading} className="hidden md:inline-flex">
                {loading ? <Loader2 className="animate-spin" size={18} /> : ctaLabel}
              </PrimaryButton>
            </div>
          </div>
        </section>

        <aside className="space-y-4 xl:sticky xl:top-28">
          <div className="rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-5 shadow-2xl sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--gold)] sm:text-sm">Summary</p>
            <h2 className="mt-3 text-2xl leading-tight sm:text-3xl">{chosenPackage.name}</h2>
            <p className="mt-3 text-sm leading-7 text-[color:var(--muted)] sm:text-base sm:leading-8">{chosenPackage.description}</p>

            <div className="mt-5 space-y-2 text-sm sm:text-base">
              <p>Base: INR {chosenPackage.price.toLocaleString("en-IN")}</p>
              <p>Payment: {paymentType === "full" ? "Full" : "20% Advance"}</p>
              <p>Method: {selectedPaymentMethod.title}</p>
              <p className="text-xl font-semibold text-[color:var(--gold)]">Due now: INR {amount.toLocaleString("en-IN")}</p>
            </div>

            <div className="mt-5 space-y-2">
              {chosenPackage.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-[color:var(--muted)]">
                  <CheckCircle2 size={14} className="text-[color:var(--gold)]" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {form.eventDate || form.phone ? (
              <div className="mt-6 rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg-soft)] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--gold)]">Client Snapshot</p>
                {form.eventDate ? (
                  <p className="mt-2 flex items-center gap-2 text-sm text-[color:var(--muted)]">
                    <CalendarDays size={14} className="text-[color:var(--gold)]" />
                    Event Date: {form.eventDate}
                  </p>
                ) : null}
                {form.phone ? <p className="mt-1 text-sm text-[color:var(--muted)]">Phone: +91 {form.phone}</p> : null}
              </div>
            ) : null}

            {errors.submit ? <p className="mt-5 text-sm text-red-400">{errors.submit}</p> : null}
          </div>

          <div className="rounded-2xl border border-[color:var(--line)] bg-[linear-gradient(135deg,color-mix(in_oklab,var(--surface)_94%,transparent),color-mix(in_oklab,var(--bg-soft)_92%,transparent))] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">Need help now?</p>
            <a href="tel:+919876543210" className="mt-3 block text-lg font-semibold hover:text-[color:var(--gold)]">
              +91 98765 43210
            </a>
            <p className="mt-2 text-sm leading-7 text-[color:var(--muted)]">Booking support available daily 10:00 AM - 8:00 PM.</p>
          </div>
        </aside>
      </div>

      <div className="fixed inset-x-0 bottom-24 z-40 px-4 md:hidden">
        <PrimaryButton className="w-full py-4" onClick={continueFlow} disabled={loading}>
          {loading ? <Loader2 className="animate-spin" size={18} /> : ctaLabel}
        </PrimaryButton>
      </div>
    </div>
  );
}
