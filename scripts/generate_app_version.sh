#!/usr/bin/env bash

FILEPATH='src/utils/generated-version.ts'
VERSION=$(git rev-parse HEAD)

echo "export const AppVersion = '$VERSION'" > $FILEPATH
