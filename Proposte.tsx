import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Vote, Calendar, ArrowUp, ArrowDown } from "lucide-react"

const activeProposals = [
  {
    id: 1,
    title: "Nuovi Orari per l'Intervallo",
    description: "Proposta per estendere l'intervallo da 15 a 20 minuti per permettere agli studenti di consumare meglio la merenda.",
    author: "Marco Rossi - 4A",
    category: "Didattica",
    votes: {
      pro: 156,
      contro: 43,
      total: 199
    },
    deadline: "20 Gennaio 2025",
    status: "attiva"
  },
  {
    id: 2,
    title: "Zona WiFi Studenti nel Cortile",
    description: "Installazione di punti WiFi gratuiti nell'area cortile per permettere agli studenti di studiare all'aperto durante le belle giornate.",
    author: "Sofia Chen - 5B",
    category: "Infrastrutture", 
    votes: {
      pro: 298,
      contro: 67,
      total: 365
    },
    deadline: "25 Gennaio 2025",
    status: "attiva"
  },
  {
    id: 3,
    title: "Laboratorio di Coding Pomeridiano",
    description: "Creazione di un corso pomeridiano di programmazione tenuto da studenti del quinto anno per i più giovani.",
    author: "Rappresentanti 5° Anno",
    category: "Attività Extra",
    votes: {
      pro: 89,
      contro: 23,
      total: 112
    },
    deadline: "30 Gennaio 2025", 
    status: "attiva"
  }
]

const Proposte = () => {
  const getProgressValue = (votes: any) => {
    return (votes.pro / votes.total) * 100
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Didattica": return "bg-student-blue text-white"
      case "Infrastrutture": return "bg-student-green text-white"
      case "Attività Extra": return "bg-student-purple text-white"
      default: return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Proposte e Votazioni</h1>
          <p className="text-muted-foreground">
            Partecipa alle votazioni e proponi miglioramenti per la nostra scuola
          </p>
        </div>
        <Button className="bg-student-purple hover:bg-student-purple/90">
          <Vote className="mr-2 h-4 w-4" />
          Nuova Proposta
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-student-blue mb-2">3</div>
            <div className="text-sm text-muted-foreground">Votazioni Attive</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-student-green mb-2">543</div>
            <div className="text-sm text-muted-foreground">Voti Totali</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-student-orange mb-2">67%</div>
            <div className="text-sm text-muted-foreground">Partecipazione Media</div>
          </CardContent>
        </Card>
      </div>

      {/* Active Proposals */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-foreground">Votazioni Attive</h2>
        <div className="space-y-6">
          {activeProposals.map((proposal) => (
            <Card key={proposal.id} className="transition-all duration-200 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-xl">{proposal.title}</CardTitle>
                      <Badge className={getCategoryColor(proposal.category)}>
                        {proposal.category}
                      </Badge>
                      <Badge variant="outline" className="bg-student-green-light text-white">
                        {proposal.status}
                      </Badge>
                    </div>
                    <CardDescription className="mb-4">
                      {proposal.description}
                    </CardDescription>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Proposto da: {proposal.author}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Scadenza: {proposal.deadline}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Voting Progress */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Risultati Parziali</span>
                      <span className="text-sm text-muted-foreground">
                        {proposal.votes.total} voti totali
                      </span>
                    </div>
                    <Progress 
                      value={getProgressValue(proposal.votes)} 
                      className="h-3 mb-2"
                    />
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-student-green">
                        <ArrowUp className="h-4 w-4" />
                        <span>Favorevoli: {proposal.votes.pro}</span>
                      </div>
                      <div className="flex items-center gap-2 text-destructive">
                        <ArrowDown className="h-4 w-4" />
                        <span>Contrari: {proposal.votes.contro}</span>
                      </div>
                    </div>
                  </div>

                  {/* Voting Buttons */}
                  <div className="flex gap-3 pt-4 border-t">
                    <Button className="flex-1 bg-student-green hover:bg-student-green/90">
                      <ArrowUp className="mr-2 h-4 w-4" />
                      Vota Sì
                    </Button>
                    <Button variant="destructive" className="flex-1">
                      <ArrowDown className="mr-2 h-4 w-4" />
                      Vota No
                    </Button>
                    <Button variant="outline">
                      Dettagli
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* How to Propose */}
      <Card className="bg-gradient-to-r from-student-blue/10 to-student-purple/10">
        <CardHeader>
          <CardTitle className="text-xl">Come Proporre un Miglioramento</CardTitle>
          <CardDescription>
            Segui questi semplici passaggi per sottoporre una proposta alla comunità studentesca
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-10 h-10 bg-student-blue rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">
                1
              </div>
              <h3 className="font-medium mb-1">Scrivi la Proposta</h3>
              <p className="text-sm text-muted-foreground">Descrivi chiaramente la tua idea</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-student-green rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">
                2
              </div>
              <h3 className="font-medium mb-1">Revisione</h3>
              <p className="text-sm text-muted-foreground">I rappresentanti valutano la fattibilità</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-student-purple rounded-full flex items-center justify-center text-white font-bold mx-auto mb-2">
                3
              </div>
              <h3 className="font-medium mb-1">Votazione</h3>
              <p className="text-sm text-muted-foreground">Tutta la scuola può esprimere il voto</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Proposte