(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{427:function(s,e,v){"use strict";v.r(e);var _=v(25),t=Object(_.a)({},(function(){var s=this,e=s.$createElement,v=s._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[v("h1",{attrs:{id:"会话"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#会话"}},[s._v("#")]),s._v(" 会话 (Session)")]),s._v(" "),v("div",{staticClass:"custom-block danger"},[v("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),v("p",[s._v("这里是"),v("strong",[s._v("正在施工")]),s._v("的 koishi v3 的文档。要查看 v1 版本的文档，请前往"),v("RouterLink",{attrs:{to:"/v1/"}},[v("strong",[s._v("这里")])]),s._v("。")],1)]),s._v(" "),v("p",[s._v("会话来源于 Koishi v1 的元信息对象，并在后续的版本中发展成了专门的类并大幅扩展了功能。你几乎可以利用会话完成所有工作。会话对象的属性分为两类，一类是不以 "),v("code",[s._v("$")]),s._v(" 开头的，这些属性来源于 CQHTTP 事件；另一类是以 "),v("code",[s._v("$")]),s._v(" 开头的，它们是 Koishi 的扩展功能。在会话的序列化中，只有前一类属性会被保留。")]),s._v(" "),v("h2",{attrs:{id:"cqhttp-原生属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cqhttp-原生属性"}},[s._v("#")]),s._v(" CQHTTP 原生属性")]),s._v(" "),v("h3",{attrs:{id:"基本属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基本属性"}},[s._v("#")]),s._v(" 基本属性")]),s._v(" "),v("ul",[v("li",[v("strong",[s._v("postType:")]),s._v(" "),v("code",[s._v("'message' | 'notice' | 'request'| 'meta_event'")])]),s._v(" "),v("li",[v("strong",[s._v("selfId:")]),s._v(" "),v("code",[s._v("number")]),s._v(" 机器人自身 ID")]),s._v(" "),v("li",[v("strong",[s._v("userId:")]),s._v(" "),v("code",[s._v("number")]),s._v(" 涉及的用户 ID")]),s._v(" "),v("li",[v("strong",[s._v("discussId:")]),s._v(" "),v("code",[s._v("number")]),s._v(" 涉及的讨论组 ID")])]),s._v(" "),v("h3",{attrs:{id:"message-型元数据属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#message-型元数据属性"}},[s._v("#")]),s._v(" message 型元数据属性")]),s._v(" "),v("ul",[v("li",[v("strong",[s._v("messageType:")]),s._v(" "),v("code",[s._v("'private' | 'group'")])]),s._v(" "),v("li",[v("strong",[s._v("subtype:")]),s._v(" "),v("ul",[v("li",[s._v("如果是私聊消息："),v("code",[s._v("'friend' | 'group' | 'other'")])]),s._v(" "),v("li",[s._v("如果是群消息："),v("code",[s._v("'normal' | 'anonymous' | 'notice'")])])])]),s._v(" "),v("li",[v("strong",[s._v("messageId:")]),s._v(" "),v("code",[s._v("number")]),s._v(" 消息 ID，用于撤回等")]),s._v(" "),v("li",[v("strong",[s._v("message:")]),s._v(" "),v("code",[s._v("string")]),s._v(" 消息内容")]),s._v(" "),v("li",[v("strong",[s._v("rawMessage:")]),s._v(" "),v("code",[s._v("string")]),s._v(" 原始消息内容")]),s._v(" "),v("li",[v("strong",[s._v("font:")]),s._v(" "),v("code",[s._v("number")]),s._v(" 字体")]),s._v(" "),v("li",[v("strong",[s._v("sender:")]),s._v(" "),v("code",[s._v("SenderInfo")]),s._v(" 发送人信息\n"),v("ul",[v("li",[v("strong",[s._v("userId:")]),s._v(" "),v("code",[s._v("number")]),s._v(" 用户 ID")]),s._v(" "),v("li",[v("strong",[s._v("nickname:")]),s._v(" "),v("code",[s._v("string")]),s._v(" 昵称")]),s._v(" "),v("li",[v("strong",[s._v("sex:")]),s._v(" "),v("code",[s._v("'male' | 'female' | 'unknown'")])]),s._v(" "),v("li",[v("strong",[s._v("age:")]),s._v(" "),v("code",[s._v("number")]),s._v(" 年龄")]),s._v(" "),v("li",[v("strong",[s._v("title:")]),s._v(" "),v("code",[s._v("string")]),s._v(" 专属头衔（仅限群消息）")]),s._v(" "),v("li",[v("strong",[s._v("card:")]),s._v(" "),v("code",[s._v("string")]),s._v(" 群名片 / 备注（仅限群消息）")]),s._v(" "),v("li",[v("strong",[s._v("area:")]),s._v(" "),v("code",[s._v("string")]),s._v(" 地区（仅限群消息）")]),s._v(" "),v("li",[v("strong",[s._v("level:")]),s._v(" "),v("code",[s._v("string")]),s._v(" 成员等级（仅限群消息）")]),s._v(" "),v("li",[v("strong",[s._v("role:")]),s._v(" "),v("code",[s._v("'owner' | 'admin' | 'member'")]),s._v("（仅限群消息）")])])]),s._v(" "),v("li",[v("strong",[s._v("anonymous:")]),s._v(" "),v("code",[s._v("AnonymousInfo")]),s._v(" 匿名信息\n"),v("ul",[v("li",[v("strong",[s._v("id:")]),s._v(" "),v("code",[s._v("number")]),s._v(" 匿名用户 ID")]),s._v(" "),v("li",[v("strong",[s._v("name:")]),s._v(" "),v("code",[s._v("string")]),s._v(" 用户名称")]),s._v(" "),v("li",[v("strong",[s._v("flag:")]),s._v(" "),v("code",[s._v("string")]),s._v(" 匿名用户 flag，在调用禁言 API 时需要传入")])])])]),s._v(" "),v("h3",{attrs:{id:"notice-型元数据属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#notice-型元数据属性"}},[s._v("#")]),s._v(" notice 型元数据属性")]),s._v(" "),v("ul",[v("li",[v("strong",[s._v("noticeType:")]),s._v(" "),v("code",[s._v("'group_upload' | 'group_admin' | 'group_increase' | 'group_ban' | 'friend_add'")])]),s._v(" "),v("li",[v("strong",[s._v("subtype:")]),s._v(" "),v("ul",[v("li",[s._v("如果是管理员变动："),v("code",[s._v("'set' | 'unset'")])]),s._v(" "),v("li",[s._v("如果是群成员增加："),v("code",[s._v("'approve' | 'invite'")])]),s._v(" "),v("li",[s._v("如果是群成员减少："),v("code",[s._v("'leave' | 'kick' | 'kick_me'")])]),s._v(" "),v("li",[s._v("如果是群禁言："),v("code",[s._v("'ban' | 'lift_ban'")])])])]),s._v(" "),v("li",[v("strong",[s._v("operatorId:")]),s._v(" "),v("code",[s._v("number")]),s._v(" 操作者 ID")]),s._v(" "),v("li",[v("strong",[s._v("duration:")]),s._v(" "),v("code",[s._v("number")]),s._v(" 禁言时长（秒）")]),s._v(" "),v("li",[v("strong",[s._v("file:")]),s._v(" "),v("code",[s._v("FileInfo")]),s._v(" 文件信息\n"),v("ul",[v("li",[v("strong",[s._v("id:")]),s._v(" "),v("code",[s._v("string")]),s._v(" 文件 ID")]),s._v(" "),v("li",[v("strong",[s._v("name:")]),s._v(" "),v("code",[s._v("string")]),s._v(" 文件名")]),s._v(" "),v("li",[v("strong",[s._v("size:")]),s._v(" "),v("code",[s._v("number")]),s._v(" 文件大小（字节）")]),s._v(" "),v("li",[v("strong",[s._v("busid:")]),s._v(" "),v("code",[s._v("number")])])])])]),s._v(" "),v("h3",{attrs:{id:"request-型元数据属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#request-型元数据属性"}},[s._v("#")]),s._v(" request 型元数据属性")]),s._v(" "),v("ul",[v("li",[v("strong",[s._v("requestType:")]),s._v(" "),v("code",[s._v("'friend' | 'group'")])]),s._v(" "),v("li",[v("strong",[s._v("subtype:")]),s._v(" "),v("code",[s._v("'add' | 'invite'")]),s._v("（如果是加群请求）")]),s._v(" "),v("li",[v("strong",[s._v("comment:")]),s._v(" "),v("code",[s._v("string")]),s._v(" 验证信息")]),s._v(" "),v("li",[v("strong",[s._v("flag:")]),s._v(" "),v("code",[s._v("string")]),s._v(" 请求 flag，在调用处理请求的 API 时需要传入")])]),s._v(" "),v("h3",{attrs:{id:"metaevent-型元数据属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#metaevent-型元数据属性"}},[s._v("#")]),s._v(" metaEvent 型元数据属性")]),s._v(" "),v("ul",[v("li",[v("strong",[s._v("metaEventType:")]),s._v(" "),v("code",[s._v("'lifecycle' | 'heartbeat'")])]),s._v(" "),v("li",[v("strong",[s._v("subtype:")]),s._v(" "),v("code",[s._v("'enable' | 'disable'")]),s._v("（如果是生命周期）")]),s._v(" "),v("li",[v("strong",[s._v("interval:")]),s._v(" "),v("code",[s._v("number")]),s._v(" 到下次心跳的间隔（毫秒）")]),s._v(" "),v("li",[v("strong",[s._v("status:")]),s._v(" "),v("code",[s._v("StatusInfo")]),s._v(" 状态信息，请参考 "),v("RouterLink",{attrs:{to:"/api/bot.html#bot-getstatus"}},[s._v("getStatus")]),s._v(" 的返回值")],1)]),s._v(" "),v("h2",{attrs:{id:"koishi-扩展属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#koishi-扩展属性"}},[s._v("#")]),s._v(" Koishi 扩展属性")]),s._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),v("p",[s._v("尽管下面的大部分属性和方法都存在于 Session 对象的原型链上，但你需要明白部分功能仅对于特定的事件生效。例如，假设 session 是一个心跳事件，那么试图调用 "),v("code",[s._v("session.send()")]),s._v(" 将会导致异常。")])]),s._v(" "),v("h3",{attrs:{id:"session-app"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#session-app"}},[s._v("#")]),s._v(" session.$app")]),s._v(" "),v("p",[s._v("当前会话绑定的 "),v("RouterLink",{attrs:{to:"/api/app.html"}},[s._v("App")]),s._v(" 实例。")],1),s._v(" "),v("h3",{attrs:{id:"session-bot"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#session-bot"}},[s._v("#")]),s._v(" session.$bot")]),s._v(" "),v("p",[s._v("当前会话绑定的 "),v("RouterLink",{attrs:{to:"/api/bot.html"}},[s._v("Bot")]),s._v(" 实例。")],1),s._v(" "),v("h3",{attrs:{id:"session-appel"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#session-appel"}},[s._v("#")]),s._v(" session.$appel")]),s._v(" "),v("h3",{attrs:{id:"session-prefix"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#session-prefix"}},[s._v("#")]),s._v(" session.$prefix")]),s._v(" "),v("h3",{attrs:{id:"session-user"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#session-user"}},[s._v("#")]),s._v(" session.$user")]),s._v(" "),v("p",[s._v("一个可观测的用户数据对象。")]),s._v(" "),v("h3",{attrs:{id:"session-observeuser"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#session-observeuser"}},[s._v("#")]),s._v(" session.observeUser(fields?)")]),s._v(" "),v("p",[s._v("观测特定的用户字段，并更新到 "),v("a",{attrs:{href:"#session-user"}},[v("code",[s._v("session.$user")])]),s._v(" 中。")]),s._v(" "),v("ul",[v("li",[v("strong",[s._v("fields:")]),s._v(" "),v("code",[s._v("Iterable<User.Field>")])]),s._v(" "),v("li",[s._v("返回值: "),v("code",[s._v("Promise<User.Observed>")])])]),s._v(" "),v("h3",{attrs:{id:"session-channel"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#session-channel"}},[s._v("#")]),s._v(" session.$channel")]),s._v(" "),v("p",[s._v("一个可观测的群数据对象。")]),s._v(" "),v("h3",{attrs:{id:"session-observechannel"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#session-observechannel"}},[s._v("#")]),s._v(" session.observeChannel(fields?)")]),s._v(" "),v("p",[s._v("观测特定的用户字段，并更新到 "),v("a",{attrs:{href:"#session-channel"}},[v("code",[s._v("session.$channel")])]),s._v(" 中。")]),s._v(" "),v("ul",[v("li",[v("strong",[s._v("fields:")]),s._v(" "),v("code",[s._v("Iterable<Channel.Field>")])]),s._v(" "),v("li",[s._v("返回值: "),v("code",[s._v("Promise<Channel.Observed>")])])]),s._v(" "),v("h3",{attrs:{id:"session-send"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#session-send"}},[s._v("#")]),s._v(" session.send(message)")]),s._v(" "),v("p",[s._v("在当前上下文发送消息。")]),s._v(" "),v("ul",[v("li",[v("strong",[s._v("message:")]),s._v(" "),v("code",[s._v("string")]),s._v(" 要发送的内容")]),s._v(" "),v("li",[s._v("返回值: "),v("code",[s._v("Promise<void>")])])]),s._v(" "),v("h3",{attrs:{id:"session-sendqueued"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#session-sendqueued"}},[s._v("#")]),s._v(" session.sendQueued(message, delay?)")]),s._v(" "),v("p",[s._v("在当前上下文发送消息，并与下一条通过 "),v("code",[s._v("session.sendQueued")]),s._v(" 发送的消息之间保持一定的时间间隔。")]),s._v(" "),v("ul",[v("li",[v("strong",[s._v("message:")]),s._v(" "),v("code",[s._v("string")]),s._v(" 要发送的内容")]),s._v(" "),v("li",[v("strong",[s._v("delay:")]),s._v(" "),v("code",[s._v("number")]),s._v(" 与下一条消息的时间间隔，缺省时会使用 "),v("RouterLink",{attrs:{to:"/api/app.html#options-queuedelay"}},[v("code",[s._v("$app.options.queueDelay")])])],1),s._v(" "),v("li",[s._v("返回值: "),v("code",[s._v("Promise<void>")])])]),s._v(" "),v("h3",{attrs:{id:"session-middleware"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#session-middleware"}},[s._v("#")]),s._v(" session.middleware(middleware)")]),s._v(" "),v("p",[s._v("注册一个仅对当前会话生效的中间件。")]),s._v(" "),v("ul",[v("li",[v("strong",[s._v("middleware:")]),s._v(" "),v("RouterLink",{attrs:{to:"/guide/message.html#中间件"}},[v("code",[s._v("Middleware")])]),s._v(" 要注册的中间件")],1),s._v(" "),v("li",[s._v("返回值: "),v("code",[s._v("() => void")]),s._v(" 取消该中间件的函数")])]),s._v(" "),v("h3",{attrs:{id:"session-prompt"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#session-prompt"}},[s._v("#")]),s._v(" session.prompt(timeout?) "),v("Badge",{attrs:{text:"beta",type:"warn"}})],1),s._v(" "),v("p",[s._v("等待当前会话的下一次输入，如果超时则会 reject。")]),s._v(" "),v("ul",[v("li",[v("strong",[s._v("timeout:")]),s._v(" "),v("code",[s._v("number")]),s._v(" 中间件的生效时间，缺省时会使用 "),v("RouterLink",{attrs:{to:"/api/app.html#options-prompttimeout"}},[v("code",[s._v("$app.options.promptTimeout")])])],1),s._v(" "),v("li",[s._v("返回值: "),v("code",[s._v("Promise<string>")]),s._v(" 用户输入")])]),s._v(" "),v("h3",{attrs:{id:"session-suggest"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#session-suggest"}},[s._v("#")]),s._v(" session.suggest(options)")]),s._v(" "),v("p",[s._v("尝试显示候选输入。")]),s._v(" "),v("ul",[v("li",[v("strong",[s._v("options.target:")]),s._v(" "),v("code",[s._v("string")]),s._v(" 目标字符串")]),s._v(" "),v("li",[v("strong",[s._v("options.items:")]),s._v(" "),v("code",[s._v("string[]")]),s._v(" 源字符串列表")]),s._v(" "),v("li",[v("strong",[s._v("options.next:")]),s._v(" "),v("RouterLink",{attrs:{to:"/guide/message.html#中间件"}},[v("code",[s._v("NextFunction?")])]),s._v(" 回调函数")],1),s._v(" "),v("li",[v("strong",[s._v("options.prefix:")]),s._v(" "),v("code",[s._v("string?")]),s._v(" 显示在候选输入前的文本")]),s._v(" "),v("li",[v("strong",[s._v("options.suffix:")]),s._v(" "),v("code",[s._v("string")]),s._v(" 当只有一个选项时，显示在候选输入后的文本")]),s._v(" "),v("li",[v("strong",[s._v("options.coefficient:")]),s._v(" "),v("code",[s._v("number")]),s._v(" 用于模糊匹配的相似系数，缺省时会使用 "),v("RouterLink",{attrs:{to:"/api/app.html#options-similaritycoefficient"}},[v("code",[s._v("$app.options.similarityCoefficient")])])],1),s._v(" "),v("li",[v("strong",[s._v("options.apply:")]),s._v(" "),v("code",[s._v("(suggestion: string, next: NextFunction) => void")]),s._v(" 确认后执行的操作")]),s._v(" "),v("li",[s._v("返回值: "),v("code",[s._v("Promise<void>")])])]),s._v(" "),v("h3",{attrs:{id:"session-resolve"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#session-resolve"}},[s._v("#")]),s._v(" session.resolve(argv)")]),s._v(" "),v("h3",{attrs:{id:"session-collect"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#session-collect"}},[s._v("#")]),s._v(" session.collect(argv, key, fields)")]),s._v(" "),v("p",[s._v("按照 argv 中的 command 属性向 fields 添加所需的用户字段。它是一个内置的 before-user 监听器。")]),s._v(" "),v("ul",[v("li",[v("strong",[s._v("argv:")]),s._v(" "),v("RouterLink",{attrs:{to:"/guide/command.html#parsedargv-对象"}},[v("code",[s._v("ParsedArgv")])]),s._v(" 只需确保其中存在 command 属性即可")],1),s._v(" "),v("li",[v("strong",[s._v("key:")]),s._v(" "),v("code",[s._v("T extends 'user' | 'group'")]),s._v(" 用户字段集合")]),s._v(" "),v("li",[v("strong",[s._v("fields:")]),s._v(" "),v("code",[s._v("Set<keyof Tables[T]>")]),s._v(" 用户字段集合")]),s._v(" "),v("li",[s._v("返回值: "),v("code",[s._v("void")])])]),s._v(" "),v("h3",{attrs:{id:"session-execute"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#session-execute"}},[s._v("#")]),s._v(" session.execute(argv, next?)")]),s._v(" "),v("p",[s._v("执行一个指令。可以传入一个 argv 对象或者指令对应的文本。")]),s._v(" "),v("ul",[v("li",[v("strong",[s._v("argv:")]),s._v(" "),v("code",[s._v("string | ExecuteArgv")]),s._v(" 指令文本或参数对象")]),s._v(" "),v("li",[v("strong",[s._v("next:")]),s._v(" "),v("RouterLink",{attrs:{to:"/guide/message.html#中间件"}},[v("code",[s._v("NextFunction")])]),s._v(" 回调函数")],1),s._v(" "),v("li",[s._v("返回值: "),v("code",[s._v("Promise<void>")])])])])}),[],!1,null,null,null);e.default=t.exports}}]);