# React basic

## setState

[api docs](https://reactjs.org/docs/react-component.html#setstate)

### Объект vs функция-апдейтер

```js
setState({ value: newValue }); // 1.
// vs
// updater function
setState((prevState, props) => newState); // 2.
```

* Объект подходит для случаев, когда новое значение стейта не зависит от пропсов или старого стейта (например `open = () => this.setState({ isOpen: true });`)
* Используйте функцию, если значение зависит от предыдущего

```js
setState(prevState => ({ value: prevState.value + 1 }));
// или
setState(prevState => ({ isActive: !prevState.isActive }));
```

* Если значение зависит от пропсов, безопаснее будет воспользоваться вторым аргументом функции

```js
setState((_, props) => ({ value: props.value }));
```

### Вызов setState без перерендера

Вызывая `setState` с любым значением, кроме `null`, вы всегда получите перерендер, даже если значение не изменилось. При этом внутри функции-апдейтера можно сделать проверки, и если обновление стейта не нужно, вернуть `null`.

С версии 16 возврат `null` из апдейтера не вызывает перерендер.
