$(document).ready(function () {  
    // Input mask:
    $(".phone_mask").inputmask("phone", {
        placeholder: "#",
        showMaskOnHover: false,
    });

    Inputmask.extendAliases({
        my_phone: {
        alias: "+7(###)###-##-##",
        phoneCodes: [
            {
            mask: "+7(###)###-##-##",
            },
        ],
        },
    });
    $(".phone_mask").inputmask("my_phone");
});