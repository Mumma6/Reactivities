export const capitilizeFirstChar = (string: string): string =>
  string.charAt(0).toUpperCase() + string.slice(1)

export const formateStringDate = (string: string): string => string.split("T")[0]
