var projectsData = [
  {
    "id": 1,
    "title": "Gradie Sign Up",
    "url": "https://www.codewell.cc/challenges/gradie-sign-up-page--608ac420650dff001599e8ec",
    "status":`<td class="yellow"> completed </td>` ,
    "source": "https://github.com/ananthmgk/Gradie-Signup-Page",
    "demo": "https://ananthmgk.github.io/Gradie-Signup-Page/"
  },
  {
    "id": 2,
    "title": "snipper landing page",
    "url": "https://www.codewell.cc/challenges/snipper-landing-page--608bbe67e0984a001540d79b",
    "status": `<td class="yellow"> completed </td>` ,
    "source": "https://github.com/ananthmgk/Snippet_Template_Starter_Files",
    "demo": "https://ananthmgk.github.io/Snippet_Template_Starter_Files/"
  },
  {
    "id": 3,
    "title": "Commune Waitlist",
    "url": "https://www.codewell.cc/challenges/commune-waitlist-page--608d9565747bad001532bd64",
    "status": `<td class="yellow"> completed </td>` ,
    "source": "https://github.com/ananthmgk/Commune-Waitlist-codewell-proj",
    "demo": "https://ananthmgk.github.io/Commune-Waitlist-codewell-proj/"
  },
  {
    "id": 4,
    "title": "Spense landing page",
    "url": "https://www.codewell.cc/challenges/spense-landing-page--608a7a859691700015db16c5",
    "status": `<td class="inprogress-color">in Progress</td>`,
    "source": "",
    "demo": " "
  },
  {
    "id": 5,
    "title": "Chirp landing page",
    "url": "https://www.codewell.cc/challenges/chirp-landing-page--60fc1e36a383e41090a3c71c",
    "status": `<td class="red">TO DO</td>`,
    "source": " ",
    "demo": " "
  },
  {
    "id": 6,
    "title": "Comment module",
    "url": "https://www.codewell.cc/challenges/comment-module--608bc18ee0984a001540d7a6",
    "status": `<td class="red">TO DO</td>`,
    "source": " ",
    "demo": " "
  },
  {
    "id": 7,
    "title": "Fiber landing page",
    "url": "https://www.codewell.cc/challenges/fiber-landing-page--608a7e639691700015db16d1",
    "status": `<td class="red">TO DO</td>`,
    "source": " ",
    "demo": " "
  },
  {
    "id": 8,
    "title": "hosterr waitlist page",
    "url": "https://www.codewell.cc/challenges/hosterr-waitlist-page--60b3ea4c0cc72310b5a2494d",
    "status": `<td class="red">TO DO</td>`,
    "source": " ",
    "demo": " "
  },
  {
    "id": 9,
    "title": "indie brew landing page",
    "url": "https://www.codewell.cc/challenges/indiebrew-landing-page--608aca51650dff001599e8f9",
    "status": `<td class="red">TO DO</td>`,
    "source": " ",
    "demo": " "
  },
  {
    "id": 10,
    "title": "meet waitlist template",
    "url": "https://www.codewell.cc/challenges/meeet-waitlist-template--60e05defa383e41090a3c273",
    "status": `<td class="red">TO DO</td>`,
    "source": " ",
    "demo": " "
  },
  {
    "id": 11,
    "title": "news letter popup",
    "url": "https://www.codewell.cc/challenges/newsletter-popup-template--60a8db35203a0e6180bb5035",
    "status": `<td class="red">TO DO</td>`,
    "source": " ",
    "demo": " "
  },
  {
    "id": 12,
    "title": "time now landing page",
    "url": "https://www.codewell.cc/challenges/timenow-landing-page--608d9a7d747bad001532bd70",
    "status": `<td class="red">TO DO</td>`,
    "source": " ",
    "demo": " "
  },
  {
    "id": 13,
    "title": "Unifeed Blog page",
    "url": "https://www.codewell.cc/challenges/unifeed-blog-page--608d9d5c747bad001532bd7c",
    "status": `<td class="red">TO DO</td>`,
    "source": " ",
    "demo": " "
  },
  {
    "id": 14,
    "title": "Yelp Camp",
    "url": "https://www.codewell.cc/challenges/yelpcamp-by-colt-steele--6144c7c8a383e41090a3d84b",
    "status": `<td class="red">TO DO</td>`,
    "source": " ",
    "demo": " "
  },
]

function getRow(rowData) {
  let rowText = []
  rowText.push('<tr>')
  rowText.push(`<td class="pink"> ${rowData.id}. </td>`)
  rowText.push(`<td class="project-color"> <a class="hover" href="${rowData.url}" target="_blank"> ${rowData.title} </a></td>`)
  rowText.push(` ${rowData.status} `)
  rowText.push(`<td class="source-color"> <a class="hover" href="${rowData.source}" target="_blank"> Click here </a> to view</td>`)
  rowText.push(`<td class="live-color"> <a class="hover" href="${rowData.demo}" target="_blank"> Click here </a> to view</td>`)
  rowText.push('</tr>')
  return rowText.join("\n")
}

function getHeader(headerData) {
  let rowText = []
  rowText.push('<tr>')
  rowText.push(`<th class="pink"> ${headerData[0]} </th>`)
  rowText.push(`<th class="project-color"> ${headerData[1]} </th>`)
  rowText.push(`<th class="yellow"> ${headerData[2]} </th>`)
  rowText.push(`<th class="source-color"> ${headerData[3]} </th>`)
  rowText.push(`<th class="live-color"> ${headerData[4]} </th>`)
  rowText.push('</tr>')
  return rowText.join("\n")
}

function getTable() {
  let headers = ["S.No", "Projects", "Status", "Source Code", "Live Demo"]
  let tableText = []
  tableText.push(getHeader(headers))
  for (const project of projectsData) {
    tableText.push(getRow(project))
  }
  return tableText.join("\n");
}

function setTableData() {
  console.log("setTableData() called")
  document.getElementById('table').innerHTML = getTable()
}