import{a as n,r as s}from"./app-77394a0d.js";function i({message:r,className:t="",...e}){return r?n("p",{...e,className:"text-sm text-red-600 "+t,children:r}):null}const d=s.forwardRef(function({type:t="text",className:e="",isFocused:a=!1,...c},o){const u=o||s.useRef();return s.useEffect(()=>{a&&u.current.focus()},[]),n("div",{className:"flex flex-col items-start",children:n("input",{...c,type:t,className:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "+e,ref:u})})});export{i as I,d as T};
