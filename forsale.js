function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var item=document.getElementById("item_row"+no);
 var description=document.getElementById("description_row"+no);
 var crsid=document.getElementById("crsid_row"+no);
	
 var item_data=item.innerHTML;
 var description_data=description.innerHTML;
 var crsid_data=crsid.innerHTML;
	
 item.innerHTML="<input type='text' id='item_text"+no+"' value='"+item_data+"'>";
 description.innerHTML="<input type='text' id='description_text"+no+"' value='"+description_data+"'>";
 crsid.innerHTML="<input type='text' id='crsid_text"+no+"' value='"+crsid_data+"'>";
}

function save_row(no)
{
 var item_val=document.getElementById("item_text"+no).value;
 var description_val=document.getElementById("description_text"+no).value;
 var crsid_val=document.getElementById("crsid_text"+no).value;

 document.getElementById("item_row"+no).innerHTML=item_val;
 document.getElementById("description_row"+no).innerHTML=description_val;
 document.getElementById("crsid_row"+no).innerHTML=crsid_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
} 

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_item=document.getElementById("new_item").value;
 var new_description=document.getElementById("new_description").value;
 var new_crsid=document.getElementById("new_crsid").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='item_row"+table_len+"'>"+new_item+"</td><td id='description_row"+table_len+"'>"+new_description+"</td><td id='crsid_row"+table_len+"'>"+new_crsid+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row "+table_len+"'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_item").value="";
 document.getElementById("new_description").value="";
 document.getElementById("new_crsid").value="";
}