import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'mgm81z1t', // Find in sanity.cli.ts or sanity.io
  dataset: 'production',
  apiVersion: '2026-01-20', // Use current date
  useCdn: true, // Set to false if you need fresh data
})