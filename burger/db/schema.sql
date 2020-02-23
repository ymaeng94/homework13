USE ecz3sxajja70ff18;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(50) NOT NULL,
  devoured BOOL DEFAULT FALSE,
  PRIMARY KEY (id)
);


INSERT INTO burgers (burger_name, devoured) VALUES ("In-Out Burger", FALSE);
INSERT INTO burgers (burger_name,devoured) VALUES ("Chick Fi la", FALSE);
INSERT INTO burgers (burger_name,devoured) VALUES ("shake shack Burger",FALSE);


SELECT * FROM burgers;
