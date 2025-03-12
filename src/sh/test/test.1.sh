#!/usr/bin/env bash

#
# Copyright (c) Sebastian Kucharczyk <kuchen@kekse.biz>
# https://kekse.biz/ https://github.com/kekse1/field/
#

#
real="$(realpath "$0")"
dir="$(dirname "$real")"
. "${dir}/../field.sh"

#
for (( i=0; i<=16; ++i )); do
	coord="$(coordinates $i 2)"
	offset="$(offset $coord 2)"
	printf "[%2s] %2s => %s\n" "$i" "$offset" "$coord"
done

