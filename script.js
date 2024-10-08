var pre;
var number = 0;
document.addEventListener("DOMContentLoaded", function () {
  //Add the styles to the beginning, so any styles that you add overwrite these
  headHTML = document.head.innerHTML;
  document.head.innerHTML = `<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap');

  .material-symbols-outlined {
    font-variation-settings:
      "FILL" 0,
      "wght" 400,
      "GRAD" 0,
      "opsz" 24
  }

  .ncsCitation {
    position: fixed;
    right: 10px;
    bottom: 10px;
    padding: 5px;
    border-radius: 5px;
    background-color: #111;
    color: #fff;
  }

  body, pre {
    font-weight: bold;
    background-color: #000;
    font-family: "Roboto";
    color: #fff;
    text-wrap: wrap;
    word-wrap: break-word;
  }

  a {
    transition: all 100ms;
    color: #fff;
    cursor: pointer;
  }

  a:hover {
    text-shadow: 0 0 10px #fff;
  }

  a.copy {
    height: 20px;
    width: 20px;
    background-color: #111;
    position: absolute;
    left: calc(100% - 44px);
    font-size: 20px;
    float: right;
    padding: 4px;
    border-radius: 4px;
    font-size: 20px;
  }

  a.copy:hover {
    background-color: #fff1;
  }

  a.link {
    rotate: 0deg;
    text-decoration: none;
    color: #0000;
  }
    
  a.link:hover {
    rotate: 45deg;
    color: #fff;
  }

  .code {
    overflow-x: scroll;
    text-wrap: nowrap;
    word-wrap: normal;
    padding: 8px;
    border-radius: 8px;
    min-height: 28px;
    font-family: 'Source Code Pro';
    background-color: #111;
  }

  span.code {
    min-height: 0;
    padding: 1px 2px;
    border-radius: 4px;
  }
  
  div.uScript {
    padding: 4px;
    border-radius: 4px;
    background-color: #fff;
    color: #000;
    font-family: 'Source Code Pro';
    height: 50px;
    width: 150px;
    font-size: 13px;
    cursor: pointer;
    text-align: center;
  }
  
  div.uScript img {
    height: 50px;
    float: left;
    margin-right: 4px;
  }

  div.uScript span {
    font-size: 19px;
    font-family: 'Roboto';
  }
</style>${headHTML}`;

  const bodyHTML = document.body.innerHTML;
  //Add a pre around the <body> element if you said to
  if (pre) document.body.innerHTML = `<pre>${bodyHTML}</pre>`;
  if (
    !document.head.innerHTML.includes(
      "//github.com/NCResources/HTML-blog-resources"
    ) &&
    !document.body.innerHTML.includes(
      "//github.com/NCResources/HTML-blog-resources"
    )
  )
    document.body.innerHTML +=
      "<div class='ncsCitation'>Thanks to NCSources for making \"<a href='http://github.com/NCResources/HTML-blog-resources' target='_blank'>HTML-blog-resources</a>\"</div>";

  //Add a copy button to every code div's inner html
  document.body.querySelectorAll("div.code").forEach((div) => {
    addCopyBtn("Code", div);
  });

  //Add a link to every h1, h2, h3, h4, h5, and h6
  document.querySelectorAll("h1", "h2", "h3", "h4", "h5", "h6").forEach((h) => {
    addLink(h, h);
  });

  //Add a link to every uScript
  document.body.querySelectorAll("#uScript").forEach((e) => {
    addUScript(e, e.getAttribute("data-link"));
  });
});

function addCopyBtn(type, element) {
  //Save the text and html of the element for later
  const ogText = element.textContent;
  const ogHTML = element.innerHTML;

  //Add the copy button to the beginning of the element
  element.innerHTML = `<a class="copy material-symbols-outlined"></a>${ogHTML}   `;

  //If a button is clicked, copy the text stored in ogText
  element.querySelector("a.copy").addEventListener("click", function () {
    copy(type, ogText);
  });
}

function addLink(to, element) {
  number += 1;
  to.setAttribute("id", `${number}`);

  //Add a link to the element
  element.innerHTML += `<a class="link material-symbols-outlined" href="#${number}"></a>`;
}

function copy(type, text) {
  //
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert(`${type} copied to clipboard!`);
    })
    .catch((err) => {
      console.error("Could not copy text: ", err);
    });
}

function addUScript(e, link) {
  //Add the uScript to the beginning of the element
  e.outerHTML = `<div class="uScript"onclick="window.open('${link}')"><img src="https://www.tampermonkey.net/images/icon180.png">Download the <span>Userscript!</span></div>`;
}