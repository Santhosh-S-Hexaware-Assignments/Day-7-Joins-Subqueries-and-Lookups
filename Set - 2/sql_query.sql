--------------------------------------
-- Set 2 (Bank Loan Portfolio)
--------------------------------------


-- Creating Database
CREATE DATABASE BankLoanDB; GO
USE BankLoanDB;


-- Creating Tables

CREATE TABLE Branches (
    BranchID            INT PRIMARY KEY,
    BranchName          NVARCHAR(50) NOT NULL,
    City                NVARCHAR(30) NOT NULL,
    Region              NVARCHAR(20) NOT NULL
);

CREATE TABLE Customers (
    CustomerID          INT PRIMARY KEY,
    CustomerName        NVARCHAR(50) NOT NULL,
    Email               NVARCHAR(100) NOT NULL,
    City                NVARCHAR(30) NOT NULL,
    CustomerType        NVARCHAR(20) NOT NULL
);

CREATE TABLE Loans (
    LoanID              INT PRIMARY KEY,
    CustomerID          INT NOT NULL REFERENCES Customers(CustomerID),
    BranchID            INT NOT NULL REFERENCES Branches(BranchID),
    LoanType            NVARCHAR(30) NOT NULL,
    LoanAmount          DECIMAL(12,2) NOT NULL,
    OutstandingAmount   DECIMAL(12,2) NOT NULL,
    InterestRate        DECIMAL(5,2) NOT NULL,
    LoanDate            DATE NOT NULL,
    LoanStatus          NVARCHAR(20) NOT NULL
);

CREATE TABLE Repayments (
    RepaymentID         INT PRIMARY KEY,
    LoanID              INT NOT NULL REFERENCES Loans(LoanID),
    InstallmentNumber   INT NOT NULL,
    DueDate             DATE NOT NULL,
    PaymentDate         DATE,
    AmountDue           DECIMAL(12,2) NOT NULL,
    AmountPaid          DECIMAL(12,2) NOT NULL
);

CREATE TABLE LoanGuarantors (
    LoanID                  INT NOT NULL REFERENCES Loans(LoanID),
    GuarantorCustomerID     INT NOT NULL REFERENCES Customers(CustomerID),
    GuaranteeAmount         DECIMAL(12,2) NOT NULL,
    PRIMARY KEY (LoanID, GuarantorCustomerID),
);


-- Inserting Sample Data
INSERT INTO Branches (BranchID, BranchName, City, Region) VALUES
    (1, 'Chennai Main Branch', 'Chennai', 'South'),
    (2, 'Bengaluru Central Branch', 'Bengaluru', 'South'),
    (3, 'Hyderabad Branch', 'Hyderabad', 'South'),
    (4, 'Mumbai Corporate Branch', 'Mumbai', 'West'),
    (5, 'Pune Branch', 'Pune', 'West'),
    (6, 'Delhi Main Branch', 'New Delhi', 'North'),
    (7, 'Kolkata Branch', 'Kolkata', 'East'),
    (8, 'Jaipur Branch', 'Jaipur', 'North');


INSERT INTO Customers (CustomerID, CustomerName, Email, City, CustomerType) VALUES
    (1, 'Aarav Sharma', 'aarav@example.com', 'Chennai', 'Individual'),
    (2, 'Priya Nair', 'priya@example.com', 'Bengaluru', 'Individual'),
    (3, 'Rahul Verma', 'rahul@example.com', 'Hyderabad', 'Individual'),
    (4, 'Ananya Reddy', 'ananya@example.com', 'Mumbai', 'Individual'),
    (5, 'Vikram Patel', 'vikram@example.com', 'Pune', 'Business'),
    (6, 'Meera Iyer', 'meera@example.com', 'Delhi', 'Individual'),
    (7, 'Karan Mehta', 'karan@example.com', 'Kolkata', 'Business'),
    (8, 'Diya Menon', 'diya@example.com', 'Chennai', 'Individual'),
    (9, 'Arjun Das', 'arjun@example.com', 'Jaipur', 'Individual'),
    (10, 'Nisha Kapoor', 'nisha@example.com', 'Mumbai', 'Business'),
    (11, 'Rohan Kumar', 'rohan@example.com', 'Bengaluru', 'Individual'),
    (12, 'Unassigned Customer', 'unassigned@example.com', 'Coimbatore', 'Individual');


