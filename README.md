# PostCSS Mq Last [![Build Status][ci-img]][ci]

[PostCSS] plugin that gives media query rules precedence by moving them to the end of the file.

Sometimes, when working with nesting plugins, media atrules are output before otherwise-identical rules.

Since media queries don't raise specificity, this plugin moves media atrules to the end of the output, making them override non-media query rules.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/jgjp/postcss-mq-last.svg
[ci]:      https://travis-ci.org/jgjp/postcss-mq-last

```css
@media (max-width: 34em) {
    .half.stackable {
    	width: 100%
    }
}

.half.stackable {
	width: 50%
}
```

```css
.half.stackable {
	width: 50%
}

@media (max-width: 34em) {
    .half.stackable {
    	width: 100%
    }
}
```

## Usage

```js
postcss([ require('postcss-mq-last') ])
```

See [PostCSS] docs for examples for your environment.
