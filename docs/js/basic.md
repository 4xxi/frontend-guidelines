# JavaSrcipt basics

## Naming

### [1.1] Используйте говорящие названия

```javascript
// bad
function q() {
  // ...
}

// good
function query() {
  // ...
}
```

### [1.2] Используйте camelCase для переменных, объектов, функций

```js
// bad
const OBJEcttsssss = {};
const this_is_my_object = {};
function c() {}

// good
const thisIsMyObject = {};
function thisIsMyFunction() {}
```

### [1.3] Используйте PascalCase только для конструкторов, классов и типов.

```js
// bad
function user(options) {
  this.name = options.name;
}

const bad = new user({
  name: 'nope',
});

// good
class User {
  constructor(options) {
    this.name = options.name;
  }
}

const good = new User({
  name: 'yup',
});
```

### [1.4] Не используйте нижние подчеркивания как префикс или постфикс

```js
// bad
this.__firstName__ = 'Panda';
this.firstName_ = 'Panda';
this._firstName = 'Panda';

// good
this.firstName = 'Panda';
```

### [1.5] Булевые переменные (и только они) называются с префиксами `is`, `has`.

```js
// bad
const opened = true;
const options = false;

// good
const isOpened = true;
const hasOptions = false;
```

### [1.6] Методы и функции называются начиная с глагола

```js
// bad
const userData = () => {...};
this.account = () => {...};

// good
const getUserData = () => {...};
this.createAccount = () => {...};
```

### [1.7] Хендлеры начинаются с префикса `handle`

```js
// bad
const onClick = e => {...};
const click = e => {...};
this.keyPress = e => {...};

// good
const handleClick = e => {...};
const handleChange = e => {...};
this.handleKeyPress = e => {...};
```

При этом входящие пропсы для хендлеров стоит именовать с префиксом `on`

```js
// bad
<Component handleClick={this.handleClick} />

$.CustomSuperPlugin({
  handleClick: handleClick,
});

//good
<Component onClick={this.handleClick} />

$.CustomSuperPlugin({
  onClick: handleClick,
});
```

### [1.8] Для jQuery коллекций должен использоваться префикс `$`

```js
// bad
var inputs = $('input');

//good
var $inputs = $('input');
```
