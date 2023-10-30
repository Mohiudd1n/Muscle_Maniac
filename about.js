let outletName = ["Mumbai", "Bangalore", "Hyderabad", "Pune"];
let addresses = ["Address: 123 Fitness Street, Bandra West, Mumbai, Maharashtra", "Address: 789 Health Boulevard, Koramangala, Bangalore, Karnataka", "Address: 234 Wellness Center, Hitech City, Hyderabad, Telangana", "Address: 890 Fitness Square, Koregaon Park, Pune, Maharashtra"];
let contacts = ["Phone - +919785357680", "Phone - +917896535679", "Phone - +918024813759", "Phone - +919768290471"];
let outletImg = ['out1.jpg', 'out2.jpg', 'out3.jpg', 'out4.jpg']
let index = 0;

function CycleOutlets()
{ 
  index++;
  if(index >= outletName.length)
  {
    index = 0;
  }
  document.getElementById("outImg").src = outletImg[index];
  document.getElementById("outletName").innerHTML = outletName[index];
  document.getElementById("address").innerHTML = addresses[index];
  document.getElementById("phone").innerHTML = contacts[index];
  setTimeout("CycleOutlets()",2500);
}

function JoinUs()
{
  window.location.href = "index.html";
}

function Plans()
{
  window.location.href = "package.html";
}

function Diet()
{
  window.location.href = "Diethome.html";
}