import fs from 'fs';
import path from 'path';

const rootDir = path.resolve('.');
const ideasDir = path.join(rootDir, 'ideas');
const outputDir = path.join(rootDir, 'uidocs');
const outputPath = path.join(outputDir, 'ideas-integration-prompts.md');

if (!fs.existsSync(ideasDir)) {
  throw new Error(`Ideas directory not found at ${ideasDir}`);
}

fs.mkdirSync(outputDir, { recursive: true });
const ideaFiles = fs
  .readdirSync(ideasDir)
  .filter((file) => file.toLowerCase().endsWith('.html'))
  .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

const lines = ideaFiles.map((fileName) => {
  const relativePath = `ideas/${fileName}`;
  return `create our prompt for ${relativePath} in @idea folder our prompt instructions @.windsurf\\commands\\UI-Integration-Template.md put the file in @uidocs when finished`;
});

const content = ['# Ideas Prompt Requests', '', ...lines].join('\n');
