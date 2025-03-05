([Back to the **Index**](./README.md))

# Library
Some helper functions, etc.

At the moment they're closures on the outside of the [`Field`](./field.md) class,
but within the same file. That makes things a bit easier.. if there'll be many
helper functions in the future, then I'd think about an extra file. ...

## Index
* Functions
    * [`isArrayType(_item)`](#isarraytype_item)

## Functions
As mentioned above, all implemented as closures.

### `isArrayType(_item)`
Returns true for every **instance** of any type of Array.
Actually it just checks whether the `.constructor.name.endsWith('Array')`.

