alter type "public"."term" rename to "term__old_version_to_be_dropped";

create type "public"."term" as enum ('archive', 'winter', 'spring', 'summer', 'fall');

alter table "public"."course_term" alter column term type "public"."term" using term::text::"public"."term";

drop type "public"."term__old_version_to_be_dropped";

drop type "public"."syllabus_category";

CREATE INDEX idx_hours_person_id ON public.hours USING btree (person_id);



