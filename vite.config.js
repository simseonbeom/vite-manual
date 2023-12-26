

import { defineConfig } from "vite";



const viteConfig = defineConfig({
  build:{
    outDir:'docs'
  },
  server:{
    host:'localhost',
    port: 3000,
    cors: true,
  },
  css:{
    devSourcemap:true,
    modules:{
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    }
  }
})


export default viteConfig;









