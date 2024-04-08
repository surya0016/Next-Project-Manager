-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "gitLink" TEXT NOT NULL,
    "progress" TEXT NOT NULL DEFAULT 'In Progress',

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);
