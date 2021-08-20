const addPic = $('#add-ons');

$("#searchBTN").on("click", async function(e) {
    e.preventDefault();
    const searchVal = $("#search").val();
    const response = await axios.get('http://api.giphy.com/v1/gifs/search', {
        params: {
            q: searchVal,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });
    console.log(response);
    addGIF(response);
})

$("#removeBTN").on("click", function() {
    addPic.empty();

})

function addGIF(response) {
    const dataLength = response.data.data.length;
    const randomNUM = Math.floor(Math.random() * dataLength);
    if (dataLength) {
        let newPIC = $("<img>", {
            src: response.data.data[randomNUM].images.original.url,
            class: "col-lg-3 col-md-6"
        });
        addPic.append(newPIC);
    }

}