#!/usr/bin/env node
/*
 * Copyright (c) Sebastian Kucharczyk <kuchen@kekse.biz>
 * https://kekse.biz/ https://github.com/kekse1/field/>
 */

//
import Field from './field.js';

//
const field = new Field(2);
console.dir({ dimensions: field.dimensions,
	size: field.size });

//
for(var i = 0; i <= 16; ++i)
{
	console.dir({i, coord: field.getCoordinates(i)});
}

