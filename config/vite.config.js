const path = require('path')
const defineConfig = require('vite').defineConfig
const react = require('@vitejs/plugin-react')
const eslint = require('vite-plugin-eslint')

module.exports = defineConfig({
	server: {
		port: 8081
	},
	plugins: [
		react(),
		eslint.default({
			fix: true,
			overrideConfigFile: path.resolve(__dirname, './.eslintrc.js')
		})
	]
})