const teams = [
    { club: 'طليعة الدلافين', pts: 0 },
    { club: 'طليعة الحوت', pts: 0 },
    { club: 'طليعة الجمبري', pts: 0 },
    { club:'طليعة الاخطبوط', pts: 0 },
    { club: 'طليعة الكابوريا', pts: 0 },
];

function sortTeamsByPoints(teams) {
    return teams.sort((a, b) => b.pts - a.pts);
}

function displayTeams(teams) {
    const tbody = document.querySelector('#teamsTable tbody');
    tbody.innerHTML = ''; 

    teams.forEach((team, index) => {
        const row = document.createElement('tr');
        
        const posCell = document.createElement('td');
        posCell.textContent = index + 1;
        row.appendChild(posCell);

        const clubCell = document.createElement('td');
        clubCell.textContent = team.club;
        row.appendChild(clubCell);

        const ptsCell = document.createElement('td');
        ptsCell.textContent = team.pts;
        row.appendChild(ptsCell);

        tbody.appendChild(row);
    });
}

window.onload = () => {
    const sortedTeams = sortTeamsByPoints(teams);
    displayTeams(sortedTeams);
};
