export default api(
  rpcHandler({
    onError: console.log,
    formatError: (error) => {
      error.message = `FormatError handler: ${error.message}`
      return error
    },
    logging: {
      verbose: true,
      blockList: ["getCurrentUser", ...], //just write the resolver name [which is the resolver file name]
    },
  })
)