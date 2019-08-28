/**
* 声明
*/
window.onload = function() {
    var STModel = document.querySelector("#statementModel");
    var STModelClose = document.querySelector("#statementModelClose");
    var STModelImg = document.querySelector("#statementImg");
    var STModelImgClose = document.querySelector("#statementImgClose");
    var STModelIcon = document.querySelector("#statementModelIcon");

    STModelIcon.addEventListener("mouseover", function($event) {
        STModel.classList.add("satePopupModelMove");
    })
    STModelIcon.addEventListener("click", function($event) {
        
    }, false)

    STModel.addEventListener("click", function($event) {
        STModel.classList.remove("satePopupModelMove");
        STModelImg.classList.add("model-show");
    }, false);

    STModelClose.addEventListener("click", function($event) {
        STModel.classList.remove("satePopupModelMove");

        if ( $event && $event.stopPropagation ){
            $event.stopPropagation();
        }
        else{
            window.event.cancelBubble = true; 
        }

            
    }, false)

    STModelImgClose.addEventListener("click", function($event) {
        STModelImg.classList.remove("model-show");
    }, false)
}
