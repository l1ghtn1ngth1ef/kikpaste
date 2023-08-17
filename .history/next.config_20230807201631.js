// @ts-check
module.exports = withBlitz({
    blitz: {
      resolverPath: "queries|mutations",
    },
  })
  
  // Or with a custom function
  module.exports = withBlitz({
    blitz: {
      resolverPath: (filePath) => {
        return filePath.replace("app/", "") // Removes `app/` from the path
      },
    },
  })
