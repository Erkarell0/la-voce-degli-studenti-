import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  MessageSquare, 
  Calendar, 
  Vote, 
  Bell, 
  FileText,
  ArrowDown,
  ArrowUp
} from "lucide-react"
import { Link } from "react-router-dom"

const quickActions = [
  {
    title: "Nuove Comunicazioni",
    description: "Leggi gli ultimi avvisi dei rappresentanti",
    icon: MessageSquare,
    link: "/comunicazioni",
    color: "bg-student-green",
    count: 3
  },
  {
    title: "Prossimi Eventi",
    description: "Controlla il calendario scolastico",
    icon: Calendar,
    link: "/calendario",
    color: "bg-student-orange",
    count: 5
  },
  {
    title: "Votazioni Attive",
    description: "Partecipa alle proposte in corso",
    icon: Vote,
    link: "/proposte",
    color: "bg-student-purple",
    count: 2
  },
  {
    title: "Nuovi Tornei",
    description: "Iscriviti alle competizioni",
    icon: FileText,
    link: "/tornei",
    color: "bg-student-blue",
    count: 1
  }
]

const recentUpdates = [
  {
    title: "Assemblea di Istituto - 15 Gennaio",
    description: "Discussione nuove proposte per la didattica digitale",
    time: "2 ore fa",
    type: "evento",
    urgent: true
  },
  {
    title: "Risultati Votazione: Distributori Snack",
    description: "Approvata l'installazione di nuovi distributori in corridoio",
    time: "5 ore fa",
    type: "risultato",
    urgent: false
  },
  {
    title: "Torneo di Calcetto - Iscrizioni Aperte",
    description: "Scadenza iscrizioni: 20 Gennaio 2025",
    time: "1 giorno fa",
    type: "torneo",
    urgent: false
  }
]

const Index = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-student-blue via-student-purple to-student-green p-8 text-white">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Benvenuto nel Portale Studenti
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-white/90">
            La voce degli studenti, il cuore della partecipazione
          </p>
          <p className="text-lg mb-8 text-white/80 max-w-2xl">
            Qui puoi consultare comunicazioni, partecipare alle votazioni, 
            proporre miglioramenti e rimanere sempre aggiornato sulla vita del nostro istituto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/proposte">
                <Vote className="mr-2 h-5 w-5" />
                Nuova Proposta
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <Link to="/comunicazioni">
                <MessageSquare className="mr-2 h-5 w-5" />
                Leggi Comunicazioni
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
        <div className="absolute top-1/2 -left-8 w-16 h-16 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-4 right-1/3 w-12 h-12 bg-white/10 rounded-full"></div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-foreground">Accesso Rapido</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-200 border-0 bg-gradient-to-br from-card to-card/50">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center`}>
                    <action.icon className="h-5 w-5 text-white" />
                  </div>
                  {action.count > 0 && (
                    <Badge variant="secondary" className="bg-student-orange text-white">
                      {action.count}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg">{action.title}</CardTitle>
                <CardDescription>{action.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link to={action.link}>
                    Accedi
                    <ArrowDown className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Updates */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-foreground">Aggiornamenti Recenti</h2>
        <div className="space-y-4">
          {recentUpdates.map((update, index) => (
            <Card key={index} className={`transition-all duration-200 hover:shadow-md ${update.urgent ? 'border-student-orange' : ''}`}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-foreground">{update.title}</h3>
                      {update.urgent && (
                        <Badge variant="destructive" className="text-xs">
                          Urgente
                        </Badge>
                      )}
                      <Badge variant="outline" className="text-xs capitalize">
                        {update.type}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-2">{update.description}</p>
                    <p className="text-sm text-muted-foreground">{update.time}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ArrowUp className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-student-blue mb-2">1,247</div>
            <div className="text-sm text-muted-foreground">Studenti Attivi</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-student-green mb-2">23</div>
            <div className="text-sm text-muted-foreground">Proposte Approvate</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-student-orange mb-2">8</div>
            <div className="text-sm text-muted-foreground">Tornei Attivi</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-student-purple mb-2">156</div>
            <div className="text-sm text-muted-foreground">Comunicazioni</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Index