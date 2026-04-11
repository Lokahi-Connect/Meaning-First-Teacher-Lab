export interface Module {
  id: number;
  title: string;
  subtitle: string;
  summary: string;
  status: "published" | "draft";
}

export const modules: Module[] = [
  {
    id: 1,
    title: "Module 1: The Paradigm Shift",
    subtitle: "From phonics-first to meaning-first literacy",
    summary:
      "Explore why meaning is the foundation of the writing system and how Structured Word Inquiry reframes literacy instruction.",
    status: "published",
  },
  {
    id: 2,
    title: "Module 2: Units of the Writing System",
    subtitle: "Morphemes, graphemes, and phonemes in context",
    summary:
      "Learn the key linguistic units that structure English spelling and how they interrelate.",
    status: "draft",
  },
  {
    id: 3,
    title: "Module 3: The Four Questions of SWI",
    subtitle: "A framework for investigating any word",
    summary:
      "Master the four questions that guide Structured Word Inquiry and apply them to real words.",
    status: "draft",
  },
  {
    id: 4,
    title: "Module 4: Grapheme Choice and Orthographic Principles",
    subtitle: "Understanding spelling conventions",
    summary:
      "Investigate why English words are spelled the way they are through grapheme-phoneme correspondences and orthographic conventions.",
    status: "draft",
  },
  {
    id: 5,
    title: "Module 5: Word Sums, Matrices, and Suffixing Conventions",
    subtitle: "Tools for morphological analysis",
    summary:
      "Build fluency with word sums and matrices as tools for understanding word structure and suffixing patterns.",
    status: "draft",
  },
  {
    id: 6,
    title: "Module 6: Guided Questions and Classroom Practice",
    subtitle: "Bringing SWI into the classroom",
    summary:
      "Develop practical strategies for integrating Structured Word Inquiry into daily classroom instruction.",
    status: "draft",
  },
];
