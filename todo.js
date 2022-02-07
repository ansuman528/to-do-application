var id=0;
function deleteitem(idval)
{
    var element = document.getElementById(idval);
    return element.parentNode.removeChild(element);
}
function main() {

    var dateval = document.forms["myform"]["date"].value;
    var timeval = document.forms["myform"]["time"].value;
    var desval = document.forms["myform"]["des"].value;
    
    var ScheduleElement = [dateval,timeval,desval];

    var tagArray = [];
    for(let i=0;i<ScheduleElement.length;i++)
    {
        tagArray[i] = document.createElement('span');
        var text = document.createTextNode(ScheduleElement[i]);
        tagArray[i].appendChild(text);
    }
    
    var deleteid = document.createElement('button');
    deleteid.setAttribute('id',id);
    deleteid.setAttribute('onclick','deleteitem(this.id)');
    var deltext = document.createTextNode("delete");
    deleteid.appendChild(deltext);

    // var idcount = document.createElement('span');
    // idcount.createTextNode(id);

    var element = document.createElement('div');
    element.setAttribute('class','CollectDiv');
    element.setAttribute('id',id++);

    // element.appendChild(idcount);
    for(let i=0;i<tagArray.length;i++)
    {
        element.appendChild(tagArray[i]);
    }
    element.appendChild(deleteid);

    var temp = document.getElementById("interr");
    temp.appendChild(element);

    return false;
}
