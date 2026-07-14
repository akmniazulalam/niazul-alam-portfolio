import type { ComponentPropsWithoutRef, ElementType } from "react";

export type ContainerElement = "div" | "section" | "article" | "main";

export type ContainerProps<T extends ContainerElement = "div"> = {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

export type PolymorphicProps<T extends ElementType> = {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, "as">;
