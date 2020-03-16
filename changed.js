const  { getTouchedWorkspaces } = require('@kiwicom/monorepo-utils');

const workspaces = getTouchedWorkspaces();
console.log(Array.from(workspaces)); // -> ['@kiwicom/workspace1', '@kiwicom/workspace2']