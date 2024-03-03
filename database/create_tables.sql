CREATE TABLE IF NOT EXISTS "School" (
	"school_id"	INTEGER,
	"name"	TEXT,
	"location"	TEXT,
	"division"	INTEGER,
	"conference"	TEXT,
	PRIMARY KEY("school_id" AUTOINCREMENT)
);

CREATE TABLE IF NOT EXISTS "Player" (
	"player_id"	INTEGER,
	"school_id"	INTEGER,
	"name"	TEXT,
	"age"	INTEGER,
	"height"	INTEGER,
	"weight"	INTEGER,
	"position"	TEXT,
	PRIMARY KEY("player_id" AUTOINCREMENT),
	FOREIGN KEY("school_id") REFERENCES "Schools"("school_id")
);

CREATE TABLE IF NOT EXISTS "Scouting_Report" (
	"scouting_report_id"	INTEGER,
	"player_id"	INTEGER NOT NULL,
	"strengths"	TEXT,
	"weaknesses" TEXT,
	"notes"	TEXT,
	PRIMARY KEY("scouting_report_id" AUTOINCREMENT),
	FOREIGN KEY("player_id") REFERENCES "Players"("player_id")
);

CREATE TABLE IF NOT EXISTS "Stat" (
	"stat_id"	INTEGER,
	"player_id"	INTEGER,
	"season"	INTEGER,
	"type"	TEXT,
	"count"	INTEGER,
	PRIMARY KEY("stat_id" AUTOINCREMENT),
	FOREIGN KEY("player_id") REFERENCES "Players"("player_id")
);

CREATE TABLE IF NOT EXISTS "Draft_Board" (
    "draft_board_id" INTEGER,
    "name" TEXT,
    PRIMARY KEY("draft_board_id" AUTOINCREMENT)
);

CREATE TABLE IF NOT EXISTS "Draft_Pick" (
    "draft_pick_id" INTEGER,
    "draft_board_id" INTEGER,
    "player_id" INTEGER,
    "pick_number" INTEGER,
	"team" TEXT,
    PRIMARY KEY("draft_pick_id" AUTOINCREMENT),
    FOREIGN KEY("draft_board_id") REFERENCES "Mock_Draft"("draft_board_id"),
    FOREIGN KEY("player_id") REFERENCES "Player"("player_id")
);