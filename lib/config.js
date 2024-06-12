module.exports = {
  outputFile: 'Report.xml',
  token: "Token",
  reportPortalImportApi: "ReportPortal URL",
  artifactsApi: "https://git.drupalcode.org/api/v4/projects/:projectid/jobs/artifacts/:branch_name/raw/:Artifactfilename?job=:jobname",
  agentOptions: {
    rejectUnauthorized: false
  }
};