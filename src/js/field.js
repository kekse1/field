/*
 * Copyright (c) Sebastian Kucharczyk <kuchen@kekse.biz>
 * https://kekse.biz/ https://github.com/kekse1/field/>
 * v0.0.1
 */

//
import lib from './field.lib.js';

//
class Field
{
	constructor(... _args)
	{
		this.array = null;

		for(var i = 0; i < _args.length; ++i)
		{
			if(lib.isArrayType(_args[i]))
			{
				this.setArray(_args.splice(i--, 1)[0], false);
				break;
			}
		}

		//
		//TODO/
		//
	}

	setArray(_value, _check = true)
	{
		if(_check && !lib.isArrayType)
		{
			throw new Error('Value is not an instance of any type of Array.');
		}
		
		return this.array = _value;
	}
}

export default Field;

//

