var postcss = require('postcss');

var plugin = require('./');

function run(input, output, opts) {
    return postcss([ plugin(opts) ]).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

var input = '@media (max-width: 544px) { a{ text-decoration: underline } }';
input += 'a{ text-decoration: none }';
var output = 'a{ text-decoration: none }';
output += '@media (max-width: 544px) { a{ text-decoration: underline } }';

it('outputs media query last', () => {
    return run(input, output, { });
});
