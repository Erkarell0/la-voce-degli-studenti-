import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, ArrowDown, Home } from "lucide-react"

const documents = [
  {
    id: 1,
    title: "Regolamento di Istituto 2024/2025",
    description: "Documento completo con tutte le regole e norme della scuola",
    category: "Regolamenti",
    type: "PDF",
    size: "2.3 MB",
    updated: "Settembre 2024",
    downloads: 1247
  },
  {
    id: 2,
    title: "Orario delle Lezioni - Secondo Quadrimestre", 
    description: "Orario aggiornato valido da Febbraio 2025",
    category: "Orari",
    type: "PDF",
    size: "856 KB",
    updated: "Gennaio 2025",
    downloads: 892
  },
  {
    id: 3,
    title: "Guida alle Giustificazioni Online",
    description: "Tutorial per giustificare assenze tramite registro elettronico",
    category: "Guide",
    type: "PDF",
    size: "1.1 MB", 
    updated: "Ottobre 2024",
    downloads: 653
  },
  {
    id: 4,
    title: "Modulo Richiesta Permesso Uscita",
    description: "Modulo per richiedere permessi di uscita anticipata",
    category: "Moduli",
    type: "PDF",
    size: "245 KB",
    updated: "Novembre 2024",
    downloads: 421
  }
]

const links = [
  {
    title: "Registro Elettronico",
    description: "Accesso ai voti, assenze e comunicazioni",
    url: "https://registro.scuola.it",
    icon: "📚",
    category: "Didattica"
  },
  {
    title: "Google Classroom",
    description: "Piattaforma per materiali didattici e compiti",
    url: "https://classroom.google.com",
    icon: "💻",
    category: "Didattica"
  },
  {
    title: "Mensa Scolastica - Prenotazioni",
    description: "Prenota e paga i pasti online",
    url: "https://mensa.scuola.it",
    icon: "🍽️",
    category: "Servizi"
  },
  {
    title: "Trasporti Pubblici - Orari",
    description: "Consulta gli orari dei mezzi pubblici",
    url: "https://trasporti.comune.it",
    icon: "🚌",
    category: "Servizi"
  }
]

const guides = [
  {
    title: "Come Giustificare un'Assenza",
    steps: [
      "Accedi al registro elettronico con le tue credenziali",
      "Vai nella sezione 'Assenze' del menu principale", 
      "Clicca su 'Giustifica' accanto all'assenza da giustificare",
      "Seleziona il motivo dall'elenco predefinito",
      "Conferma l'invio della giustificazione"
    ]
  },
  {
    title: "Richiedere un Permesso di Uscita",
    steps: [
      "Compila il modulo di richiesta permesso",
      "Fai firmare il modulo dai genitori (se minorenne)",
      "Consegna il modulo in segreteria almeno 1 giorno prima",
      "Attendi la conferma tramite registro elettronico",
      "Presenta il documento all'uscita"
    ]
  }
]

const Risorse = () => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Regolamenti": return "bg-student-blue text-white"
      case "Orari": return "bg-student-green text-white"
      case "Guide": return "bg-student-purple text-white"
      case "Moduli": return "bg-student-orange text-white"
      case "Didattica": return "bg-student-blue text-white"
      case "Servizi": return "bg-student-green text-white"
      default: return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Risorse Utili</h1>
        <p className="text-muted-foreground">
          Documenti, link e guide per semplificare la vita scolastica
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Link Rapidi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((link, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-200 cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="text-2xl">{link.icon}</div>
                  <Badge className={getCategoryColor(link.category)}>
                    {link.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{link.title}</CardTitle>
                <CardDescription>{link.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-student-blue hover:bg-student-blue/90">
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <Home className="mr-2 h-4 w-4" />
                    Accedi
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Documents */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Documenti Scaricabili</h2>
        <div className="space-y-4">
          {documents.map((doc) => (
            <Card key={doc.id} className="transition-all duration-200 hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 bg-student-blue/10 rounded-lg flex items-center justify-center">
                      <FileText className="h-6 w-6 text-student-blue" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg">{doc.title}</h3>
                        <Badge className={getCategoryColor(doc.category)}>
                          {doc.category}
                        </Badge>
                        <Badge variant="outline">{doc.type}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-3">{doc.description}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Dimensione: {doc.size}</span>
                        <span>•</span>
                        <span>Aggiornato: {doc.updated}</span>
                        <span>•</span>
                        <span>{doc.downloads} download</span>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-student-green hover:bg-student-green/90">
                    <ArrowDown className="mr-2 h-4 w-4" />
                    Scarica
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Guides */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-foreground">Guide Pratiche</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {guides.map((guide, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl">{guide.title}</CardTitle>
                <CardDescription>Segui questi passaggi per completare la procedura</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {guide.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-student-blue rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
                        {stepIndex + 1}
                      </div>
                      <p className="text-sm text-muted-foreground flex-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <Card className="bg-gradient-to-r from-student-green/10 to-student-blue/10">
        <CardHeader>
          <CardTitle>Domande Frequenti</CardTitle>
          <CardDescription>Le risposte alle domande più comuni</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Come recupero le credenziali del registro elettronico?</h3>
              <p className="text-sm text-muted-foreground">
                Contatta la segreteria didattica con un documento di identità. Le nuove credenziali verranno inviate all'email registrata.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Quando posso prenotare i pasti della mensa?</h3>
              <p className="text-sm text-muted-foreground">
                Le prenotazioni devono essere effettuate entro le 23:59 del giorno precedente attraverso il portale dedicato.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Come posso contattare i rappresentanti di istituto?</h3>
              <p className="text-sm text-muted-foreground">
                Puoi inviarci un messaggio attraverso questo portale o trovarci durante gli intervalli nell'atrio principale.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Risorse