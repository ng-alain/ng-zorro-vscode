#!/bin/bash

set -e

cd $(dirname $0)/..

DIST="$(pwd)/dist"

cloneSource() {
  if [[ ! -d ng-zorro-antd ]]; then
    git clone --depth 1 https://github.com/NG-ZORRO/ng-zorro-antd.git
  fi
}

cloneSource
node scripts/build.js