INSERT INTO Loans (LoanID, CustomerID, BranchID, LoanType, LoanAmount, OutstandingAmount, InterestRate, LoanDate, LoanStatus) VALUES
    (1001, 1, 1, 'Home Loan', 2500000.00, 2100000.00, 8.50, '2025-01-10', 'Active'),
    (1002, 1, 2, 'Car Loan', 800000.00, 500000.00, 9.25, '2025-03-15', 'Active'),
    (1003, 2, 1, 'Personal Loan', 500000.00, 350000.00, 11.50, '2025-02-12', 'Active'),
    (1004, 2, 3, 'Education Loan', 1200000.00, 1000000.00, 7.75, '2025-04-20', 'Active'),
    (1005, 3, 2, 'Business Loan', 3000000.00, 2600000.00, 10.00, '2025-01-25', 'Active'),
    (1006, 4, 4, 'Home Loan', 4000000.00, 3500000.00, 8.25, '2025-05-05', 'Active'),
    (1007, 5, 5, 'Business Loan', 1800000.00, 1200000.00, 10.50, '2025-06-18', 'Active'),
    (1008, 6, 6, 'Car Loan', 900000.00, 650000.00, 9.00, '2025-07-10', 'Active'),
    (1009, 7, 7, 'Personal Loan', 600000.00, 450000.00, 12.00, '2025-08-22', 'Active'),
    (1010, 8, 1, 'Education Loan', 1000000.00, 800000.00, 7.50, '2025-09-12', 'Active'),
    (1011, 9, 6, 'Home Loan', 3500000.00, 3100000.00, 8.75, '2025-02-28', 'Active'),
    (1012, 10, 4, 'Business Loan', 5000000.00, 4200000.00, 10.25, '2025-03-30', 'Active'),
    (1013, 11, 2, 'Personal Loan', 400000.00, 250000.00, 11.00, '2025-10-05', 'Active'),
    (1014, 3, 3, 'Car Loan', 750000.00, 500000.00, 9.50, '2025-11-15', 'Active'),
    (1015, 5, 5, 'Home Loan', 2800000.00, 2400000.00, 8.40, '2025-12-01', 'Active'),
    (1016, 1, 1, 'Personal Loan', 300000.00, 150000.00, 12.25, '2026-01-12', 'Active'),
    (1017, 4, 4, 'Car Loan', 1000000.00, 700000.00, 9.10, '2026-02-20', 'Active'),
    (1018, 7, 7, 'Business Loan', 2200000.00, 1800000.00, 10.75, '2026-03-15', 'Active'),
    (1019, 8, 3, 'Personal Loan', 450000.00, 300000.00, 11.75, '2026-04-10', 'Active'),
    (1020, 10, 4, 'Home Loan', 3200000.00, 2700000.00, 8.60, '2026-05-25', 'Active');


