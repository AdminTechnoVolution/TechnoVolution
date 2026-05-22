export type TeamMember = {
  id: keyof typeof import("@/i18n/locales/en.json")["team"]["members"];
  name: string;
  initials: string;
  photo?: string;
};

export const team: TeamMember[] = [
  {
    id: "darri",
    name: "Darri Cordoba",
    initials: "DC",
    photo: "/team/darri-cordoba.png",
  },
  {
    id: "edison",
    name: "Edison Escobar",
    initials: "EE",
    photo: "/team/edison-escobar.png",
  },
  {
    id: "cristian",
    name: "Cristian Yepes",
    initials: "CY",
    photo: "/team/cristian-yepes.png",
  },
];
