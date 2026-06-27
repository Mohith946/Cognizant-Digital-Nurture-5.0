function BookDetails() {

    const books = [
        {
            id: 1,
            name: "React in Action",
            price: 650
        },
        {
            id: 2,
            name: "Java Programming",
            price: 550
        }
    ];

    return (

        <div>

            <h2>Book Details</h2>

            <ul>

                {
                    books.map(book => (

                        <li key={book.id}>
                            {book.name} - ₹{book.price}
                        </li>

                    ))
                }

            </ul>

        </div>

    );

}

export default BookDetails;