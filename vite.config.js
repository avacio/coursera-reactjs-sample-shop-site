import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react";
export default defineConfig({
	// base: "/coursera-reactjs-sample-shop-site/", // this does not work
	base: './',
	plugins: [react()],
});