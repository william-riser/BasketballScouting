-- Group By with Having
-- Select the schools with more than 5 players
SELECT School.name AS School , COUNT(Player.player_id) AS Player_Count
FROM School
LEFT JOIN Player ON School.school_id = Player.school_id
GROUP BY School.name
HAVING Player_Count > 5;
