const submitData = ()=>{
    const form = document.getElementById("form");
    form.addEventListener("submit", async (e)=>{
        e.preventDefault();
        let name = document.getElementById("name");
        let email = document.getElementById("email");
        let message = document.getElementById("message");
        console.log(name.value, email.value, message.value);
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        const formData = new FormData(form);
        try {
            const res = await axios.post(`/api/auth`, formData, config);
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    });
};

//# sourceMappingURL=index.385e1d55.js.map
