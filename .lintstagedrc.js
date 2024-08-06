const path = require('path')

/**
 * Build the ESLint command for the given filenames.
 * @param {string[]} filenames - Array of filenames to lint.
 * @returns {string} - The command to run ESLint.
 */
const buildEslintCommand = (filenames) => {
  if (filenames.length === 0) return ''

  const relativeFiles = filenames.map((file) =>
    path.relative(process.cwd(), file)
  )
  return `next lint --fix --file ${relativeFiles.join(' --file ')}`
}

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
}
