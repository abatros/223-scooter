#!/usr/bin/env node

const request = require("request");
const axios = require('axios')
const assert = require('assert')
const cheerio = require('cheerio')
const _ = require('lodash')
//const $ = cheerio.load('<h2 class="title">Hello world</h2>')

/**
request.get('https://www.scoota.asia', (err, response, data)=>{
  if (err) throw err;
  const $ = cheerio.load(data)
});
**/

const _html ={};
let nodeCount = 0;
let ipush =0;
let max_push =0;
let matCount =0; // real material - not structural.

axios.get('https://www.scoota.asia')
.then((response) => {
  // Load the web page source code into a cheerio instance
  const $ = cheerio.load(response.data)
  const html = $.root().find('html')[0];
//  const  = $.root().find('html');
  scan_tag({
    tag:html
  });

/*
  console.log(body.length)

  body.each(function(i,elem){
//    console.log(`${i} -- `,this)
    console.log(`${i} -- `,elem)
    assert(this == elem)
  })

  body.each((i,e)=>{
    console.log(`${i} -- ${e.type}: <${e.name}>`)
  })
*/
console.log('nodeCount:',nodeCount)
console.log('max_push:',max_push)
})
.catch(err =>{
  console.log(err)
})

function scan_tag(o) {
  const {tag:e} = o;
  let {path} = o;
  //console.log(`scan_tag:`,elem)
  nodeCount ++;
  const _ipush = ipush;
  ipush ++; if (max_push < ipush) max_push = ipush;
  switch(e.name) {
    case 'style':
    console.log(`${nodeCount} TAG ${e.type}<${path}.${e.name}> children:${e.children.length} attribs:`, _.map(e.attribs, (v,k)=>{return `${k}:${v}`}));
    path = `${(path)?path+'.':''}${e.name}`;
    e.children.forEach(function(it,j){
      //console.log(`###${j} ${e2.type}: <${e2.name}>`)
      scan_elem({path,elem:it})
    })
    break;
    /*
    case 'a':
//      console.log(e.attribs)
    console.log(`${nodeCount} <${path}.${e.name}> `, _.map(e.attribs, (v,k)=>{return `${k}:${v}`}));
//      console.log(`TAG <${path}.${e.name}> `);
    break; */

    case 'ul':
    case 'li':
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
    case 'a':
    case 'u':
    case 'p':
    case 'form':
    case 'label':
    case 'input':
    case 'button':
    case 'img':
    case 'span':
    case 'i':
    case 'b':
    case 'em':
    case 'iframe':
    case 'textarea':
    // THESE ARE MATERIAL.
    console.log(`##${matCount++}##\n${nodeCount}:${ipush} ${e.type}  <${path}.${e.name}> children:${e.children.length} attribs:`, _.map(e.attribs, (v,k)=>{return `${k}:${v}`}));
    assert(e.type == 'tag')
//    console.log(`-- ${e.type}<${path}.${e.name}> children:${e.children.length} attribs:`);
    //console.log(`elem:`,elem[0]);
//    scan_elem(e);
    path = `${(path)?path+'.':''}${e.name}`;
    e.children.forEach(function(it,j){
      //console.log(`###${j} ${e2.type}: <${e2.name}>`)
      scan_elem({path,elem:it})
    })
    break;


    case 'html':
    case 'head':
    case 'meta':
    case 'link':
    case 'title':
    case 'body':
    case 'header':
    case 'div':
    case 'footer':
    case 'section':
    case 'main':
    case 'nav':
    case 'aside':


    //console.log(`${nodeCount}:${ipush} ${e.type} <${path}.${e.name}> children:${e.children.length} attribs:`, _.map(e.attribs, (v,k)=>{return `${k}:${v}`}));
    assert(e.type == 'tag')
//    console.log(`-- ${e.type}<${path}.${e.name}> children:${e.children.length} attribs:`);
    //console.log(`elem:`,elem[0]);
//    scan_elem(e);
    path = `${(path)?path+'.':''}${e.name}`;
    e.children.forEach(function(it,j){
      //console.log(`###${j} ${e2.type}: <${e2.name}>`)
      scan_elem({path,elem:it})
    })
    break;
//      console.log(`elem:`,elem[0].children.length);
    //body_scan(elem[0].children[i]);
    break;
    case 'script':
    //console.log('SCRIPT')
    break;

    default:
    console.log(`Invalid tag <${e.name}>`, e)
    throw `Invalid tag <${e.name}> @69`
  }
  ipush = _ipush;
}


function scan_elem(o) {
  const {path, elem:it} = o;
  switch(it.type) {
    case 'comment': break;
    case 'text':
    const text = it.data.replace(/^[\s\n]*/,'')
    if (text.length>0) {
      nodeCount ++;
      console.log(`${nodeCount}:${ipush} DATA <${path}.${it.type}>\n::::::::::::::::: "${text}"`)
    }
    break;

    default:
//    console.log(`-- ${it.type}: <${it.name}> @86`)
    scan_tag({path,tag:it});
  }
}
