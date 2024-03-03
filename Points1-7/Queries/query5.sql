-- Complex search criterion (more than one expression with logical connectors)
-- Select scouting report for players in the AAC conference with more than 50 assists in a season
SELECT 
    Player.name AS Player_name, 
    Scouting_Report.strengths,
    Scouting_Report.weaknesses,
    Scouting_Report.notes,  
    Stat.count AS Stat_Count
FROM Scouting_Report
INNER JOIN Player ON Scouting_Report.player_id = Player.player_id
INNER JOIN School ON Player.school_id = School.school_id
LEFT JOIN Stat ON Player.player_id = Stat.player_id
WHERE School.division = 1 
  AND School.conference = 'AAC'
  AND (Stat.type = 'assists')
  AND (Stat.count > 50 )
ORDER BY School.name, Player.name;