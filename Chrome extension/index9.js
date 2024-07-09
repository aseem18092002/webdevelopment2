let myLeads = [];

const inputEL = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteEl = document.getElementById("delete-btn");
const saveTab = document.getElementById("save-tab");
/*const tab = [
  {url:"https://www.instagram.com/"}
]*/
saveTab.addEventListener("click" , function(){
  chrome.tabs.query({active : true , currentWindow : true}, function(tabs){
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads" , JSON.stringify(myLeads));
    render(myLeads);
  })
})

deleteEl.addEventListener("dblclick" , function(){
  localStorage.clear();
  myLeads =[];
  render(myLeads);
})

/*  const localFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
  console.log(localFromLocalStorage);
   localStorage.clear();*/

 const leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"));
 if(leadsFromStorage){
   myLeads = leadsFromStorage;
   render(myLeads);
 }

  function render(leads){
    let listItems = " ";

   for(var i = 0 ; i<leads.length ; i++){
     // listItems += "<li> <a  target = '_blank' href = '"+ myLeads[i] + "'>" + myLeads[i] +  "</a></li>";
   listItems += `
   <li>
   <a target = '_blank' href = '${leads[i]}'>
   ${leads[i]}
   </li>
   `
  }
     ulEl.innerHTML = listItems ;
  }
inputBtn.addEventListener("click" , function(){

myLeads.push(inputEL.value);
inputEL.value = "";
localStorage.setItem("myLeads" , JSON.stringify(myLeads));
render(myLeads);
})
