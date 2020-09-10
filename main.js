const list = fetch("https://jsonplaceholder.typicode.com/todos")
  .then((resp) => resp.json())
  .then((list) => {
    return (document.getElementById("list").innerHTML = list
      .map((item) => `<li>${item.title}</li>`)
      .join(""))
  })

// list.title.addEventListener()

// cont list = fetch('wwww.someURL.com')
// .then((resp) => resp.json())
// .then((list) => {
//   return (document.getElementById('list').innterHTML = list
//     .map((item) => `<li> ${item.title}</li>`)
//     .join(""))
// })

// const practiceist = fetch('wwww.someURL.com')
// .then((resp) => resp.json())
// .then((list) => {
//   return (document.getElementById('list').innerHTML = List
//     .map((item) => `<li> ${item.title}</li>`).join(""))
// })

// const practiceList2 = fetch('wwww.practicelist.com')
// .then((resp) => resp.json())
// .then((list) => {
//   return (document.getElementById('list').innerHTML = list
//   .map((item) => `<li>${item.title}</li>`).join(''))
// })

// const variable = fetch('www.awebsite.com')
// .then((resp) => resp.json)
// .then((item) => {
//   return (document.getElementById('list').innerHTML = list
//   .map((item) => `<li>${list.itme}</li>`).join(''))
// })
