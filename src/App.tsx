import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import MasterLayout from "./components/layout/MasterLayout";
import Home from "./components/home";
import PropertiesPage from "./components/properties/PropertiesPage";
import PropertyDetails from "./components/properties/PropertyDetails";
import MaintenancePage from "./components/maintenance/MaintenancePage";
import MaintenanceDetails from "./components/maintenance/MaintenanceDetails";
import TenantsPage from "./components/tenants/TenantsPage";
import TenantDetails from "./components/tenants/TenantDetails";
import PaymentsPage from "./components/payments/PaymentsPage";
import PaymentDetails from "./components/payments/PaymentDetails";
import DocumentsPage from "./components/documents/DocumentsPage";
import DocumentDetails from "./components/documents/DocumentDetails";
import ReportsPage from "./components/reports/ReportsPage";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        {/* Home page without MasterLayout */}
        <Route path="/" element={<Home />} />

        {/* Pages with MasterLayout */}
        <Route
          path="/*"
          element={
            <MasterLayout>
              <Routes>
                <Route path="/properties" element={<PropertiesPage />} />
                <Route path="/properties/:id" element={<PropertyDetails />} />
                <Route path="/maintenance" element={<MaintenancePage />} />
                <Route
                  path="/maintenance/:id"
                  element={<MaintenanceDetails />}
                />
                <Route path="/tenants" element={<TenantsPage />} />
                <Route path="/tenants/:id" element={<TenantDetails />} />
                <Route path="/payments" element={<PaymentsPage />} />
                <Route path="/payments/:id" element={<PaymentDetails />} />
                <Route path="/documents" element={<DocumentsPage />} />
                <Route path="/documents/:id" element={<DocumentDetails />} />
                <Route path="/reports" element={<ReportsPage />} />
              </Routes>
              {/* Handle custom tempo routes */}
              {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
            </MasterLayout>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;
