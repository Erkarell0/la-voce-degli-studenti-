import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bell, MessageSquare, Calendar } from "lucide-react"

const recentReports = [
  {
    id: "SGN001",
    category: "Infrastrutture",
    title: "Problema con i bagni del secondo piano",
    status: "in-corso",
    date: "12 Gennaio 2025",
    priority: "alta"
  },
  {
    id: "SGN002", 
    category: "Didattica",
    title: "Difficoltà con la connessione WiFi in aula 15",
    status: "risolto",
    date: "10 Gennaio 2025",
    priority: "media"
  },
  {
    id: "SGN003",
    category: "Rapporti",
    title: "Episodio di bullismo durante l'intervallo",
    status: "in-gestione",
    date: "8 Gennaio 2025",
    priority: "urgente"
  }
]

const Segnalazioni = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "in-corso": return "bg-student-orange text-white"
      case "risolto": return "bg-student-green text-white"
      case "in-gestione": return "bg-student-purple text-white"
      case "nuovo": return "bg-student-blue text-white"
      default: return "bg-muted text-muted-foreground"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgente": return "border-l-4 border-l-destructive"
      case "alta": return "border-l-4 border-l-student-orange"
      case "media": return "border-l-4 border-l-student-blue"
      case "bassa": return "border-l-4 border-l-student-green"
      default: return ""
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Segnalazioni</h1>
        <p className="text-muted-foreground">
          Segnala problemi o situazioni che richiedono attenzione
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-student-orange mb-2">5</div>
            <div className="text-sm text-muted-foreground">Segnalazioni Aperte</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-student-green mb-2">23</div>
            <div className="text-sm text-muted-foreground">Risolte Questo Mese</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-student-blue mb-2">2.1</div>
            <div className="text-sm text-muted-foreground">Giorni Medi Risoluzione</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-student-purple mb-2">94%</div>
            <div className="text-sm text-muted-foreground">Tasso Risoluzione</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* New Report Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Bell className="h-5 w-5 text-student-orange" />
              Nuova Segnalazione
            </CardTitle>
            <CardDescription>
              Compila il modulo per segnalare un problema. Puoi rimanere anonimo.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Categoria</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seleziona una categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="infrastrutture">🏢 Infrastrutture</SelectItem>
                  <SelectItem value="didattica">📚 Didattica</SelectItem>
                  <SelectItem value="rapporti">👥 Rapporti Interpersonali</SelectItem>
                  <SelectItem value="sicurezza">🛡️ Sicurezza</SelectItem>
                  <SelectItem value="servizi">🍽️ Servizi (Mensa, Trasporti)</SelectItem>
                  <SelectItem value="altro">❓ Altro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Titolo</label>
              <Input placeholder="Breve descrizione del problema" />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Descrizione Dettagliata</label>
              <Textarea 
                placeholder="Descrivi il problema nel dettaglio. Più informazioni fornisci, più facilmente potremo aiutarti."
                rows={4}
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Priorità</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Quanto è urgente?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bassa">🟢 Bassa - Può aspettare</SelectItem>
                  <SelectItem value="media">🔵 Media - Importante ma non urgente</SelectItem>
                  <SelectItem value="alta">🟠 Alta - Richiede attenzione presto</SelectItem>
                  <SelectItem value="urgente">🔴 Urgente - Problema serio</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="anonymous" className="rounded" />
              <label htmlFor="anonymous" className="text-sm">
                Segnalazione anonima (non verrà registrato il tuo nome)
              </label>
            </div>

            <Button className="w-full bg-student-orange hover:bg-student-orange/90">
              <Bell className="mr-2 h-4 w-4" />
              Invia Segnalazione
            </Button>
          </CardContent>
        </Card>

        {/* Recent Reports */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-student-blue" />
              Segnalazioni Recenti
            </CardTitle>
            <CardDescription>
              Ultimi report inviati dalla comunità studentesca
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentReports.map((report) => (
              <div 
                key={report.id} 
                className={`p-4 rounded-lg border bg-card ${getPriorityColor(report.priority)}`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-mono text-muted-foreground">
                      {report.id}
                    </span>
                    <Badge className={getStatusColor(report.status)} variant="secondary">
                      {report.status}
                    </Badge>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {report.category}
                  </Badge>
                </div>
                <h3 className="font-medium mb-1">{report.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{report.date}</span>
                  <span>•</span>
                  <span className="capitalize">Priorità {report.priority}</span>
                </div>
              </div>
            ))}
            
            <Button variant="outline" className="w-full">
              Vedi Tutte le Segnalazioni
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Guidelines */}
      <Card className="bg-gradient-to-r from-student-blue/10 to-student-purple/10">
        <CardHeader>
          <CardTitle>Linee Guida per le Segnalazioni</CardTitle>
          <CardDescription>
            Come rendere efficace la tua segnalazione
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-3 text-student-green">✅ Cosa Fare</h3>
              <ul className="space-y-2 text-sm">
                <li>• Fornisci dettagli specifici e utili</li>
                <li>• Indica la posizione esatta del problema</li>
                <li>• Scegli la categoria corretta</li>
                <li>• Usa un tono rispettoso e costruttivo</li>
                <li>• Allega foto se possibile (tramite email)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3 text-destructive">❌ Cosa Evitare</h3>
              <ul className="space-y-2 text-sm">
                <li>• Segnalazioni offensive o inappropriate</li>
                <li>• Accusare persone senza prove</li>
                <li>• Usare nomi e cognomi in caso di conflitti</li>
                <li>• Fare segnalazioni duplicate</li>
                <li>• Segnalare problemi già risolti</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Segnalazioni