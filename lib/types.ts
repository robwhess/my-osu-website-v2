import { Enums, Tables } from "@/generated/supabase/types"

export type Term = Enums<"term">

export type Course = Tables<"course">

export type CoursesByTerm = Record<Term, Course[]>
