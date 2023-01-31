const blockArea = document.getElementById('block');
blockArea.style.margin = '20px';
const textArea = document.querySelector('textarea');
textArea.addEventListener('focus', addBlockRed);
textArea.addEventListener('focusout', removeBlockRed);
    
function addBlockRed(){
    const blockRed = document.createElement('div');
    blockRed.setAttribute('id', 'redDiv');
    blockArea.append(blockRed);
    blockRed.style.height = '32px';
    blockRed.style.width = '168px';
    blockRed.style.border = '2px solid red';
    blockRed.style.marginLeft = '200px';
    blockRed.style.marginTop = '-40px';
    blockRed.style.borderRadius = '3px';
}
    
function removeBlockRed(){
    document.getElementById('redDiv').remove();
}    