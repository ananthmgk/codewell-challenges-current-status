var projectsData = [
  {
    "id": 1,
    "title": "Gradie Sign Up",
    "url": "https://www.codewell.cc/challenges/gradie-sign-up-page--608ac420650dff001599e8ec",
    "status": "completed",
    "source": "https://github.com/ananthmgk/Gradie-Signup-Page",
    "demo": "https://ananthmgk.github.io/Gradie-Signup-Page/"
  },
  {
    "id": 2,
    "title": "snipper landing page",
    "url": "https://www.codewell.cc/challenges/snipper-landing-page--608bbe67e0984a001540d79b",
    "status": "completed",
    "source": "https://github.com/ananthmgk/Snippet_Template_Starter_Files",
    "demo": "https://ananthmgk.github.io/Snippet_Template_Starter_Files/"
  }
]

function getRow(rowData) {
  let rowText = []
  rowText.push('<tr>')
  rowText.push(`<td class="pink"> ${rowData.id}. </td>`)
  rowText.push(`<td class="project-color"> <a class="hover" href="${rowData.url}" target="_blank"> ${rowData.title} </a></td>`)
  rowText.push(`<td class="yellow"> ${rowData.status} </td>`)
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
  return tableText.join("\n")
}

function setTableData() {
  console.log("setTableData() called")
  document.getElementById('table').innerHTML = getTable()
}