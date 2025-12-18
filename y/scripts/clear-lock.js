const fs = require('fs');
const path = require('path');

const lockFile = path.join(process.cwd(), '.next', 'dev', 'lock');

try {
  if (fs.existsSync(lockFile)) {
    fs.unlinkSync(lockFile);
    console.log('✓ Removed Next.js dev lock file');
  }
} catch (err) {
  console.error('⚠ Could not remove lock file:', err.message);
}
