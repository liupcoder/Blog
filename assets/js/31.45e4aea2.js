(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{656:function(t,s,n){"use strict";n.r(s);var a=n(3),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"面向对象编程-oop"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#面向对象编程-oop"}},[t._v("#")]),t._v(" 面向对象编程（OOP）")]),t._v(" "),n("blockquote",[n("p",[t._v("OOP（Object Oriented Programming）：面向对象程序设计"),n("br"),t._v("\nPOP（Procedure /prəˈsiːdʒər/ Oriented）：面向过程程序设计")])]),t._v(" "),n("p",[t._v("JS本身就是一门基于面向对象编程的语言")]),t._v(" "),n("ul",[n("li",[t._v("对象：泛指，一切我们需要研究的东西都是对象")]),t._v(" "),n("li",[t._v("类：把这么多东西按照特点进行分组分类（大类和小类）")]),t._v(" "),n("li",[t._v("实例：某一个类别中具体的某个事物")])]),t._v(" "),n("p",[t._v("反推：通过对某一个实例的研究，我们会发现一些实例私有的特征，以及当前类下每一个实例都具备的公共特征")]),t._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n * arr1/arr2都是Array数组类的实例\n *   数组中的每一项内容都是当前实例私有的属性方法\n *   像push/pop等这些方法，都是每一个实例共同具备的公共的属性和方法（Array.prototype）\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr1"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr2"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\narr1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\narr2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br")])]),n("p",[n("strong",[t._v("学完面向对象要掌握的能力：")])]),t._v(" "),n("ol",[n("li",[t._v("掌握面向对象编程的本质（类和实例之间的操作和构建）")]),t._v(" "),n("li",[t._v("以后在学习前端开发的时候，培养自己按照面向对象编程思想去研究和学习的思维")]),t._v(" "),n("li",[t._v("以后在开发的时候（尤其是组件/插件封装），我们应该基于面向对象思想去实现（创建类，并且创建类的不同实例，这样既可以保证每个实例的独立，也可以让实例之间具备共同的属性方法）")])]),t._v(" "),n("p",[t._v("JS本身是基于面向对象编程的，所以JS的底层就是基于类和实例处理的，而且V8引擎默认就给JS这门语言设计了很多内置的类")]),t._v(" "),n("ul",[n("li",[t._v("数据类型的内置类\n"),n("ul",[n("li",[t._v("Number 每一个数字都是它的实例")]),t._v(" "),n("li",[t._v("String")]),t._v(" "),n("li",[t._v("Boolean")]),t._v(" "),n("li",[t._v("Null/Undefined")]),t._v(" "),n("li",[t._v("Symbol/BigInt （特殊：不能被new）")]),t._v(" "),n("li",[t._v("Object 每一个对象都是Object类的实例\n"),n("ul",[n("li",[t._v("Object")]),t._v(" "),n("li",[t._v("Array")]),t._v(" "),n("li",[t._v("RegExp")]),t._v(" "),n("li",[t._v("Date")]),t._v(" "),n("li",[t._v("...")])])]),t._v(" "),n("li",[t._v("Function 每一个函数都是Function类的实例")])])]),t._v(" "),n("li",[t._v("DOM操作的内置类\n"),n("ul",[n("li",[t._v("每一个元素标签都有一个自己所属的类 （例如：HTMLDivElement -> HTMLElement -> Element -> Node -> EventTarget -> Object）")]),t._v(" "),n("li",[t._v("HTMLCollection")]),t._v(" "),n("li",[t._v("NodeList")]),t._v(" "),n("li",[t._v("...")])])]),t._v(" "),n("li",[t._v("...")])]),t._v(" "),n("p",[t._v("**课后任务：**自己回去慢慢的把所有接触的实例都展开看一下，把内置的一些常用方法自己去搞明白，例如：你想学习字符串都有哪些可以操作的方法，只需要在控制台输出String.prototype （学完后你的API层面就无敌了）")])])}),[],!1,null,null,null);s.default=e.exports}}]);