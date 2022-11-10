window.onload = function(){
    var Language_Array = {
        id_log:["title","Home","About_Author","Matrix_Plugins","Web_Code","Book_Topic","Custom_Function","Calculator_Mode"],
        en_US:["Calou Matrix Calculator","Home","About Author","Matrix Plugins","Web Code","Book Topic","Custom Function","Calculator Mode"],
        zh_TW:["Calou 矩陣計算器","主頁","關於作者","矩陣插件","網頁原始碼","課本習題","自訂義函數","矩陣計算機"]
    }
    let urlParameters = new URL(location.href);
    if(urlParameters.searchParams.get('language') == "zh_TW"){
        for(selectID = 0;selectID<Language_Array.id_log.length;selectID++){
            document.getElementById(Language_Array.id_log[selectID]).innerText = Language_Array.zh_TW[selectID];
        }
    }
    else{
        for(selectID = 0;selectID<Language_Array.id_log.length;selectID++){
            document.getElementById(Language_Array.id_log[selectID]).innerText = Language_Array.en_US[selectID];
        }
    }
}
