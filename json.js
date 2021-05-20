// form validation

(function () {
    function toJSONString(form) {
        let obj = {}
        let elements = document.querySelectorAll("input, select, textArea")

        for (let i = 0; i < elements.length; ++i) {
            let element = elements[i];
            let name = element.name;
            let value = element.value;

            if (name) {
                obj[name] = value;
            }
        }
        console.log(obj);
        return JSON.stringify(obj);
    }

    document.addEventListener("DOMContentLoaded", function () {
        var form = document.getElementById("signup-btn");
        var output = document.getElementById("output");

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            let json = toJSONString(this);
            console.log(json);

            output.innerHTML(json);
        }, false);
    })
})