import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
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

export default function Booking() {
  const [params] = useSearchParams();
  const preselected = params.get("package");
  const [step, setStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState(preselected || packages[0].id);
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [paymentType, setPaymentType] = useState("full");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const chosenPackage = useMemo(() => packages.find((item) => item.id === selectedPackage) || packages[0], [selectedPackage]);
  const amount = paymentType === "full" ? chosenPackage.price : Math.round(chosenPackage.price * 0.2);

  const validate = () => {
    const next = {};
    if (!form.name) next.name = "Name required";
    if (!form.email) next.email = "Email required";
    if (!form.phone) next.phone = "Phone required";
    if (!form.eventDate) next.eventDate = "Date required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const continueFlow = async () => {
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
        customerName: form.name,
        customerEmail: form.email,
        customerPhone: form.phone,
        eventDate: form.eventDate,
        notes: form.notes,
        packageId: chosenPackage.id,
        packageName: chosenPackage.name,
        paymentType,
        amount,
      });

      if (response.data.url) {
        window.location.href = response.data.url;
      } else {
        navigate(`/booking-success?bookingId=${response.data.bookingId}`);
      }
    } catch (error) {
      setErrors({ submit: error.message || "Unable to start checkout." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="premium-container pt-28 pb-28 md:pt-32 md:pb-24">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
        <section>
          <div className="rounded-[2rem] border border-[color:var(--line)] bg-[linear-gradient(135deg,color-mix(in_oklab,var(--surface)_96%,transparent),color-mix(in_oklab,var(--bg-soft)_92%,transparent))] px-5 py-8 shadow-2xl sm:px-10 sm:py-10">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[color:var(--gold)]">Booking Flow</p>
            <h1 className="mt-6 text-3xl leading-tight sm:text-5xl lg:text-6xl">Reserve your date with a cleaner premium flow.</h1>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                "Select Package",
                "Your Details",
                "Payment",
              ].map((label, index) => {
                const active = step === index + 1;
                const complete = step > index + 1;
                return (
                  <div key={label} className={`rounded-3xl border px-4 py-4 text-center text-xs font-semibold uppercase tracking-[0.22em] ${active ? "border-[color:var(--gold)] bg-[color:var(--gold)]/10 text-[color:var(--gold)]" : complete ? "border-[color:var(--gold)]/20 bg-[color:var(--bg-soft)]" : "border-[color:var(--line)] bg-[color:var(--surface)] text-[color:var(--muted)]"}`}>
                    {label}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-5 shadow-2xl sm:p-8">
            {step === 1 ? (
              <div className="grid gap-4">
                {packages.map((item) => {
                  const active = selectedPackage === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      className={`w-full rounded-[1.5rem] border p-5 text-left sm:p-6 ${active ? "gold-glow border-[color:var(--gold)]/30 bg-[color:var(--bg-soft)]" : "border-[color:var(--line)] bg-transparent"}`}
                      onClick={() => setSelectedPackage(item.id)}
                      whileTap={{ scale: 0.98 }}
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--gold)]">{item.name}</p>
                      <p className="mt-3 text-2xl font-semibold">INR {item.price.toLocaleString("en-IN")}</p>
                      <p className="mt-3 text-base leading-8 text-[color:var(--muted)]">{item.description}</p>
                    </motion.button>
                  );
                })}
              </div>
            ) : null}

            {step === 2 ? (
              <div className="grid gap-4">
                <FormField label="Full Name" name="name" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} error={errors.name} />
                <FormField label="Email" name="email" type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} error={errors.email} />
                <FormField label="Phone" name="phone" value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} error={errors.phone} />
                <FormField label="Event Date" name="eventDate" type="date" value={form.eventDate} onChange={(e) => setForm((f) => ({ ...f, eventDate: e.target.value }))} error={errors.eventDate} />
                <FormField label="Vision Notes" name="notes" textarea value={form.notes} onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))} />
              </div>
            ) : null}

            {step === 3 ? (
              <div className="grid gap-4">
                {[
                  { id: "full", title: "Pay Full", detail: `INR ${chosenPackage.price.toLocaleString("en-IN")}` },
                  { id: "advance", title: "Pay 20% Advance", detail: `INR ${Math.round(chosenPackage.price * 0.2).toLocaleString("en-IN")}` },
                ].map((option) => (
                  <motion.button
                    key={option.id}
                    className={`rounded-[1.5rem] border p-5 text-left ${paymentType === option.id ? "gold-glow border-[color:var(--gold)]/30 bg-[color:var(--bg-soft)]" : "border-[color:var(--line)]"}`}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setPaymentType(option.id)}
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--gold)]">{option.title}</p>
                    <p className="mt-2 text-2xl font-semibold">{option.detail}</p>
                  </motion.button>
                ))}
                <p className="text-sm text-[color:var(--muted)]">Secure checkout powered by Stripe.</p>
              </div>
            ) : null}
          </div>
        </section>

          <aside className="rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-5 shadow-2xl sm:p-8 lg:sticky lg:top-28">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--gold)]">Summary</p>
          <h2 className="mt-4 text-2xl leading-tight sm:text-3xl">{chosenPackage.name}</h2>
          <p className="mt-4 text-base leading-8 text-[color:var(--muted)]">{chosenPackage.description}</p>
          <div className="mt-6 space-y-3 text-base">
            <p>Base: INR {chosenPackage.price.toLocaleString("en-IN")}</p>
            <p>Payment: {paymentType === "full" ? "Full" : "20% Advance"}</p>
            <p className="text-xl font-semibold text-[color:var(--gold)]">Due now: INR {amount.toLocaleString("en-IN")}</p>
          </div>
          {errors.submit ? <p className="mt-5 text-sm text-red-400">{errors.submit}</p> : null}
        </aside>
      </div>

      <div className="fixed inset-x-0 bottom-24 z-40 px-4 md:hidden">
        <PrimaryButton className="w-full py-4" onClick={continueFlow} disabled={loading}>
          {loading ? <Loader2 className="animate-spin" size={18} /> : step < 3 ? "Continue" : "Proceed to Payment"}
        </PrimaryButton>
      </div>

      <div className="mt-8 hidden md:block">
        <PrimaryButton onClick={continueFlow} disabled={loading}>
          {loading ? <Loader2 className="animate-spin" size={18} /> : step < 3 ? "Continue" : "Proceed to Payment"}
        </PrimaryButton>
      </div>
    </div>
  );
}
