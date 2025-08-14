const getSumBtn = document.createElement("button");
let table=document.getElementById("table");
let prices=document.querySelectorAll(".price")
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let sum=0;

const getSum = () => {
//Add your code here
	for(let i=0;i<prices.length;i++){
	let price=parseInt(prices[i].textContent);
	sum=sum+price;
}
	let tr=table.insertRow();
	let td1=tr.insertCell(0);
	let td2=tr.insertCell(1);
	td1.textContent="total"
	td2.textContent=sum;
	
	
  
};

getSumBtn.addEventListener("click", getSum);

