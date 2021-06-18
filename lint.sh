#!/bin/env bash

configFile=".eslintrc.js"
filesToLint="*.js"
codeDir="./src"

find ${codeDir} -type f -name "${filesToLint}" -exec yarn eslint -c ./${configFile} --fix {} \;

