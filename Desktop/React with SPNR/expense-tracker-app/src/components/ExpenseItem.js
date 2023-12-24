export default function ExpenseItem() {
  const onClickFun = () => {
    const itemName = document.getElementById("itemname").value;
    const itemPrice = document.getElementById("itemprice").value;
    
    if(itemName === "" || itemPrice === ""){
        alert('Enter details')
    }
    else{
        let tableRow = document.getElementById("itemList");
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `<strong>${itemName}</strong> Rs ${itemPrice}/- <hr>`;

    tableRow.appendChild(newDiv);

    document.getElementById("itemname").value = "";
    document.getElementById("itemprice").value = "";

}
  };

  return (
    <>
      <div className="container my-3 col-md-3">
        <h3
          className="mx-3 row justify-content-center"
          style={{
            textDecoration: "underline",
            color: "purple",
            fontWeight: "bolder"
          }}
        >
          Expense List
        </h3>
        <div className="card" style={{ backgroundColor: "lightGrey" }}>
          <div className="card-body">
            <div className="row justify-content-center">
              <div>
                <div className="form-group my-1">
                  <label htmlFor="itemname">
                    <b>Item Name</b>
                  </label>
                  <input
                    type="email"
                    className="form-control mb-3"
                    id="itemname"
                    placeholder="Enter Item"
                    required
                  />
                  <label htmlFor="itemprice">
                    <b>Price</b>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="itemprice"
                    required
                  />
                </div>
                <button className="btn btn-primary my-2" onClick={onClickFun}>
                  Add Item
                </button>
              </div>
            </div>
            <div className="card" style={{ backgroundColor: "lightGrey" }}>
          
            <div className="row justify-content-center">
              <div id="itemList">
              </div>
            </div>

        </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
