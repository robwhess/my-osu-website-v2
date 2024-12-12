/*
 * This file contains utility functions for working with data from the database.
 */

import { termCodes } from "./strings"

/**
 * Returns a shortened code representing a combined term and year.  E.g. the
 * code for the the term "fall" and the year 2024 is "f24".
 *
 * @param {String} term A full term string from the database, e.g. "fall".
 * @param {Number} year A numerical year, e.g. 2024.
 * @returns Returns a string code for the provided term/year combination, e.g.
 *   "f24".
 */
export function getTermYearCode(term, year) {
  return termCodes[term] + (year % 100)
}

/**
 * Returns a complete course/term ID given a course ID and a term/year code.
 *
 * @param {String} courseId A database ID for a course, e.g. "cs290".
 * @param {String} termYear A term year code, e.g. "f24", as returned by
 *   {@link getTermYearCode}.
 * @returns Returns a course/term ID by combinging `courseId` and `termYear`,
 *   e.g. "cs290-f24".
 */
export function getCourseTermId(courseId, termYear) {
  return `${courseId}-${termYear}`
}
