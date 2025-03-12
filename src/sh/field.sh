#
# Copyright (c) Sebastian Kucharczyk <kuchen@kekse.biz>
# https://kekse.biz/ https://github.com/kekse1/field/
#

#
# Note: both dimensions and coordinates are strings
# with values separated by comma `,` (*no* spaces);
#


#
getOffset()
{
	local coordinates="$1"
	local dimensions="$2"

	IFS=','
	read -ra coordinates <<<"$coordinates"
	read -ra dimensions <<<"$dimensions"

	local i
	local dim=1
	local mul=1
	local coord
	local len=${#coordinates[@]}
	local dims=${#dimensions[@]}
	local result=0

	for (( i=0; i<$len; ++i )); do
		coord=${coordinates[$i]}
		mul=$(($mul*$dim))
		result=$(($result+($mul*$coord)))
		dim=${dimensions[$(($i%$dims))]}
	done

	echo $result
}

getCoordinates()
{
	local offset=$1
	local dimensions=$2
	IFS=',' read -ra dimensions <<<"$dimensions"

	# todo # ...
}

fieldSize()
{
	local result=1
	local dimensions="$1"
	IFS=',' read -ra dimensions <<<"$dimensions"

	for i in "${dimensions[@]}"; do
		result=$(($result*$i))
		echo "($i)"
	done

	echo $result
}

