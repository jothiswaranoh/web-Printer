let files = [];

function DisplayFiles(fileName, size,count) {
  let dotNum = fileName.indexOf(".");

  let spaceNum = fileName.indexOf(" ");

  if (spaceNum !== -1 && spaceNum <= dotNum)
    fileName = fileName.slice(0, spaceNum);
  else fileName = fileName.slice(0, dotNum);
  //file size
  size = Math.floor(size / 1000); //getting files in Kb from bytes
  size < 1024
    ? (size = size + " kb")
    : (size = (size / (1024 * 1024)).toFixed(2) + " mb");

  //shorten the file name
  if (fileName.length > 12) {
    fileName = fileName.slice(0, 12) + "...";
  }


  files.push({ nameOfFile: fileName, fileSize: size,count:count});
  display();
}
function display() {
  let html = "";
  for (let i = 0; i < files.length; i++) {
  html += `
  <div class="fileContainer d-flex row m-4 mr-0  align-items-center" >
  <div class="file-left d-flex align-items-center col">
  <h6 class="p-1 m-0">${files[i].nameOfFile}</h6>
  <p class="p-1 m-0">${files[i].fileSize}</p>

  </div>
  <div class="ml-auto col-auto">
      <span class="count-value" >${files[i].count}</span>copy
      <i class="fa-solid fa-arrow-right fa-rotate-270 add-count"></i>
      <i class="fa-solid fa-arrow-right fa-rotate-90 sub-count"></i>

  <i class="p-2 fa fa-times-circle element" aria-hidden="true"></i>

  </div>
  </div> 
  `;
  }
  document.getElementById("upload-file").innerHTML = html;
  console.log(document.querySelectorAll(".element"));
  document.querySelectorAll(".element").forEach((element, index) => {
    element.addEventListener("click", () => {
      files.splice(index, 1);
      display();
    });
  });
  //add copy count
  console.log(document.querySelectorAll(".add-count"));
  document.querySelectorAll(".add-count").forEach((element, index) => {
    element.addEventListener("click", () => {
      files[index].count++;
  display();

    });
  });
  //subtract copy count
  console.log(document.querySelectorAll(".sub-count"));
  document.querySelectorAll(".sub-count").forEach((element, index) => {
    element.addEventListener("click", () => {
      if(files[index].count>1){
      files[index].count--;
      }
      else{
        files[index].count=1
      }
  display();

    });
  });

}
