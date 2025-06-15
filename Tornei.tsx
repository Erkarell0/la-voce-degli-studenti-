import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, FileText, ArrowUp } from "lucide-react"

const tournaments = [
  {
    id: 1,
    title: "Torneo di Calcetto Invernale",
    description: "Competizione tra le classi del biennio e triennio. Iscrizioni aperte fino al 20 gennaio!",
    category: "Sport",
    participants: 12,
    maxParticipants: 16,
    startDate: "25 Gennaio 2025",
    endDate: "15 Febbraio 2025",
    status: "iscrizioni-aperte",
    prize: "Coppa + Buoni Mensa",
    image: "photo-1605810230434-7631ac76ec81"
  },
  {
    id: 2,
    title: "Campionato di Scacchi",
    description: "Sfida la tua mente! Torneo individuale aperto a tutti gli studenti dell'istituto.",
    category: "Mente",
    participants: 8,
    maxParticipants: 20,
    startDate: "1 Febbraio 2025",
    endDate: "28 Febbraio 2025", 
    status: "iscrizioni-aperte",
    prize: "Trofeo + Set Scacchi Professionale",
    image: "photo-1488590528505-98d2b5aba04b"
  },
  {
    id: 3,
    title: "Gaming Tournament - FIFA 24",
    description: "Torneo di videogame più atteso dell'anno! Modalità 1v1, eliminazione diretta.",
    category: "Gaming",
    participants: 24,
    maxParticipants: 32,
    startDate: "10 Febbraio 2025",
    endDate: "20 Febbraio 2025",
    status: "in-corso",
    prize: "PlayStation 5 + Giochi",
    image: "photo-1461749280684-dccba630e2f6"
  },
  {
    id: 4,
    title: "Torneo di Pallavolo Misto",
    description: "Squadre miste (ragazzi e ragazze) per una competizione all'insegna del fair play.",
    category: "Sport",
    participants: 6,
    maxParticipants: 8,
    startDate: "5 Marzo 2025", 
    endDate: "25 Marzo 2025",
    status: "prossimamente",
    prize: "Coppa + Attrezzatura Sportiva",
    image: "photo-1500673922987-e212871fec22"
  }
]

const Tornei = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "iscrizioni-aperte": return "bg-student-green text-white"
      case "in-corso": return "bg-student-orange text-white"
      case "prossimamente": return "bg-student-blue text-white"
      case "concluso": return "bg-muted text-muted-foreground"
      default: return "bg-muted text-muted-foreground"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "iscrizioni-aperte": return "Iscrizioni Aperte"
      case "in-corso": return "In Corso"
      case "prossimamente": return "Prossimamente"
      case "concluso": return "Concluso"
      default: return status
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Sport": return "text-student-blue"
      case "Mente": return "text-student-purple"
      case "Gaming": return "text-student-orange"
      default: return "text-muted-foreground"
    }
  }

  const getParticipationPercentage = (current: number, max: number) => {
    return (current / max) * 100
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Tornei Scolastici</h1>
          <p className="text-muted-foreground">
            Partecipa alle competizioni della scuola e divertiti con i tuoi compagni!
          </p>
        </div>
        <Button className="bg-student-orange hover:bg-student-orange/90">
          <FileText className="mr-2 h-4 w-4" />
          Proponi Torneo
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-student-blue mb-2">8</div>
            <div className="text-sm text-muted-foreground">Tornei Attivi</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-student-green mb-2">156</div>
            <div className="text-sm text-muted-foreground">Partecipanti Totali</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-student-orange mb-2">23</div>
            <div className="text-sm text-muted-foreground">Tornei Completati</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-student-purple mb-2">3</div>
            <div className="text-sm text-muted-foreground">Categorie</div>
          </CardContent>
        </Card>
      </div>

      {/* Tournaments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tournaments.map((tournament) => (
          <Card key={tournament.id} className="overflow-hidden transition-all duration-200 hover:shadow-lg">
            <div className="h-48 bg-gradient-to-br from-student-blue/20 to-student-purple/20 relative">
              <img 
                src={`https://images.unsplash.com/${tournament.image}?w=400&h=200&fit=crop`}
                alt={tournament.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className={getStatusColor(tournament.status)}>
                  {getStatusText(tournament.status)}
                </Badge>
              </div>
              <div className="absolute top-4 right-4">
                <Badge variant="outline" className="bg-white/90">
                  {tournament.category}
                </Badge>
              </div>
            </div>

            <CardHeader>
              <CardTitle className="text-xl">{tournament.title}</CardTitle>
              <CardDescription>{tournament.description}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Participation Progress */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Partecipanti</span>
                  <span className="text-sm text-muted-foreground">
                    {tournament.participants}/{tournament.maxParticipants}
                  </span>
                </div>
                <Progress 
                  value={getParticipationPercentage(tournament.participants, tournament.maxParticipants)} 
                  className="h-2"
                />
              </div>

              {/* Tournament Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Inizio: {tournament.startDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Fine: {tournament.endDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowUp className="h-4 w-4 text-student-orange" />
                  <span className="font-medium">Premio: {tournament.prize}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-4">
                {tournament.status === "iscrizioni-aperte" && (
                  <Button className="flex-1 bg-student-green hover:bg-student-green/90">
                    Iscriviti Ora
                  </Button>
                )}
                {tournament.status === "in-corso" && (
                  <Button variant="outline" className="flex-1">
                    Vedi Classifica
                  </Button>
                )}
                {tournament.status === "prossimamente" && (
                  <Button variant="outline" className="flex-1">
                    Notifica Apertura
                  </Button>
                )}
                <Button variant="ghost">
                  Dettagli
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tournament Rules */}
      <Card className="bg-gradient-to-r from-student-blue/10 to-student-green/10">
        <CardHeader>
          <CardTitle className="text-xl">Regolamento Generale Tornei</CardTitle>
          <CardDescription>
            Regole comuni per tutti i tornei scolastici
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-3">Partecipazione</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Aperto a tutti gli studenti regolarmente iscritti</li>
                <li>• Iscrizione obbligatoria entro le scadenze</li>
                <li>• Comportamento rispettoso verso tutti i partecipanti</li>
                <li>• Presenza obbligatoria per tutte le partite programmate</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3">Premi e Riconoscimenti</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Trofei per i primi tre classificati</li>
                <li>• Riconoscimenti fair play</li>
                <li>• Certificati di partecipazione per tutti</li>
                <li>• Pubblicazione risultati nell'albo d'istituto</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Tornei