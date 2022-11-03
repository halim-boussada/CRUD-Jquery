var products = [
  {
    name: "iphone 1",
    promote: true,
    imageUrl:
      "https://media.wired.com/photos/62d75d34ddaaa99a1df8e61d/master/pass/Phone-Camera-Webcam-Gear-GettyImages-1241495650.jpg",
  },
  {
    name: "iphone 2",
    promote: false,
    imageUrl:
      "https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-14-Pro/Deep-Purple/Apple-iPhone-14-Pro-Deep-Purple-thumbnail.png",
  },
  {
    name: "iphone 3",
    promote: false,

    imageUrl:
      "https://media.4rgos.it/s/Argos/9520103_R_SET?$Main768$&w=620&h=620",
  },
  {
    name: "iphone 4",
    promote: false,

    imageUrl: "https://guide-images.cdn.ifixit.com/igi/o4OjCNmNeOhvsS1P.large",
  },
  {
    name: "iphone 5",
    promote: true,

    imageUrl:
      "https://techupgradenow.com/wp-content/uploads/2022/03/Mobile-Phone.jpg",
  },
  {
    name: "iphone 6",
    promote: false,

    imageUrl:
      "https://media.wired.com/photos/62d75d34ddaaa99a1df8e61d/master/pass/Phone-Camera-Webcam-Gear-GettyImages-1241495650.jpg",
  },
];

// function itemCreation(itemObj) {
//   $(".items-container").append(`<div aria-label="${itemObj.id}"class="card" style="width: 18rem;">
//  <img src="${itemObj.imageUrl}" class="card-img-top" alt="...">
//  <div class="card-body">
//    <h5 class="card-title">${itemObj.name}</h5>
//    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//    <a class="btn btn-danger" onclick="del('${itemObj.name}')">delete</a>
//    <a class="btn btn-warning" onclick="update('${itemObj.name}')">update</a>
//  </div>
// </div>`);
// }

// function render() {
//   $(".items-container").empty()
//   for (let elemnt of products) {
//     itemCreation(elemnt);
//   }
// }

// render();

// function createItem() {
//   var item = {
//     name: $("#p-name").val(),
//     imageUrl: $("#p-url").val(),
//     id: "88",
//     promote: false,
//   };
//   products.push(item);
//   itemCreation(item);
// }

// function del(name) {
//   for (var i = 0; i < products.length; i++) {
//     if (products[i].name === name) {
//       products.splice(i, 1);
//       render();
//       return;
//     }
//   }
//   alert("item with that name doesn't exist");
// }

// function update(name) {
//   for (var i = 0; i < products.length; i++) {
//     if (products[i].name === name) {
//       products[i].name = $("#p-name").val();
//       products[i].imageUrl = $("#p-url").val();
//       render();
//     }
//   }
// }

var i = 0 
function createElement(name , url){
  $(".items-container").append(`<div id='b${i}' class="card" style="width: 18rem;">
  <img src="${url}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <a class="btn btn-danger" onclick="del('${i}')">delete</a>
    <a class="btn btn-warning" onclick="update('${i}')">update</a>
    </div>
 </div>`);
 i++
}

function render(){
  for(let e of products){
    createElement(e.name , e.imageUrl)
  }
}
render()


function add(){
  createElement($("#p-name").val() , $("#p-url").val())
}
function del(index){
  $("#b" + index).remove() 
}
function update(index){
  $("#b" + index).replaceWith(`<div id='b${index}' class="card" style="width: 18rem;">
  <img src="${$("#p-url").val()}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${$("#p-name").val()}</h5>
    <a class="btn btn-danger" onclick="del('${index}')">delete</a>
    <a class="btn btn-warning" onclick="update('${index}')">update</a>
    </div>
 </div>`)
}