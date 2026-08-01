"use client";

import { useEffect } from "react";

/**
 * TouchPressManager
 *
 * Globally intercepts pointer events (touch + pen, NOT mouse) and applies
 * a `data-pressed` attribute to the pressed interactive element, and a
 * `data-group-pressed` attribute to every ancestor that carries a Tailwind
 * `group` class (including named groups like `group/timeline`).
 *
 * This allows Tailwind custom variants `pressed:` and `group-pressed:` to
 * mirror hover styles precisely for the full duration of a finger press —
 * from pointerdown until pointerup / pointercancel.
 *
 * Mounted once in app/layout.tsx — zero per-component state, zero re-renders.
 */

const INTERACTIVE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "[role='button']",
  "[tabindex='0']",
  "input[type='submit']",
  "input[type='button']",
].join(", ");

// Matches class tokens that are a Tailwind group class:
// "group", "group/name", "group/timeline", etc.
const GROUP_CLASS_RE = /(?:^|\s)group(?:\/\S+)?(?:\s|$)/;

export function TouchPressManager() {
  useEffect(() => {
    let pressedEl: Element | null = null;
    const pressedGroups: Element[] = [];

    /** Walk ancestors and mark group elements with data-group-pressed. */
    function markGroups(from: Element): void {
      let cur: Element | null = from.parentElement;
      while (cur && cur !== document.documentElement) {
        const cls = cur.getAttribute("class") ?? "";
        if (GROUP_CLASS_RE.test(cls)) {
          cur.setAttribute("data-group-pressed", "true");
          pressedGroups.push(cur);
        }
        cur = cur.parentElement;
      }
    }

    /** Remove all pressed state. */
    function clearPress(): void {
      if (pressedEl) {
        pressedEl.removeAttribute("data-pressed");
        pressedEl = null;
      }
      for (const el of pressedGroups) {
        el.removeAttribute("data-group-pressed");
      }
      pressedGroups.length = 0;
    }

    function onPointerDown(e: PointerEvent): void {
      // Only handle touch and pen — leave mouse alone (hover handles desktop).
      if (e.pointerType === "mouse") return;

      clearPress();

      const target = e.target as Element | null;
      if (!target) return;

      // Find the closest interactive ancestor (or self).
      const interactive = target.closest(INTERACTIVE_SELECTOR) as Element | null;
      if (!interactive) return;

      pressedEl = interactive;
      interactive.setAttribute("data-pressed", "true");
      markGroups(interactive);
    }

    function onPointerUp(): void {
      clearPress();
    }

    document.addEventListener("pointerdown", onPointerDown, { passive: true });
    document.addEventListener("pointerup", onPointerUp, { passive: true });
    document.addEventListener("pointercancel", onPointerUp, { passive: true });

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("pointercancel", onPointerUp);
      clearPress();
    };
  }, []);

  return null;
}
