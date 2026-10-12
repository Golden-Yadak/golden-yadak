import { useLocation } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";
import DashboardOverview from "./DashboardOverview";
import OrdersPage from "./OrdersPage";
import AddressesPage from "./AddressesPage";
import WishlistPage from "./WishlistPage";
import ProfilePage from "./ProfilePage";

export default function UserDashboard({ initialTab }) {
  const location = useLocation();

  const getTabFromPath = () => {
    if (initialTab) return initialTab;
    const path = location.pathname;
    if (path.includes("/orders")) return "orders";
    if (path.includes("/addresses")) return "addresses";
    if (path.includes("/wishlist")) return "wishlist";
    if (path.includes("/profile")) return "profile";
    return "overview";
  };

  const activeTab = getTabFromPath();

  return (
    <DashboardLayout currentTab={activeTab}>
      {activeTab === "overview" && <DashboardOverview />}
      {activeTab === "orders" && <OrdersPage />}
      {activeTab === "addresses" && <AddressesPage />}
      {activeTab === "wishlist" && <WishlistPage />}
      {activeTab === "profile" && <ProfilePage />}
    </DashboardLayout>
  );
}
