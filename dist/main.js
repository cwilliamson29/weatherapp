(()=>{"use strict";function e(e,t,n,a,i,r,c,o){return{city:e,temp:t,feels:n,hum:a,hi:i,lo:r,weather:c,icon:o}}function t(e){let t={};t.city=e.city.name,t.hourly=[];for(let n=0;n<e.list.length;){let a=e.list[n].dt_txt.split(" ");t.hourly[n]={date:a[0],time:a[1],temp:e.list[n].main.temp,weather:e.list[n].weather[0].main,wea_desc:e.list[n].weather[0].description,wea_icon:e.list[n].weather[0].icon,wea_id:e.list[n].weather[0].id},n++}return t}const n=async function(n,a){!function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(document.getElementById("current_wrap"));const i=await async function(n,a){return"usa"===a?{current:await async function(t){const n=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${t},usa&units=imperial&APPID=7e2565eabacd81524ddf1835a845553d`,{mode:"cors"}),a=await n.json();return await new e(a.name,a.main.temp,a.main.feels_like,a.main.humidity,a.main.temp_max,a.main.temp_min,a.weather[0].main,a.weather[0].icon)}(n),cast:await async function(e){const n=await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${e},usa&units=imperial&APPID=7e2565eabacd81524ddf1835a845553d`,{mode:"cors"}),a=await n.json();return await new t(a)}(n)}:{current:await async function(t){const n=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${t}&units=imperial&APPID=7e2565eabacd81524ddf1835a845553d`,{mode:"cors"}),a=await n.json();return await new e(a.name,a.main.temp,a.main.feels_like,a.main.humidity,a.main.temp_max,a.main.temp_min,a.weather[0].main,a.weather[0].icon)}(n),cast:await async function(e){const n=await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${e}&units=imperial&APPID=7e2565eabacd81524ddf1835a845553d`,{mode:"cors"}),a=await n.json();return await new t(a)}(n)}}(n,a);!function(e){const t=document.getElementById("current_wrap"),n=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),r=document.createElement("div"),c=document.createElement("div");n.setAttribute("id","city"),n.innerText=e.current.city,a.setAttribute("id","temp"),a.innerText=e.current.temp,i.setAttribute("id","hiLo"),i.innerText="high: "+e.current.hi+"Low: "+e.current.lo,r.setAttribute("id","currentWeather"),r.innerText=e.current.weather;const o=e.current.icon;c.setAttribute("id","icon");const d=document.createElement("img");d.src=`http://openweathermap.org/img/wn/${o}@2x.png`,c.appendChild(d),t.appendChild(n),t.appendChild(a),t.appendChild(i),t.appendChild(r),t.appendChild(c)}(i),console.log(i)};let a="usa";document.getElementById("searchUSA").addEventListener("click",(()=>{a="usa",console.log(a)})),document.getElementById("searchOther").addEventListener("click",(()=>{a="other",console.log(a)}));const i=document.getElementById("searchBar");document.getElementById("searchBtn").addEventListener("click",(()=>{const e=i.value;n(e,a)})),function(){const e=i.value;n(e,a)}()})();