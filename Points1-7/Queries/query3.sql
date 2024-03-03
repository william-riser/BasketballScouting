-- Subquery 
-- Select the players who scored more than 900 points in the 2023 season
SELECT *
FROM Player
WHERE player_id IN (
    SELECT player_id
    FROM Stat
    WHERE type = 'points' AND count > 900 AND season = 2023
);
