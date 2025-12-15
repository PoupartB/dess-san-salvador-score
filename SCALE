const SCALE = {
  name: "Échelle DESS – Douleur Enfant San Salvadour",
  desc: "Évaluer la douleur chez l’enfant et l’adulte souffrant de polyhandicap. Cotation rétrospective sur 8 heures. En cas de variation, retenir l’intensité maximale. Si un item est non applicable, coter 0.",
  items: [
    {
      id: "item1",
      title: "1) Pleurs et/ou cris (bruits de pleurs avec ou sans accès de larmes)",
      options: [
        { label: "Se manifeste comme d’habitude", points: 0 },
        { label: "Semble se manifester plus que d’habitude", points: 1 },
        { label: "Pleurs/cris lors des manipulations ou gestes potentiellement douloureux", points: 2 },
        { label: "Pleurs/cris spontanés et tout à fait inhabituels", points: 3 },
        { label: "Même signe que 1/2/3 + manifestations neurovégétatives (tachy/brady, sueurs, rash, pâleur)", points: 4 },
      ],
    },
    {
      id: "item2",
      title: "2) Réaction de défense à l’examen d’une zone présumée douloureuse",
      options: [
        { label: "Réaction habituelle", points: 0 },
        { label: "Semble réagir de façon inhabituelle", points: 1 },
        { label: "Mouvement de retrait indiscutable et inhabituel", points: 2 },
        { label: "Même signe que 1 et 2 + grimace et/ou gémissement", points: 3 },
        { label: "Même signe que 1 ou 2 + agitation, cris et pleurs", points: 4 },
      ],
    },
    {
      id: "item3",
      title: "3) Mimique douloureuse (rire paradoxal possible = rictus douloureux)",
      options: [
        { label: "Se manifeste comme d’habitude", points: 0 },
        { label: "Faciès inquiet inhabituel", points: 1 },
        { label: "Mimique douloureuse lors des manipulations/gestes potentiellement douloureux", points: 2 },
        { label: "Mimique douloureuse spontanée", points: 3 },
        { label: "Même signe que 1/2/3 + manifestations neurovégétatives (tachy/brady, sueurs, rash, pâleur)", points: 4 },
      ],
    },
    {
      id: "item4",
      title: "4) Protection des zones douloureuses (protège de sa main la zone présumée douloureuse)",
      options: [
        { label: "Réaction habituelle", points: 0 },
        { label: "Semble redouter le contact d’une zone particulière", points: 1 },
        { label: "Protège une région précise de son corps", points: 2 },
        { label: "Même signe que 1 ou 2 + grimace et/ou gémissement", points: 3 },
        { label: "Même signe que 1/2/3 + agitation, cris et pleurs", points: 4 },
      ],
    },
    {
      id: "item5",
      title: "5) Gémissements ou pleurs silencieux",
      options: [
        { label: "Se manifeste comme d’habitude", points: 0 },
        { label: "Semble plus geignard que d’habitude", points: 1 },
        { label: "Geint de façon inhabituelle", points: 2 },
        { label: "Gémissements avec mimique douloureuse", points: 3 },
        { label: "Gémissements entrecoupés de cris et de pleurs", points: 4 },
      ],
    },
    {
      id: "item6",
      title: "6) Intérêt pour l’environnement",
      options: [
        { label: "Se manifeste comme d’habitude", points: 0 },
        { label: "Semble moins intéressé que d’habitude", points: 1 },
        { label: "Baisse de l’intérêt, doit être sollicité", points: 2 },
        { label: "Désintérêt total, ne réagit pas aux sollicitations", points: 3 },
        { label: "État de prostration tout à fait inhabituel", points: 4 },
      ],
    },
    {
      id: "item7",
      title: "7) Accentuation des troubles du tonus (raideurs, trémulations, spasmes en hyperextension…)",
      options: [
        { label: "Manifestations habituelles", points: 0 },
        { label: "Semble plus raide que d’habitude", points: 1 },
        { label: "Accentuation des raideurs lors des manipulations/gestes potentiellement douloureux", points: 2 },
        { label: "Même signe que 1 et 2 + mimique douloureuse", points: 3 },
        { label: "Même signe que 1/2/3 + cris et pleurs", points: 4 },
      ],
    },
    {
      id: "item8",
      title: "8) Capacité à interagir avec l’adulte (regard, mimique, vocalises…)",
      options: [
        { label: "Se manifeste comme d’habitude", points: 0 },
        { label: "Semble moins impliqué dans la relation", points: 1 },
        { label: "Difficultés inhabituelles pour établir un contact", points: 2 },
        { label: "Refus inhabituel de tout contact", points: 3 },
        { label: "Retrait inhabituel dans une indifférence totale", points: 4 },
      ],
    },
    {
      id: "item9",
      title: "9) Accentuation des mouvements spontanés (agitation, mouvements involontaires…)",
      options: [
        { label: "Manifestations habituelles", points: 0 },
        { label: "Recrudescence possible des mouvements spontanés", points: 1 },
        { label: "État d’agitation inhabituel", points: 2 },
        { label: "Même signe que 1 ou 2 + mimique douloureuse", points: 3 },
        { label: "Même signe que 1/2/3 + cris et pleurs", points: 4 },
      ],
    },
    {
      id: "item10",
      title: "10) Attitude antalgique spontanée (ou repérée par le soignant)",
      options: [
        { label: "Position de confort habituelle", points: 0 },
        { label: "Semble moins à l’aise dans cette posture", points: 1 },
        { label: "Certaines postures ne sont plus tolérées", points: 2 },
        { label: "Soulagé par une posture inhabituelle", points: 3 },
        { label: "Aucune posture ne semble soulager", points: 4 },
      ],
    },
  ],
  interpret(total) {
    if (total >= 6) return "Score ≥ 6 : seuil de traitement atteint (à réévaluer cliniquement).";
    return "Score < 6 : en dessous du seuil de traitement (surveillance / réévaluation).";
  },
};
