const checkboxes = document.querySelectorAll(' .inbox input[type="checkbox"]');


let lastChecked ;

function handleCheck(e){
    // check if they has shift key download
    // check that if they are cheking it
    let inBetween = false;
    if(e.shiftKey && this.checked){
        // loop over every checkbox 
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if(checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;
            }

            if(inBetween){
                checkbox.checked = true;
            }
        });
    }


    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));




/* 
item.addEventListener('click', checkAll)

function checkAll (e){
    const shiftKey = 16;

    const keyPressed = e.keyCode;

    if(keyPressed === shiftKey){
        // item.forEach(i => i.checked = this.checked);
        console.log("shift pressed and item checked");
    }
} */