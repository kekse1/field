/*
 * Copyright (c) Sebastian Kucharczyk <kuchen@kekse.biz>
 * https://kekse.biz/ https://github.com/kekse1/field/>
 */

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
			else if(isArrayType(_args[i]))
			{
				this.array = _args.splice(i--, 1)[0];
			}
		}
	}

	reset()
	{
		this.array = null;
		this.dimensions = [];
		this.offset = 0n;
	}

	resetOffset()
	{
		const result = this.offset;
		this.offset = 0n;
		return result;
	}

	setArray(_value)
	{
		if(_value === null)
		{
			return this.unsetArray();
		}

		if(!isArrayType(_value))
		{
			throw new Error('Value is not an instance of any type of Array.');
		}
		
		return this.array = _value;
	}

	unsetArray()
	{
		const result = this.array;
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

	addDimensions(... _dimensions)
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
		_dimensions = [ 1, ... _dimensions ];
		var result = 0n;
		
		var dim, coord; for(var i = 0, j = 0, mul = 1n;;)
		{
			coord = BigInt(_coordinates[i]);

			if(!(dim = BigInt(_dimensions[i % _dimensions.length])))
			{
				continue;
			}
			
			result += ((mul *= dim) * coord);

			if(i < (_coordinates.length - 1))
			{
				j = ((j + 1) % _dimensions.length);
				++i;
			}
			else
			{
				break;
			}
		}

		return result;
	}

	static getCoordinates(_offset, _dimensions)
	{
		_dimensions = [ 1, ... _dimensions ];
		const result = [];
throw new Error('TODO');
	}

	addOffset(... _coordinates)
	{
		return this.offset += Field.getOffset(
			_coordinates,
			this.dimensions);
	}

	getOffset(... _coordinates)
	{
		const result = Field.getOffset(
			_coordinates,
			this.dimensions);

		if(this.array)
		{
			return getIndex(Number(
				result % BigInt(
					this.array.length)),
				this.array.length);
		}
		
		return result;
	}

	getCoordinates(_offset)
	{
		return Field.getCoordinates(
			_offset,
			this.dimensions);
	}

	add(... _coordinates)
	{
		const result = this.addOffset(... _coordinates);

		if(this.array)
		{
			return this.array[offset];
		}

		return result;
	}

	get(... _coordinates)
	{
		const result = this.getOffset(... _coordinates);

		if(this.array)
		{
			return this.array[result];
		}

		return result;
	}

	set(_value, ... _coordinates)
	{
		var result;
		const offset = this.getOffset(... _coordinates);

		if(this.array)
		{
			result = this.array[offset];
			this.array[offset] = _value;
		}
		else
		{
			result = offset;
		}

		return result;
	}
}

export default Field;

//
const isArrayType = (_item) => {
	try { return _item.constructor.name.endsWith('Array'); }
	catch(_err) {} return false;
};

const getIndex = (_index, _length) => {
	if(_length < 1)
	{
		return null;
	}

	if((_index %= _length) < 0)
	{
		_index = (_length + _index);
	}

	return _index;
};

//

