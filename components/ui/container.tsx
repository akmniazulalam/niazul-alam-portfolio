import { CONTAINER_MAX_WIDTH, CONTAINER_PADDING } from "@/constants/layout";
import type { ContainerElement, ContainerProps } from "@/types";
import { cn } from "@/utils/cn";

export function Container<T extends ContainerElement = "div">({
  as,
  className,
  ...props
}: ContainerProps<T>) {
  const Component = (as ?? "div") as ContainerElement;

  return (
    <Component
      className={cn(
        "mx-auto w-full",
        CONTAINER_MAX_WIDTH,
        CONTAINER_PADDING,
        className,
      )}
      {...props}
    />
  );
}
