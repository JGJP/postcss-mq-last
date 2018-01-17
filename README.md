# PostCSS Mq Last [![Build Status][ci-img]][ci]

[PostCSS] plugin that gives media query rules precedence by moving them to the end of the file.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/jgjp/postcss-mq-last.svg
[ci]:      https://travis-ci.org/jgjp/postcss-mq-last

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-mq-last') ])
```

See [PostCSS] docs for examples for your environment.
