#!/bin/env bash

output=AUTHORS

git log --format='%aN <%aE>' | sort -f | uniq > ${output}
