const prettier = require('prettier');
const prettierConfig = require('../config/prettier');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const kebabCase = require('lodash/kebabCase');
const { FRAMEWORK_MAP } = require('../config');
const { NEED_USE_DEFAULT_OR_USE_VMODEL } = require('./const/vue2-use-default');
const { getUnitTestCode } = require('./main');

function generateVitestUnitCase(baseData, framework, { component }) {
  const cases = getUnitTestCode(baseData, framework, { component });
  try {
    console.log(`>>>>>>>>>>\n${cases}\n>>>>>>>>>`);
    const codeData = prettier.format(cases, prettierConfig);
    const basePath = FRAMEWORK_MAP[framework].apiBasePath;
    const fileName = kebabCase(component);
    const outputFolder = path.resolve(basePath, `${fileName}/__tests__`);
    const outputPath = path.resolve(outputFolder, `vitest-${fileName}.test.jsx`);

    fs.mkdir(outputFolder, { recursive: true }, (err) => {
      if (err) {
        return console.error(err);
      }
      const comment = getFileComment(framework, component);
      fs.writeFile(outputPath,  comment + codeData, (err) => {
        if (err) {
          return console.error(err);
        }
        console.log(chalk.green(`unit test cases file: ${outputPath} has been created.`));
      });
    });

  } catch (e) {
    console.log(chalk.red('格式化失败，请检查生成的文件是否存在语法错误\n'));
    console.warn(e);
  }
}

function getFileComment(framework, component) {
  const useDefault = framework === 'Vue(PC)' && NEED_USE_DEFAULT_OR_USE_VMODEL.includes(component) ? ',useDefault' : '';
  // 因 (h) 的存在，禁用整个文件规则
  const vue2Comment = framework === 'Vue(PC)' ? `/* eslint-disable @typescript-eslint/no-unused-vars */\n` : '';
  const comment = [
    `/**\n * 该文件由脚本自动生成，如需修改请联系 PMC\n * `,
    `This file generated by scripts of tdesign-api. \`npm run api:docs ${component} ${framework} vitest,finalProject${useDefault}\`\n * `,
    'If you need to modify this file, contact PMC first please.\n */\n',
  ].join('');
  return vue2Comment + comment;
}

module.exports = {
  generateVitestUnitCase,
};
