import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { packages } from "../data/studioData.js";
import FormField from "../components/FormField.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
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
    if (step === 1) return setStep(2);
    if (step === 2) {
      if (!validate()) return;
      return setStep(3);
    }

    try {
      setLoading(true);
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
      setErrors({ submit: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="premium-container grid gap-10 pt-28 pb-28 md:grid-cols-[1fr_360px] md:pt-32 md:pb-20">
      <section>
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">Booking Flow</p>
        <h1 className="mb-8 text-5xl md:text-6xl">Reserve your date</h1>

        {step === 1 ? (
          <div className="grid gap-4">
            {packages.map((item) => {
              const active = selectedPackage === item.id;
              return (
                <motion.button
                  key={item.id}
                  className={`w-full rounded-3xl p-6 text-left ${active ? "gold-glow bg-[color:var(--bg-soft)]" : "glass-card"}`}
                  onClick={() => setSelectedPackage(item.id)}
                  whileTap={{ scale: 0.98 }}
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--gold)]">{item.name}</p>
                  <p className="mt-1 text-lg">INR {item.price.toLocaleString()}</p>
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
              { id: "full", title: "Pay Full", detail: `INR ${chosenPackage.price.toLocaleString()}` },
              { id: "advance", title: "Pay 20% Advance", detail: `INR ${Math.round(chosenPackage.price * 0.2).toLocaleString()}` },
            ].map((option) => (
              <motion.button
                key={option.id}
                className={`rounded-3xl p-5 text-left ${paymentType === option.id ? "gold-glow bg-[color:var(--bg-soft)]" : "glass-card"}`}
                whileTap={{ scale: 0.98 }}
                onClick={() => setPaymentType(option.id)}
              >
                <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--gold)]">{option.title}</p>
                <p className="mt-1 text-xl">{option.detail}</p>
              </motion.button>
            ))}
            <p className="text-sm text-[color:var(--muted)]">Secure checkout powered by Stripe.</p>
          </div>
        ) : null}
      </section>

      <aside className="glass-card sticky top-28 h-fit rounded-3xl p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--gold)]">Summary</p>
        <h2 className="mt-2 text-2xl">{chosenPackage.name}</h2>
        <p className="mt-2 text-sm text-[color:var(--muted)]">{chosenPackage.description}</p>
        <div className="mt-5 space-y-2 text-sm">
          <p>Base: INR {chosenPackage.price.toLocaleString()}</p>
          <p>Payment: {paymentType === "full" ? "Full" : "20% Advance"}</p>
          <p className="text-lg text-[color:var(--gold)]">Due now: INR {amount.toLocaleString()}</p>
        </div>
        {errors.submit ? <p className="mt-4 text-sm text-red-400">{errors.submit}</p> : null}
      </aside>

      <div className="fixed inset-x-0 bottom-20 z-40 px-4 md:hidden">
        <PrimaryButton className="w-full py-4" onClick={continueFlow} disabled={loading}>
          {loading ? <Loader2 className="animate-spin" size={18} /> : step < 3 ? "Continue" : "Proceed to Payment"}
        </PrimaryButton>
      </div>
      <div className="hidden md:block md:col-span-2">
        <PrimaryButton onClick={continueFlow} disabled={loading}>
          {loading ? <Loader2 className="animate-spin" size={18} /> : step < 3 ? "Continue" : "Proceed to Payment"}
        </PrimaryButton>
      </div>
    </div>
  );
}
