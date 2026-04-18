import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Meaning-First-Teacher-Lab/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Lesson prose is large text content — split into its own chunk
          // so the app shell loads fast and lessons load on module-page visit
          lessons: [
            "./src/lessons/module1",
            "./src/lessons/module2",
            "./src/lessons/module3",
            "./src/lessons/module4",
            "./src/lessons/module5",
            "./src/lessons/module6",
          ],
          // React and router in a stable vendor chunk
          vendor: ["react", "react-dom", "react-router-dom"],
          // Markdown renderer in its own chunk
          markdown: ["react-markdown", "remark-gfm"],
        },
      },
    },
  },
});
