var postcss = require('postcss');

module.exports = postcss.plugin('postcss-mq-last', function () {

    return function (root) {

        var cloned;

        var i = 0;
        var len = root.nodes.length;

        while ( i < len ) {

            if ( root.nodes[i].type === 'atrule' &&
            	root.nodes[i].name === 'media' ) {

                cloned = root.nodes[i];
                root.nodes[i].remove();
                root.append(cloned);
                len--;

            } else {

                i++;

            }

        }

    };
});
