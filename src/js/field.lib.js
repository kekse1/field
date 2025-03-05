/*
 * Copyright (c) Sebastian Kucharczyk <kuchen@kekse.biz>
 * https://kekse.biz/ https://github.com/kekse1/field/>
 * v0.0.1
 */

//
const lib = {};
export default lib;

//
lib.isArrayType = (_item) => {
	try
	{
		return _item.constructor.name.endsWith('Array');
	}
	catch(_error)
	{
	}

	return false;
};

