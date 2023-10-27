const esbuild = require('esbuild');
const express = require('express');

// Configuración de esbuild
esbuild.build({
		entryPoints: ['src/index.jsx'],
		bundle: true,
		define: { 'process.env.NODE_ENV': '"development"' },
		loader: { '.jsx': 'jsx' },
		outfile: 'dist/bundle.js',
		sourcemap: true,
	})
	.then(() => {
		const app = express();
		const PORT = 3000;

		app.use(express.static(__dirname)); // Sirve archivos estáticos

		app.listen(PORT, () => {
			console.log(`Server is running at http://localhost:${PORT}`);
		});
	})
	.catch(() => process.exit(1));
