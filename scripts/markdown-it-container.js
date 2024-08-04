const markdownItContainer = require("markdown-it-container");

hexo.extend.filter.register("markdown-it:renderer", function (md) {
  md.use(markdownItContainer, "collapsible", {
    validate: function (params) {
      return params.trim().match(/^collapsible\s+(.*)$/);
    },
    render: function (tokens, idx) {
      var m = tokens[idx].info.trim().match(/^collapsible\s+(.*)$/);
      if (tokens[idx].nesting === 1) {
        // opening tag
        return (
          "<details><summary>" + md.utils.escapeHtml(m[1]) + "</summary>\n"
        );
      } else {
        // closing tag
        return "</details>\n";
      }
    },
  });

  const defaultRender = md.renderer.rules.fence || function(tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };
  
  md.renderer.rules.fence = function(tokens, idx, options, env, self) {
    const token = tokens[idx];
    const previousToken = tokens[idx - 2];
    const nextToken = tokens[idx + 2];
  
    // 检查 fence 是否在自定义容器内
    if (previousToken && previousToken.type === 'container_collapsible_open' &&
        nextToken && nextToken.type === 'container_collapsible_close') {
      // 如果在折叠块内，返回原始内容
      return token.content;
    } else {
      // 如果不在折叠块内，使用默认的 fence 渲染器
      return defaultRender(tokens, idx, options, env, self);
    }
  };
});
