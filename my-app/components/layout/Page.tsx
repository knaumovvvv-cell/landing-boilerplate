import type { ReactNode } from "react";

export interface PageProps {
  sections?: Array<ReactNode>;
  children?: ReactNode;
}

export default function Page({ sections, children }: PageProps) {
  const content = sections ?? children ?? null;

  return <>{content}</>;
}
