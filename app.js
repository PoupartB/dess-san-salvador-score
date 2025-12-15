/***** DESS – Douleur Enfant San Salvadour *****/
const SCALE = {
  name: "Échelle DESS – Douleur Enfant San Salvadour",
  desc: "Évaluer la douleur chez l’enfant et l’adulte souffrant de polyhandicap. Cotation rétrospective sur 8 heures. En cas de variation, retenir l’intensité maximale. Si un item est non applicable, coter 0.",
  items: [
    { id: "i1", title: "1) Pleurs et/ou cris", options: [
      { label: "Se manifeste comme d’habitude", points: 0 },
      { label: "Semble se manifester plus que d’habitude", points: 1 },
      { label: "Pleurs/cris lors des manipulations", points: 2 },
      { label: "Pleurs/cris spontanés inhabituels", points: 3 },
      { label: "Avec manifestations neurovégétatives", points: 4 },
    ]},
    { id: "i2", title: "2) Réaction de défense à l’examen", options: [
      { label: "Réaction habituelle", points: 0 },
      { label: "Réaction inhabituelle", points: 1 },
      { label: "Retrait indiscutable", points: 2 },
      { label: "Avec grimace/gémissement", points: 3 },
      { label: "Avec agitation/cris/pleurs", points: 4 },
    ]},
    { id: "i3", title: "3) Mimique douloureuse", options: [
      { label: "Habituelle", points: 0 },
      { label: "Faciès inquiet inhabituel", points: 1 },
      { label: "Lors des manipulations", points: 2 },
      { label: "Spontanée", points: 3 },
      { label: "Avec signes neurovégétatifs", points: 4 },
    ]},
    { id: "i4", title: "4) Protection des zones douloureuses", options: [
      { label: "Réaction habituelle", points: 0 },
      { label: "Redoute le contact", points: 1 },
      { label: "Protège une zone", points: 2 },
      { label: "Avec grimace/gémissement", points: 3 },
      { label: "Avec agitation/cris/pleurs", points: 4 },
    ]},
    { id: "i5", title: "5) Gémissements ou pleurs silencieux", options: [
      { label: "Habituels", points: 0 },
      { label: "Plus geignard", points: 1 },
      { label: "Geint de façon inhabituelle", points: 2 },
      { label: "Avec mimique douloureuse", points: 3 },
      { label: "Avec cris et pleurs", points: 4 },
    ]},
    { id: "i6", title: "6) Intérêt pour l’environnement", options: [
      { label: "Habituel", points: 0 },
      { label: "Moins intéressé", points: 1 },
      { label: "Doit être sollicité", points: 2 },
      { label: "Désintérêt total", points: 3 },
      { label: "Prostration inhabituelle", points: 4 },
    ]},
    { id: "i7", title: "7) Accentuation des troubles du tonus", options: [
      { label: "Habituel", points: 0 },
      { label: "Plus raide", points: 1 },
      { label: "Raideur lors des manipulations", points: 2 },
      { label: "Avec mimique douloureuse", points: 3 },
      { label: "Avec cris/pleurs", points: 4 },
    ]},
    { id: "i8", title: "8) Capacité à interagir", options: [
      { label: "Habituelle", points: 0 },
      { label: "Moins impliqué", points: 1 },
      { label: "Difficulté de contact", points: 2 },
      { label: "Refus de contact", points: 3 },
      { label: "Retrait total", points: 4 },
    ]},
    { id: "i9", title: "9) Accentuation des mouvements spontanés", options: [
      { label: "Habituels", points: 0 },
      { label: "Recrudescence possible", points: 1 },
      { label: "Agitation inhabituelle", points: 2 },
      { label: "Avec mimique douloureuse", points: 3 },
      { label: "Avec cris/pleurs", points: 4 },
    ]},
    { id: "i10", title: "10) Attitude antalgique spontanée", options: [
      { label: "Posture habituelle", points: 0 },
      { label: "Moins à l’aise", points: 1 },
      { label: "Postures non tolérées", points: 2 },
      { label: "Soulagé par posture inhabituelle", points: 3 },
      { label: "Aucune posture soulageante", points: 4 },
    ]},
  ],
  interpret(total) {
    return total >= 6
      ? "Score ≥ 6 : seuil de traitement atteint"
      : "Score < 6 : en dessous du seuil de traitement";
  },
};

/***** MOTEUR GÉNÉRIQUE *****/
const $ = (s) => document.querySelector(s);

function render() {
  $("#scaleName").textContent = SCALE.name;
  $("#scaleDesc").textContent = SCALE.desc;

  const form = $("#scaleForm");
  form.innerHTML = "";

  SCALE.items.forEach((item) => {
    const section = document.createElement("section");
    section.className = "item";
    section.innerHTML = `<h2>${item.title}</h2>`;

    item.options.forEach((opt, idx) => {
      const label = document.createElement("label");
      label.className = "option";
      label.innerHTML = `
        <input type="radio" name="${item.id}" value="${opt.points}">
        <span>${opt.label} (${opt.points})</span>
      `;
      section.appendChild(label);
    });

    form.appendChild(section);
  });

  form.addEventListener("change", updateScore);
  updateScore();
}

function updateScore() {
  let total = 0;
  SCALE.items.forEach((item) => {
    const checked = document.querySelector(`input[name="${item.id}"]:checked`);
    if (checked) total += Number(checked.value);
  });
  $("#totalScore").textContent = total;
  $("#scoreHint").textContent = SCALE.interpret(total);
}

render();
