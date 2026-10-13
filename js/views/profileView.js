export const profileView = {
  render(profile) {
    document.getElementById("hero-name").textContent = profile.name;
    document.getElementById("hero-role").textContent = profile.role;
    document.getElementById("about-text").textContent = profile.about;

    const skills = document.getElementById("skills-list");
    skills.replaceChildren(
      ...profile.skills.map((s) => {
        const li = document.createElement("li");
        li.textContent = s;
        return li;
      })
    );

    const contact = document.getElementById("contact-links");
    contact.replaceChildren(
      ...profile.links.map((l) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = l.url;
        a.textContent = l.label;
        a.target = "_blank";
        a.rel = "noopener";
        li.appendChild(a);
        return li;
      })
    );
  },
};