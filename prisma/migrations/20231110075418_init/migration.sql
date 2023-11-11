-- CreateTable
CREATE TABLE "AlphaAccessRequest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "identifier" TEXT NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "AlphaAccessRequest_identifier_key" ON "AlphaAccessRequest"("identifier");
