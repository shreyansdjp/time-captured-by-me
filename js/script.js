var errormsg = document.getElementById('error');
var form = document.getElementById('contactForm');

errormsg.style.display = 'none';

function showFormError(msg) {
    errormsg.style.display = 'block';
    errormsg.innerText = msg;
    setTimeout(function() {
        errormsg.style.display = 'none';        
        errormsg.innerText = '';        
    }, 2000);
}

form.addEventListener('submit', function(e) {
    var message = document.getElementById('message').value;
    if(message.value === undefined) {
        showFormError("You did not enter any messsage");
    } else {
        alert('Your mail has been sent');
    }
    e.preventDefault();
});
