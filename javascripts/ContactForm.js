(function() {
    emailjs.init("user_TQ8wS340DRUkjbXh5zThr");
})();

function valueFromID(id)
{
    return document.getElementById(id).value
}

function validateEmail(email) { // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email.trim()).toLowerCase());
} 

function makeInvalid(id,message)
{
    let element = document.getElementById('in-'+id)
    element.classList.add('invalid')
    let errelement = document.getElementById('err-d-'+id)
    errelement.innerText = message;
    errelement.classList.remove('hidden')
    element.addEventListener('input', () => 
    {
        element.classList.remove('invalid')
        errelement.classList.add('hidden')
        setTimeout(() => {
            errelement.innerText = ''
        }, 200);
    },
    {once : true})
}

function validateForm()
{
    let valid = true;

    if (valueFromID('in-name').length == 0)
    {
        valid = false;
        makeInvalid('name',"Name cannot be empty")
    }
    if ((valueFromID('in-email')).length == 0)
    {
        valid = false;
        makeInvalid('email',"Email cannot be empty")
    }
    else if (!validateEmail(valueFromID('in-email')))
    {
        valid = false;
        makeInvalid('email', "Invalid email format")
    }
    if (valueFromID('in-message').length == 0)
    {
        valid = false;
        makeInvalid('message', "Message cannot be empty")
    }

    return valid;
}
let sentAlready = false;
function sendMail()
{
    if (!sentAlready && validateForm())
    {
        sentAlready = true;
        try
        {
            emailjs.send('service_lndpyp9','template_vvwpyxf',
            {
                name: valueFromID('in-name'),
                email: valueFromID('in-email'),
                subject: valueFromID('in-subject'),
                message: valueFromID('in-message')
            }).then(function(res)
            {
                if (res.status == 200)
                {
                    successfulMail()
                }
                else
                {
                    let errelement = document.getElementById('err-d-send')
                    errelement.innerText = "An unknown error occured. Please try again later.";
                    errelement.classList.remove('hidden')
                }
            })
        }
        catch(e)
        {
            let errelement = document.getElementById('err-d-send')
            errelement.innerText = e;
            errelement.classList.remove('hidden')
        }
    }
}
function successfulMail()
{
    document.getElementById('c-container').classList.add('sending')
    document.getElementById('sent-confirmation').classList.add('show')
}