INSERT INTO Repayments (RepaymentID, LoanID, InstallmentNumber, DueDate, PaymentDate, AmountDue, AmountPaid) VALUES
    (1, 1001, 1, '2026-01-05', '2026-01-05', 25000.00, 25000.00),
    (2, 1001, 2, '2026-02-05', '2026-02-05', 25000.00, 25000.00),
    (3, 1001, 3, '2026-03-05', '2026-03-05', 25000.00, 25000.00),
    (4, 1001, 4, '2026-04-05', '2026-04-05', 25000.00, 25000.00),
    (5, 1001, 5, '2026-05-05', '2026-05-05', 25000.00, 25000.00),
    (6, 1001, 6, '2026-06-05', '2026-06-05', 25000.00, 25000.00),
    (7, 1002, 1, '2026-01-10', '2026-01-10', 15000.00, 15000.00),
    (8, 1002, 2, '2026-02-10', '2026-02-10', 15000.00, 15000.00),
    (9, 1002, 3, '2026-03-10', '2026-03-10', 15000.00, 15000.00),
    (10, 1003, 1, '2026-01-15', '2026-01-15', 12000.00, 12000.00),
    (11, 1003, 2, '2026-02-15', '2026-02-15', 12000.00, 12000.00),
    (12, 1003, 3, '2026-03-15', '2026-03-15', 12000.00, 12000.00),
    (13, 1003, 4, '2026-04-15', '2026-04-15', 12000.00, 12000.00),
    (14, 1004, 1, '2026-01-20', '2026-01-20', 18000.00, 18000.00),
    (15, 1004, 2, '2026-02-20', '2026-02-20', 18000.00, 18000.00),
    (16, 1004, 3, '2026-03-20', '2026-03-20', 18000.00, 0.00),
    (17, 1004, 4, '2026-04-20', NULL, 18000.00, 0.00),
    (18, 1004, 5, '2026-05-20', NULL, 18000.00, 0.00),
    (19, 1004, 6, '2026-06-20', NULL, 18000.00, 0.00),
    (20, 1005, 1, '2026-01-25', '2026-01-25', 30000.00, 30000.00),
    (21, 1005, 2, '2026-02-25', '2026-02-25', 30000.00, 30000.00),
    (22, 1005, 3, '2026-03-25', '2026-03-25', 30000.00, 30000.00),
    (23, 1006, 1, '2026-02-05', '2026-02-05', 35000.00, 35000.00),
    (24, 1006, 2, '2026-03-05', '2026-03-05', 35000.00, 35000.00),
    (25, 1006, 3, '2026-04-05', '2026-04-05', 35000.00, 35000.00),
    (26, 1007, 1, '2026-02-18', '2026-02-18', 22000.00, 22000.00),
    (27, 1007, 2, '2026-03-18', '2026-03-18', 22000.00, 22000.00),
    (28, 1007, 3, '2026-04-18', '2026-04-18', 22000.00, 22000.00),
    (29, 1008, 1, '2026-03-10', '2026-03-10', 16000.00, 16000.00),
    (30, 1008, 2, '2026-04-10', '2026-04-10', 16000.00, 16000.00),
    (31, 1008, 3, '2026-05-10', '2026-05-10', 16000.00, 16000.00),
    (32, 1009, 1, '2026-03-22', '2026-03-22', 14000.00, 14000.00),
    (33, 1009, 2, '2026-04-22', '2026-04-22', 14000.00, 14000.00),
    (34, 1009, 3, '2026-05-22', '2026-05-22', 14000.00, 14000.00),
    (35, 1010, 1, '2026-04-12', '2026-04-12', 17000.00, 17000.00),
    (36, 1010, 2, '2026-05-12', '2026-05-12', 17000.00, 17000.00),
    (37, 1010, 3, '2026-06-12', '2026-06-12', 17000.00, 17000.00),
    (38, 1011, 1, '2026-04-28', '2026-04-28', 32000.00, 32000.00),
    (39, 1011, 2, '2026-05-28', '2026-05-28', 32000.00, 32000.00),
    (40, 1011, 3, '2026-06-28', '2026-06-28', 32000.00, 32000.00),
    (41, 1012, 1, '2026-05-30', '2026-05-30', 40000.00, 40000.00),
    (42, 1012, 2, '2026-06-30', '2026-06-30', 40000.00, 40000.00),
    (43, 1013, 1, '2026-06-05', '2026-06-05', 11000.00, 11000.00),
    (44, 1013, 2, '2026-07-05', '2026-07-05', 11000.00, 11000.00),
    (45, 1014, 1, '2026-06-15', '2026-06-15', 15000.00, 15000.00),
    (46, 1014, 2, '2026-07-15', '2026-07-15', 15000.00, 15000.00),
    (47, 1015, 1, '2026-07-01', '2026-07-01', 28000.00, 28000.00),
    (48, 1015, 2, '2026-08-01', '2026-08-01', 28000.00, 28000.00),
    (49, 1016, 1, '2026-07-12', '2026-07-12', 9000.00, 9000.00),
    (50, 1016, 2, '2026-08-12', '2026-08-12', 9000.00, 9000.00),
    (51, 1017, 1, '2026-08-20', '2026-08-20', 18000.00, 18000.00),
    (52, 1017, 2, '2026-09-20', '2026-09-20', 18000.00, 18000.00),
    (53, 1018, 1, '2026-09-15', '2026-09-15', 26000.00, 26000.00),
    (54, 1018, 2, '2026-10-15', '2026-10-15', 26000.00, 26000.00),
    (55, 1019, 1, '2026-10-10', '2026-10-10', 10000.00, 10000.00),
    (56, 1019, 2, '2026-11-10', '2026-11-10', 10000.00, 10000.00),
    (57, 1020, 1, '2026-10-25', '2026-10-25', 30000.00, 30000.00);


