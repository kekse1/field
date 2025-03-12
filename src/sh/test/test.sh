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
getOffset 255,255 256
getCoordinates 65535 256
fieldSize 256,256,256

