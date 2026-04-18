import { module1Sections } from "./module1";
import { module2Sections } from "./module2";
import { module3Sections } from "./module3";
import { module4Sections } from "./module4";
import { module5Sections } from "./module5";
import { module6Sections } from "./module6";

/**
 * Lesson content lookup: moduleNumber → sectionNumber → markdown string.
 */
export const lessonContent: Record<number, Record<number, string>> = {
  1: module1Sections,
  2: module2Sections,
  3: module3Sections,
  4: module4Sections,
  5: module5Sections,
  6: module6Sections,
};
