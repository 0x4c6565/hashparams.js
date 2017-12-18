# hashparams.js

A simple library for getting/setting/unsetting has parameters e.g.

``example.com/test#parameter1=value1&parameter2&parameter3=&parameter4=value4``

## Basic Usage

### Get

The following ``Get`` examples will use the example query string ``#parameter1=value1&parameter2&parameter3=&parameter4=value4``

```js
HashParameters.get('parameter1');
> value1
```

```js
HashParameters.get('parameter2');
> null
```

```js
HashParameters.get('parameter3');
> ''
```

### Set

```js
HashParameters.set('parameter1','value1');
> example.com/test#parameter1=value1
```

```js
HashParameters.set('parameter2',null);
> example.com/test#parameter2
```

```js
HashParameters.set('parameter3','');
> example.com/test#parameter3=
```
