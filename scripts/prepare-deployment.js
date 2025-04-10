const fs = require('fs');
const path = require('path');

const environment = process.env.ENVIRONMENT || 'development';
const serviceVersion = require('../package.json').version;

console.log(`Preparing deployment for srv-a v${serviceVersion} to ${environment}...`);

const deploymentDir = path.join(__dirname, '../deployment');
if (!fs.existsSync(deploymentDir)) {
  fs.mkdirSync(deploymentDir, { recursive: true });
}

const deploymentMetadata = {
  service: 'srv-a',
  version: serviceVersion,
  environment: environment,
  timestamp: new Date().toISOString()
};

fs.writeFileSync(
  path.join(deploymentDir, 'deployment.json'),
  JSON.stringify(deploymentMetadata, null, 2)
);

console.log(`Deployment preparation completed: ${deploymentDir}/deployment.json`);
