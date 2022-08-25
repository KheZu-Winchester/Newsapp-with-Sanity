const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'wqqy1v14',
  dataset: 'production',
  apiVersion: '2021-03-25', 
  useCdn: true, 
}) 
export default client;