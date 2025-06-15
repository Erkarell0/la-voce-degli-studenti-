import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Archive, Calendar, ArrowUp, ArrowDown } from "lucide-react"

const archivedVotations = [
  {
    id: 1,
    title: "Distributori Automatici Snack",
    description: "Installazione di distributori nel corridoio principale",
    votes: { pro: 387, contro: 89, total: 476 },
    result: "approvata",
    date: "Dicembre 2024",
    implementation: "Completata - Gennaio 2025"
  },
  {
    id: 2,
    title: "Estensione Orario Biblioteca",
    description: "Apertura biblioteca fino alle 18:00 nei giorni feriali", 
    votes: { pro: 298, contro: 167, total: 465 },
    result: "approvata",
    date: "Novembre 2024",
    implementation: "In corso"
  },
  {
    id: 3,
    title: "Uniforme Scolastica Obbligatoria",
    description: "Introduzione di una divisa obbligatoria per tutti gli studenti",
    votes: { pro: 134, contro: 342, total: 476 },
    result: "respinta",
    date: "Ottobre 2024",
    implementation: "Non applicata"
  },
  {
    id: 4,
    title: "Laboratorio Musicale Pomeridiano",
    description: "Creazione di uno spazio per band studentesche",
    votes: { pro: 401, contro: 78, total: 479 },
    result: "approvata",
    date: "Settembre 2024", 
    implementation: "Attiva da Ottobre 2024"
  }
]

const Archivio = () => {
  const getResultColor = (result: string) => {
    return result === "approvata" 
      ? "bg-student-green text-white" 
      : "bg-destructive text-white"
  }

  const getImplementationStatus = (implementation: string) => {
    if (implementation.includes("Completata")) return "bg-student-green text-white"
    if (implementation.includes("In corso")) return "bg-student-orange text-white"
    if (implementation.includes("Attiva")) return "bg-student-blue text-white"
    return "bg-muted text-muted-foreground"
  }

  const getApprovalPercentage = (votes: any) => {
    return Math.round((votes.pro / votes.total) * 100)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Archivio Votazioni</h1>
        <p className="text-muted-foreground">
          Cronologia completa di tutte le votazioni studentesche
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-student-green mb-2">23</div>
            <div className="text-sm text-muted-foreground">Proposte Approvate</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-destructive mb-2">8</div>
            <div className="text-sm text-muted-foreground">Proposte Respinte</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-student-blue mb-2">74%</div>
            <div className="text-sm text-muted-foreground">Tasso Approvazione</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-student-orange mb-2">456</div>
            <div className="text-sm text-muted-foreground">Partecipazione Media</div>
          </CardContent>
        </Card>
      </div>

      {/* Archive List */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Votazioni Passate</h2>
        {archivedVotations.map((votation) => (
          <Card key={votation.id} className="transition-all duration-200 hover:shadow-md">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-xl">{votation.title}</CardTitle>
                    <Badge className={getResultColor(votation.result)}>
                      {votation.result}
                    </Badge>
                    <Badge className={getImplementationStatus(votation.implementation)}>
                      {votation.implementation.split(" - ")[0]}
                    </Badge>
                  </div>
                  <CardDescription>{votation.description}</CardDescription>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {votation.date}
                    </span>
                    <span>•</span>
                    <span>{votation.votes.total} voti totali</span>
                    <span>•</span>
                    <span>{getApprovalPercentage(votation.votes)}% di approvazione</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Results Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-student-green/10">
                    <div className="flex items-center gap-2">
                      <ArrowUp className="h-4 w-4 text-student-green" />
                      <span className="text-sm font-medium">Favorevoli</span>
                    </div>
                    <span className="font-bold text-student-green">{votation.votes.pro}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-destructive/10">
                    <div className="flex items-center gap-2">
                      <ArrowDown className="h-4 w-4 text-destructive" />
                      <span className="text-sm font-medium">Contrari</span>
                    </div>
                    <span className="font-bold text-destructive">{votation.votes.contro}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-2">
                      <Archive className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Totale</span>
                    </div>
                    <span className="font-bold">{votation.votes.total}</span>
                  </div>
                </div>

                {/* Implementation Status */}
                <div className="p-3 rounded-lg border bg-card">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium">Stato Implementazione:</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{votation.implementation}</p>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Dettagli Completi
                  </Button>
                  <Button variant="ghost" size="sm">
                    Esporta Dati
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>Filtra Archivio</CardTitle>
          <CardDescription>Trova votazioni specifiche nell'archivio</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="outline" className="flex-1">
              Tutte le Votazioni
            </Button>
            <Button variant="outline" className="flex-1">
              Solo Approvate
            </Button>
            <Button variant="outline" className="flex-1">
              Solo Respinte
            </Button>
            <Button variant="outline" className="flex-1">
              Per Anno
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Archivio