const  { getTouchedWorkspaces } = require('@kiwicom/monorepo-utils');

const workspaces = getTouchedWorkspaces();
console.log(Array.from(workspaces)); 

