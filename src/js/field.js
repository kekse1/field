/*
 * Copyright (c) Sebastian Kucharczyk <kuchen@kekse.biz>
 * https://kekse.biz/ https://github.com/kekse1/field/>
 */

//
const DEFAULT_BIGINT = true;

//
import lib from './field.library.js';

//
class Field
{
	constructor(... _args)
	{
		this.bigint = DEFAULT_BIGINT;
		this.array = null;
		this.coord = [];

		for(var i = 0, j = 0; i < _args.length; ++i)
		{
			if(typeof _args[i] === 'number')
			{
				this.coord[j++] = _args.splice(i--, 1)[0];
			}
			else if(lib.isArrayType(_args[i]))
			{
				this.array = _args.splice(i--, 1)[0];
			}
			else if(typeof _args[i] === 'boolean')
			{
				this.bigint = _args.splice(i--, 1)[0];
			}
		}
	}

	setArray(_value)
	{
		if(_value === null)
		{
			return this.unsetArray();
		}

		if(!lib.isArrayType)
		{
			throw new Error('Value is not an instance of any type of Array.');
		}
		
		return this.array = _value;
	}

	unsetArray()
	{
		const result = !!this.array;
		this.array = null;
		return result;
	}

	resetCoord()
	{
		const result = this.coord.length;
		this.coord = [];
		return result;
	}

	setCoord(... _coord)
	{
		const result = this.coord.length;
		this.coord = _coord;
		return result;
	}

	addCoord(... _coord)
	{
		this.coord.push(... _coord);
		return this.coord.length;
	}

	/*getOffset(... _coord)
	{
		var result;

		//
		//todo/
		//

		//
		if(this.array)
		{
			result %= this.array.length;
		}
		
		return result;
	}

	getCoord(_offset)
	{
		var result;

		//
		//todo/
		//
	}*/
}

export default Field;

//

