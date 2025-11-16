# How To Contribute
Contributing is simple, as long as you have knowledge about JSON. You do not need to install any dependencies/programs to add an app, although you will miss out on being able to preview your change and get IDE hints for the JSON schemas.

It is preferred to test your change although not strictly required, as all pull-requests will be checked before merging into the main branch.

## Apps
Adding an app to the list is simple. The app list is built from JSON files stored in: `/src/data/apps`.

Get an idea of the structure by looking at the many apps already stored in this directory. Please make sure that at least one relevant tag is assigned, if one is not found read the "tags" section.

## Tags
Adding a tag is currently a little more complicated than adding an app. Tags are stored in `/src/data/tags` as JSON files, but also listed in: `src/content.config.ts`. Hopefully this can change in the future.
