import prettier from "prettier"

export const transformPrettier = async (text: string, targetDir?: string) => {
  if (targetDir) {
    const configFile = await prettier.resolveConfig(targetDir)
    if (configFile) {
      return await prettier.format(text, {
        ...configFile,
        parser: "typescript",
      })
    }
  }
  return text
}
