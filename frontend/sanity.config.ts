import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'

export default defineConfig({
    name: 'default',
    title: 'CallPro Solutions',
    projectId: 'mgm81z1t',
    dataset: 'production',
    basePath: '/studio',
    plugins: [deskTool(), visionTool()],
    // Schema is managed in headless_cms project
    schema: {
        types: [],
    },
})
