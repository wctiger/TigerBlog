--Users
CREATE TABLE Users(
    UserId INTEGER PRIMARY KEY,
    UserName VARCHAR(50) NOT NULL,
    Password VARCHAR(100) NOT NULL,
    IsAdmin BOOLEAN NOT NULL,
    DisplayName VARCHAR(100),
    Email VARCHAR(100),
    CreatedTime DateTime,
    UpdatedTime DateTime
    );


--Posts
CREATE TABLE Posts(
    PostId INTEGER PRIMARY KEY,
    Owner INTEGER NOT NULL,
    Title text,
    Summary text,
    Content text,
    IsArchived Boolean,
    CreatedTime text,
    UpdatedTime text,
    FOREIGN KEY (Owner) REFERENCES User(UserId)
);

