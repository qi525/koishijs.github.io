(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{408:function(t,s,a){"use strict";a.r(s);var e=a(25),c=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"进程控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程控制"}},[t._v("#")]),t._v(" 进程控制")]),t._v(" "),a("h2",{attrs:{id:"退出和重启机器人"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#退出和重启机器人"}},[t._v("#")]),t._v(" 退出和重启机器人")]),t._v(" "),a("p",[t._v("exit 指令可以让你退出或重启机器人进程。我们也为这个指令注册了快捷调用：")]),t._v(" "),a("panel-view",{staticClass:"code",attrs:{title:""}},[a("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[a("code",[a("span",{staticClass:"line"},[a("span",{staticStyle:{color:"#88846F"}},[t._v("# 假设 Koishi 是机器人的 nickname")])]),t._v("\n"),a("span",{staticClass:"line"},[a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("Koishi，关机            ")]),a("span",{staticStyle:{color:"#88846F"}},[t._v("# 退出进程，相当于 exit -c 0")])]),t._v("\n"),a("span",{staticClass:"line"},[a("span",{staticStyle:{color:"#F8F8F2"}},[t._v("Koishi，重启            ")]),a("span",{staticStyle:{color:"#88846F"}},[t._v('# 重启进程，相当于 exit -c "-1"')])])])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("Koishi 的命令行工具使用"),a("strong",[t._v("子进程")]),t._v("来实现对机器人的管理。当子进程退出时，主进程可以通过查看 exit code 来确定退出的原因，并执行相应的操作。")])]),t._v(" "),a("h2",{attrs:{id:"执行命令行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行命令行"}},[t._v("#")]),t._v(" 执行命令行 "),a("Badge",{attrs:{text:"2.0.0+"}})],1),t._v(" "),a("p",[t._v("exec 指令可以让你执行某段命令行：")]),t._v(" "),a("panel-view",{staticClass:"code",attrs:{title:""}},[a("pre",{staticClass:"shiki",staticStyle:{"background-color":"#272822"}},[a("code",[a("span",{staticClass:"line"},[a("span",{staticStyle:{color:"#66D9EF"}},[t._v("exec")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" ")]),a("span",{staticStyle:{color:"#66D9EF"}},[t._v("echo")]),a("span",{staticStyle:{color:"#F8F8F2"}},[t._v(" foo           ")]),a("span",{staticStyle:{color:"#88846F"}},[t._v("# 通过执行命令行输出 foo")])])])])]),a("h2",{attrs:{id:"在线更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在线更新"}},[t._v("#")]),t._v(" 在线更新")]),t._v(" "),a("p",[t._v("结合上述两个指令，我们就可以实现机器人的在线更新了。")])],1)}),[],!1,null,null,null);s.default=c.exports}}]);