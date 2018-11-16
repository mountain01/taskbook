(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){"use strict";var n=a(18),s=a.n(n),r=a(28),i=a.n(r),c=a(0),o=a.n(c),l=a(2),d=a.n(l),u=a(132),f=a(4),k=a.n(f),m=a(187),p="ARCHIVE_TASK",j="PIN_TASK";function T(e){return function(t,a){return k()({},t,{tasks:t.tasks.map(function(t){return t.id===a.id?k()({},t,{state:e}):t})})}}Object(m.createStore)(function(e,t){switch(t.type){case p:return T("TASK_ARCHIVED")(e,t);case j:return T("TASK_PINNED")(e,t);default:return e}},{tasks:[{id:"1",title:"Something",state:"TASK_INBOX"},{id:"2",title:"Something more",state:"TASK_INBOX"},{id:"3",title:"Something else",state:"TASK_INBOX"},{id:"4",title:"Something again",state:"TASK_INBOX"}]});var h=a(82);function E(e){var t=e.loading,a=e.tasks,n={onPinTask:e.onPinTask,onArchiveTask:e.onArchiveTask},r=o.a.createElement("div",{className:"loading-item"},o.a.createElement("span",{className:"glow-checkbox"}),o.a.createElement("span",{className:"glow-text"},o.a.createElement("span",null,"Loading")," ",o.a.createElement("span",null,"cool")," ",o.a.createElement("span",null,"state")));if(t)return o.a.createElement("div",{className:"list-items"},r,r,r,r,r,r);if(0===a.length)return o.a.createElement("div",{className:"list-items"},o.a.createElement("div",{className:"wrapper-message"},o.a.createElement("span",{className:"icon-check"}),o.a.createElement("div",{className:"title-message"},"You have no tasks"),o.a.createElement("div",{className:"subtitle-message"},"Sit back and relax")));var c=i()(a.filter(function(e){return"TASK_PINNED"===e.state})).concat(i()(a.filter(function(e){return"TASK_PINNED"!==e.state})));return o.a.createElement("div",{className:"list-items"},c.map(function(e){return o.a.createElement(h.a,s()({key:e.id,task:e},n))}))}a.d(t,"a",function(){return E}),E.propTypes={loading:d.a.bool,tasks:d.a.arrayOf(h.a.propTypes.task).isRequired,onPinTask:d.a.func.isRequired,onArchiveTask:d.a.func.isRequired},E.defaultProps={loading:!1};t.b=Object(u.b)(function(e){return{tasks:e.tasks.filter(function(e){return"TASK_INBOX"===e.state||"TASK_PINNED"===e.state})}},function(e){return{onArchiveTask:function(t){return e(function(e){return{type:p,id:e}}(t))},onPinTask:function(t){return e(function(e){return{type:j,id:e}}(t))}}})(E);E.__docgenInfo={description:"",methods:[],displayName:"PureTaskList",props:{loading:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},tasks:{type:{name:"arrayOf",value:{name:"custom",raw:"Task.propTypes.task"}},required:!0,description:""},onPinTask:{type:{name:"func"},required:!0,description:""},onArchiveTask:{type:{name:"func"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TaskList.js"]={name:"PureTaskList",docgenInfo:E.__docgenInfo,path:"src/components/TaskList.js"})},448:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"defaultTasks",function(){return m}),a.d(t,"withPinnedTasks",function(){return p});var n=a(18),s=a.n(n),r=a(28),i=a.n(r),c=a(4),o=a.n(c),l=a(0),d=a.n(l),u=a(80),f=a(111),k=a(54),m=[o()({},k.task,{id:"1",title:"Task 1"}),o()({},k.task,{id:"2",title:"Task 2"}),o()({},k.task,{id:"3",title:"Task 3"}),o()({},k.task,{id:"4",title:"Task 4"}),o()({},k.task,{id:"5",title:"Task 5"})],p=i()(m.slice(0)).concat([{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}]);Object(u.storiesOf)("TaskList",e).addDecorator(function(e){return d.a.createElement("div",{style:{padding:"3rem"}},e())}).add("default",function(){return d.a.createElement(f.a,s()({tasks:m},k.actions))}).add("loading",function(){return d.a.createElement(f.a,s()({loading:!0,tasks:[]},k.actions))}).add("empty",function(){return d.a.createElement(f.a,s()({tasks:[]},k.actions))}).add("withPinnedTasks",function(){return d.a.createElement(f.a,s()({tasks:p},k.actions))})}.call(this,a(156)(e))},450:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(0),s=a.n(n),r=a(2),i=a.n(r),c=a(132),o=a(111);function l(e){return e.error?s.a.createElement("div",{className:"page lists-show"},s.a.createElement("div",{className:"wrapper-message"},s.a.createElement("span",{className:"icon-face-sad"}),s.a.createElement("div",{className:"title-message"},"Oh no!"),s.a.createElement("div",{className:"subtitle-message"},"Something went wrong"))):s.a.createElement("div",{className:"page lists-show"},s.a.createElement("nav",null,s.a.createElement("h1",{className:"title-page"},s.a.createElement("span",{className:"title-wrapper"},"Taskbox"))),s.a.createElement(o.b,null))}l.propTypes={error:i.a.string},l.defaultProps={error:null};Object(c.b)(function(e){return{error:e.error}})(l);l.__docgenInfo={description:"",methods:[],displayName:"PureInboxScreen",props:{error:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InboxScreen.js"]={name:"PureInboxScreen",docgenInfo:l.__docgenInfo,path:"src/components/InboxScreen.js"})},535:function(e,t,a){a(208),a(536),e.exports=a(537)},537:function(e,t,a){"use strict";a.r(t),function(e){var t=a(80),n=(a(549),a(550));Object(t.configure)(function(){n.keys().forEach(function(e){return n(e)})},e)}.call(this,a(156)(e))},54:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"task",function(){return k}),a.d(t,"actions",function(){return m});var n=a(18),s=a.n(n),r=a(4),i=a.n(r),c=a(0),o=a.n(c),l=a(80),d=a(79),u=a(451),f=a(82),k={id:"1",title:"Test Task",state:"TASK_INBOX",updatedAt:new Date(2018,0,1,11,0)},m={onPinTask:Object(d.action)("onPinTask"),onArchiveTask:Object(d.action)("onArchiveTask")};Object(l.storiesOf)("Task",e).addDecorator(function(e){return o.a.createElement("div",{style:{padding:"3rem"}},e())}).addDecorator(u.withKnobs).add("default",function(){return o.a.createElement(f.a,s()({task:Object(u.object)("task",i()({},k))},m))}).add("pinned",function(){return o.a.createElement(f.a,s()({task:i()({},k,{state:"TASK_PINNED"})},m))}).add("long title",function(){return o.a.createElement(f.a,s()({task:i()({},k,{title:"I have a chajlksdjflwekjflaskjdfweoijasdlfkjI have a chajlksdjflwekjflaskjdfweoijasdlfkjI have a chajlksdjflwekjflaskjdfweoijasdlfkjI have a chajlksdjflwekjflaskjdfweoijasdlfkjI have a chajlksdjflwekjflaskjdfweoijasdlfkjI have a chajlksdjflwekjflaskjdfweoijasdlfkjI have a chajlksdjflwekjflaskjdfweoijasdlfkjI have a chajlksdjflwekjflaskjdfweoijasdlfkjI have a chajlksdjflwekjflaskjdfweoijasdlfkjI have a chajlksdjflwekjflaskjdfweoijasdlfkjI have a chajlksdjflwekjflaskjdfweoijasdlfkjI have a chajlksdjflwekjflaskjdfweoijasdlfkj"})},m))}).add("archived",function(){return o.a.createElement(f.a,s()({task:i()({},k,{state:"TASK_ARCHIVED"})},m))})}.call(this,a(156)(e))},549:function(e,t,a){},550:function(e,t,a){var n={"./components/InboxScreen.stories.js":551,"./components/Task.stories.js":54,"./components/TaskList.stories.js":448};function s(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id=550},551:function(e,t,a){"use strict";a.r(t),function(e){var t=a(0),n=a.n(t),s=a(80),r=a(79),i=a(132),c=a(450),o=a(448),l={getState:function(){return{tasks:o.defaultTasks}},subscribe:function(){return 0},dispatch:Object(r.action)("dispatch")};Object(s.storiesOf)("InboxScreen",e).addDecorator(function(e){return n.a.createElement("div",{style:{padding:"3rem"}},e())}).addDecorator(function(e){return n.a.createElement(i.a,{store:l},e())}).add("default",function(){return n.a.createElement(c.a,null)}).add("error",function(){return n.a.createElement(c.a,{error:"something"})})}.call(this,a(156)(e))},82:function(e,t,a){"use strict";var n=a(0),s=a.n(n),r=a(2),i=a.n(r);function c(e){var t=e.task,a=t.id,n=t.title,r=t.state,i=e.onArchiveTask,c=e.onPinTask;return s.a.createElement("div",{className:"list-item ".concat(r)},s.a.createElement("label",{className:"checkbox"},s.a.createElement("input",{type:"checkbox",defaultChecked:"TASK_ARCHIVED"===r,disabled:!0,name:"checked"}),s.a.createElement("span",{className:"checkbox-custom",onClick:function(){return i(a)}})),s.a.createElement("div",{className:"title"},s.a.createElement("input",{type:"text",value:n,readOnly:!0,placeholder:"Input title",style:{"text-overflow":"ellipsis"}})),s.a.createElement("div",{className:"actions",onClick:function(e){return e.stopPropagation()}},"TASK_ARCHIVED"!==r&&s.a.createElement("a",{onClick:function(){return c(a)}},s.a.createElement("span",{className:"icon-star"}))))}c.propTypes={task:i.a.shape({id:i.a.string.isRequired,state:i.a.string.isRequired,title:i.a.string.isRequired}),onArchiveTask:i.a.func,onPinTask:i.a.func},t.a=c,c.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{type:{name:"shape",value:{id:{name:"string",required:!0},state:{name:"string",required:!0},title:{name:"string",required:!0}}},required:!1,description:""},onArchiveTask:{type:{name:"func"},required:!1,description:""},onPinTask:{type:{name:"func"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Task.js"]={name:"Task",docgenInfo:c.__docgenInfo,path:"src/components/Task.js"})}},[[535,2,4]]]);
//# sourceMappingURL=iframe.49a7feb38406a75cb6be.bundle.js.map