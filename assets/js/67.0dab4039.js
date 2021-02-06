(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{411:function(a,e,t){"use strict";t.r(e);var s=t(25),i=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"插值调用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插值调用"}},[a._v("#")]),a._v(" 插值调用")]),a._v(" "),t("h2",{attrs:{id:"基本用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[a._v("#")]),a._v(" 基本用法")]),a._v(" "),t("p",[a._v("你可以使用 "),t("code",[a._v("$()")]),a._v(" 的高级语法来在回答中插入指令调用的结果：")]),a._v(" "),t("panel-view",{attrs:{title:"聊天记录"}},[t("chat-message",{attrs:{nickname:"Alice",color:"#cc0066"}},[a._v("# 我的回合，抽卡！ $(lottery)")]),a._v(" "),t("chat-message",{attrs:{nickname:"Koishi",avatar:"/koishi.png"}},[a._v("问答已添加，编号为 1201。")]),a._v(" "),t("chat-message",{attrs:{nickname:"Alice",color:"#cc0066"}},[a._v("我的回合，抽卡！")]),a._v(" "),t("chat-message",{attrs:{nickname:"Koishi",avatar:"/koishi.png"}},[a._v("恭喜 Alice 获得了国士无双之药（SR）！"),t("br"),a._v("月之贤者为了测试这瓶药的效果，曾给某只兔子强行灌了一桶。")])],1),a._v(" "),t("p",[a._v("当然你也可以在回答中插入多条指令，它们会逐一完成调用后统一输出：")]),a._v(" "),t("panel-view",{attrs:{title:"聊天记录"}},[t("chat-message",{attrs:{nickname:"Alice",color:"#cc0066"}},[a._v('# 吊死鬼元音开局 "$(hangman)'),t("br"),a._v('$(hangman aeiou)"')]),a._v(" "),t("chat-message",{attrs:{nickname:"Koishi",avatar:"/koishi.png"}},[a._v("问答已添加，编号为 1202。")]),a._v(" "),t("chat-message",{attrs:{nickname:"Alice",color:"#cc0066"}},[a._v("吊死鬼元音开局")]),a._v(" "),t("chat-message",{attrs:{nickname:"Koishi",avatar:"/koishi.png"}},[a._v("游戏开始，要猜的词为 ???????，剩余 10 次机会。"),t("br"),a._v("尝试成功！剩余字母为 ?i?u?e?，已使用的字母为 aeiou，剩余 8 次机会。")])],1),a._v(" "),t("h2",{attrs:{id:"问题重定向"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题重定向"}},[a._v("#")]),a._v(" 问题重定向")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("为了安全性考虑，问题重定向的次数上限为 3 次，超过这个次数将视为触发失败。你可以通过配置 "),t("RouterLink",{attrs:{to:"/plugins/teach/config.html#max-redirections"}},[a._v("maxRedirections")]),a._v(" 修改这个行为。")],1)]),a._v(" "),t("p",[a._v("Koishi 也支持将问题重定向到其他问题。使用 "),t("code",[a._v("# 问题1 => 问题2")]),a._v(" 以进行问题的重定向。来看下面的例子：")]),a._v(" "),t("panel-view",{attrs:{title:"聊天记录"}},[t("chat-message",{attrs:{nickname:"Alice",color:"#cc0066"}},[a._v("# 你可以一天不吃饭 但不能一天不背单词 -p 0.6")]),a._v(" "),t("chat-message",{attrs:{nickname:"Koishi",avatar:"/koishi.png"}},[a._v("问答已添加，编号为 1203。")]),a._v(" "),t("chat-message",{attrs:{nickname:"Alice",color:"#cc0066"}},[a._v("# 人可以一天不吃饭 => 你可以一天不吃饭 -p 0.8")]),a._v(" "),t("chat-message",{attrs:{nickname:"Koishi",avatar:"/koishi.png"}},[a._v("问答已添加，编号为 1204。")])],1),a._v(" "),t("p",[a._v("由于重定向问答是一个独立的问答，因此它也拥有完全独立的上下文、好感度、概率、后继问题等机制。例如当输入“人可以一天不吃饭”时，将以 0.8 的概率重定向为问题“你可以一天不吃饭”，因此会以 0.6×0.8=0.48 的概率触发回答“但不能一天不背单词”。")]),a._v(" "),t("p",[a._v("实际上，"),t("strong",[a._v("重定向到问题也是通过指令来实现的")]),a._v("，它的原理很简单。我们加入了一个叫做 dialogue 的指令，功能是在当前上下文尝试触发一次问答。因此 "),t("code",[a._v("# 问题1 => 问题2")]),a._v(" 会被系统转换为 "),t("code",[a._v('# 问题1 "$(dialogue 问题2)"')]),a._v(" 来处理。")]),a._v(" "),t("h2",{attrs:{id:"递归搜索"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#递归搜索"}},[a._v("#")]),a._v(" 递归搜索")]),a._v(" "),t("p",[a._v("首先让我们看一个简单的例子：")]),a._v(" "),t("panel-view",{attrs:{title:"聊天记录"}},[t("chat-message",{attrs:{nickname:"Alice",color:"#cc0066"}},[a._v("# 我可以做什么 抽卡")]),a._v(" "),t("chat-message",{attrs:{nickname:"Koishi",avatar:"/koishi.png"}},[a._v("问答已添加，编号为 1205。")]),a._v(" "),t("chat-message",{attrs:{nickname:"Alice",color:"#cc0066"}},[a._v("# 我可以做什么 钓鱼")]),a._v(" "),t("chat-message",{attrs:{nickname:"Koishi",avatar:"/koishi.png"}},[a._v("问答已添加，编号为 1206。")]),a._v(" "),t("chat-message",{attrs:{nickname:"Alice",color:"#cc0066"}},[a._v("## 我可以做什么")]),a._v(" "),t("chat-message",{attrs:{nickname:"Koishi",avatar:"/koishi.png"}},[a._v("问题“我可以做什么”的回答如下："),t("br"),a._v("1205. 抽卡"),t("br"),a._v("1206. 钓鱼")])],1),a._v(" "),t("p",[a._v("如果我们对添加一个重定向到上述问题的问答，则此时在搜索结果中将自动展开其重定向的结果：")]),a._v(" "),t("panel-view",{attrs:{title:"聊天记录"}},[t("chat-message",{attrs:{nickname:"Alice",color:"#cc0066"}},[a._v("# 我能做什么 => 我可以做什么")]),a._v(" "),t("chat-message",{attrs:{nickname:"Koishi",avatar:"/koishi.png"}},[a._v("问答已添加，编号为 1207。")]),a._v(" "),t("chat-message",{attrs:{nickname:"Alice",color:"#cc0066"}},[a._v("## 我能做什么")]),a._v(" "),t("chat-message",{attrs:{nickname:"Koishi",avatar:"/koishi.png"}},[a._v("问题“我能做什么”的回答如下："),t("br"),a._v("1207. $(dialogue 我可以做什么)"),t("br"),a._v("= 1205. 抽卡"),t("br"),a._v("= 1206. 钓鱼")])],1),a._v(" "),t("p",[a._v("这是因为调用 "),t("code",[a._v("##")]),a._v(" 进行搜索时程序会自动递归地搜索所有回答的重定向。你也可以使用 "),t("code",[a._v("-R")]),a._v(" 来让 Koishi 不显示上面的重定向结果：")]),a._v(" "),t("panel-view",{attrs:{title:"聊天记录"}},[t("chat-message",{attrs:{nickname:"Alice",color:"#cc0066"}},[a._v("## 我能做什么 -R")]),a._v(" "),t("chat-message",{attrs:{nickname:"Koishi",avatar:"/koishi.png"}},[a._v("问题“我能做什么”的回答如下："),t("br"),a._v("1207. $(dialogue 我可以做什么)")])],1),a._v(" "),t("h2",{attrs:{id:"处理分条消息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#处理分条消息"}},[a._v("#")]),a._v(" 处理分条消息")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),t("p",[a._v("本节将深入讨论问答的消息分条和延时机制，如果仅想了解教学系统的基本用法可以略过。")])]),a._v(" "),t("p",[a._v("Koishi 有着各种各样的指令，它们本身在输出上就具有截然不同的行为。但教学功能提供了一个统一的接口来组织所有的插值调用。因此有必要介绍一下当一个问答再被触发时是如何进行输出的。")]),a._v(" "),t("p",[a._v("首先我们将机器人发送的信息分为三种：")]),a._v(" "),t("ol",[t("li",[a._v("直接发送（适用于可能不在当前会话的情况，如全服广播）")]),a._v(" "),t("li",[a._v("在当前会话发送（绝大部分功能）")]),a._v(" "),t("li",[a._v("在当前会话发送并等待（适用于可能依次发送多条消息的情况，如剧情输出和 dialogue 指令）")])]),a._v(" "),t("p",[a._v("为了表述方便，我们将这三种发送方式分别简记为 sendNative，send 和 sendQueued。我们可以将 send 理解成对 sendNative 的封装，将 sendQueued 理解成对 send 的封装。")]),a._v(" "),t("p",[a._v("为什么需要最后一种方式呢？这是因为在需要分批发送多段文本的情况下，如果同时发送不仅会导致大量刷屏，还可能导致各段落以错误的顺序被接收，造成阅读困难。因此，Koishi 会对每一段文本自行计算出一个“阅读时间”，并在发送该段文本后阻塞当前会话的发送通道。如果期间有其他消息试图通过第三种方式发送，就会强制挂起直到这段时间结束。")]),a._v(" "),t("p",[a._v("在实际的使用中，很少会直接用到 sendNative，因此教学系统完全不会处理 sendNative 发送的信息。但由于大部分功能都是通过 send 发送的，如果不进行妥善处理的话就会发生上面所描述的种种问题。因此，在一个问答被触发的时候，Koishi 会对 send 和 sendQueued 进行代理，通过缓冲来实现更好的输出。")]),a._v(" "),t("p",[a._v("教学问答的输出本身是一个很复杂的过程，但是这里将简化绝大部分细节，只专注于其分条发送的原理。我们已经知道教学问答的 $n 分段转义符可以用于分条发送一段文本，$() 插值转义符可以用于在回答中插入指令调用。现在我们假定回答已经被切分成若干段，每段都是 "),t("strong",[a._v("纯文本/分段/插值")]),a._v(" 这三种中的一种，且不存在连续两段纯文本。")]),a._v(" "),t("p",[a._v("对于纯文本，Koishi 会向缓冲尾端添加文本；对于分段转义符，Koishi 会使用 sendQueued 输出并清空缓冲区；对于插值调用，Koishi 会将修饰过的 send 和 sendQueued 传入指令进行执行。其中，修饰过的 send 功能相当于向缓冲尾端添加文本；修饰过的 sendQueued 相当于向缓冲尾端添加文本，之后使用原版的 sendQueued 输出并清空缓冲区。")]),a._v(" "),t("p",[a._v("举个例子，如果 A 指令的相当于 send(1)，B 指令的效果相当于 sendQueued(2)，那么回答 4$(A)5$n6$(B)7 的效果就相当于分三次输出 415，62 和 7。")])],1)}),[],!1,null,null,null);e.default=i.exports}}]);