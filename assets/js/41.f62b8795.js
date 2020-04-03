(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{278:function(t,s,a){"use strict";a.r(s);var n=a(38),o=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mode-和-环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mode-和-环境变量","aria-hidden":"true"}},[t._v("#")]),t._v(" Mode 和 环境变量")]),t._v(" "),a("p",[t._v("以 "),a("a",{attrs:{href:"https://cli.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue CLI"),a("OutboundLink")],1),t._v(" 为例，"),a("code",[t._v("mode")]),t._v(" 是 "),a("a",{attrs:{href:"https://cli.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue CLI"),a("OutboundLink")],1),t._v(" 中非常重要的概念，传送门："),a("a",{attrs:{href:"https://cli.vuejs.org/guide/mode-and-env.html#modes",target:"_blank",rel:"noopener noreferrer"}},[t._v("Modes and Environment Variables"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"vapper-的-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vapper-的-mode","aria-hidden":"true"}},[t._v("#")]),t._v(" Vapper 的 Mode")]),t._v(" "),a("p",[a("code",[t._v("Vapper")]),t._v(" 中只有两种 "),a("code",[t._v("mode")]),t._v("，分别是 "),a("code",[t._v("'production'")]),t._v(" 和 "),a("code",[t._v("'development'")]),t._v("：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("development")]),t._v(" 被用于 "),a("code",[t._v("vapper dev")]),t._v("。")]),t._v(" "),a("li",[a("code",[t._v("production")]),t._v(" 被用于 "),a("code",[t._v("vapper build")]),t._v("。")])]),t._v(" "),a("p",[t._v("在"),a("router-link",{attrs:{to:"/zh/custom-server.html"}},[t._v("自定义 Server")]),t._v("中，"),a("code",[t._v("mode")]),t._v(" 作为 "),a("code",[t._v("Vapper")]),t._v(" 构造函数的参数：")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Vapper "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'@vapper/core'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("starter")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 1、创建 Vapper 实例，Vapper 会自动加载配置文件")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vapper "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vapper")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mode"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" process"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'production'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 2、使用默认的 port 和 host，或者来自于配置文件中的 port 和 host")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("//    你也可以手动指定 port 和 host")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    options"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      port"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      host\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" vapper\n\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 3、等待 Vapper 设置完成")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" vapper"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setup")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 4、创建 Server 并侦听请求")]),t._v("\n  vapper"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("listen")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("port"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  vapper"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logger"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("info")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`Server running at: http://")]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("host"),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token string"}},[t._v(":")]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("port"),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token string"}},[t._v("`")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("starter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"正确地启动生产服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正确地启动生产服务器","aria-hidden":"true"}},[t._v("#")]),t._v(" 正确地启动生产服务器")]),t._v(" "),a("p",[t._v("在自定义 "),a("code",[t._v("Server")]),t._v(" 时，我们通常会有如下脚本：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// package.json")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v('"scripts"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 本地开发，启动开发服务器")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"dev"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"NODE_ENV=development node ./server/index.js"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 测试环境，NODE_ENV 的值不是 production，但启动的服务应该是生产环境的服务")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"test"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"NODE_ENV=test node ./server/index.js"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 生产环境，NODE_ENV 的值是 production，启动的服务就是生产环境的服务")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"start"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"NODE_ENV=production node ./server/index.js"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("如上脚本所示，在 "),a("code",[t._v("test")]),t._v(" 脚本中，我们指定了 "),a("code",[t._v("NODE_ENV=test")]),t._v("，目的是用于区分我们的代码正在测试环境运行，我们的服务器代码可能会使用 "),a("code",[t._v("NODE_ENV")]),t._v(" 的值来做环境区分，例如用于区分不同环境的 API 域名等。但需要注意的是，我们应该正确的启动"),a("strong",[t._v("生产环境")]),t._v("的服务器。换句话说，虽然 "),a("code",[t._v("NODE_ENV=test")]),t._v("，但 "),a("code",[t._v("node ./server/index.js")]),t._v(" 中需要启动生产环境的服务器，如下高亮代码所示：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Vapper "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'@vapper/core'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("starter")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 1、创建 Vapper 实例，Vapper 会自动加载配置文件")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isProd "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" process"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'test'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" process"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'production'")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vapper "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Vapper")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mode"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" isProd "),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'production'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'development'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 2、使用默认的 port 和 host，或者来自于配置文件中的 port 和 host")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("//    你也可以手动指定 port 和 host")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    options"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      port"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      host\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" vapper\n\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 3、等待 Vapper 设置完成")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" vapper"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setup")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 4、创建 Server 并侦听请求")]),t._v("\n  vapper"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("listen")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("port"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  vapper"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logger"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("info")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`Server running at: http://")]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("host"),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token string"}},[t._v(":")]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("port"),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token string"}},[t._v("`")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("starter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"不同环境的构建脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不同环境的构建脚本","aria-hidden":"true"}},[t._v("#")]),t._v(" 不同环境的构建脚本")]),t._v(" "),a("p",[t._v("部署项目分为两个步骤，首先要对项目进行构建，构建完成之后要启动生产服务器。上面我们讲解了如何正确的启动生产服务器，本节将介绍不同环境下的构建。通常我们有如下脚本：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// package.json")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 测试环境构建")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v('"build:test"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"vapper build --vueCliMode=test"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 生产环境构建")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v('"build"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"vapper build --vueCliMode=production"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("如上代码所示，我们通过 "),a("code",[t._v("--vueCliMode=xxx")]),t._v(" 指定构建环境，那么 "),a("code",[t._v("--vueCliMode")]),t._v(" 是什么呢？实际上 "),a("code",[t._v("--vueCliMode")]),t._v(" 就是用来指定 [Vue CLI] 中的 "),a("code",[t._v("mode")]),t._v(" 的。")]),t._v(" "),a("p",[t._v("当执行 "),a("code",[t._v("npm run build")]),t._v(" 或 "),a("code",[t._v("yarn build")]),t._v(" 时，会按照 "),a("a",{attrs:{href:"https://cli.vuejs.org/guide/mode-and-env.html#modes",target:"_blank",rel:"noopener noreferrer"}},[t._v("Modes and Environment Variables"),a("OutboundLink")],1),t._v(" 中介绍的那样，加载 "),a("code",[t._v(".env")]),t._v(" 文件。这样我们就可以在相应的 "),a("code",[t._v(".env")]),t._v(" 文件中为环境变量赋予相应的值：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# .env.test")]),t._v("\nNODE_ENV"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("production\nVUE_APP_API_HOST"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("www.foo.com\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# .env.production")]),t._v("\nNODE_ENV"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("production\nVUE_APP_API_HOST"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("www.bar.com\n")])])])])},[],!1,null,null,null);s.default=o.exports}}]);