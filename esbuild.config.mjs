import { NodeResolvePlugin } from '@esbuild-plugins/node-resolve'
import { build } from 'esbuild'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'

build({
    entryPoints: ["./src/index.ts"],
    outfile: "build/index.js",
    bundle: true,
    format: "esm",
    sourcemap: "inline",
    platform: "node",
    target: ["node22.0"],
    plugins: [
        NodeModulesPolyfillPlugin(),
        NodeResolvePlugin({
            extensions: ['.ts', '.js'],
            onResolved: (resolved) => {
                if (resolved.includes('node_modules')) {
                    return { external: true }
                }
                return resolved
            },
        }),
    ],
})