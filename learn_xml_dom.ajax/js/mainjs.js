function load_dataset(dataset)
{
    var xhr =new XMLHttpRequest();
    xhr.open("GET",datasets,true);
    xhr.send();
    xhr.onreadystatechange=function()
    {
        if (xhr.readyState==4 && xhr.status==200)
        {
            if(type=="json")
                data_from_sever=xhr.responseText
            else if(type=="xml")
                data_from_sever=xhr.responseXML   
        }
        else
        {
            
        }
    }
}