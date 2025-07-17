import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react";
export default defineConfig({
	base: "/coursera-reactjs-sample-shop-site/",
	plugins: [react()],
});