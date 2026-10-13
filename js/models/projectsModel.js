export const projectsModel = {
  projects: [
    {
      title: "Password Strength Analyzer",
      description: "Analiza la fortaleza de contraseñas con cálculo de entropía y consulta a la API de HaveIBeenPwned.",
      tech: ["Python", "API REST"],
      url: "#",
    },
    {
      title: "Traductor para Valorant",
      description: "Traductor en tiempo real de frases del juego.",
      tech: ["Python"],
      url: "#",
    },
  ],
  getAll() {
    return this.projects;
  },
};