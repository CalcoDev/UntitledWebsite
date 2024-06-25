import { useState } from "preact/hooks";
import { projects } from "../data/projects";
import type { ProjectData, ProjectIslandData } from "../data/types";
import ProjectIsland from "./ProjectIsland";

import Styles from "./ProjectIslandsContainer.module.css";

const createIslandsAll = (projects: ProjectData[]): ProjectIslandData[] => {
  return [
    {
      projects,
      title: "All Projects",
    },
  ];
};

const createIslandsStatus = (projects: ProjectData[]): ProjectIslandData[] => {
  const islands: ProjectIslandData[] = [];
  const statusMap = new Map<string, ProjectData[]>();
  projects.forEach((project) => {
    const status = project.status;
    if (!statusMap.has(status)) {
      statusMap.set(status, []);
    }
    statusMap.get(status)!.push(project);
  });

  statusMap.forEach((value, key) => {
    islands.push({
      projects: value,
      title: key,
    });
  });

  return islands;
};

const createIslandsMembers = (projects: ProjectData[]): ProjectIslandData[] => {
  const islands: ProjectIslandData[] = [];
  const memberMap = new Map<string, ProjectData[]>();
  projects.forEach((project) => {
    project.authors.forEach((author) => {
      if (!memberMap.has(author)) {
        memberMap.set(author, []);
      }
      memberMap.get(author)!.push(project);
    });
  });

  memberMap.forEach((value, key) => {
    islands.push({
      projects: value,
      title: key,
    });
  });

  return islands;
};

const createIslandsCateg = (projects: ProjectData[]): ProjectIslandData[] => {
  const islands: ProjectIslandData[] = [];
  const categoryMap = new Map<string, ProjectData[]>();
  projects.forEach((project) => {
    project.categories.forEach((category) => {
      if (!categoryMap.has(category)) {
        categoryMap.set(category, []);
      }
      categoryMap.get(category)!.push(project);
    });
  });

  categoryMap.forEach((value, key) => {
    islands.push({
      projects: value,
      title: key,
    });
  });

  return islands;
};

const createIslands = (
  projects: ProjectData[],
  sort: string
): ProjectIslandData[] => {
  switch (sort) {
    case "status":
      return createIslandsStatus(projects);
    case "members":
      return createIslandsMembers(projects);
    case "categories":
      return createIslandsCateg(projects);
    default:
      return createIslandsAll(projects);
  }
};

const sorts = ["all", "status", "members", "categories", "custom"];

export default function ProjectIslandsContainer() {
  const [sort, setSort] = useState("all");

  return (
    <div>
      <ol class={Styles["sort-tabs"]}>
        {sorts.map((s) => (
          <li
            class={sort === s ? Styles["active"] : ""}
            onClick={() => setSort(s)}
          >
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </li>
        ))}
      </ol>

      <div class={Styles["islands-container"]}>
        {createIslands(projects, sort).map((island) => (
          <ProjectIsland {...island} />
        ))}
      </div>
    </div>
  );
}
