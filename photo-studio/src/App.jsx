import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout.jsx";
import RouteTransition from "./components/RouteTransition.jsx";
import AppLoader from "./components/AppLoader.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Home from "./pages/Home.jsx";
import Gallery from "./pages/Gallery.jsx";
import GalleryDetails from "./pages/GalleryDetails.jsx";
import Packages from "./pages/Packages.jsx";
import Booking from "./pages/Booking.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import BookingSuccess from "./pages/BookingSuccess.jsx";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<RouteTransition><Home /></RouteTransition>} />
        <Route path="/gallery" element={<RouteTransition><Gallery /></RouteTransition>} />
        <Route path="/gallery/:id" element={<RouteTransition><GalleryDetails /></RouteTransition>} />
        <Route path="/packages" element={<RouteTransition><Packages /></RouteTransition>} />
        <Route path="/booking" element={<RouteTransition><Booking /></RouteTransition>} />
        <Route path="/about" element={<RouteTransition><About /></RouteTransition>} />
        <Route path="/contact" element={<RouteTransition><Contact /></RouteTransition>} />
        <Route path="/booking-success" element={<RouteTransition><BookingSuccess /></RouteTransition>} />
        <Route path="/admin" element={<RouteTransition><AdminLogin /></RouteTransition>} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <RouteTransition>
                <AdminDashboard />
              </RouteTransition>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <>
      <AppLoader />
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </>
  );
}
