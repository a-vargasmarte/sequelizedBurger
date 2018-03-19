$(() => {

    // get a reference to the input where user types in and adds a new burger
    const $newItemInput = $("input.new-item");

    // our new burgers are stored in burgerContainer
    const $burgerContainer = $(".burger-container")

    // add event listeners for adding and devouring burgers
    $(document).on("click", ".burger-btn", insertBurger);
    $(document).on("click", ".btn-devoured", toggleDevoured);

    // get burgers from database when the page loads
    getBurgers();

    // This function resets the burgers displayed with new burgers from the database 
    function initializeRows(burgers) {
        $burgerContainer.empty();
        $burgerContainer.prepend(burgers.map(burger => createNewRow(burger)));
    }

    // This function grabs burgers from the database and updates the view
    function getBurgers() {
        $.get("/api/Burgers", initializeRows);
    }

    // This function toggles devoured status
    function toggleDevoured(event) {
        event.stopPropagation();
        const burger = $(event.target).parent().data("burger");
        console.log(burger);
        burger.devoured = !burger.devoured;
        updateBurger(burger);
    }

    // This function updates a burger in our database
    function updateBurger(burger) {
        $.ajax({
            method: "PUT",
            url: "/api/Burgers",
            data: burger
        }).then(getBurgers);
    }

    // This function constructs a burger-item row
    function createNewRow(burger) {
        const html =
            `
            <br>
            <li class = "list-group-item burger-item">
                <span>${burger.burger_name}</span>
                <button class="btn-devoured btn btn-default">NOM</button>
            </li>`;
        const $newInputRow = $(html);
        $newInputRow.data("burger", burger);
        if (burger.devoured) {
            $newInputRow.find("span").css({
                "text-decoration": "line-through",
                "margin-left": "350px"
            });
        }

        return $newInputRow;
    }

    // This function inserts a new burger into our database and then updates the view
    function insertBurger(event) {
        event.preventDefault();
        const burger = {
            burger_name: $newItemInput.val().trim(),
            devoured: false
        };

        $.post("/api/Burgers", burger, getBurgers);
        $newItemInput.val("");
    }


})