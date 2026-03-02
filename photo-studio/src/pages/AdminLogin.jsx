import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FormField from "../components/FormField.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import { useAuth } from "../context/AuthContext.jsx";

export default function AdminLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const submit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      await login(form.email, form.password);
      navigate(location.state?.from || "/admin/dashboard");
    } catch (err) {
      setError(err.message || "Login failed.");
    }
  };

  return (
    <div className="premium-container flex min-h-screen items-center py-24">
      <form onSubmit={submit} className="mx-auto w-full max-w-lg rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-8 shadow-2xl sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--gold)]">Admin</p>
        <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">Dashboard Login</h1>
        <p className="mt-4 text-base leading-8 text-[color:var(--muted)]">Secure access for bookings, dashboard records, and client management.</p>
        <div className="mt-8 grid gap-4">
          <FormField label="Email" name="email" type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
          <FormField label="Password" name="password" type="password" value={form.password} onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))} />
        </div>
        {error ? <p className="mt-4 text-sm text-red-400">{error}</p> : null}
        <PrimaryButton className="mt-8 w-full">Login</PrimaryButton>
      </form>
    </div>
  );
}
