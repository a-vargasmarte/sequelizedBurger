$(() => {

    // get references to the inputs where users type in and add their name and a new burger 
    const $newCustomerInput = $("input.new-customer");
    const $newItemInput = $("input.new-item");

    // our new burgers are stored in burgerContainer
    const $burgerContainer = $(".burger-container");

    // add event listeners for adding and devouring burgers
    $(document).on("click", ".burger-btn", insertBurger);
    $(document).on("click", ".devour", toggleDevoured);

    getBurgers();

    // This function inserts a new burger into our database and then updates the view
    function insertBurger(event) {
        event.preventDefault();

        const burger = {
            burger_name: $newItemInput.val().trim(),
            devoured: false
        };

        $.post("/api/burgers", burger, getBurgers);
        $newItemInput.val("");
        location.reload();
    }

    function getBurgers() {
        // grab burgers via a GET request
        $.get("/api/burgers");
    }

    // This function toggles devoured status
    function toggleDevoured(event) {
        event.stopPropagation();
        let id = this.dataset.id;
        let devouredStatus = this.dataset.devoured;
        var test = (devouredStatus == 'true');
        console.log(test);
        console.log(!test);
        var newStatus = !test;
        // let newStatus = !!devouredStatus;
        // console.log(id);
        // console.log(devouredStatus);
        // console.log(!devouredStatus);
        // console.log(newStatus);

        $.ajax({
            url: "/api/burgers",
            type: "PUT",
            data: {
                id: id,
                devoured: newStatus
            }
        }).then(function (response) {
            console.log("Nom nom! You just ate the burger!");
            location.reload();
        });
    }

    // // get burgers from database when the page loads
    // getBurgers();

    // // This function resets the burgers displayed with new burgers from the database 
    // function initializeRows(burgers) {
    //     $burgerContainer.empty();
    //     $burgerContainer.prepend(burgers.map(burger => createNewRow(burger)));
    // }

    // // This function grabs burgers from the database and updates the view
    // function getBurgers() {
    //     $.get("/api/burgers", initializeRows);
    // }

    // // This function toggles devoured status
    // function toggleDevoured(event) {
    //     event.stopPropagation();
    //     const burger = $(event.target).parent().data("burger");
    //     console.log(burger);
    //     burger.devoured = !burger.devoured;
    //     updateBurger(burger);
    // }

    // // This function constructs a burger-item row
    // function createNewRow(burger) {
    //     const html =
    //         `
    //         <br>
    //         <li class = "list-group-item burger-item">
    //             <span>${burger.burger_name}</span>
    //             <button class="btn-devoured btn btn-default">NOM</button>
    //         </li>`;
    //     const $newInputRow = $(html);
    //     $newInputRow.data("burger", burger);
    //     if (burger.devoured) {
    //         $newInputRow.find("span").css({
    //             "text-decoration": "line-through",
    //             "margin-left": "350px"
    //         });
    //     }

    //     return $newInputRow;
    // }

    // // This function inserts a new burger into our database and then updates the view
    // function insertBurger(event) {
    //     event.preventDefault();

    //     const burger = {
    //         burger_name: $newItemInput.val().trim(),
    //         devoured: false
    //     };

    //     const customer = {
    //         customer_name: $newCustomerInput.val().trim()
    //     };
    //     $.post("/api/customers", customer)
    //     $.post("/api/burgers", burger, getBurgers);
    //     $newItemInput.val("");
    //     $newCustomerInput.val("");

    // }


})