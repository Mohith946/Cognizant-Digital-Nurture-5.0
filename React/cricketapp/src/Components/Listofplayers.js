function ListofPlayers() {
    const players = [
        { name: "Virat", score: 85 },
        { name: "Rohit", score: 92 },
        { name: "Gill", score: 68 },
        { name: "Rahul", score: 74 },
        { name: "Pant", score: 55 },
        { name: "Hardik", score: 81 },
        { name: "Jadeja", score: 62 },
        { name: "Ashwin", score: 71 },
        { name: "Bumrah", score: 48 },
        { name: "Shami", score: 77 },
        { name: "Siraj", score: 64 }
    ];
    const lowScorePlayers = players.filter(player => player.score < 70);
    return (
        <div>
            <h2>List of Players</h2>
            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map((player, index) => (
                            <tr key={index}>
                                <td>{player.name}</td>
                                <td>{player.score}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <h2>Players with Score Below 70</h2>
            <ul>
                {
                    lowScorePlayers.map((player, index) => (
                        <li key={index}>
                            {player.name} - {player.score}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default ListofPlayers;