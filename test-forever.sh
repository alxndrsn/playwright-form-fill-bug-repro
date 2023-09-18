#!/bin/bash -eu

while yarn test; do
  sleep 1
  echo "Running again..."
done

echo "Test failed - check screenshot."
