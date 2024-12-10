/*
 * This file contains utility functions for working with data from the database.
 */

import { termCodes } from "./strings"

/**
 * Returns a shortened code representing a combined term and year.  E.g. the
 * code for the the term "fall" and the year 2024 is "f24".
 *
 * @param {*} term A full term string from the database, e.g. "fall".
 * @param {Number} year A numerical year, e.g. 2024.
 * @returns Returns a string code for the provided year, e.g. "24".
 */
export function getTermYearCode(term, year) {
  return termCodes[term] + (year % 100)
}
