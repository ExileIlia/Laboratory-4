function btnClick2()
{
 let sI=document.test2.item.selectedIndex;
 console.log(sI)
 let txt="";
 txt="Запропоновано"+document.test2.item.length+" напоїв"+
 "\nВибраний "+document.test2.item.options[sI].text+
 " (value="+document.test2.item.options[sI].value+
 ", index="+document.test2.item.options[sI].index+")";
 if(document.test2.item.options[sI].defaultSelected)
{
    txt+="\nЦей напій вибирається за замовчуванням."
}
alert(txt);
}