INSERT INTO LoanGuarantors (LoanID, GuarantorCustomerID, GuaranteeAmount) VALUES
    (1001, 2, 1000000.00),
    (1002, 3, 300000.00),
    (1003, 1, 200000.00),
    (1004, 5, 500000.00),
    (1005, 4, 1500000.00),
    (1006, 1, 2000000.00),
    (1007, 6, 800000.00),
    (1008, 7, 400000.00),
    (1009, 8, 300000.00),
    (1010, 3, 500000.00),
    (1011, 2, 1500000.00),
    (1012, 5, 2000000.00),
    (1014, 1, 300000.00),
    (1015, 4, 1200000.00),
    (1018, 9, 1000000.00);


-- Assignment Tasks


-- Task 1


-- Query 1 - Loans overdue by more than three instalments
SELECT l.LoanID, c.CustomerName, b.BranchName, COUNT(r.RepaymentID) AS OverdueInstallments, l.OutstandingAmount
    FROM Loans l
    INNER JOIN Customers c ON l.CustomerID = c.CustomerID
    INNER JOIN Branches b ON l.BranchID = b.BranchID
    INNER JOIN Repayments r ON l.LoanID = r.LoanID
    WHERE r.DueDate < CAST(GETDATE() AS DATE)
        AND r.AmountPaid < r.AmountDue
    GROUP BY l.LoanID, c.CustomerName, b.BranchName, l.OutstandingAmount
    HAVING COUNT(r.RepaymentID) > 3
    ORDER BY OverdueInstallments DESC;


-- Query 2 - Customers with loans in more than one branch
SELECT c.CustomerID, c.CustomerName, COUNT(DISTINCT l.BranchID) AS TotalBranches
    FROM Customers c
    INNER JOIN Loans l ON c.CustomerID = l.CustomerID
    GROUP BY c.CustomerID, c.CustomerName
    HAVING COUNT(DISTINCT l.BranchID) > 1
    ORDER BY TotalBranches DESC;


-- Query 3 - Guarantors who are also borrowers
SELECT borrower.CustomerID AS BorrowerID, borrower.CustomerName AS BorrowerName, guarantor.CustomerID AS GuarantorID, guarantor.CustomerName AS GuarantorName, l.LoanID
    FROM Loans l
    INNER JOIN Customers borrower ON l.CustomerID = borrower.CustomerID
    INNER JOIN LoanGuarantors lg ON l.LoanID = lg.LoanID
    INNER JOIN Customers guarantor ON lg.GuarantorCustomerID = guarantor.CustomerID
    WHERE borrower.CustomerID <> guarantor.CustomerID
    ORDER BY l.LoanID;


-- Query 4 - Branches with no loans
SELECT b.BranchID, b.BranchName, b.City, b.Region
    FROM Branches b
    LEFT JOIN Loans l ON b.BranchID = l.BranchID
    WHERE l.LoanID IS NULL
    ORDER BY b.BranchID;


-- Query 5 - Loan details with customer and branch information
SELECT l.LoanID, c.CustomerName, b.BranchName, l.LoanType, l.LoanAmount, l.OutstandingAmount, l.InterestRate, l.LoanStatus
    FROM Loans l
    INNER JOIN Customers c ON l.CustomerID = c.CustomerID
    INNER JOIN Branches b ON l.BranchID = b.BranchID
    ORDER BY l.LoanID;


-- Query 6 - Branch-wise loan count and outstanding amount
SELECT b.BranchID, b.BranchName, COUNT(l.LoanID) AS TotalLoans, COALESCE(SUM(l.OutstandingAmount), 0) AS TotalOutstandingAmount
    FROM Branches b
    LEFT JOIN Loans l ON b.BranchID = l.BranchID
    GROUP BY b.BranchID, b.BranchName
    ORDER BY TotalOutstandingAmount DESC;


-- Query 7 - Repayment details with loan and customer information
SELECT r.RepaymentID, l.LoanID, c.CustomerName, r.InstallmentNumber, r.DueDate, r.PaymentDate, r.AmountDue, r.AmountPaid
    FROM Repayments r
    INNER JOIN Loans l ON r.LoanID = l.LoanID
    INNER JOIN Customers c ON l.CustomerID = c.CustomerID
    ORDER BY l.LoanID, r.InstallmentNumber;


