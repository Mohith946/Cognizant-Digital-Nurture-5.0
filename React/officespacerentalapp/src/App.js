import officeImage from "./office.jpeg";

function App() {

  const offices = [
    {
      id: 1,
      name: "Tech Park",
      rent: 55000,
      address: "Bangalore"
    },
    {
      id: 2,
      name: "Business Hub",
      rent: 75000,
      address: "Hyderabad"
    },
    {
      id: 3,
      name: "Corporate Plaza",
      rent: 45000,
      address: "Chennai"
    },
    {
      id: 4,
      name: "Smart Tower",
      rent: 90000,
      address: "Pune"
    }
  ];

  return (

    <div style={{ padding: "20px" }}>

      {/* Heading */}
      <h1>Office Space Rental App</h1>

      {/* Image */}
      <img
        src={officeImage}
        alt="Office Space"
        width="500"
        height="300"
      />

      <br /><br />

      {
        offices.map((office) => (

          <div
            key={office.id}
            style={{
              border: "1px solid black",
              borderRadius: "8px",
              padding: "15px",
              marginBottom: "20px",
              width: "400px"
            }}
          >

            <h2>{office.name}</h2>

            <h3
              style={{
                color:
                  office.rent < 60000
                    ? "red"
                    : "green"
              }}
            >
              Rent : ₹{office.rent}
            </h3>

            <h4>Address : {office.address}</h4>

          </div>

        ))
      }

    </div>

  );

}

export default App;