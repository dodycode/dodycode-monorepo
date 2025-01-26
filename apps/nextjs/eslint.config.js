import baseConfig, { restrictEnvAccess } from "@dodycode/eslint-config/base";
import nextjsConfig from "@dodycode/eslint-config/nextjs";
import reactConfig from "@dodycode/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
