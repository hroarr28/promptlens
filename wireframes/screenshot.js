#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const files = [
  '01-upload-color.html',
  '02-analyzing-color.html',
  '03-results-color.html',
  '04-dashboard-color.html',
  '05-mobile-upload-color.html'
];

const wireframesDir = __dirname;

async function screenshot(htmlFile) {
  const inputPath = path.join(wireframesDir, htmlFile);
  const outputPath = path.join(wireframesDir, htmlFile.replace('-color.html', '.png'));
  
  // Use Chrome headless to screenshot
  const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  
  const args = [
    '--headless',
    '--disable-gpu',
    '--screenshot=' + outputPath,
    '--window-size=1400,900',
    '--hide-scrollbars',
    'file://' + inputPath
  ];
  
  // Special handling for mobile screen
  if (htmlFile.includes('mobile')) {
    args.splice(3, 1, '--window-size=500,950');
  }
  
  return new Promise((resolve, reject) => {
    const proc = spawn(chrome, args);
    
    proc.on('close', (code) => {
      if (code === 0) {
        console.log(`✓ Created ${path.basename(outputPath)}`);
        resolve();
      } else {
        reject(new Error(`Chrome exited with code ${code}`));
      }
    });
    
    proc.on('error', reject);
  });
}

(async () => {
  for (const file of files) {
    try {
      await screenshot(file);
      // Small delay between screenshots
      await new Promise(r => setTimeout(r, 500));
    } catch (err) {
      console.error(`✗ Error screenshotting ${file}:`, err.message);
    }
  }
  console.log('\\nAll done!');
})();
