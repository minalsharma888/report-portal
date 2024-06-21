# report-portal
## Table of Contents

- [About]
- [Getting Started]
- [Usage]
- [Contributing]

## About <a name = "about"></a>

This is a package to integrate any unit testing framework with Report Portal:

    - [PHPUnut Framework]
    - [Any JUnit based framework]

## Getting Started <a name = "getting_started"></a>

These instructions will let you know how to install this report portal package and use it in your project.

### Prerequisites

1. Define GITLAB_API_URL, PORTAL_API_URL & PORTAL_AUTH_TOKEN CI/CD variable value in your Git repository.

2. Setup a job in your gitlab pipeline and Use  image: node:latest to run your job.

2.  Write this below script within that job to run the report portal npm package.  
```
$ `- npm install report-portal-unit-framework`
$ '- NODE_TLS_REJECT_UNAUTHORIZED=0 node ./node_modules/report-portal/index.js'

## Usage <a name = "usage"></a>

Below are the sample examples code in order to use the package in your code. 
```
Sample value of GITLAB_API_URL = https://git.drupalcode.org/api/v4/projects/25920/jobs/artifacts/9.1.x/raw/junit.xml?job=phpunit
PORTAL_API_URL = https://reportportal.domain.com/api//v1/{projectName}/launch/import
PORTAL_AUTH_TOKEN = bearer yourtoken

Gitlab Job :
report:
  image: node:latest
  script:
    - npm install report-portal-unit-framework
    - NODE_TLS_REJECT_UNAUTHORIZED=0 node ./node_modules/report-portal/index.js


```