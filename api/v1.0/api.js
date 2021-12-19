var code, noterror = true,
    newcode;

var setUpTheFrameToWebSiteIframe = function() {
    try {
        code = starwebusercode;
    } catch {
        console.error("%cError: please give us the star web user code. The variable is named 'starwebusercode'. Checkout the docs for more information.", "color:red;background-color:yellow;font-size:20px;border-radius:10px;padding:10px;user-select:none;");
        noterror = false;
    }

    if (noterror) {
        newcode = changecode(code);
        $('#HsZFeVzvIx12sdaf54d69zSUX6nBj6DkxNNkdn8RObh45o62nHrg31z54lc555N6kQ54u877w8X').append(newcode);
        console.log("%cThe frame has been set up.", "color:green;background-color:yellow;font-size:20px;border-radius:10px;padding:10px;user-select:none;");
    }
}