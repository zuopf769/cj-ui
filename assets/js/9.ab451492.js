(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{281:function(t,e,n){},282:function(t,e,n){},283:function(t,e,n){},299:function(t,e,n){"use strict";var i=n(281);n.n(i).a},300:function(t,e,n){"use strict";var i=n(282);n.n(i).a},301:function(t,e,n){"use strict";var i=n(283);n.n(i).a},305:function(t,e,n){"use strict";n(80),n(79),n(81);var i={name:"c-layout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach((function(e){"c-sider"===e.$options.name&&(t.layoutClass.hasSider=!0)}))}},s=(n(299),n(34)),a=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"644070e6",null);e.a=a.exports},306:function(t,e,n){"use strict";var i={},s=n(34),a=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)}),[],!1,null,"97e8107a",null);e.a=a.exports},307:function(t,e,n){"use strict";var i={name:"c-sider",data:function(){return{visible:!0}},methods:{hideSide:function(){this.visible=!this.visible}}},s=(n(300),n(34)),a=Object(s.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"fade"}},[this.visible?e("div",{staticClass:"sider"},[this._t("default"),this._v(" "),e("button",{on:{click:this.hideSide}},[this._v("close")])],2):this._e()])}),[],!1,null,"0e996f6a",null);e.a=a.exports},308:function(t,e,n){"use strict";var i={},s=(n(301),n(34)),a=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default")],2)}),[],!1,null,"4e575c2d",null);e.a=a.exports},309:function(t,e,n){"use strict";var i={},s=n(34),a=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)}),[],!1,null,"2f53eefa",null);e.a=a.exports},394:function(t,e,n){"use strict";n.r(e);var i=n(305),s=n(306),a=n(307),c=n(308),r=n(309),u={components:{"c-layout":i.a,"c-header":s.a,"c-sider":a.a,"c-content":c.a,"c-footer":r.a}},l=n(34),o=Object(l.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("c-layout",[e("c-sider",{staticStyle:{width:"100px",background:"#589ee3"}},[this._v("\n        sider\n      ")]),this._v(" "),e("c-layout",[e("c-header",{staticStyle:{height:"64px",background:"#8bbae6"}},[this._v("\n          header\n        ")]),this._v(" "),e("c-content",{staticStyle:{height:"100px",background:"#418ce2"}},[this._v("\n          content\n        ")]),this._v(" "),e("c-footer",{staticStyle:{height:"64px",background:"#8bbae6"}},[this._v("\n          footer\n        ")])],1)],1)],1)}),[],!1,null,null,null);e.default=o.exports}}]);