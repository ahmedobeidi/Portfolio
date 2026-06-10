const projects = [
  {
    title: "Système de Gestion des Réparations",
    date: "Mai 2026",
    description: "Application web de gestion des réparations centralisant les informations clients, les équipements et les interventions techniques. Elle assure le suivi des demandes, la gestion des statuts de réparation, la traçabilité des opérations et l'administration des utilisateurs.",
    image: "assets/img/test.png",
    tags: ["MySQL", "Symfony", "React"],
    demo: "#",
    code: "https://github.com/ahmedobeidi/SAV-IT-PRO"
  },
  {
    title: "SantéRézo",
    date: "juillet 2025",
    description: "Une application web permettant aux patients de rechercher un médecin, consulter ses disponibilités, et réserver un rendez-vous en ligne de manière simple et sécurisée.",
    image: "assets/img/SanteRezo.png",
    tags: ["MySQL", "Symfony", "Twig"],
    demo: "#",
    code: "https://github.com/ahmedobeidi/sante-rezo"
  },
  {
    title: "Drum Pad",
    date: "Février 2025",
    description: "Application web interactive permettant de jouer différents sons de batterie à l’aide du clavier. Elle intègre un système d’enregistrement et de lecture permettant de capturer une séquence de sons puis de la rejouer automatiquement. Le projet utilise la manipulation du DOM, les événements clavier, la gestion audio et les timers JavaScript.",
    image: "assets/img/Drumpad.png",
    tags: ["HTML", "CSS", "JS"],
    demo: "https://ahmedobeidi.github.io/Vanilla-Front-Drumpad/",
    code: "https://github.com/ahmedobeidi/Vanilla-Front-Drumpad"
  }
];

const avatar = "assets/img/avatar.png";

const renderProject = project => `
  <article class="post">
    <img class="post-avatar" src="${avatar}" alt="" />
    <div>
      <p class="date">Ahmed • ${project.date}</p>
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      <img class="project-img" src="${project.image}" alt="${project.title}" />
      <div class="project-tags">
        ${project.tags.map(tag => `<span>#${tag}</span>`).join("")}
      </div>
      <div class="project-links">
        ${project.demo && project.demo !== "#"
          ? `<a href="${project.demo}" target="_blank">Démo</a>`
          : ""
        }
        ${project.code && project.code !== "#"
          ? `<a href="${project.code}" target="_blank">Code source</a>`
          : ""
        }
      </div>
      <div class="actions">💬 24 &nbsp; 🔁 18 &nbsp; 💗 140</div>
    </div>
  </article>
`;

document.getElementById("projectPosts").innerHTML = projects
  .map(renderProject)
  .join("");

document.getElementById("projectList").innerHTML = projects
  .map(renderProject)
  .join("");

document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".tab, .tab-panel")
      .forEach(item => item.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});