/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");

const componentName = process.argv[2];
const targetDirectory = process.argv[3] || __dirname; // Default to current dir if not provided

if (!componentName) {
  console.error("Please provide a component name!");
  process.exit(1);
}

const componentDir = path.join(targetDirectory);

if (!fs.existsSync(componentDir)) {
  fs.mkdirSync(componentDir);
}

const componentFilePath = path.join(componentDir, `${componentName}.tsx`);
const styleFilePath = path.join(componentDir, `${componentName}.module.css`);

const componentContent = `import classes from './${componentName}.module.css';

const ${componentName} = () => {
  return (
    <p>
      ${componentName}
    </p>
  );
};

export default ${componentName};
`;

const styleContent = ``;

fs.writeFileSync(componentFilePath, componentContent);
fs.writeFileSync(styleFilePath, styleContent);

console.log(
  `Component ${componentName} created successfully in ${componentDir}!`
);
