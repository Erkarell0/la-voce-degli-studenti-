import { Home, MessageSquare, Calendar, Vote, Archive, Bell, FileText } from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const navigationItems = [
  { title: "Home", url: "/", icon: Home, color: "text-student-blue" },
  { title: "Comunicazioni", url: "/comunicazioni", icon: MessageSquare, color: "text-student-green" },
  { title: "Calendario Eventi", url: "/calendario", icon: Calendar, color: "text-student-orange" },
  { title: "Proposte e Votazioni", url: "/proposte", icon: Vote, color: "text-student-purple" },
  { title: "Archivio Votazioni", url: "/archivio", icon: Archive, color: "text-student-blue-light" },
  { title: "Segnalazioni", url: "/segnalazioni", icon: Bell, color: "text-student-green-light" },
  { title: "Tornei", url: "/tornei", icon: FileText, color: "text-student-orange" },
  { title: "Risorse Utili", url: "/risorse", icon: FileText, color: "text-student-purple" },
]

export function AppSidebar() {
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path: string) => currentPath === path

  return (
    <Sidebar className="w-64">
      <SidebarContent className="bg-gradient-to-b from-student-blue/10 to-student-green/10">
        <div className="p-4 border-b">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-student-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SR</span>
            </div>
            <div>
              <h2 className="font-semibold text-foreground">Studenti Rep.</h2>
              <p className="text-xs text-muted-foreground">Il tuo istituto</p>
            </div>
          </div>
        </div>

        <SidebarGroup className="px-2">
          <SidebarGroupLabel>
            Navigazione Principale
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className={`
                      transition-all duration-200 
                      ${isActive(item.url) 
                        ? 'bg-student-blue/20 text-student-blue border-r-2 border-student-blue font-medium' 
                        : 'hover:bg-student-blue/10 hover:text-student-blue'
                      }
                    `}
                  >
                    <NavLink to={item.url} end>
                      <item.icon className={`h-5 w-5 ${isActive(item.url) ? 'text-student-blue' : item.color}`} />
                      <span className="ml-3">{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto p-4 border-t">
          <div className="bg-gradient-to-r from-student-blue to-student-green p-3 rounded-lg text-white text-center">
            <p className="text-xs font-medium">Anno Scolastico</p>
            <p className="text-sm font-bold">2024/2025</p>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}