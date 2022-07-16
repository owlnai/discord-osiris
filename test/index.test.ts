import { expect, it, describe } from "vitest"
import * as osiris from "../src"

describe("osiris", () => {
  it("has all exports (dummy)", () => {
    expect(Object.keys(osiris)).toMatchInlineSnapshot(`
      [
        "checkString",
      ]
    `)
  })
  it("can detect a bad link", async () => {
    const message = `Hello guys check out my Call of Duty gameplay!!! 
    https://dlscord-egfits.com/fromsteamnitro` // don't
    expect(await osiris.checkString(message)).toMatchInlineSnapshot(`
      true
    `)
  })
})
