import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import packageJson from "./package.json" assert { type: "json" };
import terser from '@rollup/plugin-terser';
import scss from 'rollup-plugin-scss'

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        // extract: false,
        // modules: true,
        // use: ['sass'],
        modules: true
      }),
      // scss(),
      terser(),
      
    ],
    external: [
      "react",
      "react-dom",
      "@mui/material",
      "@emotion/react",
      "@emotion/styled"
    ],
    
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts.default()],
    external: [/\.(css|less|scss)$/]
  },
];