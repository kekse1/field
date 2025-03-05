/*
 * Copyright (c) Sebastian Kucharczyk <kuchen@kekse.biz>
 * https://kekse.biz/ https://github.com/kekse1/field/>
 */

//
const DEFAULT_BIGINT = true;

//
class Field
{
	constructor(... _args)
	{
		this.reset();

		for(var i = 0, j = 0; i < _args.length; ++i)
		{
			if(typeof _args[i] === 'number')
			{
				this.dimensions[j++] = _args.splice(i--, 1)[0];
			}
			else if(Field.isArrayType(_args[i]))
			{
				this.array = _args.splice(i--, 1)[0];
			}
			else if(typeof _args[i] === 'boolean')
			{
				this.bigint = _args.splice(i--, 1)[0];
			}
		}
	}

	static isArrayType(_value)
	{
		try
		{
			return _value.constructor.name.endsWith('Array');
		}
		catch(_err)
		{
		}

		return false;
	}

	reset()
	{
		this.bigint = DEFAULT_BIGINT;
		this.array = null;
		this.dimensions = [];
	}

	setArray(_value)
	{
		if(_value === null)
		{
			return this.unsetArray();
		}

		if(!Field.isArrayType(_value))
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

	resetDimensions()
	{
		const result = this.dimensions;
		this.dimensions = [];
		return result;
	}

	setDimensions(... _dimensions)
	{
		const result = this.dimensions;
		this.dimensions = [ ... _dimensions ];
		return result;
	}

	addDimension(... _dimensions)
	{
		this.dimensions.push(... _dimensions);
		return [ ... this.dimensions ];
	}

	getDimensions()
	{
		return [ ... this.dimensions ];
	}

	static getOffset(_coordinates, _dimensions)
	{
	}

	static getCoordinates(_offset, _dimensions)
	{
	}

	getOffset(... _coordinates)
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

	getCoordinates(_offset)
	{
		var result;

		//
		//todo/
		//
	}
}

export default Field;

//

