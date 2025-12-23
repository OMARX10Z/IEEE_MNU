import{r as h,j as t}from"./index-Clb_ZcwE.js";const p=h.forwardRef(({children:a,variant:e="default",hoverable:d=!1,className:o="",onClick:r,...n},g)=>{const l="rounded-lg transition-all duration-300",b={default:"bg-white dark:bg-gray-800 shadow-md",elevated:"bg-white dark:bg-gray-800 shadow-lg",bordered:"bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700"},i=d?"hover:shadow-xl hover:-translate-y-1 cursor-pointer":"",y=`
    ${l}
    ${b[e]}
    ${i}
    ${o}
  `.trim().replace(/\s+/g," ");return t.jsx("div",{ref:g,className:y,onClick:r,role:r?"button":void 0,tabIndex:r?0:void 0,onKeyPress:s=>{r&&(s.key==="Enter"||s.key===" ")&&r(s)},...n,children:a})});p.displayName="Card";const c=({children:a,className:e=""})=>t.jsx("div",{className:`p-6 pt-0 ${e}`,children:a});export{p as C,c as a};
