(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{416:function(t,e,s){"use strict";s.r(e);var a=s(25),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"事件与生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件与生命周期"}},[t._v("#")]),t._v(" 事件与生命周期")]),t._v(" "),s("p",[t._v("在 "),s("RouterLink",{attrs:{to:"/guide/message.html"}},[t._v("接收和发送消息")]),t._v(" 一章中，我们介绍了如何使用接受消息，并埋下了一个伏笔。本章节就让我们来认识一下 Koishi 的事件系统。")],1),t._v(" "),s("h2",{attrs:{id:"事件系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件系统"}},[t._v("#")]),t._v(" 事件系统")]),t._v(" "),s("p",[t._v("如果将我们已经熟悉的那个实例用事件系统的方式来改写，应该会是这样：")]),t._v(" "),s("panel-view",{staticClass:"code",attrs:{title:""}},[s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[s("code",[s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#88846F"}},[t._v("// 如果收到“天王盖地虎”，就回应“宝塔镇河妖”")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("ctx.")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("on")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'message'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", (")]),s("span",{staticStyle:{color:"#FD971F"}},[t._v("session")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(") ")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("=>")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),s("span",{staticStyle:{color:"#F92672"}},[t._v("if")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" (session.content ")]),s("span",{staticStyle:{color:"#F92672"}},[t._v("===")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'天王盖地虎'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(") {")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("    session.")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("send")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'宝塔镇河妖'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(")")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  }")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("})")])])])])]),s("p",[t._v("上面的 "),s("code",[t._v("message")]),t._v(" 字符串被称为 "),s("strong",[t._v("事件名称")]),t._v("。这个事件名称可能有多级：我们用 "),s("code",[t._v("message/group")]),t._v(" 表示群组消息，"),s("code",[t._v("message/private")]),t._v(" 表示私聊消息。这意味着你可以只监听收到消息的一部分。而当你监听 "),s("code",[t._v("message")]),t._v(" 事件时，则所有收到的消息都会经由这个回调函数处理。")]),t._v(" "),s("p",[t._v("除去这个例子中所使用的 "),s("strong",[t._v("上报事件")]),t._v(" 外，Koishi 自身也提供了一批 "),s("strong",[t._v("内部事件")]),t._v("，例如用 "),s("code",[t._v("connect")]),t._v(" 事件表示应用启动完成等。前者通常由适配器生成，回调函数只接受一个会话对象；而后者由 Koishi 自身生成，回调函数有着各种不同的形式。你可以在 "),s("RouterLink",{attrs:{to:"/api/events.html"}},[t._v("事件文档")]),t._v(" 中看到全部 Koishi 支持的事件接口。")],1),t._v(" "),s("h3",{attrs:{id:"事件的命名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件的命名"}},[t._v("#")]),t._v(" 事件的命名")]),t._v(" "),s("p",[t._v("无论是上报事件，内部事件还是插件事件，Koishi 的事件名都遵循者一些既定的规范。它们包括：")]),t._v(" "),s("ul",[s("li",[t._v("总是使用 param-case 作为事件名")]),t._v(" "),s("li",[t._v("使用 "),s("code",[t._v("/")]),t._v(" 作为事件命名空间的分隔符")]),t._v(" "),s("li",[t._v("配对使用 xxx 和 before-xxx 命名事件")])]),t._v(" "),s("p",[t._v("对于上报事件来说，命名空间和其子事件往往是一种包含的关系，例如 "),s("code",[t._v("group-member")]),t._v(" 和 "),s("code",[t._v("group-member/ban")]),t._v("。当子事件被触发时，其父事件也会被同时触发。而对于内部事件来说，命名空间则单纯是为了将事件归类而设计的，例如 "),s("code",[t._v("dialogue/modify")]),t._v(" 表示在教学插件中进行了修改操作。对于全部插件的开发者，我们都建议将插件相关的事件放入自己的命名空间中，以免发生冲突。")]),t._v(" "),s("h3",{attrs:{id:"注册监听器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注册监听器"}},[t._v("#")]),t._v(" 注册监听器")]),t._v(" "),s("p",[t._v("要注册一个监听器，可以使用 "),s("code",[t._v("ctx.on(event, callback)")]),t._v("，它的用法与 Node.js 自带的 "),s("a",{attrs:{href:"https://nodejs.org/api/events.html#events_class_eventemitter",target:"_blank",rel:"noopener noreferrer"}},[t._v("EventEmitter"),s("OutboundLink")],1),t._v(" 类似，不过多出了第三个可选参数 "),s("code",[t._v("prepend")]),t._v("：如果设为 truthy 则在事件队列的头部而不是尾部添加，相当于 "),s("code",[t._v("emitter.prependListener()")]),t._v("。与此同时，我们也提供了类似的函数 "),s("code",[t._v("ctx.once(event, callback)")]),t._v("，用于注册一个只触发一次的监听器；以及 "),s("code",[t._v("ctx.off(event, callback)")]),t._v("，用于取消一个已注册的监听器。")]),t._v(" "),s("p",[t._v("特别地，Koishi 有不少监听器是满足 before-xxx 形式的。对于这类监听器的注册，我们也提供了一个语法糖，那就是 "),s("code",[t._v("ctx.before('xxx', callback)")]),t._v("。如此使用时，默认情况与第三个参数的作用与前面描述的正好相反。考虑到事件的命名空间，如果使用 "),s("code",[t._v("ctx.before('xxx/yyy', callback)")]),t._v("，其实际效果也与 "),s("code",[t._v("ctx.on('xxx/before-yyy', callback)")]),t._v(" 相当。")]),t._v(" "),s("p",[t._v("这些方法与 EventEmitter 的另一个不同点在于，无论是 "),s("code",[t._v("ctx.on()")]),t._v(" 还是 "),s("code",[t._v("ctx.before()")]),t._v(" 都会返回一个 dispose 函数，调用这个函数即可取消注册监听器。因此你完全不必使用 "),s("code",[t._v("ctx.once()")]),t._v(" 和 "),s("code",[t._v("ctx.off()")]),t._v("。下面给一个只触发一次的监听器的例子：")]),t._v(" "),s("panel-view",{staticClass:"code",attrs:{title:""}},[s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[s("code",[s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#66D9EF"}},[t._v("const")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" dispose ")]),s("span",{staticStyle:{color:"#F92672"}},[t._v("=")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ctx.")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("on")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("(")]),s("span",{staticStyle:{color:"#E6DB74"}},[t._v("'foo'")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(", (")]),s("span",{staticStyle:{color:"#F92672"}},[t._v("...")]),s("span",{staticStyle:{color:"#FD971F"}},[t._v("args")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(") ")]),s("span",{staticStyle:{color:"#66D9EF"}},[t._v("=>")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" {")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),s("span",{staticStyle:{color:"#A6E22E"}},[t._v("dispose")]),s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("()")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("  ")]),s("span",{staticStyle:{color:"#88846F"}},[t._v("// do something")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#F8F8F2"}},[t._v("})")])])])])]),s("h3",{attrs:{id:"触发事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#触发事件"}},[t._v("#")]),t._v(" 触发事件")]),t._v(" "),s("p",[t._v("在 Koishi 中，触发一个事件可以有着多种形式，目前支持 6 个不同的方法，足以适应绝大多数需求。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("ctx.emit()")]),t._v(" 同时触发所有 event 事件的回调函数。")]),t._v(" "),s("li",[s("code",[t._v("ctx.parallel()")]),t._v(" 是上述方法对应的异步版本。")]),t._v(" "),s("li",[s("code",[t._v("ctx.bail()")]),t._v(" 依次触发所有 event 事件的回调函数。当返回一个 "),s("code",[t._v("false")]),t._v(", "),s("code",[t._v("null")]),t._v(", "),s("code",[t._v("undefined")]),t._v(" 以外的值时将这个值作为结果返回。")]),t._v(" "),s("li",[s("code",[t._v("ctx.serial()")]),t._v(" 是上述方法对应的异步版本。")]),t._v(" "),s("li",[s("code",[t._v("ctx.chain()")]),t._v(" 依次触发所有 event 事件的回调函数。每次用得到的返回值覆盖下一轮调用的第一个参数，并在所有函数执行完后返回最终结果。")]),t._v(" "),s("li",[s("code",[t._v("ctx.waterfall()")]),t._v(" 是上述方法对应的异步版本。")])]),t._v(" "),s("h2",{attrs:{id:"生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),s("p",[t._v("在实际使用生命周期钩子之前，我们需要对 App 的生命周期有一个总体的认识：它分为 "),s("strong",[t._v("连接阶段")]),t._v("、"),s("strong",[t._v("运行阶段")]),t._v(" 和 "),s("strong",[t._v("销毁阶段")]),t._v("。下图大体展示了一个 App 实例的生命周期。在本节的后面，我们将具体介绍每一部分的流程细节。当然你不需要立即弄明白所有的东西，不过随着你的不断学习和使用，它的参考价值会越来越高。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/app-lifecycle.png",alt:"app-lifecycle"}})]),t._v(" "),s("h3",{attrs:{id:"事件、中间件与指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件、中间件与指令"}},[t._v("#")]),t._v(" 事件、中间件与指令")]),t._v(" "),s("p",[t._v("我们已经熟悉了 Koishi 的一些基本概念，比如事件、中间件和指令等，那么他们的关系是什么呢？上面的生命周期图也同样告诉了我们答案："),s("strong",[t._v("中间件由内置监听器管理，而指令由内置中间件管理")]),t._v("。没错，当 message 事件被发送到各个上下文的监听器上时，绑定在 App 上的内置监听器将会将这个事件逐一交由中间件进行处理。全部处理完成后会触发一个 after-middleware 事件。")]),t._v(" "),s("p",[t._v("因为我们通常不需要直接监听 message 事件（使用中间件往往是更好的实现），after-middleware 事件的触发通常意味着你对一条消息的处理已经完成。我们的测试工具 koishi-test-utils 就是基于这种逻辑实现了它的会话 API。")]),t._v(" "),s("h3",{attrs:{id:"内置监听器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内置监听器"}},[t._v("#")]),t._v(" 内置监听器")]),t._v(" "),s("ol",[s("li",[t._v("message 事件触发，进入中间件处理流程")]),t._v(" "),s("li",[t._v("根据上下文从中间件池中筛选出要执行的中间件序列")]),t._v(" "),s("li",[t._v("逐一执行中间件：\n"),s("ul",[s("li",[t._v("内置中间件是理论上第一个注册的中间件（下接 "),s("a",{attrs:{href:"#%E5%86%85%E7%BD%AE%E4%B8%AD%E9%97%B4%E4%BB%B6"}},[t._v("内置中间件")]),t._v("）")]),t._v(" "),s("li",[t._v("通过 "),s("code",[t._v("ctx.middleware(cb, true)")]),t._v(" 注册的中间件会插在队列的更前面")]),t._v(" "),s("li",[t._v("临时中间件会直接插在当前序列的尾端，并不会影响中间件池本身")]),t._v(" "),s("li",[t._v("如果执行中遇到错误或未调用 "),s("code",[t._v("next")]),t._v(" 函数，会停止后续中间件的执行")])])]),t._v(" "),s("li",[t._v("触发 after-middleware 事件")]),t._v(" "),s("li",[t._v("更新当前用户和群的缓冲数据（参见 "),s("RouterLink",{attrs:{to:"/guide/manage.html#按需加载与自动更新"}},[t._v("按需加载与自动更新")]),t._v("）")],1)]),t._v(" "),s("h3",{attrs:{id:"内置中间件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内置中间件"}},[t._v("#")]),t._v(" 内置中间件")]),t._v(" "),s("ol",[s("li",[t._v("从前缀中匹配 at 机器人，nickname 或 prefix")]),t._v(" "),s("li",[t._v("预处理消息内容，生成 "),s("code",[t._v("session.$appel")]),t._v(" 和 "),s("code",[t._v("session.$perfix")])]),t._v(" "),s("li",[t._v("触发 tokenize 事件，尝试解析消息内容（"),s("RouterLink",{attrs:{to:"/guide/execute.html#快捷方式"}},[t._v("快捷方式")]),t._v(" 的解析也在此处完成）")],1),t._v(" "),s("li",[t._v("如果数据库存在：\n"),s("ul",[s("li",[t._v("触发 before-attach-channel 事件")]),t._v(" "),s("li",[t._v("获取频道数据并存储于 "),s("code",[t._v("session.$channel")])]),t._v(" "),s("li",[t._v("根据 flags, assignee 等字段判断是否应该处理该信息，如果不应该则直接返回")]),t._v(" "),s("li",[t._v("触发 attach-channel 事件（用户可以在其中同步地更新群数据，或中止执行后续操作）")]),t._v(" "),s("li",[t._v("触发 before-attach-user 事件")]),t._v(" "),s("li",[t._v("获取用户数据并存储于 "),s("code",[t._v("session.$user")])]),t._v(" "),s("li",[t._v("根据 flags 等字段判断是否应该处理该信息，如果不应该则直接返回")]),t._v(" "),s("li",[t._v("触发 attach-user 事件（用户可以在其中同步地更新群和用户数据，或中止执行后续操作）")])])]),t._v(" "),s("li",[t._v("如果解析出指令：执行该指令（下接 "),s("a",{attrs:{href:"#%E6%8C%87%E4%BB%A4%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B"}},[t._v("指令执行流程")]),t._v("）")]),t._v(" "),s("li",[t._v("尝试解析出候选指令，如果成功则显示候选项（参见 "),s("RouterLink",{attrs:{to:"/guide/execute.html#模糊匹配"}},[t._v("模糊匹配")]),t._v("）")],1)]),t._v(" "),s("h3",{attrs:{id:"指令执行流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指令执行流程"}},[t._v("#")]),t._v(" 指令执行流程")]),t._v(" "),s("ol",[s("li",[t._v("如果解析过程中存在错误（如非法参数等），直接返回错误信息")]),t._v(" "),s("li",[t._v("逐一调用 check 回调函数，直到返回值不为 "),s("code",[t._v("undefined")])]),t._v(" "),s("li",[t._v("触发 before-command 事件：\n"),s("ul",[s("li",[t._v("如果是 -h, --help 则直接显示帮助信息（参见 "),s("RouterLink",{attrs:{to:"/guide/help.html#查看帮助"}},[t._v("查看帮助")]),t._v("）")],1),t._v(" "),s("li",[t._v("根据配置检查用户权限和调用记录（参见 "),s("RouterLink",{attrs:{to:"/guide/message.html#指令调用管理"}},[t._v("指令调用管理")]),t._v("）")],1)])]),t._v(" "),s("li",[t._v("逐一调用 action 回调函数，直到返回值不为 "),s("code",[t._v("undefined")])]),t._v(" "),s("li",[t._v("触发 command 事件")])])],1)}),[],!1,null,null,null);e.default=v.exports}}]);