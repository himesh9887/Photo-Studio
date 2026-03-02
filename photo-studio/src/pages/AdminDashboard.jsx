import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { api } from "../services/api.js";
import PrimaryButton from "../components/PrimaryButton.jsx";

export default function AdminDashboard() {
  const { token, logout, admin } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get("/bookings", token)
      .then((res) => setBookings(res.data.bookings || []))
      .catch((err) => setError(err.message || "Unable to load bookings."));
  }, [token]);

  return (
    <div className="premium-container pt-20 pb-16 md:pt-24 md:pb-20">
      <div className="rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)] p-6 shadow-2xl sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[color:var(--line)] pb-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--gold)]">Admin Dashboard</p>
            <h1 className="mt-3 text-3xl leading-tight sm:text-4xl">Welcome, {admin?.name || "Admin"}</h1>
          </div>
          <PrimaryButton onClick={logout} variant="outline">Logout</PrimaryButton>
        </div>

        {error ? <p className="mt-5 text-sm text-red-400">{error}</p> : null}

        <div className="mt-6 overflow-x-auto rounded-[1.5rem] border border-[color:var(--line)]">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-[color:var(--bg-soft)]">
              <tr>
                <th className="p-4">Client</th>
                <th className="p-4">Package</th>
                <th className="p-4">Date</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length ? (
                bookings.map((booking) => (
                  <tr key={booking._id} className="border-t border-[color:var(--line)]">
                    <td className="p-4">{booking.customerName}</td>
                    <td className="p-4">{booking.packageName}</td>
                    <td className="p-4">{booking.eventDate ? new Date(booking.eventDate).toLocaleDateString() : "-"}</td>
                    <td className="p-4">INR {booking.amount?.toLocaleString("en-IN") || 0}</td>
                    <td className="p-4 capitalize">{booking.status || "pending"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="p-6 text-[color:var(--muted)]" colSpan="5">No bookings found yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
