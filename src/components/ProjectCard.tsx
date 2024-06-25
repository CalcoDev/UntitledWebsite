import { useHover } from "@uidotdev/usehooks";
import type { ProjectData } from "../data/types";

import Styles from "./ProjectCard.module.css";

interface Props extends ProjectData {}

export default function ProjectCard(data: Props) {
  const [ref, hovering] = useHover();

  return (
    <div ref={ref} class={Styles.container}>
      <div
        class={`${Styles["border-helper"]} ${hovering ? Styles["active"] : ""}`}
      ></div>
      <div class={Styles["image-container"]}>
        <a href={"/projects/" + data.filename}>
          <img
            class={Styles.image}
            src={"/projects/" + data.image}
            alt={data.title}
          />
        </a>
      </div>
      <header class={Styles.header}>
        <div class={Styles.information}>
          <div class={Styles.left}>
            <h2 class="no">
              <a href={"/projects/" + data.filename}>{data.title}</a>
            </h2>
            <span class={Styles.date}>{data.date}</span>
          </div>
          <span>{data.authors.join(" ")}</span>
        </div>
      </header>
      <p class={Styles.description}>{data.description}</p>
    </div>
  );
}
