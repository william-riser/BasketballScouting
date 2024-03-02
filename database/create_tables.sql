CREATE TABLE IF NOT EXISTS "Schools" (
	"schools_id"	INTEGER,
	"name"	TEXT,
	"location"	TEXT,
	"division"	INTEGER,
	"conference"	TEXT,
	PRIMARY KEY("schools_id" AUTOINCREMENT)
);

CREATE TABLE IF NOT EXISTS "Players" (
	"players_id"	INTEGER,
	"school_id"	INTEGER,
	"name"	TEXT,
	"age"	INTEGER,
	"height"	INTEGER,
	"weight"	INTEGER,
	"position"	TEXT,
	PRIMARY KEY("players_id" AUTOINCREMENT),
	FOREIGN KEY("school_id") REFERENCES "Schools"("schools_id")
);

CREATE TABLE IF NOT EXISTS "Scouting_Report" (
	"scouting_report_id"	INTEGER,
	"player_id"	INTEGER NOT NULL,
	"strengths"	TEXT,
	"weaknesses"	TEXT,
	"notes"	TEXT,
	PRIMARY KEY("scouting_report_id" AUTOINCREMENT),
	FOREIGN KEY("player_id") REFERENCES "Players"("players_id")
);

CREATE TABLE IF NOT EXISTS "Stats" (
	"stats_id"	INTEGER,
	"players_id"	INTEGER,
	"season"	INTEGER,
	"type"	TEXT,
	"count"	INTEGER,
	PRIMARY KEY("stats_id" AUTOINCREMENT),
	FOREIGN KEY("players_id") REFERENCES "Players"("players_id")
);

CREATE TABLE IF NOT EXISTS "Draft_Pick" (
	"draft_pick_id"	INTEGER,
	"player_id"	INTEGER,
	"team"	TEXT,
	PRIMARY KEY("draft_pick_id" AUTOINCREMENT),
	FOREIGN KEY("player_id") REFERENCES "Players"
);

CREATE TABLE IF NOT EXISTS "Draft_Board" (
	"draft_board_id"	INTEGER,
	"creator"	TEXT,
	"pick1"	INTEGER,
    "pick2"	INTEGER,
    "pick3"	INTEGER,
    "pick4"	INTEGER,
    "pick5"	INTEGER,
    "pick6"	INTEGER,
    "pick7"	INTEGER,
    "pick8"	INTEGER,
    "pick9"	INTEGER,
    "pick10" INTEGER,
    "pick11" INTEGER,
    "pick12" INTEGER,
    "pick13" INTEGER,
    "pick14" INTEGER,
	PRIMARY KEY("draft_board_id" AUTOINCREMENT),
	FOREIGN KEY("pick1") REFERENCES "Draft_Pick"("draft_pick_id")
    FOREIGN KEY("pick2") REFERENCES "Draft_Pick"("draft_pick_id")
    FOREIGN KEY("pick3") REFERENCES "Draft_Pick"("draft_pick_id")
    FOREIGN KEY("pick4") REFERENCES "Draft_Pick"("draft_pick_id")
    FOREIGN KEY("pick5") REFERENCES "Draft_Pick"("draft_pick_id")
    FOREIGN KEY("pick6") REFERENCES "Draft_Pick"("draft_pick_id")
    FOREIGN KEY("pick7") REFERENCES "Draft_Pick"("draft_pick_id")
    FOREIGN KEY("pick8") REFERENCES "Draft_Pick"("draft_pick_id")
    FOREIGN KEY("pick9") REFERENCES "Draft_Pick"("draft_pick_id")
    FOREIGN KEY("pick10") REFERENCES "Draft_Pick"("draft_pick_id")
    FOREIGN KEY("pick11") REFERENCES "Draft_Pick"("draft_pick_id")
    FOREIGN KEY("pick12") REFERENCES "Draft_Pick"("draft_pick_id")
    FOREIGN KEY("pick13") REFERENCES "Draft_Pick"("draft_pick_id")
    FOREIGN KEY("pick14") REFERENCES "Draft_Pick"("draft_pick_id")
);

CREATE TABLE IF NOT EXISTS "Contains" (
    "draft_board_id"	INTEGER,   
    "draft_pick_id"	INTEGER,
    PRIMARY KEY("draft_board_id", "draft_pick_id"),
    FOREIGN KEY("draft_board_id") REFERENCES "Draft_Board"("draft_board_id"),
    FOREIGN KEY("draft_pick_id") REFERENCES "Draft_Pick"("draft_pick_id")
);