import { Enums, Tables } from "@/generated/supabase/types"
import { SupabaseClient, QueryError } from "@supabase/supabase-js"

export type Term = Enums<"term">

export type Course = Tables<"course">
export type CourseTerm = Tables<"course_term">

export type CoursesByTerm = Record<Term, Course[]>

export type SupabaseQueryFn<T> = (supabase: SupabaseClient) => Promise<{ data: T | null, error: QueryError | null }>
