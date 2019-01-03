#!/bin/bash

set -e

cd $(dirname $0)/../..

DIR="$(pwd)/build"

cloneZorroSource() {
  if [[ ! -d "${DIR}/ng-zorro-antd" ]]; then
    # git clone --depth 1 https://github.com/NG-ZORRO/ng-zorro-antd.git "${DIR}/ng-zorro-antd"
    git clone --depth 1 -b dev-docs https://github.com/cipchk/ng-zorro-antd.git "${DIR}/ng-zorro-antd"
  fi
}

cloneDelonSource() {
  if [[ ! -d "${DIR}/delon" ]]; then
    git clone --depth 1 -b dev-docs https://github.com/ng-alain/delon.git "${DIR}/delon"
  fi
}

cloneZorroSource
cloneDelonSource
node scripts/resource/main.js
