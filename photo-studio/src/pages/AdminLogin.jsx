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
    try {
      await login(form.email, form.password);
      navigate(location.state?.from || "/admin/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="premium-container flex min-h-screen items-center py-24">
      <form onSubmit={submit} className="glass-card mx-auto w-full max-w-md rounded-3xl p-7">
        <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--gold)]">Admin</p>
        <h1 className="mt-2 text-4xl">Dashboard Login</h1>
        <div className="mt-6 grid gap-4">
          <FormField label="Email" name="email" type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
          <FormField label="Password" name="password" type="password" value={form.password} onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))} />
        </div>
        {error ? <p className="mt-3 text-sm text-red-400">{error}</p> : null}
        <PrimaryButton className="mt-6 w-full">Login</PrimaryButton>
      </form>
    </div>
  );
}
