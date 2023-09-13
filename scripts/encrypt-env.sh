#!/bin/bash

# Usage:
# ./scripts/encrypt-env.sh infrastructure/supabase/.env

cat $1 | grep -e "^[^#]" | openssl base64 -A