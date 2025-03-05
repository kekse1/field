([Back to the **Index**](./README.md))

# `class Field`

## Constructor
Can be without any argument or with an arbritary Array type instance.
Only the first Array type instance will be used in the new Field.

Depends on [Library](./doc.lib.md) function `isArrayType()`. So the regular
`Array` is possible, but also all known TypedArrays (like the `Uint8Array`).

## `setArray(_value, _check = true)`
Checks the first argument via [Library](./doc.lib.md) function `isArrayType()`
(if `_check` is true) and sets **`this.array`** (or throws an Exception).

## `array`
**Optional** array.

