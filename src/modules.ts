import type { Module } from "./types/module";
import mod1 from "./data/tt_module_1_paradigm_shift.json";
import mod2 from "./data/tt_module_2_units_of_writing_system.json";
import mod3 from "./data/tt_module_3_four_questions.json";
import mod4 from "./data/tt_module_4_grapheme_choice.json";
import mod5 from "./data/tt_module_5_word_sums_matrices.json";
import mod6 from "./data/tt_module_6_guided_questions.json";

export type { Module };

export const modules: Module[] = [
  mod1,
  mod2,
  mod3,
  mod4,
  mod5,
  mod6,
] as unknown as Module[];
