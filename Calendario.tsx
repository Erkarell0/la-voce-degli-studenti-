import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Bell, ArrowUp } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Assemblea di Istituto",
    date: "15 Gennaio 2025",
    time: "10:00 - 12:00",
    location: "Aula Magna",
    type: "assemblea",
    description: "Discussione proposte didattica digitale e comitato mensa"
  },
  {
    id: 2,
    title: "Torneo di Calcetto - Quarti",
    date: "18 Gennaio 2025", 
    time: "14:30 - 16:30",
    location: "Campo Sportivo",
    type: "sport",
    description: "Fase eliminatoria del torneo invernale"
  },
  {
    id: 3,
    title: "Consiglio di Istituto",
    date: "22 Gennaio 2025",
    time: "15:00 - 17:00", 
    location: "Sala Riunioni",
    type: "riunione",
    description: "Approvazione bilancio e nuovi progetti"
  },
  {
    id: 4,
    title: "Open Day per le Famiglie",
    date: "25 Gennaio 2025",
    time: "09:00 - 13:00",
    location: "Tutto l'Istituto",
    type: "evento",
    description: "Presentazione dell'offerta formativa per il prossimo anno"
  }
]

const Calendario = () => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "assemblea": return "bg-student-blue text-white"
      case "sport": return "bg-student-green text-white"
      case "riunione": return "bg-student-purple text-white"
      case "evento": return "bg-student-orange text-white"
      default: return "bg-muted text-muted-foreground"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "assemblea": return "📢"
      case "sport": return "⚽"
      case "riunione": return "🤝"
      case "evento": return "🎉"
      default: return "📅"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Calendario Eventi</h1>
          <p className="text-muted-foreground">
            Tutti gli eventi e le date importanti dell'istituto
          </p>
        </div>
        <Button className="bg-student-orange hover:bg-student-orange/90">
          <Calendar className="mr-2 h-4 w-4" />
          Proponi Evento
        </Button>
      </div>

      {/* Calendar View Toggle */}
      <Card>
        <CardContent className="p-4">
          <div className="flex gap-2">
            <Button variant="default" size="sm">Giorno</Button>
            <Button variant="outline" size="sm">Settimana</Button>
            <Button variant="outline" size="sm">Mese</Button>
            <Button variant="outline" size="sm">Lista</Button>
          </div>
        </CardContent>
      </Card>

      {/* Events List */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Prossimi Eventi</h2>
        {events.map((event) => (
          <Card key={event.id} className="transition-all duration-200 hover:shadow-md">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="text-2xl">{getTypeIcon(event.type)}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <Badge className={getTypeColor(event.type)}>
                        {event.type}
                      </Badge>
                    </div>
                    <CardDescription>{event.description}</CardDescription>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Bell className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🕐</span>
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📍</span>
                  <span>{event.location}</span>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm">
                  Aggiungi al Calendario
                </Button>
                <Button variant="ghost" size="sm">
                  Condividi
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Monthly Calendar Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Gennaio 2025</CardTitle>
          <CardDescription>Vista mensile degli eventi</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2 text-center">
            {/* Header giorni */}
            {["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"].map((day) => (
              <div key={day} className="p-2 text-sm font-medium text-muted-foreground">
                {day}
              </div>
            ))}
            
            {/* Giorni del mese */}
            {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
              const hasEvent = [15, 18, 22, 25].includes(day)
              return (
                <div
                  key={day}
                  className={`p-2 text-sm rounded-lg ${
                    hasEvent 
                      ? 'bg-student-blue text-white font-medium' 
                      : 'hover:bg-muted/50'
                  }`}
                >
                  {day}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Calendario