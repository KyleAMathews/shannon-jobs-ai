import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { capsizeRadixPlugin } from "vite-plugin-capsize-radix"
import ptSans from "@capsizecss/metrics/pTSans"
import arial from "@capsizecss/metrics/arial"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    capsizeRadixPlugin({
      outputPath: `./src/typography.css`,
      defaultFontStack: [ptSans, arial],
      textStyles: [
        { fontSize: 9, lineHeight: 20 },
        { fontSize: 10, lineHeight: 22 },
        { fontSize: 11, lineHeight: 23 },
        { fontSize: 13, lineHeight: 25 },
        { fontSize: 18, lineHeight: 29 },
        { fontSize: 24, lineHeight: 36 },
        { fontSize: 36, lineHeight: 44 },
        { fontSize: 48, lineHeight: 52 },
        { fontSize: 64, lineHeight: 64 },
      ],
    }),
  ],
  assetsInclude: [`**/*.wasm`],
})
