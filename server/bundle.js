await Bun.build({
    entrypoints: ['./server.ts'],
    outdir: './dist',
    minify:true,
    target: 'bun',
    splitting: true,
    format: "esm"
})