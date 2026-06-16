CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    AccountType VARCHAR2(20),
    Balance NUMBER(12,2)
);
CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    EmployeeName VARCHAR2(50),
    DepartmentID NUMBER,
    Salary NUMBER(12,2)
);

INSERT INTO Accounts VALUES (101, 1, 'SAVINGS', 10000);
INSERT INTO Accounts VALUES (102, 2, 'SAVINGS', 15000);
INSERT INTO Accounts VALUES (103, 3, 'CURRENT', 20000);
INSERT INTO Accounts VALUES (104, 4, 'SAVINGS', 5000);

INSERT INTO Employees VALUES (1, 'John', 101, 50000);
INSERT INTO Employees VALUES (2, 'Smith', 101, 60000);
INSERT INTO Employees VALUES (3, 'David', 102, 55000);
INSERT INTO Employees VALUES (4, 'Mary', 103, 70000);

COMMIT;




CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
AS
BEGIN
    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'SAVINGS';
    COMMIT;
    DBMS_OUTPUT.PUT_LINE(
        'Monthly interest applied successfully.'
    );
END;
/

BEGIN
    ProcessMonthlyInterest;
END;
/