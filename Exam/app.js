var btnShow = document.querySelector('.appear');
var blockContainer = document.querySelector('.container');
var btnClose = document.querySelector('.btn-close');

function showModal() {
    btnShow.style.display = 'none';
    blockContainer.classList.remove('remove');
    blockContainer.classList.add('open');
}

btnShow.addEventListener('click', showModal);
btnClose.addEventListener('click', function () {
    blockContainer.classList.remove('open');
    blockContainer.classList.add('remove');
    btnShow.style.display = 'flex';
});



function Validator(options) {
    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector); 
        var errorMessage = rule.test(inputElement.value);
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            errorElement.parentElement.classList.add('invalid');
        } else {
            errorElement.innerText = '';
            errorElement.parentElement.classList.remove('invalid');
        }

        return !errorMessage;
    }
    var formElement = document.querySelector(options.form);
    if (formElement) {
        formElement.onsubmit = function (e) {
            e.preventDefault();
            var isFormValid = true;
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isvalid = validate(inputElement, rule);
                if (!isvalid) {
                    isFormValid = false;
                }
            });
            if (isFormValid) {
                alert('Successful contact.');
            }
        }
    }

    options.rules.forEach(function (rule) {
        var inputElement = formElement.querySelector(rule.selector);
        if (inputElement) {
            inputElement.onblur = function () {
                validate(inputElement, rule);
            }

            inputElement.oninput = function () {
                var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                if (errorElement) {
                    errorElement.innerText = '';
                    errorElement.parentElement.classList.remove('invalid');
                }
            }
        }
    });
}

// định nghĩa các rules
Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Please enter your name !';
        }
    }
}

Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return regex.test(value) ? undefined : 'Input value is not email !';
        }
    }
}

Validator.minLength = function (selector, min) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim().length >= min ? undefined : `Please enter a message of at least ${min} characters !`;
        }
    }
}