webpackJsonp([1],{"09VF":function(s,t){},"7zck":function(s,t){},NHnr:function(s,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=n("7+uW"),a=n("3EgV"),o=n.n(a),l=(n("7zck"),n("JRyu")),p={name:"App",components:{VueJsonToCsv:n.n(l).a},data:function(){return{samples:{sample1:[{name:"Joe",surname:"Roe"},{name:"John",surname:"Doe"}]},standalone:'&lt;script src="vue.min.js">&lt;/script>\n  &lt;script src="dist/vue-json-to-csv.min.js">&lt;/script>\n  &lt;script type="text/javascript">\n    Vue.use(VueJsonToCsv);\n &lt;/script>',example1:"<span>&lt;vue-json-to-csv <br>\n        &nbsp;&nbsp;&nbsp;&nbsp;:json-data=\"[\n          { name: 'Joe', surname: 'Roe' },\n          { name: 'John', surname: 'Doe' }\n        ]\"<br>\n      &lt;/vue-json-to-csv></span>",example2:"<span>&lt;vue-json-to-csv <br/>\n        &nbsp;&nbsp;&nbsp;&nbsp;:json-data=\"[\n          { name: 'Joe', surname: 'Roe' },\n          { name: 'John', surname: 'Doe' } <br/>\n        &nbsp;&nbsp;&nbsp;&nbsp;:labels=\"{\n            name:{ title: 'First name' }\n          }\" <br>\n        &nbsp;&nbsp;&nbsp;&nbsp;&lt;button class=\"teal button__custom\"> <br/>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;b>Download with only selected labels&lt;/b> <br/>\n        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/button> <br/>\n      &lt;/vue-json-to-csv></span>",example3:"<span>&lt;vue-json-to-csv <br/>\n        &nbsp;&nbsp;&nbsp;&nbsp;:json-data=\"[\n          { name: 'Joe', surname: 'Roe' },\n          { name: 'John', surname: 'Doe' } <br/>\n        &nbsp;&nbsp;&nbsp;&nbsp;:csv-title=\"'My csv title'\" <br>\n        &nbsp;&nbsp;&nbsp;&nbsp;&lt;button class=\"teal button__custom\"> <br/>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;b>Download with custom title&lt;/b> <br/>\n        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/button> <br/>\n      &lt;/vue-json-to-csv></span>",example4:"<span>&lt;vue-json-to-csv <br/>\n        &nbsp;&nbsp;&nbsp;&nbsp;:json-data=\"[\n          { name: 'Joe', surname: 'Roe' },\n          { name: 'John', surname: 'Doe' } <br/>\n        &nbsp;&nbsp;&nbsp;&nbsp;:show-labels=\"false\" <br>\n        &nbsp;&nbsp;&nbsp;&nbsp;&lt;button class=\"teal button__custom\"> <br/>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;b>Download without labels&lt;/b> <br/>\n        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/button> <br/>\n      &lt;/vue-json-to-csv></span>",example5:"<span>&lt;vue-json-to-csv <br/>\n        &nbsp;&nbsp;&nbsp;&nbsp;:json-data=\"[\n          { name: 'John', surname: 'Doe', age: 20, salary: 20.000, hours: 37.4 },\n          { name: 'John', surname: 'Roe', age: 40, salary: 40.000, hours: 35.2 },\n          { name: 'Jane', surname: 'Woe', age: 50, salary: 52.000, hours: 30.4 }\n        ]\"<br>\n        &nbsp;&nbsp;&nbsp;&nbsp;:labels=\"{\n          name: { title: 'First name' },\n          salary: { title: 'Annual salary' },\n          hours: { title: 'Hours/week' }\n        }\" <br/>\n        &nbsp;&nbsp;&nbsp;&nbsp;:csv-title=\"'My_Custom_CSV'\" <br/>\n        &nbsp;&nbsp;&nbsp;&nbsp;@success=\"val => handleSuccess(val)\" <br/>\n        &nbsp;&nbsp;&nbsp;&nbsp;@error=\"val => handleError(val)\"> <br/>\n        &nbsp;&nbsp;&nbsp;&nbsp;&lt;button class=\"teal button__custom\"> <br/>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &lt;b>My custom button&lt;/b> <br/>\n        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/button> <br/>\n      &lt;/vue-json-to-csv></span>"}},methods:{handleSuccess:function(s){console.log(s)},handleError:function(s){console.log(s)}}},b={render:function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("v-app",{attrs:{id:"app"}},[n("v-toolbar",{staticClass:"teal white--text",attrs:{app:""}},[n("v-toolbar-title",[n("span",{staticClass:"white--text"},[s._v("{"),n("i",{staticClass:"fas fa-table white--text",staticStyle:{"font-size":"16px"}}),s._v("}\n      ")]),s._v("\n      vue-json-to-csv\n    ")]),s._v(" "),n("v-spacer"),s._v(" "),n("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[n("v-btn",{attrs:{flat:"",href:"https://github.com/angeliquekom/vue-json-to-csv#readme"}},[n("i",{staticClass:"fab fa-github white--text",staticStyle:{"font-size":"25px"}})])],1)],1),s._v(" "),n("v-layout",{staticClass:"text-xs-left pa-3",attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"pb-2",attrs:{xs12:""}},[n("div",[n("span",{staticStyle:{"font-size":"24px","border-bottom":"1px solid #2c3e50"}},[s._v("\n          vue-json-to-csv\n        ")])]),s._v(" "),n("div",{staticClass:"font-weight--300",staticStyle:{"font-size":"22px"}},[s._v("\n        A Vue.js 2 component for transform and download a json in csv format (v1.0.5)\n      ")])]),s._v(" "),n("v-flex",{staticClass:"pb-2",attrs:{xs12:""}},[n("div",{staticClass:"title"},[s._v("Getting started")])]),s._v(" "),n("v-flex",{staticClass:"pb-2",attrs:{xs12:""}},[n("pre",[n("code",[s._v("npm install --save vue-json-to-csv")])]),s._v("\n      or use "),n("pre",[n("code",[s._v("dist/vue-json-to-csv.min.js")])])]),s._v(" "),n("v-flex",{staticClass:"pb-2 pt-2",attrs:{xs12:""}},[n("div",{staticClass:"title"},[s._v("Usage")])]),s._v(" "),n("v-flex",{staticClass:"pb-2",attrs:{xs12:""}},[n("span",[s._v("For vue-cli user:")]),n("br"),s._v(" "),n("pre",[n("code",[s._v("import VueJsonToCsv from 'vue-json-to-csv'")])])]),s._v(" "),n("v-flex",{staticClass:"pb-2",attrs:{xs12:""}},[n("span",[s._v("For standalone use:")]),n("br"),s._v(" "),n("pre",[n("code",[s._v('<script src="vue.min.js"><\/script>\n <script src="dist/vue-json-to-csv.min.js"><\/script>\n <script type="text/javascript">\n   Vue.use(VueJsonToCsv);\n <\/script>')])])]),s._v(" "),n("v-flex",{staticClass:"pb-2 pt-2",attrs:{xs12:""}},[n("div",{staticClass:"title"},[s._v("Examples")])]),s._v(" "),n("v-flex",{attrs:{xs12:""}},[n("div",{staticClass:"headline blue-grey darken-3 font-weight--300"},[s._v("Simple example")]),s._v(" "),n("div",{staticClass:"example__code mb-2",domProps:{innerHTML:s._s(s.example1)}}),s._v(" "),n("span",{staticClass:"subheading"},[s._v("Result")]),s._v(" "),n("div",[n("vue-json-to-csv",{attrs:{"json-data":[{name:"Joe",surname:"Roe"},{name:"John",surname:"Doe"}]}})],1)]),s._v(" "),n("v-flex",{staticClass:"pt-4",attrs:{xs12:""}},[n("div",{staticClass:"headline blue-grey darken-3 font-weight--300"},[s._v("\n        Selected labels example\n      ")]),s._v(" "),n("div",{staticClass:"caption"},[s._v("\n        Returns a csv including only the name key values with the configured title\n      ")]),s._v(" "),n("div",{staticClass:"example__code mb-2",domProps:{innerHTML:s._s(s.example2)}}),s._v(" "),n("span",{staticClass:"subheading"},[s._v("Result")]),s._v(" "),n("div",[n("vue-json-to-csv",{attrs:{"json-data":[{name:"Joe",surname:"Roe"},{name:"John",surname:"Doe"}],labels:{name:{title:"First name"}}}},[n("button",{staticClass:"teal button__custom"},[n("b",[s._v("Download with only selected labels")])])])],1)]),s._v(" "),n("v-flex",{staticClass:"pt-4",attrs:{xs12:""}},[n("div",{staticClass:"headline blue-grey darken-3 font-weight--300"},[s._v("\n        Selected csv title example\n      ")]),s._v(" "),n("div",{staticClass:"caption"},[s._v("\n        Returns a csv with title according to the csv-title prop\n      ")]),s._v(" "),n("div",{staticClass:"example__code mb-2",domProps:{innerHTML:s._s(s.example3)}}),s._v(" "),n("span",{staticClass:"subheading"},[s._v("Result")]),s._v(" "),n("div",[n("vue-json-to-csv",{attrs:{"json-data":s.samples.sample1,"csv-title":"My csv title"}},[n("button",{staticClass:"teal button__custom"},[n("b",[s._v("Download with custom title")])])])],1)]),s._v(" "),n("v-flex",{staticClass:"pt-4",attrs:{xs12:""}},[n("div",{staticClass:"headline blue-grey darken-3 font-weight--300"},[s._v("\n        Selected csv without labels example\n      ")]),s._v(" "),n("div",{staticClass:"caption"},[s._v("Returns a csv without displaying the labels")]),s._v(" "),n("div",{staticClass:"example__code mb-2",domProps:{innerHTML:s._s(s.example4)}}),s._v(" "),n("span",{staticClass:"subheading"},[s._v("Result")]),s._v(" "),n("div",[n("vue-json-to-csv",{attrs:{"json-data":[{name:"Joe",surname:"Roe"},{name:"John",surname:"Doe"}],"show-labels":!1}},[n("button",{staticClass:"teal button__custom"},[n("b",[s._v("Download without labels")])])])],1)]),s._v(" "),n("v-flex",{staticClass:"pt-4",attrs:{xs12:""}},[n("div",{staticClass:"headline blue-grey darken-3 font-weight--300"},[s._v("Advanced example")]),s._v(" "),n("div",{staticClass:"example__code mb-2",domProps:{innerHTML:s._s(s.example5)}}),s._v(" "),n("span",{staticClass:"subheading"},[s._v("Result")]),s._v(" "),n("div",[n("vue-json-to-csv",{attrs:{"json-data":[{name:"John",surname:"Doe",age:20,salary:20,hours:37.4},{name:"John",surname:"Roe",age:40,salary:40,hours:35.2},{name:"Jane",surname:"Woe",age:50,salary:52,hours:30.4}],labels:{name:{title:"First name"},salary:{title:"Annual salary"},hours:{title:"Hours/week"}},"csv-title":"My_Custom_CSV"},on:{success:function(t){return s.handleSuccess(t)},error:function(t){return s.handleError(t)}}},[n("button",{staticClass:"teal button__custom"},[n("b",[s._v("Download my advanced example")])])])],1)])],1)],1)},staticRenderFns:[]};var r=n("VU/8")(p,b,!1,function(s){n("09VF")},null,null).exports;e.default.use(o.a),e.default.config.productionTip=!1,new e.default({el:"#app",components:{App:r},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.b0cee5917302987f7ee4.js.map