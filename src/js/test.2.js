#!/usr/bin/env node
/*
 * Copyright (c) Sebastian Kucharczyk <kuchen@kekse.biz>
 * https://kekse.biz/ https://github.com/kekse1/field/>
 */

//
import Field from './field.js';

//
const field = new Field(256, 128, 64);

//
const offset1 = field.getOffset(255, 255, 255, 255);
const offset2 = field.getOffset(16, 32, 64, 128);
console.dir({coords1:[255,255,255,255],coords2:[16,32,64,128],
	offset1,offset2});

//
const coords1 = field.getCoordinates(offset1);
const coords2 = field.getCoordinates(offset2);
console.dir({offset1,offset2,
	coords1,coords2});

