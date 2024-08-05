import { createMediaQuery } from "@solid-primitives/media";
/**
 * Detects if user prefers to reduce motion.
 */
export function createReducedMotion(fallbackState, watchChange) {
    return createMediaQuery("(prefers-reduced-motion: reduce)", fallbackState, watchChange);
}
