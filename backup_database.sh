#!/usr/bin/env bash

# From Supa-Migrate
# https://github.com/mansueli/Supa-Migrate/

#Edit here:
SUPAVISOR_URL=postgresql://postgres.mpnbresxmpbdjyfnjkif:[YOUR-PASSWORD]@aws-0-us-west-1.pooler.supabase.com:6543/postgres

#Script:
# Default case for Linux sed, just use "-i"
sedi=(-i)
case "$(uname)" in
  # For macOS, use two parameters
  Darwin*) sedi=(-i "")
esac

pg_dump "$SUPAVISOR_URL" \
  --if-exists \
  --clean \
  --quote-all-identifiers \
  --schema-only \
  --no-owner --no-privileges \
  --exclude-schema 'extensions|graphql|graphql_public|net|tiger|pgbouncer|vault|realtime|supabase_functions|storage|pg*|information_schema' \
  --schema '*' > dump.sql

pg_dump "$SUPAVISOR_URL" \
  --quote-all-identifiers \
  --no-owner --no-privileges \
  --data-only \
  --exclude-schema 'extensions|graphql|graphql_public|net|tiger|pgbouncer|vault|realtime|supabase_functions|storage|pg*|information_schema' \
  --schema '*' > data_dump.sql

sed "${sedi[@]}" -e 's/^DROP SCHEMA IF EXISTS "auth";$/-- DROP SCHEMA IF EXISTS "auth";/' dump.sql
sed "${sedi[@]}" -e's/^DROP SCHEMA IF EXISTS "storage";$/-- DROP SCHEMA IF EXISTS "storage";/' dump.sql
sed "${sedi[@]}" -e 's/^CREATE SCHEMA "auth";$/-- CREATE SCHEMA "auth";/' dump.sql
sed "${sedi[@]}" -e 's/^CREATE SCHEMA "storage";$/-- CREATE SCHEMA "storage";/' dump.sql
sed "${sedi[@]}" -e 's/^ALTER DEFAULT PRIVILEGES FOR ROLE "supabase_admin"/-- ALTER DEFAULT PRIVILEGES FOR ROLE "supabase_admin"/' dump.sql
