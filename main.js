window.onload = function () {
    var loadTime = (window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart); 
    alert('Page load time is '+ loadTime +' ms');
    
    // else if (loadTime>10 && loadTime<50)
    //      {alert('Page load time is '+ loadTime +'seconds\n Ohh!! You are Slow. Upgrade your Internet Connection.');}
}
$("p").on("mouseup",function() {
    selection=getSelectedText();
    if(selection.length >= 3) {
        var spn = '<span class="selected">' + selection + '</span>';
       $(this).html($(this).html().replace(selection, spn));
    }
});

//Grab selected text
function getSelectedText(){
    if(window.getSelection){
        return window.getSelection().toString();
    }
    else if(document.getSelection){
        return document.getSelection();
    }
    else if(document.selection){
        return document.selection.createRange().text;
    }
}







