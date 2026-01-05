/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = () => {
    return {
        postcssPlugin: 'postcss-mq-last',
        Once(root) {
            var cloned;
            var i = 0;
            var len = root.nodes.length;

            while (i < len) {
                if (root.nodes[i].type === 'atrule' &&
                    root.nodes[i].name === 'media') {

                    cloned = root.nodes[i];
                    root.nodes[i].remove();
                    root.append(cloned);
                    len--;

                } else {
                    i++;
                }
            }
        }
    };
};

module.exports.postcss = true;
