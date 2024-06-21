# report-portal-unit-framework
## Table of Contents

- About
- Getting Started
- Usage
- Contributing

## About <a name = "about"></a>

This is a package to integrate any unit testing framework with Report Portal: For example

1. PHPUnut Framework
2. Any JUnit based framework

## Getting Started <a name = "getting_started"></a>

These instructions will let you know how to install this report portal package and use it in your project.

This is how the package will work.
- It will fetch the artifacts results (junit.xml file) from Gitlab job of the latest successful pipeline for the given branch name.
- It will then import that Junit.xml file to the Report Portal API.

### Prerequisites

1. Define GITLAB_API_URL, PORTAL_API_URL & PORTAL_AUTH_TOKEN CI/CD variable value in your Git repository.

```
- GITLAB_API_URL - This is your Gitlab API URL where your artifact is located for a specific job.
 Example : /projects/:projectid/jobs/artifacts/:brance_name/raw/*artifact_path?job=name
- PORTAL_API_URL - This is your own Report Portal instance Import API URL.
- PORTAL_AUTH_TOKEN - This is your Report Portal Authorization token to run the Report Portal API.
```

Sample value of the variables

```
- GITLAB_API_URL = https://git.drupalcode.org/api/v4/projects/25920/jobs/artifacts/9.1.x/raw/junit.xml?job=phpunit
- PORTAL_API_URL = https://reportportal.domain.com/api//v1/{projectName}/launch/import
- PORTAL_AUTH_TOKEN = bearer yourtoken
```

2. Setup a job in your gitlab pipeline and Use  image: node:latest to run your job.

3.  Write this below script within that job to run the report portal npm package.  
```
- npm install report-portal-unit-framework
- NODE_TLS_REJECT_UNAUTHORIZED=0 node ./node_modules/report-portal/index.js
```

## Usage <a name = "usage"></a>

Below are the sample examples code in order to use the package in your code. 

- Gitlab Job :
```
report:
  image: node:latest
  script:
    - npm install report-portal-unit-framework
    - NODE_TLS_REJECT_UNAUTHORIZED=0 node ./node_modules/report-portal/index.js
```