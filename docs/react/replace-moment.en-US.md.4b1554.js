(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{1646:function(e,a){e.exports={content:["article",["h2","How to use DatePicker with customize date library like dayjs？"],["p","Consider of bundle size, you can replace momentjs with customize date library. We provide two ways to customize date library:"],["h3","Custom component"],["p","The first way is use ",["code","generatePicker"]," (or ",["code","generateCalendar"],") helps to create Picker components."],["p","First, we initialize an antd demo of ",["code","create-react-app"],". You can refer to ",["a",{title:null,href:"/docs/react/use-in-typescript"},"Use in TypeScript"],", or you can start directly here ",["a",{title:null,href:"https://github.com/xiaohuoni/antd4-generate-picker/commit/47fec964e36d48bd15760f8f5abcb9655c259aa6"},"init antd"]],["h4","DatePicker.tsx"],["p","Create ",["code","src/components/DatePicker.tsx"],"."],["p","For example:"],["pre",{lang:"tsx",highlighted:'import { Dayjs } from <span class="token string">\'dayjs\'</span><span class="token comment" spellcheck="true">;</span>\nimport dayjsGenerateConfig from <span class="token string">\'rc-picker/lib/generate/dayjs\'</span><span class="token comment" spellcheck="true">;</span>\nimport generatePicker from <span class="token string">\'@italki/ui/es/date-picker/generatePicker\'</span><span class="token comment" spellcheck="true">;</span>\nimport <span class="token string">\'@italki/ui/es/date-picker/style/index\'</span><span class="token comment" spellcheck="true">;</span>\n\n<span class="token keyword">const</span> DatePicker <span class="token operator">=</span> generatePicker<span class="token operator">&lt;</span>Dayjs<span class="token operator">></span><span class="token punctuation">(</span>dayjsGenerateConfig<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\nexport <span class="token keyword">default</span> DatePicker<span class="token comment" spellcheck="true">;</span>'},["code","import { Dayjs } from 'dayjs';\nimport dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';\nimport generatePicker from '@italki/ui/es/date-picker/generatePicker';\nimport '@italki/ui/es/date-picker/style/index';\n\nconst DatePicker = generatePicker<Dayjs>(dayjsGenerateConfig);\n\nexport default DatePicker;"]],["h4","TimePicker.tsx"],["p","Create ",["code","src/components/TimePicker.tsx"],"."],["p","For example:"],["pre",{lang:"tsx",highlighted:'import { Dayjs } from <span class="token string">\'dayjs\'</span><span class="token comment" spellcheck="true">;</span>\nimport <span class="token operator">*</span> as React from <span class="token string">\'react\'</span><span class="token comment" spellcheck="true">;</span>\nimport DatePicker from <span class="token string">\'./DatePicker\'</span><span class="token comment" spellcheck="true">;</span>\nimport { PickerTimeProps } from <span class="token string">\'@italki/ui/es/date-picker/generatePicker\'</span><span class="token comment" spellcheck="true">;</span>\nimport { Omit } from <span class="token string">\'@italki/ui/es/_util/type\'</span><span class="token comment" spellcheck="true">;</span>\n\nexport interface TimePickerProps extends Omit<span class="token operator">&lt;</span>PickerTimeProps<span class="token operator">&lt;</span>Dayjs<span class="token operator">></span><span class="token punctuation">,</span> <span class="token string">\'picker\'</span><span class="token operator">></span> {}\n\n<span class="token keyword">const</span> TimePicker <span class="token operator">=</span> React<span class="token punctuation">.</span>forwardRef<span class="token operator">&lt;</span>any<span class="token punctuation">,</span> TimePickerProps<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> ref<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {\n  return <span class="token operator">&lt;</span>DatePicker {<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>props} picker<span class="token operator">=</span><span class="token string">"time"</span> mode<span class="token operator">=</span>{undefined} ref<span class="token operator">=</span>{ref} <span class="token operator">/</span><span class="token operator">></span><span class="token comment" spellcheck="true">;</span>\n}<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\nTimePicker<span class="token punctuation">.</span>displayName <span class="token operator">=</span> <span class="token string">\'TimePicker\'</span><span class="token comment" spellcheck="true">;</span>\n\nexport <span class="token keyword">default</span> TimePicker<span class="token comment" spellcheck="true">;</span>'},["code","import { Dayjs } from 'dayjs';\nimport * as React from 'react';\nimport DatePicker from './DatePicker';\nimport { PickerTimeProps } from '@italki/ui/es/date-picker/generatePicker';\nimport { Omit } from '@italki/ui/es/_util/type';\n\nexport interface TimePickerProps extends Omit<PickerTimeProps<Dayjs>, 'picker'> {}\n\nconst TimePicker = React.forwardRef<any, TimePickerProps>((props, ref) => {\n  return <DatePicker {...props} picker=\"time\" mode={undefined} ref={ref} />;\n});\n\nTimePicker.displayName = 'TimePicker';\n\nexport default TimePicker;"]],["h4","Calendar.tsx"],["p","Create ",["code","src/components/Calendar.tsx"],"."],["p","For example:"],["pre",{lang:"tsx",highlighted:'import { Dayjs } from <span class="token string">\'dayjs\'</span><span class="token comment" spellcheck="true">;</span>\nimport dayjsGenerateConfig from <span class="token string">\'rc-picker/lib/generate/dayjs\'</span><span class="token comment" spellcheck="true">;</span>\nimport generateCalendar from <span class="token string">\'@italki/ui/es/calendar/generateCalendar\'</span><span class="token comment" spellcheck="true">;</span>\nimport <span class="token string">\'@italki/ui/es/calendar/style\'</span><span class="token comment" spellcheck="true">;</span>\n\n<span class="token keyword">const</span> Calendar <span class="token operator">=</span> generateCalendar<span class="token operator">&lt;</span>Dayjs<span class="token operator">></span><span class="token punctuation">(</span>dayjsGenerateConfig<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\nexport <span class="token keyword">default</span> Calendar<span class="token comment" spellcheck="true">;</span>'},["code","import { Dayjs } from 'dayjs';\nimport dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';\nimport generateCalendar from '@italki/ui/es/calendar/generateCalendar';\nimport '@italki/ui/es/calendar/style';\n\nconst Calendar = generateCalendar<Dayjs>(dayjsGenerateConfig);\n\nexport default Calendar;"]],["h4","Export Custom component"],["p","Create ",["code","src/components/index.tsx"],"."],["p","For example:"],["pre",{lang:"tsx",highlighted:'export { <span class="token keyword">default</span> as DatePicker } from <span class="token string">\'./DatePicker\'</span><span class="token comment" spellcheck="true">;</span>\nexport { <span class="token keyword">default</span> as Calendar } from <span class="token string">\'./Calendar\'</span><span class="token comment" spellcheck="true">;</span>\nexport { <span class="token keyword">default</span> as TimePicker } from <span class="token string">\'./TimePicker\'</span><span class="token comment" spellcheck="true">;</span>'},["code","export { default as DatePicker } from './DatePicker';\nexport { default as Calendar } from './Calendar';\nexport { default as TimePicker } from './TimePicker';"]],["h4","Use Custom component"],["p","Modify ",["code","src/App.tsx"],",import ",["code","dayjs"]," and custom component."],["pre",{lang:"diff",highlighted:"<span class=\"token deleted\">- import { DatePicker, Calendar } from '@italki/ui';</span>\n<span class=\"token deleted\">- import format from 'moment';</span>\n\n<span class=\"token inserted\">+ import { DatePicker, TimePicker, Calendar } from './components';</span>\n<span class=\"token inserted\">+ import format from 'dayjs';</span>"},["code","- import { DatePicker, Calendar } from '@italki/ui';\n- import format from 'moment';\n\n+ import { DatePicker, TimePicker, Calendar } from './components';\n+ import format from 'dayjs';"]],["p","If the above steps do not work correctly, you can refer ",["a",{title:null,href:"https://github.com/xiaohuoni/antd4-generate-picker/tree/master/antd-ts"},"antd4-generate-picker/antd-ts"],"."],["p","If you need JavaScript code, you can refer ",["a",{title:null,href:"https://github.com/xiaohuoni/antd4-generate-picker/tree/master/antd-demo"},"antd4-generate-picker/antd-demo"],"."],["p","If you are the user of ",["a",{title:null,href:"https://umijs.org/"},"umi"],", you can ref ",["a",{title:null,href:"https://github.com/xiaohuoni/antd4-use-dayjs-replace-moment"},"antd4-use-dayjs-replace-moment"],"."],["h3","Webpack plugin"],["p","We also provide another implementation. We provide ",["code","antd-dayjs-webpack-plugin"]," plugin to replace ",["code","momentjs"]," to ",["code","Day.js"]," directly without changing a line of existing code. More info at ",["a",{title:null,href:"https://github.com/ant-design/antd-dayjs-webpack-plugin"},"antd-dayjs-webpack-plugin"],"."]],meta:{order:7.1,title:"Replace Moment.js",filename:"docs/react/replace-moment.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#How-to-use-DatePicker-with-customize-date-library-like-dayjs？",title:"How to use DatePicker with customize date library like dayjs？"},"How to use DatePicker with customize date library like dayjs？"]]]}}}]);