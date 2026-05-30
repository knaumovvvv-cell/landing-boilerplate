import type { ReactNode } from "react";

export interface SectionProps<TData = unknown> {
  id: string;
  className?: string;
  data: TData;
}

export type SectionComponent<TData = unknown> = (
  props: SectionProps<TData>,
) => ReactNode | null;
