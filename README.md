# yarn-worspaces

Tools like NX offer functionality to detect which projects / services are affected by a code change.

Using the use case of 2 services with shared dependencies  a monorepo was created using yarn workspaces.

This POC includes a script to determine which workspaces are affected by providing a range of git commits or from the last git commit, if only one is provided.

```
npm run affected START_COMMIT END_COMMIT
```

This code example could be developed further to then test and build the affected projects