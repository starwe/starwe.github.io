var code, noterror = true,
    newcode;

var script = window.parent.document.getElementById('script').innerHTML.split("'")[1].split("'")[0];
starwebusercode = script;
console.log(script)
var setUpTheFrameToWebSiteIframe = function() {
    try {
        code = starwebusercode;
        console.log("no error");
    } catch {
        console.error("%cError: please give us the star web user code. The variable is named 'starwebusercode'. Checkout the docs for more information.", "color:red;background-color:yellow;font-size:20px;border-radius:10px;padding:10px;user-select:none;");
        noterror = false;
        console.log("error");
    }


}

setTimeout(function() {
    setUpTheFrameToWebSiteIframe();
    if (noterror) {
        newcode = changecode(code);
        $('#HsZFeVzvIx12sdaf54d69zSUX6nBj6DkxNNkdn8RObh45o62nHrg31z54lc555N6kQ54u877w8X').append(newcode);
        console.log(newcode)
        console.log("%cThe frame has been set up.", "color:green;background-color:yellow;font-size:20px;border-radius:10px;padding:10px;user-select:none;");
    }
}, 1000);