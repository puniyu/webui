import path from 'node:path'
import { fileURLToPath } from 'node:url'

import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
import { vitePluginVersionMark } from 'vite-plugin-version-mark'

const filePath = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
	server: {
		port: 33720,
		host: '0.0.0.0',
	},
	plugins: [
		react(),
		tailwindcss(),
		viteCompression({
			algorithm: 'brotliCompress',
			ext: '.br',
			threshold: 10240,
			verbose: true,
			deleteOriginFile: false,
		}),
		vitePluginVersionMark({
			ifLog: false,
		}),
	],
	resolve: {
		tsconfigPaths: true,
	},
	build: {
		target: ['chrome107'],
		outDir: path.join(filePath, 'dist'),
		cssCodeSplit: true,
		chunkSizeWarningLimit: 1000,
		rolldownOptions: {
			output: {
				advancedChunks: {
					groups: [
						{
							name: 'vendor-react',
							test: (moduleId) => {
								return (
									moduleId.includes('react') ||
									moduleId.includes('react-hook-form') ||
									moduleId.includes('usehooks') ||
									moduleId.includes('zustand') || 
									moduleId.includes('jotai')
								)
							},
							priority: 1,
						},
						{
							name: 'vendor-ui',
							test: (moduleId) => {
								return (
									moduleId.includes('@heroui') ||
									moduleId.includes('motion')
								)
							},
							priority: 2,
						},
						{
							name: 'ui-utils',
							test: (moduleId) => {
								return (
									moduleId.includes('tailwind') ||
									moduleId.includes('normalize.css')
								)
							},
							priority: 3,
						},
						{
							name: 'components',
							test: (moduleId) => {
								return moduleId.includes('/components/')
							},
							priority: 4,
						},
						{
							name: (moduleId) => {
								const pageMatch = moduleId.match(/\/pages\/([^/.]+)/)
								if (pageMatch) {
									return `page/${pageMatch[1]}`
								}
							},
							test: (moduleId) => {
								return moduleId.includes('/pages/')
							},
							priority: 5,
						},
					],
				},
				chunkFileNames: 'assets/js/[name]-[hash].js',
				entryFileNames: 'assets/js/entry-[hash].js',
				assetFileNames: (assetInfo) => {
					const info = assetInfo.names[0] || ''
					const extType = info.split('.').pop() || 'misc'
					if (/\.(png|jpe?g|gif|svg|webp|avif)$/i.test(info)) {
						return 'assets/images/[name]-[hash][extname]'
					}
					if (/\.(woff2?|eot|ttf|otf)$/i.test(info)) {
						return 'assets/fonts/[name]-[hash][extname]'
					}
					return `assets/${extType}/[name]-[hash][extname]`
				},
			},
		},
	},
})
