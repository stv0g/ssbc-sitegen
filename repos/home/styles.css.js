module.exports = function* () {
  var blue1 = '#0091FF'
  var blue1Dark = '#0051AA'
  var black1 = '#272822'
  var green1 = '#a6e22e'
  var green2 = '#8EBB32'
  var green2Dark = '#76923B'

  var leftnavWidth = 220
  var contentWidth = 740

  // base styles
  yield `
  body {
    display: flex;
    color: #555;
  }
  body:before, body:after {
    content: '';
    flex: 1;
  }
  body:before {
    background: #eee;
  }
  h1, h2, h3, h4, h5 {
    font-weight: 300;
    color: #000;
  }
  h1 {
    font-size: 3em;
    margin: 0px 0 30px 0;
  }
  h2 {
    font-size: 2.25em;
    border-bottom: 1px solid #ddd;
  }
  h3 {
    font-size: 1.75em;
  }
  h4 {
    font-size: 1.25em;
  }
  h5 {
    font-size: 1em;
  }
  hr {
    border: 0;
    border-bottom: 1px solid #ccc;
    margin: 2em 0;
  }
  blockquote {
    color: gray;
    border-left: 8px solid #ccc;
    padding-left: 1em;
    margin: 2em;
  }
  p, ul, ol {
    font-family: "Helvetica Neue",Helvetica,Roboto,Arial,sans-serif;
    font-size: 18px;
    font-weight: 300;
  }
  code {
    background: #eee;
    border-radius: 2px;
    padding: 1px 3px;
    font-size: 16px;
  }
  pre code {
    display: block;
    padding: 0.5em;
    word-break: break-word;
    white-space: pre-wrap;
  }
  `

  // left nav
  yield `
  #leftnav {
    flex: 0 0 ${leftnavWidth}px;
    background: #eee;
    border-right: 3px solid #eaeaea;    
    padding: 0px 20px 20px;
  }
  .leftnav-item {  
    position: relative;
    margin-bottom: 15px;
    padding-top: 15px;
    font-size: 21px;
    font-weight: 300;
    border-top: 1px solid #ccc;
  }
  .leftnav-item:first-child {
    border: 0;
  }
  .leftnav-subitems {
    margin-bottom: 15px;
  }
  .leftnav-subitems .leftnav-item {
    margin: 0 0 5px 15px;
    font-size: 15px;
    font-weight: normal;
    padding: 0;
    border: 0;
  }
  .leftnav-subitems .leftnav-item:before {
    content: '\\25B8';
    position: absolute;
    left: -12px;
    font-size: 12px;
  }
  .leftnav-indent {
    padding-left: 15px;
  }
  .leftnav-item a {
    color: #333;
    text-decoration: none;
  }
  .leftnav-item a:hover {
    color: #000;
  }
  .leftnav-subitems .leftnav-item a {
    color: #777;
  }
  .leftnav-subitems .leftnav-item a:hover {
    color: #000;
  }
  .leftnav-item.selected a {
    color: ${green2};
  }
  .leftnav-item.selected a:hover {
    color: ${green2Dark};
  }
  .leftnav-item small {
    font-size: 13px;
    color: gray;
  }
  `

  // content
  yield `
  #content {
    flex: 0 0 ${contentWidth}px;
    padding: 6px 20px;
  }
  `
}