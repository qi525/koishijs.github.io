(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{422:function(t,a,s){"use strict";s.r(a);var c=s(25),o=Object(c.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"指令触发机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指令触发机制"}},[t._v("#")]),t._v(" 指令触发机制")]),t._v(" "),s("p",[t._v("本节介绍有关指令调用的一些机制。")]),t._v(" "),s("h2",{attrs:{id:"指令前缀"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指令前缀"}},[t._v("#")]),t._v(" 指令前缀")]),t._v(" "),s("p",[s("strong",[t._v("指令前缀")]),t._v("是 Koishi 用于判断一条信息是否为指令的机制。这个机制在不同环境下可以是不同的。假设 "),s("code",[t._v("app.options.nickname")]),t._v(" 被设置为了“四季酱”，则以下信息都可以触发指令调用：")]),t._v(" "),s("panel-view",{staticClass:"code",attrs:{title:""}},[s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[s("code",[s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#88846F"}},[t._v("# 私聊状态下")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("四季酱 ")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("echo")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" hello")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("四季酱, ")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("echo")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" hello")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#66D9EF"}},[t._v("echo")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" hello")])]),t._v("\n\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#88846F"}},[t._v("# 群聊状态下")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("四季酱 ")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("echo")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" hello")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("四季酱, ")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("echo")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" hello")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("@四季酱 ")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("echo")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" hello")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#66D9EF"}},[t._v("echo")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" hello")])])])])]),s("p",[t._v("你也可以通过修改下列配置项来改变这种行为：")]),t._v(" "),s("ul",[s("li",[s("strong",[s("RouterLink",{attrs:{to:"/api/app.html#options-nickname"}},[t._v("nickname")]),t._v(":")],1),t._v(" "),s("code",[t._v("string | string[]")]),t._v(" 如果为空的话，上述几条以 "),s("code",[t._v("Koishi")]),t._v(" 开头的信息就不会触发指令了。你也可以同时设置多个昵称。")]),t._v(" "),s("li",[s("strong",[s("RouterLink",{attrs:{to:"/api/app.html#options-prefix"}},[t._v("prefix")]),t._v(":")],1),t._v(" "),s("code",[t._v("string | string[]")]),t._v(" 设置为 "),s("code",[t._v(".")]),t._v(" 可以禁止在群中调用 "),s("code",[t._v("echo")]),t._v(" 但允许调用 "),s("code",[t._v(".echo")]),t._v("。你也可以同时设置多个前缀。")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("h4",{attrs:{id:"nickname-和-prefix-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nickname-和-prefix-的区别"}},[t._v("#")]),t._v(" nickname 和 prefix 的区别")]),t._v(" "),s("ol",[s("li",[t._v("nickname 后需要有"),s("strong",[t._v("逗号或空白字符")]),t._v("，再后面才是指令名；prefix 后面"),s("strong",[t._v("必须紧跟")]),t._v("指令名。")]),t._v(" "),s("li",[t._v("nickname 的默认值为 "),s("code",[t._v("[]")]),t._v("，因此覆盖这个值不会对原本可用的调用产生任何影响；prefix 的默认值为 "),s("code",[t._v("''")]),t._v("，如果覆盖了则会导致非私聊环境下无法直接写指令名进行调用（也就是在非私聊环境下调用指令必须加 nickname 和 prefix 前缀）。")])]),t._v(" "),s("p",[t._v("如果想要保留直接写指令名的调用效果，可以设置 prefix 为 "),s("code",[t._v("['.', '']")]),t._v("，这样一来不写前缀和写 "),s("code",[t._v(".")]),t._v(" 做前缀都是可以的。但是也要注意由于是按照从前往后的顺序依次匹配，因此 "),s("code",[t._v("''")]),t._v(" 必须写在最后一个。")])]),t._v(" "),s("h2",{attrs:{id:"指令别名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指令别名"}},[t._v("#")]),t._v(" 指令别名")]),t._v(" "),s("p",[t._v("你可以为一条指令添加别名：")]),t._v(" "),s("panel-view",{staticClass:"code",attrs:{title:""}},[s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[s("code",[s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("app.")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("command")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'echo'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(").")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("alias")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'say'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")])])])])]),s("p",[t._v("这样一来，无论是 "),s("code",[t._v("echo")]),t._v(" 还是 "),s("code",[t._v("say")]),t._v(" 都能触发这条指令了。")]),t._v(" "),s("h2",{attrs:{id:"快捷方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快捷方式"}},[t._v("#")]),t._v(" 快捷方式")]),t._v(" "),s("p",[t._v("Koishi 的指令机制虽然能够尽可能避免冲突和误触发，但是也带来了一些麻烦。一方面，一些常用指令的调用会受到指令前缀的限制；另一方面，一些指令可能有较长的选项和参数，但它们调用时却往往是相同的。面对这些情况，"),s("strong",[t._v("快捷方式")]),t._v("能有效地解决你的问题。")]),t._v(" "),s("p",[t._v("假设你实现了一个货币系统和 rank 指令，调用 "),s("code",[t._v("rank wealth --global")]),t._v(" 可以实现查看全服所有人财富排行，你可以这样做：")]),t._v(" "),s("panel-view",{staticClass:"code",attrs:{title:""}},[s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[s("code",[s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("ctx.")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("command")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'rank <type>'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  .")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("shortcut")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'全服财富排行'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", { args: [")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'wealth'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("], options: { global: ")]),s("span",{staticStyle:{color:"#AE81FF"}},[t._v("true")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" } })")])])])])]),s("p",[t._v("这样一来，只要输入“全服财富排行”，Koishi 就会自动调用 "),s("code",[t._v("rank wealth --global")]),t._v("，回复查询结果了。")]),t._v(" "),s("p",[t._v("通常来说，快捷方式都要求严格匹配（当然删除两端空格和繁简体转化这种程度的模糊匹配是可以做的），但是你也可以让快捷方式允许带参数：")]),t._v(" "),s("panel-view",{staticClass:"code",attrs:{title:""}},[s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[s("code",[s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("ctx.")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("command")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'buy <item>'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  .")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("shortcut")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'购买'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", { prefix: ")]),s("span",{staticStyle:{color:"#AE81FF"}},[t._v("true")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", fuzzy: ")]),s("span",{staticStyle:{color:"#AE81FF"}},[t._v("true")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" })")])])])])]),s("p",[t._v("上面程序注册了一个快捷方式，"),s("code",[t._v("prefix")]),t._v(" 要求在调用时保留指令前缀，而 "),s("code",[t._v("fuzzy")]),t._v(" 允许这个快捷方式带参数列表。这样一来，只要输入“Koishi，购买物品名”，Koishi 就会自动调用“buy 物品名”了。")]),t._v(" "),s("p",[t._v("除此以外，你还可以使用正则表达式作为快捷方式：")]),t._v(" "),s("panel-view",{staticClass:"code",attrs:{title:""}},[s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[s("code",[s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("ctx.")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("command")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'market <area>'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  .")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("shortcut")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("/")]),s("span",{staticStyle:{color:"#F92672"}},[t._v("^")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("查(")]),s("span",{staticStyle:{color:"#AE81FF"}},[t._v(".")]),s("span",{staticStyle:{color:"#F92672"}},[t._v("+")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("区)市场")]),s("span",{staticStyle:{color:"#F92672"}},[t._v("$")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("/")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", { args: [")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'$1'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("] })")])])])])]),s("p",[t._v("这样一来，输入“查美区市场”就等价于输入“market 美区”了。")]),t._v(" "),s("p",[t._v("不难看出，使用快捷方式会让你的输入方式更加接近自然语言，也会让你的机器人显得更平易近人。")]),t._v(" "),s("h2",{attrs:{id:"使用引号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用引号"}},[t._v("#")]),t._v(" 使用引号")]),t._v(" "),s("p",[t._v("Koishi 会自动将引号（半角或者全角）中的内容视为一个整体。这在很多场景中都非常有用，下面举出了一些典型的例子：")]),t._v(" "),s("ul",[s("li",[t._v("当希望传入带空格的参数时（默认行为是只解析空格前面的部分）")]),t._v(" "),s("li",[t._v("当希望传入以 "),s("code",[t._v("-")]),t._v(" 开头的参数时（默认的行为是解析成下一个选项）")]),t._v(" "),s("li",[t._v("当希望传入一个空字符串时作为参数时（默认的行为是解析为 "),s("code",[t._v("true")]),t._v("）")]),t._v(" "),s("li",[t._v("当希望传入只由数字构成的字符串参数时（默认行为是解析为 "),s("code",[t._v("number")]),t._v(" 类型）")])]),t._v(" "),s("p",[t._v("当然，这些情况也都可以使用接下来要介绍的 "),s("a",{attrs:{href:"#%E7%B1%BB%E5%9E%8B%E7%B3%BB%E7%BB%9F"}},[t._v("类型系统")]),t._v(" 解决。")]),t._v(" "),s("h2",{attrs:{id:"指令插值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指令插值"}},[t._v("#")]),t._v(" 指令插值")]),t._v(" "),s("p",[t._v("如果你希望在指令中使用其他指令的内容，可以使用 "),s("code",[t._v("$()")]),t._v(" 进行指令插值：")]),t._v(" "),s("panel-view",{attrs:{title:"聊天记录"}},[s("chat-message",{attrs:{nickname:"Alice",color:"#cc0066"}},[t._v("echo foo$(echo bar)")]),t._v(" "),s("chat-message",{attrs:{nickname:"Koishi",avatar:"/koishi.png"}},[t._v("foobar")])],1),t._v(" "),s("p",[t._v("Koishi 默认不转义单引号内的文本。如果你不希望某个参数被插值语法所转义，可以使用单引号：")]),t._v(" "),s("panel-view",{attrs:{title:"聊天记录"}},[s("chat-message",{attrs:{nickname:"Alice",color:"#cc0066"}},[t._v("echo 'foo$(echo bar)'")]),t._v(" "),s("chat-message",{attrs:{nickname:"Koishi",avatar:"/koishi.png"}},[t._v("foo$(echo bar)")])],1),t._v(" "),s("p",[t._v("最后，你还可以在 "),s("RouterLink",{attrs:{to:"/plugins/eval/basic.html"}},[t._v("koishi-plugin-eval")]),t._v(" 中了解到另一种插值方法。")],1),t._v(" "),s("h2",{attrs:{id:"模糊匹配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模糊匹配"}},[t._v("#")]),t._v(" 模糊匹配")]),t._v(" "),s("p",[t._v("在日常的使用中，我们也难免会遇到打错的情况，这时 Koishi 还会自动根据相近的指令名进行纠错提醒：")]),t._v(" "),s("panel-view",{attrs:{title:"聊天记录"}},[s("chat-message",{attrs:{nickname:"Alice",color:"#cc0066"}},[t._v("ecko hello")]),t._v(" "),s("chat-message",{attrs:{nickname:"Koishi",avatar:"/koishi.png"}},[t._v("没有此命令。你要找的是不是“echo”？发送空行或句号以调用推测的指令。")]),t._v(" "),s("chat-message",{attrs:{nickname:"Alice",color:"#cc0066"}},[t._v(".")]),t._v(" "),s("chat-message",{attrs:{nickname:"Koishi",avatar:"/koishi.png"}},[t._v("hello")])],1),t._v(" "),s("p",[t._v("如果想调整模糊匹配的程度，你还可以修改配置项 "),s("RouterLink",{attrs:{to:"/api/app.html#options-similaritycoefficient"}},[t._v("similarityCoefficient")]),t._v("。是不是很方便呢？")],1)],1)}),[],!1,null,null,null);a.default=o.exports}}]);