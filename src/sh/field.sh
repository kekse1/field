#
# Copyright (c) Sebastian Kucharczyk <kuchen@kekse.biz>
# https://kekse.biz/ https://github.com/kekse1/field/
# v1.0.0
#

#
# Note: both dimensions and coordinates are strings
# with values separated by comma `,` (*no* spaces);
#
# Note: only my JavaScript implementation (which is
# a bit bigger) supports BigInt.
#


#
offset()
{
	local coordinates="$1"
	local dimensions="$2"
	IFS=','
	read -ra coordinates <<<"$coordinates"
	read -ra dimensions <<<"$dimensions"

	if [[ ${#dimensions[@]} -eq 0 ]]; then
		echo "Missing dimensions parameter (second argument, with comma separated values)" >&2
		return 1
	elif [[ ${#coordinates[@]} -eq 0 ]]; then
		echo "0"
		return
	fi

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

coordinates()
{
	local offset=$1
	local dimensions=$2; IFS=',' read -ra dimensions <<<"$dimensions"

	if [[ ${#dimensions[@]} -eq 0 ]]; then
		echo "Missing dimensions parameter (second argument, with comma separated values)" >&2
		return 1
	fi

	local dim=1
	local index=0
	local result=""
	local rest=$offset
	local dims=${#dimensions[@]}
	local count=0

	while [[ $rest -gt 0 ]]; do
		result="${result},$(($rest%$dim))"
		rest=$(($rest/$dim))
		dim=${dimensions[$(($index%$dims))]}
		index=$(($index+1))
		count=$(($count+1))
	done

	if [[ $count -eq 0 ]]; then
		result="0"
	else
		result="${result: 1}"
		result="${result#*,}"
	fi

	echo "$result"
}

fieldSize()
{
	local result=1
	local dimensions="$1"
	IFS=',' read -ra dimensions <<<"$dimensions"

	if [[ ${#dimensions[@]} -eq 0 ]]; then
		echo "Missing dimensions parameter (with comma separated values)" >&2
		return 1
	fi

	for i in "${dimensions[@]}"; do
		result=$(($result*$i))
	done

	echo $result
}

