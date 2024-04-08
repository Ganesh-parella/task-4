
function validation()
{
    let My_Name=document.forms["contact"]["My_Name"].value;
    let email=document.forms["contact"]["email"].value;
    let Org_name=document.forms["contact"]["Org_name"].value;
    if(My_Name==null||My_Name=='')
    {
        document.getElementById('name_var').innerHTML="Name is required";
        
    }
     if(email==null||email=='')
    {
        document.getElementById('email_var').innerHTML="Email is required";
    
    }
     if(Org_name==null||Org_name=='')
    {
        document.getElementById('org_var').innerHTML="Organization name is required";
        
    }
    if((My_Name==null||My_Name=='')||(email==null||email=='')||(Org_name==null||Org_name==''))
    return false;
    else
    return true;
}
document.getElementById('clear').addEventListener("click",clear);
function clear()
{
    const content=document.getElementsByClassName('reset');
    content.array.forEach(element => 
    {
       innerHTML=null;
    });
}

