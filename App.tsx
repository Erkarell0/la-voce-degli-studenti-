import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import Comunicazioni from "./pages/Comunicazioni";
import Calendario from "./pages/Calendario";
import Proposte from "./pages/Proposte";
import Archivio from "./pages/Archivio";
import Segnalazioni from "./pages/Segnalazioni";
import Tornei from "./pages/Tornei";
import Risorse from "./pages/Risorse";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/comunicazioni" element={<Comunicazioni />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="/proposte" element={<Proposte />} />
            <Route path="/archivio" element={<Archivio />} />
            <Route path="/segnalazioni" element={<Segnalazioni />} />
            <Route path="/tornei" element={<Tornei />} />
            <Route path="/risorse" element={<Risorse />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
