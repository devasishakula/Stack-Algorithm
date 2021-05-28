let arr=[];
let dispStack=()=>
{
	str='';
	for(let elem of arr)
	{
		str='<div class="btn btn-warning text-danger font-weight-bold mt-3">'+elem+'</div><br>'+str;
	}
	$('#show').html(str);
}
$('#push').click(function()
{
	if($('#ele').val()==='')
	{
		alert('Insert Element...');
	}
	else
	{
		arr.push($('#ele').val());
		dispStack();
		
	}	
});
$('#pop').click(function()
{
	if(arr.length===0)
	{
		alert('Stack Empty...')
	}
	else
	{
		let del=arr[arr.length-1];
		delete arr[arr.length-1];
		let arrFilter=arr.filter(el=>{
			return el!=null && el!='';
		});
		arr=arrFilter;
		dispStack();
	}
});
$('#top').click(function()
{
	if(arr.length===0)
	{
		alert('Stack Empty...')
	}
	else
	{
		str='';
		for(let elem=0;elem<arr.length;elem++)
		{
			if(elem===arr.length-1) str='<div class="btn btn-success text-danger font-weight-bold mt-3">'+arr[elem]+'</div><br>'+str;
	        else str='<div class="btn btn-warning text-danger font-weight-bold mt-3">'+arr[elem]+'</div><br>'+str;
		}
		$('#show').html(str);
	}
});
