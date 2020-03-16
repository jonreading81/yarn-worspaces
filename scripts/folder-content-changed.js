const sh = require(`shell-tag`);
const minimatch = require(`minimatch`);

const defaultGlobOptions = {
	dot: true,
};

module.exports = function folderContentsChangedInGitCommitRange(globPattern, gitStartHash, gitEndHash, globOptions) {
    const gitDiffOutput = sh`git diff --name-only  ${ gitStartHash } ${ gitEndHash }`
	const pathMatchesGlob = minimatch.filter(globPattern, globOptions)
	return gitDiffOutput.split(`\n`).some(pathMatchesGlob)
}
