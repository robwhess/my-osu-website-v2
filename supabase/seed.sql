SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- \restrict LeSFxYSvbXpLeALEHiCcIJmthbd6vcBFQkaDz3gjIu3kM6peMwtyDQoXddbyzRb

-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: custom_oauth_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: oauth_clients; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: oauth_authorizations; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: oauth_client_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: oauth_consents; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: webauthn_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: webauthn_credentials; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: course; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."course" ("id", "number", "title", "terms", "description", "created_at") VALUES
	('cs362', 'CS 362', 'Software Engineering II', '{spring}', 'Processes and techniques for maintaining high quality software', '2024-10-15 22:36:28.898808+00'),
	('cs480', 'CS 480', 'Translators', '{spring}', 'How to build a modern compiler', '2024-10-15 22:37:08.595432+00'),
	('cs494', 'CS 494', 'Advanced Web Development', '{winter}', 'Modern tools and techniques for developing web clients', '2024-10-15 22:39:10.871521+00'),
	('cs261', 'CS 261', 'Data Structures', '{fall}', 'Techniques for storing and organizing data in a program', '2024-10-15 22:33:20.527808+00'),
	('cs290', 'CS 290', 'Web Development', '{fall}', 'Fundamentals of full-stack web app development', '2024-10-15 22:35:40.088099+00'),
	('cs492', 'CS 492', 'Mobile Software Development', '{winter}', 'Development of native mobile clients', '2024-10-15 22:37:49.346802+00'),
	('cs493', 'CS 493', 'Cloud Application Development', '{spring}', 'Tools and techniques for building an HTTP API', '2024-10-15 22:38:32.614224+00');


--
-- Data for Name: course_term; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."course_term" ("id", "created_at", "course_id", "term", "year") VALUES
	('cs290-sp22', '2024-11-04 20:55:04.991756+00', 'cs290', 'spring', 2022),
	('cs290-f22', '2024-11-04 20:54:35.563564+00', 'cs290', 'fall', 2022),
	('cs290-f23', '2024-11-04 20:52:09.04387+00', 'cs290', 'fall', 2023),
	('cs290-f24', '2024-10-30 20:28:35.075182+00', 'cs290', 'fall', 2024),
	('cs493-sp26', '2026-06-01 21:08:26.390458+00', 'cs493', 'spring', 2026);


--
-- Data for Name: person; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."person" ("id", "created_at", "name", "email") VALUES
	(1, '2024-10-15 22:26:40.078632+00', 'Rob Hess', 'hessro@oregonstate.edu');


--
-- Data for Name: hours; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."hours" ("id", "created_at", "day", "start", "end", "location", "videoconference_link", "extra_info", "type", "person_id") VALUES
	(1, '2024-10-15 22:27:43.04173+00', 'Wednesday', '11:05:00', '12:30:00', 'KEC 1109', NULL, NULL, 'office', 1),
	(2, '2024-10-15 22:28:34.879354+00', 'Thursday', '14:30:00', '16:00:00', 'Zoom', 'https://oregonstate.zoom.us/j/589990808?pwd=ViszY2Z4eGtoUDh4NEw0QWkzckJMQT09', NULL, 'office', 1);


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: buckets_analytics; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: buckets_vectors; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: vector_indexes; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 1, false);


--
-- Name: hours_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."hours_id_seq"', 2, true);


--
-- Name: person_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."person_id_seq"', 1, true);


--
-- PostgreSQL database dump complete
--

-- \unrestrict LeSFxYSvbXpLeALEHiCcIJmthbd6vcBFQkaDz3gjIu3kM6peMwtyDQoXddbyzRb

RESET ALL;
