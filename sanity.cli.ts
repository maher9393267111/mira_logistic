import {defineCliConfig} from 'sanity/cli'
const projectId = "2rpbuwsb";
const dataset = "production";
const apiVersion = "2022-11-15";

export default defineCliConfig({
  api: {
    projectId,
    dataset
  }
})
