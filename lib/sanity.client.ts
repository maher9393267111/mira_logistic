import { createClient } from 'next-sanity'

const projectId = "2rpbuwsb";
const dataset = "production";
const apiVersion = "2022-11-15";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false
})