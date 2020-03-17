const folderContentsChanged = require('./folder-content-changed');
const { exec } = require('child_process');

const gitStartHash = process.argv[2];
const gitEndHash = process.argv[3];
const command = 'yarn workspaces info --json';

const parseWorkspaces = (str) => {
    const { data } = JSON.parse(str);
    const objWorkspaces = JSON.parse(data);
    return Object.keys(objWorkspaces).map(name => ({ name, ...objWorkspaces[name] }));
}

const isworkspaceUpdated = ({ location }) => folderContentsChanged(`${location}/**/*.js`, gitStartHash, gitEndHash);

const areWorkspaceDependenciesUpdated = ({ workspaceDependencies }, updatedWorkspacesNames) =>
    workspaceDependencies.some(workspace => updatedWorkspacesNames.includes(workspace));
const isWorkspaceAffected = ({ workspaceDependencies, name }, updatedWorkspacesNames) =>
    !updatedWorkspacesNames.includes(name)
    && areWorkspaceDependenciesUpdated({ workspaceDependencies, name }, updatedWorkspacesNames)

exec(command, (error, stdout, stderr) => {
    const arrWorkspaces = parseWorkspaces(stdout)
    const updatedWorkspaces = arrWorkspaces.filter(isworkspaceUpdated);
    const updatedWorkspacesNames = updatedWorkspaces.map(({ name }) => name);
    const affectedWorkspaces = arrWorkspaces.filter(workspace => isWorkspaceAffected(workspace, updatedWorkspacesNames));
    const allAffected = [...updatedWorkspaces, ...affectedWorkspaces].map(({ name }) => name);
    console.log(allAffected);
});
