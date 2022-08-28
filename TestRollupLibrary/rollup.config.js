import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import typescript2 from "rollup-plugin-typescript2";
import json from "@rollup/plugin-json";
import image from "@rollup/plugin-image";
import { DEFAULT_EXTENSIONS } from "@babel/core";
import styles from "rollup-plugin-styles";

const distDirectory = "dist";

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: "src/index.js",
  output: [
    {
      dir: `${distDirectory}/esm`,
      sourcemap: true,
      format: "esm",
      preserveModules: true,
      exports: "auto",
    },
    {
      dir: `${distDirectory}/cjs`,
      format: "cjs",
      sourcemap: true,
      preserveModules: true,
      exports: "auto",
    },
  ],
  plugins: [
    typescript2(),
    peerDepsExternal({
      includeDependencies: true,
    }),
    resolve(),
    commonjs({
      exclude: "node_modules/**",
    }),
    babel({
      babelHelpers: "runtime",
      exclude: "node_modules/**",
      extensions: [...DEFAULT_EXTENSIONS, ".ts", ".tsx"],
      configFile: "./babel.config.js",
    }),
    styles({
      mode: [
        "inject",
        (varName) => `
                    const { injectGlobal } = require('@emotion/css');
                    injectGlobal(${varName});
                `,
      ],
      autoModules: true,
      modules: true,
    }),
    image(),
    json(),
  ],
  external: ["tslib"],
};
