import { Config } from "./get-config"

export default function namming(config: Config, filename: string) {
  if (config.namming && config.namming !== "kebab") {
    return filename.replace(/(?:^\w|(?<=\-)\w|\-)/g, function (match, index) {
      if (match == "-") return ""
      return index === 0 && config.namming === "camel"
        ? match.toLowerCase()
        : match.toUpperCase()
    })
  }
  return filename
}
