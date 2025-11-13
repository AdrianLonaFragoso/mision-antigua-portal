import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollTop";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import SuppliersPage from "./pages/Suppliers/SuppliersPage";
import DocumentsPage from "./pages/Documents/DocumentsPage";
import PrivacyPage from "./pages/privacy/PrivacyPage";
import LoginPage from "./pages/Login/LoginPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import ColorPalettePage from "./pages/ColorPalette/ColorPalettePage";
import ProjectInfo from "./pages/Projects/ProjectInfo";
import MiniApp from "./pages/MiniApp/MiniApp";
import AnnouncementsPage from "./pages/Announcements/AnnouncementsPage";
import PaymentDetailsPage from "./pages/PaymentDetails/PaymentDetailsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/proveedores" element={<SuppliersPage />} />
          <Route path="/documentos" element={<DocumentsPage />} />
          <Route path="/aviso-de-privacidad" element={<PrivacyPage />} />
          <Route path="/perfil" element={<ProfilePage />} />
          <Route path="/colores" element={<ColorPalettePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/proyecto" element={<ProjectInfo />} />
          <Route path="/app" element={<MiniApp />} />
          <Route path="/anuncios" element={<AnnouncementsPage />} />
          <Route path="/pago" element={<PaymentDetailsPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
