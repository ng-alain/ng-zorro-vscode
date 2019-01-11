#!/usr/bin/env bash

set -u -e -o pipefail

cd $(dirname $0)/../..

VERSION=$(node -p "require('./package.json').version")

TEST=false
BUILD=false
PUBLISH=false
for ARG in "$@"; do
  case "$ARG" in
    -t)
      TEST=true
      ;;
    -b)
      BUILD=true
      ;;
    -p)
      PUBLISH=true
      ;;
  esac
done

buildSnippetByLang() {
  LANG="$1"
  (
    local filePrefix="-${LANG}"
    local i18nTpl=""
    if [[ $LANG == "" ]]; then
      filePrefix=""
      i18nTpl="{zh-CN}({en-US})"
    fi
    # html
    node ./scripts/build/snippet.js ${LANG}
    $(npm bin)/vscode-snippet-generator --i18n=${LANG} --sourceRoot=src/snippets --outFile=snippets/html${filePrefix}.json --i18nTpl=${i18nTpl}
  )
}

buildSnippet() {
  echo "Build snippets..."
  rm -rf ./snippets
  mkdir -p ./snippets

  # build single language
  node ./scripts/build/snippet.js "zh-CN"
  node ./scripts/build/snippet.js "en-US"
}

packingByLang() {
  LANG="$1"
  (
    local prefix="-${LANG}"
    if [[ $LANG == "" ]]; then
      prefix=""
    fi

    echo "Packing version: ${LANG}"
    node ./scripts/build/package.js ${LANG}
    cp snippets/html${prefix}.json ./snippets.json
    $(npm bin)/vsce package -o cipchk.ng-zorro-vscode${prefix}-${VERSION}.vsix
  )
}

packing() {
  packingByLang "zh-CN"

  packingByLang "en-US"
}

buildMagic() {
  echo "Build magic..."
  $(npm bin)/tsc -p ./
}

buildSnippet
buildMagic

if [[ ${TEST} == true ]]; then
  # cp snippets/html-zh-CN.json ./snippets.json
  cp snippets/html-en-US.json ./snippets.json
fi

if [[ ${PUBLISH} == true ]]; then
  packing
fi

echo "DONE !"