
const URL = "https://crud-js-kodemia-default-rtdb.firebaseio.com/.json";

$("#save").click(() => {
    const name = $("#name").val();
    const lastName = $("#lastName").val();
    const email = $("#email").val();
    const data = {
        name,
        lastName,
        email
    };

    $.ajax({
        method: "POST",
        url: URL,
        data: JSON.stringify(data), 
        success: () =>{
            console.log("hecho")
        },
        error: () => {
            console.log("no salido compa")
        },
        async: true,
      })
})


function render(){
    
}


function get(){
    $.ajax({
        method: "GET",
        url: URL,
        // data: JSON.stringify(data), 
        success: (response) =>{
            console.log(response)
            // render(response);
        },
        error: (err) => {
            console.log("no salido compa")
        },
        async: true,
      })
}
get();


