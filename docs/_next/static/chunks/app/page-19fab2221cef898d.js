(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1003:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(5155),s=r(2115),n=r(2596);let l=s.forwardRef((e,t)=>{let r,{type:s="p",children:l,className:o,...i}=e;switch(s){case"p":case"short-p":default:r="p";break;case"small":r="small"}let d=(0,n.A)(["font-main text-text max-w-[70ch]",{},{" text-18 sm:text-base text-pretty":"p"===s,"text-base text-wrap leading-normal":"small"===s," text-18 sm:text-base":"short-p"===s},o]);return(0,a.jsx)(r,{ref:t,className:d,...i,children:l})})},1287:(e,t,r)=>{Promise.resolve().then(r.bind(r,743))},1978:(e,t,r)=>{"use strict";r.d(t,{$:()=>d,h:()=>i});var a=r(5155),s=r(2115),n=r(9708),l=r(2085),o=r(9433);let i=(0,l.F)("w-fit min-w-20 h-fit inline-flex gap-2 items-center justify-center font-normal whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary-800",outline:"border border-gray-300 text-gray-300 bg-transparent hover:bg-white/5 hover:text-white hover:border-white/20",outlineForeground:"border border-input border-secondary text-secondary-100 shadow-sm hover:bg-primary/30 hover:text-accent-foreground",secondary:"bg-background-400 text-gray-300 hover:text-white hover:bg-background-200",ghost:"border border-transparent bg-transparent text-orange-400 hover:text-orange-300 rounded-full hover:underline-offset-4 hover:bg-orange-400/20 shadow-none",link:"bg-transparent hover:bg-transparent text-primary underline hover:underline shadow-none",linkForeground:"bg-transparent text-primary-foreground underline-offset-4 underline hover:bg-secondary-100/60 shadow-none"},size:{default:"px-4 py-2 text-base ",sm:"px-3 py-1.5 text-base md:text-sm font-semibold",lg:"px-5 py-2 text-lg",icon:"px-2.5 py-2.5 min-w-7 w-7 min-h-7 h-7",icon_sm:"w-6 h-6 min-w-6 min-h-6 p-0"},radius:{rounded_sm:"rounded-sm",rounded_md:"rounded-md",rounded_lg:"rounded-lg",rounded_full:"rounded-full"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,t)=>{let{className:r,variant:s,size:l,radius:d,asChild:u=!1,...f}=e,m=u?n.DX:"button";return(0,a.jsx)(m,{className:(0,o.cn)(i({variant:s,size:l,radius:d,className:r})),ref:t,...f})});d.displayName="Button"},3619:(e,t,r)=>{"use strict";r.d(t,{E:()=>l});var a=r(5155);r(2115);var s=r(9433);let n=(0,r(2085).F)("inline-flex px-3 py-1 items-center border h-fit w-fit rounded-sm transition-colors",{variants:{variant:{default:"bg-background-300 text-text",primary:"bg-text text-black",secondary:"bg-gray-900/20 text-gray-300 border-none "},size:{default:"px-1.5 py-0.5 text-sm rounded-sm",lg:"px-3 py-1 border-1 text-[14px] font-bold uppercase",md:"px-3 py-1 border-1 text-[14px]",sm:"py-0.5 px-1.5 text-sm rounded-sm",xs:"py-0.5 px-1.5 text-xs rounded-sm"},type:{success:"border-green-100 bg-green-100 text-green-800",warn:"border-amber-100 bg-amber-100 text-amber-800",error:"border-red-200 bg-red-200 text-red-800"}},defaultVariants:{variant:"default"}});function l(e){let{className:t,variant:r,size:l,type:o,...i}=e;return(0,a.jsx)("div",{className:(0,s.cn)(n({variant:r,size:l,type:o}),t),...i})}},4389:(e,t,r)=>{"use strict";r.d(t,{BT:()=>x,Wu:()=>p,ZB:()=>c,aR:()=>m,bw:()=>h,cJ:()=>f,wL:()=>b});var a=r(5155),s=r(2115),n=r(2596),l=r(1218),o=r(9433),i=r(9964),d=r(1003),u=r(1978);let f=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("li",{ref:t,className:(0,o.cn)("h-full w-full flex flex-col justify-start gap-4 overflow-hidden",r),...s})});f.displayName="CustomCard";let m=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("header",{ref:t,className:(0,o.cn)("w-full pb-3 flex gap-2 justify-start",r),...s})});m.displayName="CardHeader";let c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(i.A,{ref:t,level:"h3",className:(0,o.cn)(" ",r),...s})});c.displayName="CardTitle",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(i.A,{ref:t,level:"h6",className:(0,o.cn)(r),...s})}).displayName="CardSubtitle";let x=s.forwardRef((e,t)=>{let{description:r}=e,{t:o}=(0,l.Bd)(),[i,f]=(0,s.useState)(!1),[m,c]=(0,s.useState)(!1),[x,h]=(0,s.useState)(!1),p=(0,s.useRef)(null);return(0,s.useEffect)(()=>{if(!x){let e=()=>{p.current&&c(p.current.scrollHeight>p.current.clientHeight)};return e(),h(!0),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}},[x,r]),(0,a.jsxs)("div",{className:"pb-3",children:[(0,a.jsx)(d.A,{ref:p,className:(0,n.A)("text-white",{"line-clamp-none":i,"line-clamp-3":!i}),children:r}),m&&(0,a.jsx)(u.$,{size:"sm",variant:"link",className:"min-w-fit p-0 font-bold hover:text-blue-300 text-white underline underline-offset-2",onClick:()=>f(!i),children:o(i?"projects.card.toggleLess":"projects.card.toggleMore")})]})});x.displayName="CardDescription";let h=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,o.cn)("h-full w-full flex flex-col justify-between",r),...s})});h.displayName="CardBody";let p=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,o.cn)("h-full w-full flex flex-col justify-start",r),...s})});p.displayName="CardContent";let b=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("footer",{ref:t,className:(0,o.cn)("pt-2 w-full flex gap-3 justify-end items-center",r),...s})});b.displayName="CardFooter"},8001:(e,t,r)=>{"use strict";r.d(t,{c:()=>i});var a=r(5155),s=r(2115),n=r(2085),l=r(9433);let o=(0,n.F)("h-4",{variants:{size:{xs:"h-2",default:"h-4",sm:"h-6",md:"h-10",lg:"h-12",xl:"h-16",xxl:"h-24"}}}),i=s.forwardRef((e,t)=>{let{className:r,size:s,...n}=e;return(0,a.jsx)("div",{className:(0,l.cn)(o({size:s}),r),ref:t,...n})});i.displayName="Divider"},8121:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(5155);r(2115);var s=r(2596),n=r(3619);let l=e=>{let{fit:t="cover",src:r,alt:l="",className:o,layout:i="top-right",badgeVariant:d="",badgeSize:u="",badgeContent:f="",svgCode:m}=e,c=(0,s.A)("w-full h-full flex items-center justify-center",{"object-cover":"cover"===t,"object-contain":"contain"===t}),x=(0,s.A)("absolute",{"top-2 left-2":"top-left"===i,"top-2 right-2":"top-right"===i,"bottom-2 left-2":"bottom-left"===i,"bottom-2 right-2":"bottom-right"===i,"top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2":"center"===i});return(0,a.jsxs)("div",{className:"relative flex w-full h-full overflow-hidden "+o,children:[m&&(0,a.jsx)("div",{className:c+"",dangerouslySetInnerHTML:{__html:m}}),r&&(0,a.jsx)("img",{src:r,alt:l,className:c}),f&&(0,a.jsx)(n.E,{className:x,variant:d,size:u,children:f})]})}},9433:(e,t,r)=>{"use strict";r.d(t,{cn:()=>n});var a=r(2596),s=r(9688);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.QP)((0,a.$)(t))}},9964:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var a=r(5155);r(2115);var s=r(9433);let n=e=>{let{level:t="h1",children:r,className:n=""}=e;return(0,a.jsx)({h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",highlight:"h4","title-sm":"h6",subtitle:"h5"}[t]||"h1",{className:(0,s.cn)("text-text font-title text-balance",{h1:"text-36 sm:text-40 mt-8 mb-6 font-medium uppercase text-center text-primary",h2:"text-32 sm:text-36 mb-4 font-medium",h3:"text-28 sm:text-32 mb-4 font-medium",h4:"!text-24 sm:text-24 mb-2 font-medium",h5:"text-20 mb-2 font-medium",h6:"text-base font-medium uppercase mb-2","title-sm":"text-base sm:text-20 font-normal mb-2 leading-snug",subtitle:"text-20 md:text-24 mb-2 font-light max-w-[50ch] md:max-w-[70ch] 2xl:max-w-[75ch]"}[t]||"",n),children:r})}}},e=>{var t=t=>e(e.s=t);e.O(0,[530,743,441,684,358],()=>t(1287)),_N_E=e.O()}]);