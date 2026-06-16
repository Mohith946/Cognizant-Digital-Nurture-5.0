CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(50),
    Age NUMBER,
    Balance NUMBER,
    IsVIP VARCHAR2(10)
);

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    InterestRate NUMBER,
    DueDate DATE
);

INSERT INTO Customers VALUES (101,'John',65,15000,'FALSE');
INSERT INTO Customers VALUES (102,'Smith',45,5000,'FALSE');

INSERT INTO Loans VALUES (1001,101,10,SYSDATE+20);
INSERT INTO Loans VALUES (1002,102,12,SYSDATE+40);

COMMIT;



DECLARE
    CURSOR cust_cursor IS
        SELECT c.CustomerID, c.Age
        FROM Customers c;

BEGIN
    FOR cust_rec IN cust_cursor LOOP

        IF cust_rec.Age > 60 THEN

            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = cust_rec.CustomerID;

            DBMS_OUTPUT.PUT_LINE(
                'Discount applied for Customer ID: '
                || cust_rec.CustomerID
            );

        END IF;

    END LOOP;

    COMMIT;

END;
/