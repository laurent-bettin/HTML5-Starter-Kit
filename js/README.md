#JavaScript Coding standards

Indentation with 4 spaces.

No whitespace at the end of line or on blank lines.

**if**/**else**/**for**/**while**/**try** always have braces and always go on multiple lines.

```JavaScript
if(condition) {
    //...
}else{
    //...
}
```

Unary special-character operators (**!**, **++**) must not have space next to their operand.

Any **,** and **;** must not have preceding space.

Any **;** used as a statement terminator must be at the end of the line.

Any : after a property name in an object definition must not have preceding space.
Short object can be write on a single line.
Multiline object must contain only one property per line.
Use double quote for quoted property if needed

```JavaScript
var o = {foo: bar};

var o = {
    "foo": "bar",
    "baz": "foo"
}
```

Never include extra spaces around elements and arguments:
```JavaScript
var a = [foo, bar];
var o = {foo: bar};
o['foo'], o.foo;
var f = function(arg1, arg2) {
    //
};
```

declare variables as separate statements:
```JavaScript
var firstVariable;
var secondVariable;
var thirdVariable;
```

The **?** and **:** in a ternary conditional must have space on both sides.

No filler spaces in empty constructs (**{}**, **[]**, **fn()**)

New line at the end of each file.

Mulitiline string literal :
```JavaScript
var myString = 'A rather long string of English text, an error message ' +
    'actually that just keeps going and going -- an error ' +
    'message to make the Energizer bunny blush (right through ' +
    'those Schwarzenegger shades)! Where was I? Oh yes, ' +
    'you\'ve got an error and all the extraneous whitespace is ' +
    'just gravy.  Have a nice day.';
```

##Naming conventions:
functionLikeThis, variablesLikeThis, ClassNameLikeThis, argumentsLikeThis
