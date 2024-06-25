import type { ProjectData } from "./types";

export const projects: ProjectData[] = [
  {
    title: "Kongle",
    description:
      "Play as Kongle (pine cone in Norwegian) and explore the funky little world given.",
    date: "2022-12-25",
    authors: ["Calcopod"],
    image: "kongle.png",
    filename: "kongle",
    categories: ["Game Dev", "2D"],
    status: "Finished",
  },
  {
    title: "Ultrakongle",
    description: "A sequel to Kongle, but ULTRAKILL.",
    date: "2023-12-25",
    authors: ["Calcopod"],
    image: "ultrakongle.png",
    filename: "ultrakongle",
    categories: ["Game Dev", "2D"],
    status: "Finished",
  },
  {
    title: "Le Laitier",
    description: "I am the milkman. My milk is delicious.",
    date: "2023-05-01",
    authors: ["Calcopod"],
    image: "laitier.png",
    filename: "laitier",
    categories: ["Ludum Dare", "Game Dev", "2D"],
    status: "Finished",
  },
];
