/*
|-------------------------------------------------------------------------------
| Development config                      https://maizzle.com/docs/environments
|-------------------------------------------------------------------------------
|
| The exported object contains the default Maizzle settings for development.
| This is used when you run `maizzle build` or `maizzle serve` and it has
| the fastest build time, since most transformations are disabled.
|
*/

module.exports = {
  build: {
    templates: {
      source: 'maizzle/templates',
      destination: {
        path: 'build_local',
      },
      assets: {
        source: 'maizzle/images',
        destination: 'images',
      },
    },
  },
}
