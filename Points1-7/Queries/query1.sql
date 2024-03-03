-- Select the first 10 picks of draft board 1
SELECT Draft_Pick.pick_number AS Pick, Player.name AS Name, Draft_Pick.team AS Team
FROM Draft_Pick
NATURAL JOIN Player
WHERE draft_board_id = 1
ORDER BY Pick ASC
LIMIT 10;