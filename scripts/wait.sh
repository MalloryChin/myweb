#!/bin/sh

# Infinite wait so that we can attach to container
trap : TERM INT
tail -f /dev/null & wait
