import { capitilizeFirstChar, formateStringDate } from "./utils"

describe("Utils", () => {
  it("capitilize first letter", () => {
    const string = "hello"
    const res = capitilizeFirstChar(string)
    expect(res).toBe("Hello")
  })

  it("Format a string date", () => {
    const normalDateString = "2022-03-02T13:54:22.5742676"
    const formatedString = formateStringDate(normalDateString)
    expect(formatedString).toBe("2022-03-02")
  })
})
