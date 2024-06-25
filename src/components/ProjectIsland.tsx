import type { ProjectIslandData } from "../data/types";
import ProjectCard from "./ProjectCard";

import Styles from "./ProjectIsland.module.css";

interface Props extends ProjectIslandData {}

export default function ProjectIsland({ projects, title }: Props) {
  return (
    <>
      <h2 class={`${Styles.title} no`}>{title}</h2>
      <div class={Styles.container}>
        {projects.map((project) => (
          <ProjectCard {...project} />
        ))}
      </div>
    </>
  );
}
