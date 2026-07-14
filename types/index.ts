import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export type NavLink = {
  label: string;
  href: string;
  sectionId: string;
};

export type BrandProps = {
  logo?: ReactNode;
  className?: string;
};

export type ContainerElement = "div" | "section" | "article" | "main";

export type ContainerProps<T extends ContainerElement = "div"> = {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

export type PolymorphicProps<T extends ElementType> = {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, "as">;
