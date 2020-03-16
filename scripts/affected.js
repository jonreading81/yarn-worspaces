const folderContentsChanged = require('./folder-content-changed');
const { exec } = require('child_process');

const gitStartHash = process.argv[2];
const gitEndHash = process.argv[3];
const command = 'yarn workspaces info --json';
                 
const parseWorkspaces = (str) => {
    const {data}  = JSON.parse(str);
    const objWorkspaces = JSON.parse( data);
    return Object.keys(objWorkspaces).map(name => ({name, ...objWorkspaces[name]}));
}

const isWorkpaceUpdated =  ({location}) => folderContentsChanged(`${location}/**/*.js`, gitStartHash, gitEndHash);

const areWorkspaceDependenciesUpdated = ({workspaceDependencies}, updatedWorspacesNames) =>  
    workspaceDependencies.some(workspace =>updatedWorspacesNames.includes(workspace));
const isWorkspaceAffected =({workspaceDependencies, name}, updatedWorspacesNames) => 
!updatedWorspacesNames.includes(name) 
&& areWorkspaceDependenciesUpdated({workspaceDependencies, name}, updatedWorspacesNames)

exec(command, (error, stdout, stderr) => {
const arrWorkspaces = parseWorkspaces(stdout)
const updatedWorspaces = arrWorkspaces.filter(isWorkpaceUpdated);
const updatedWorspacesNames = updatedWorspaces.map(({name}) => name);
const affectedWorkspaces=arrWorkspaces.filter(workpace=> isWorkspaceAffected(workpace, updatedWorspacesNames));
const  allAffected = [...updatedWorspaces, ...affectedWorkspaces].map(({name}) => name);
console.log(allAffected);
});
