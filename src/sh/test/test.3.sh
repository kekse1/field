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
fieldSize 2,2,2,2,2,2,2,2
fieldSize 256,256

