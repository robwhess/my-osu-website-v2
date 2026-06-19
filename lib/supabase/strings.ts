/*
 * This file contains user-facing strings for values in the database.
 */

import { Term } from "../types"

export const termNames = {
  fall: "Fall",
  winter: "Winter",
  spring: "Spring"
} satisfies Partial<Record<Term, string>>

export const termCodes = {
  fall: "f",
  winter: "w",
  spring: "sp"
} satisfies Partial<Record<Term, string>>
