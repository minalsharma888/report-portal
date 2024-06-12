module.exports = {
  outputFile: 'Report.xml',
  token: process.env.PORTAL_AUTH_TOKEN,
  reportPortalImportApi: process.env.PORTAL_API_URL,
  artifactsApi: process.env.GITLAB_API_URL,
  agentOptions: {
    rejectUnauthorized: false
  }
};