import { MouseEventHandler } from "react";

export interface PlayButtonProps {
    name: string
    onClickHandler: MouseEventHandler<HTMLButtonElement>
  }