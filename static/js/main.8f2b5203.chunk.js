(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),a=n(3),s=n(4),r=n(7),i=n(6),u=n(0),l=function(t){var e=t.good,n=t.neutral,c=t.bad,o=t.total,a=t.positivePercentage;return Object(u.jsxs)("div",{className:"statistics",children:[Object(u.jsxs)("p",{children:["Good: ",e]}),Object(u.jsxs)("p",{children:["Neutral: ",n]}),Object(u.jsxs)("p",{children:["Bad: ",c]}),Object(u.jsxs)("p",{children:["Total: ",o]}),Object(u.jsxs)("p",{children:["Positive feedback: ",a,"%"]})]})},d=(n(10),function(t){var e=t.onIncrementGood,n=t.onIncrementNeutral,c=t.onIncrementBad;return Object(u.jsxs)("div",{className:"Feedback__controls",children:[Object(u.jsx)("button",{className:"btn-item",type:"button",onClick:e,children:"Good"}),Object(u.jsx)("button",{className:"btn-item",type:"button",onClick:n,children:"Neutral"}),Object(u.jsx)("button",{className:"btn-item",type:"button",onClick:c,children:"Bad"})]})}),b=function(t){return Object(u.jsxs)("section",{children:[Object(u.jsx)("h2",{children:t.title}),t.children]})},j=function(t){var e=t.message;return Object(u.jsx)("p",{children:e})},h=(n(11),function(t){Object(r.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),s=0;s<c;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).state={good:0,neutral:0,bad:0,total:0,positive:0},t.countIncrementGood=function(){t.setState((function(t){return{good:t.good+1}})),t.countTotalFeedback(),t.countPositiveFeedbackPercentage()},t.countIncrementNeutral=function(){t.setState((function(t){return{neutral:t.neutral+1}})),t.countTotalFeedback(),t.countPositiveFeedbackPercentage()},t.countIncrementBad=function(){t.setState((function(t){return{bad:t.bad+1}})),t.countTotalFeedback(),t.countPositiveFeedbackPercentage()},t.countTotalFeedback=function(){t.setState((function(t){return{total:t.total+1}}))},t.countPositiveFeedbackPercentage=function(){t.setState((function(t){return{positive:Math.round(t.good/t.total*100)}}))},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"feedback",children:[Object(u.jsx)(b,{title:"Please leave feedback",children:Object(u.jsx)(d,{onIncrementGood:this.countIncrementGood,onIncrementNeutral:this.countIncrementNeutral,onIncrementBad:this.countIncrementBad})}),Object(u.jsx)(b,{title:"Statistics",children:this.state.total?Object(u.jsx)(l,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.state.total,positivePercentage:this.state.positive}):null}),this.state.total?null:Object(u.jsx)(j,{message:"No feedback given"})]})}}]),n}(o.a.Component)),f=function(){return Object(u.jsx)(h,{})},m=n(5);n.n(m).a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.8f2b5203.chunk.js.map