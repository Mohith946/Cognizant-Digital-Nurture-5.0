function IndianPlayers() {

    const players = [
        "Virat",
        "Rohit",
        "Gill",
        "Rahul",
        "Pant",
        "Hardik",
        "Jadeja",
        "Ashwin",
        "Bumrah",
        "Shami",
        "Siraj"
    ];

    const oddPlayers = players.filter((player, index) => index % 2 === 0);
    const evenPlayers = players.filter((player, index) => index % 2 !== 0);

    const T20Players = [
        "Virat",
        "Rohit",
        "Hardik"
    ];

    const RanjiPlayers = [
        "Pujara",
        "Rahane",
        "Saha"
    ];
    const mergedPlayers = [...T20Players, ...RanjiPlayers];
    return (
        <div>
            <h2>Odd Team Players</h2>
            <ul>
                {
                    oddPlayers.map((player, index) => (
                        <li key={index}>{player}</li>
                    ))
                }
            </ul>
            <h2>Even Team Players</h2>
            <ul>
                {
                    evenPlayers.map((player, index) => (
                        <li key={index}>{player}</li>
                    ))
                }
            </ul>
            <h2>Merged Players</h2>
            <ul>
                {
                    mergedPlayers.map((player, index) => (
                        <li key={index}>{player}</li>
                    ))
                }
            </ul>
        </div>
    );
}
export default IndianPlayers;