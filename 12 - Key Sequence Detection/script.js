const pressed = [];
const secreteCode = 'khethelo';

window.addEventListener('keyup', (e) =>{
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secreteCode.length - 1, pressed.length - secreteCode.length );

    if(pressed.join('').includes(secreteCode)){
        console.log('LETS GOO');
        cornify_add();
    }

    console.log(pressed);
});

