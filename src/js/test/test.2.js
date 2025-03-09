#!/usr/bin/env node
/*
 * Copyright (c) Sebastian Kucharczyk <kuchen@kekse.biz>
 * https://kekse.biz/ https://github.com/kekse1/field/>
 */

//
import Field from '../field.js';

//
const field = new Field(256, 128, 64);
console.dir({ dimensions: field.dimensions,
	size: field.size });

//
const offset1 = field.getOffset(255,127,63);
const offset2 = field.getOffset(1, 2, 3);
console.dir({coords1:[255,127,63],coords2:[1,2,3],
	offset1,offset2});

//
const coords1 = field.getCoordinates(offset1);
const coords2 = field.getCoordinates(offset2);
console.dir({offset1,offset2,
	coords1,coords2});