-- Query 8 - Loans with their guarantors
SELECT l.LoanID, c.CustomerName AS BorrowerName, g.CustomerName AS GuarantorName, lg.GuaranteeAmount
    FROM Loans l
    INNER JOIN Customers c ON l.CustomerID = c.CustomerID
    INNER JOIN LoanGuarantors lg ON l.LoanID = lg.LoanID
    INNER JOIN Customers g ON lg.GuarantorCustomerID = g.CustomerID
    ORDER BY l.LoanID;


-- Query 9 - Customers who have not taken any loans
SELECT c.CustomerID, c.CustomerName, c.Email, c.City
    FROM Customers c
    LEFT JOIN Loans l ON c.CustomerID = l.CustomerID
    WHERE l.LoanID IS NULL
    ORDER BY c.CustomerID;


-- Query 10 - Loans having more than one guarantor
SELECT l.LoanID, c.CustomerName, COUNT(lg.GuarantorCustomerID) AS TotalGuarantors
    FROM Loans l
    INNER JOIN Customers c ON l.CustomerID = c.CustomerID
    INNER JOIN LoanGuarantors lg ON l.LoanID = lg.LoanID
    GROUP BY l.LoanID, c.CustomerName
    HAVING COUNT(lg.GuarantorCustomerID) > 1
    ORDER BY TotalGuarantors DESC;


-- Task 2


-- Query 1 - Correlated subquery: Customers whose loan exposure exceeds their branch average
SELECT c.CustomerID, c.CustomerName, l.BranchID, SUM(l.OutstandingAmount) AS TotalLoanExposure
    FROM Customers c
    INNER JOIN Loans l ON c.CustomerID = l.CustomerID
    GROUP BY c.CustomerID, c.CustomerName, l.BranchID
    HAVING SUM(l.OutstandingAmount) > (
        SELECT AVG(customerExposure.TotalExposure)
            FROM (
                SELECT SUM(l2.OutstandingAmount) AS TotalExposure
                    FROM Loans l2
                    WHERE l2.BranchID = l.BranchID
                    GROUP BY l2.CustomerID
            ) AS customerExposure
    )
    ORDER BY TotalLoanExposure DESC;


-- Query 2 - Uncorrelated subquery: Customers whose total loan exposure exceeds the average exposure across branches
SELECT c.CustomerID, c.CustomerName, SUM(l.OutstandingAmount) AS TotalLoanExposure
    FROM Customers c
    INNER JOIN Loans l ON c.CustomerID = l.CustomerID
    GROUP BY c.CustomerID, c.CustomerName
    HAVING SUM(l.OutstandingAmount) > (
        SELECT AVG(BranchExposure)
            FROM (
                SELECT SUM(OutstandingAmount) AS BranchExposure
                    FROM Loans
                    GROUP BY BranchID
            ) AS BranchAverages
    )
    ORDER BY TotalLoanExposure DESC;


-- Task 3


SELECT c.CustomerID, c.CustomerName
    FROM Customers c
    WHERE EXISTS (
        SELECT 1
            FROM Loans l
            WHERE l.CustomerID = c.CustomerID
    )
    AND NOT EXISTS (
        SELECT 1
            FROM Loans l
            INNER JOIN Repayments r ON l.LoanID = r.LoanID
            WHERE l.CustomerID = c.CustomerID
                AND r.PaymentDate >= DATEADD(DAY, -60, CAST(GETDATE() AS DATE))
                AND r.PaymentDate <= CAST(GETDATE() AS DATE)
    )
    ORDER BY c.CustomerID;


-- Task 4


SELECT b.BranchID, b.BranchName, (
    SELECT MAX(l.LoanAmount)
        FROM Loans l
        WHERE l.BranchID = b.BranchID
    ) AS HighestLoanAmount
    FROM Branches b
    WHERE (
        SELECT MAX(l.LoanAmount)
            FROM Loans l
            WHERE l.BranchID = b.BranchID
    ) > (
        SELECT AVG(BranchMaximum)
            FROM (
                SELECT MAX(LoanAmount) AS BranchMaximum
                    FROM Loans
                    GROUP BY BranchID
            ) AS BranchMaximums
    )
    ORDER BY HighestLoanAmount DESC;