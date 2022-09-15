let sprinto = async(event)=>{
    event.preventDefault();
    var str = document.querySelector("#num").value;
    if(str.length<=0)
    {
       var res = document.querySelector(".res");
       res.innerText="You have not entered any value";
    }
    else
    {
    var numbers=["1","2","3","4","5","6","7","8","9","0"];
    var words=["one","two","three","four","five","six","seven","eight","nine","zero"];
    var bag="";
    for(var i=0;i<str.length;i++)
    {
      for(var j=0;j<numbers.length;j++)
      {
         if(str[i]==numbers[j])
          {
            bag=bag+words[j]+" ";
          }
      }
    }
    var res = document.querySelector(".res");
    res.innerText=bag;
    }
    }
    
    let formdata = document.querySelector("#formdata");
    formdata.addEventListener("submit", sprinto);
