-- Join of at least 3 tables
-- Select the scouting reports with the player name and the school name
SELECT Scouting_Report.*, Player.name AS player_name, School.name AS school_name
FROM Scouting_Report
INNER JOIN Player ON Scouting_Report.player_id = Player.player_id
INNER JOIN School ON Player.school_id = School.school_id;
