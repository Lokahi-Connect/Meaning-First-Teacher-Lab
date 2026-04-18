import { module1Sections } from "./module1";

/**
 * Lesson content lookup: moduleNumber → sectionNumber → markdown string.
 * Only Module 1 has authored lesson bodies so far.
 */
export const lessonContent: Record<number, Record<number, string>> = {
  1: module1Sections,
};
