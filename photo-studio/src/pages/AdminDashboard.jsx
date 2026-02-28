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
      .catch((err) => setError(err.message));
  }, [token]);

  return (
    <div className="premium-container pt-28 pb-20 md:pt-32">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--gold)]">Admin Dashboard</p>
          <h1 className="text-4xl">Welcome, {admin?.name || "Admin"}</h1>
        </div>
        <PrimaryButton onClick={logout} variant="outline">
          Logout
        </PrimaryButton>
      </div>
      {error ? <p className="mb-3 text-sm text-red-400">{error}</p> : null}
      <div className="overflow-hidden rounded-3xl border border-[color:var(--gold)]/20">
        <table className="w-full text-left text-sm">
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
            {bookings.map((booking) => (
              <tr key={booking._id} className="border-t border-[color:var(--gold)]/15">
                <td className="p-4">{booking.customerName}</td>
                <td className="p-4">{booking.packageName}</td>
                <td className="p-4">{new Date(booking.eventDate).toLocaleDateString()}</td>
                <td className="p-4">INR {booking.amount?.toLocaleString()}</td>
                <td className="p-4 capitalize">{booking.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
