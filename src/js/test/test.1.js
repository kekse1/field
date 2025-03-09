#!/usr/bin/env node
/*
 * Copyright (c) Sebastian Kucharczyk <kuchen@kekse.biz>
 * https://kekse.biz/ https://github.com/kekse1/field/>
 */

//
import Field from '../field.js';

//
const field = new Field(2);
console.dir({ dimensions: field.dimensions,
	size: field.size });

//
var coord, offset; for(var i = 0; i <= 16; ++i)
{
	coord = field.getCoordinates(i);
	offset = field.getOffset(... coord);

	console.dir({i, coord, offset});
}

