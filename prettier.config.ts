import type { Config } from "prettier";
import type { PluginOptions } from "prettier-plugin-tailwindcss";

export default {
  plugins: ["prettier-plugin-tailwindcss"],
} satisfies Config & PluginOptions;
