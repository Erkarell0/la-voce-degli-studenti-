import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { MessageSquare, Calendar, Bell, Archive } from "lucide-react"

const communications = [
  {
    id: 1,
    title: "Assemblea di Istituto - 15 Gennaio 2025",
    content: "Si comunica che mercoledì 15 gennaio alle ore 10:00 si terrà l'assemblea di istituto presso l'aula magna. Ordine del giorno: discussione delle nuove proposte per la didattica digitale e votazione rappresentanti per il comitato mensa.",
    date: "10 Gennaio 2025",
    author: "Rappresentanti di Istituto",
    priority: "alta",
    category: "Assemblee"
  },
  {
    id: 2,
    title: "Risultati Votazione Distributori Automatici",
    content: "Con grande soddisfazione comunichiamo l'approvazione della proposta per l'installazione di nuovi distributori automatici nel corridoio principale. I lavori inizieranno la prossima settimana.",
    date: "8 Gennaio 2025",
    author: "Comitato Studenti",
    priority: "media",
    category: "Risultati"
  },
  {
    id: 3,
    title: "Nuove Regole per l'Uso della Biblioteca",
    content: "In accordo con la dirigenza, sono state aggiornate le regole per l'accesso e l'utilizzo della biblioteca scolastica. Le nuove norme sono consultabili nella sezione Risorse Utili.",
    date: "5 Gennaio 2025",
    author: "Rappresentanti di Classe",
    priority: "bassa",
    category: "Regolamenti"
  },
  {
    id: 4,
    title: "Raccolta Fondi per Gita di Fine Anno",
    content: "È partita la raccolta fondi per la gita di fine anno scolastico. Quest'anno la destinazione scelta è Roma con visita ai musei Vaticani. Deadline per le adesioni: 31 gennaio.",
    date: "3 Gennaio 2025",
    author: "Rappresentanti di Istituto",
    priority: "alta",
    category: "Eventi"
  }
]

const Comunicazioni = () => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "alta": return "bg-student-orange text-white"
      case "media": return "bg-student-blue text-white"
      case "bassa": return "bg-student-green text-white"
      default: return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Comunicazioni</h1>
          <p className="text-muted-foreground">
            Tutte le comunicazioni ufficiali dei rappresentanti di istituto
          </p>
        </div>
        <Button className="bg-student-blue hover:bg-student-blue/90">
          <MessageSquare className="mr-2 h-4 w-4" />
          Nuova Comunicazione
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input 
                placeholder="Cerca nelle comunicazioni..." 
                className="w-full"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Calendar className="mr-2 h-4 w-4" />
                Filtra per Data
              </Button>
              <Button variant="outline" size="sm">
                <Archive className="mr-2 h-4 w-4" />
                Categoria
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Communications List */}
      <div className="space-y-4">
        {communications.map((comm) => (
          <Card key={comm.id} className="transition-all duration-200 hover:shadow-md">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-xl">{comm.title}</CardTitle>
                    <Badge className={getPriorityColor(comm.priority)}>
                      {comm.priority}
                    </Badge>
                    <Badge variant="outline">
                      {comm.category}
                    </Badge>
                  </div>
                  <CardDescription className="flex items-center gap-4">
                    <span>{comm.author}</span>
                    <span>•</span>
                    <span>{comm.date}</span>
                  </CardDescription>
                </div>
                <Button variant="ghost" size="sm">
                  <Bell className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {comm.content}
              </p>
              <div className="flex items-center justify-between">
                <Button variant="outline" size="sm">
                  Leggi tutto
                </Button>
                <Button variant="ghost" size="sm">
                  Condividi
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" className="w-full sm:w-auto">
          Carica altre comunicazioni
        </Button>
      </div>
    </div>
  )
}

export default Comunicazioni