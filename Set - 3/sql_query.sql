--------------------------------------
-- Set 3 (Retail Returns and Refunds)
--------------------------------------


-- Creating Database
CREATE DATABASE RetailReturnsDB; GO
USE RetailReturnsDB;


-- Creating Tables

CREATE TABLE Stores (
    StoreID         INT PRIMARY KEY,
    StoreName       NVARCHAR(50) NOT NULL,
    City            NVARCHAR(30) NOT NULL,
    Region          NVARCHAR(20) NOT NULL
);

CREATE TABLE Customers (
    CustomerID      INT PRIMARY KEY,
    CustomerName    NVARCHAR(50) NOT NULL,
    Email           NVARCHAR(100) NOT NULL,
    City            NVARCHAR(30) NOT NULL,
    CustomerType    NVARCHAR(20) NOT NULL
);

CREATE TABLE Products (
    ProductID       INT PRIMARY KEY,
    ProductName     NVARCHAR(50) NOT NULL,
    Category        NVARCHAR(30) NOT NULL,
    UnitPrice       DECIMAL(10,2) NOT NULL
);

CREATE TABLE Employees (
    EmployeeID      INT PRIMARY KEY,
    EmployeeName    NVARCHAR(50) NOT NULL,
    Designation     NVARCHAR(30) NOT NULL,
    StoreID         INT NOT NULL REFERENCES Stores(StoreID),
    ManagerID       INT REFERENCES Employees(EmployeeID)
);

CREATE TABLE Sales (
    SaleID          INT PRIMARY KEY,
    CustomerID      INT NOT NULL REFERENCES Customers(CustomerID),
    StoreID         INT NOT NULL REFERENCES Stores(StoreID),
    EmployeeID      INT NOT NULL REFERENCES Employees(EmployeeID),
    ProductID       INT NOT NULL REFERENCES Products(ProductID),
    SaleDate        DATE NOT NULL,
    Quantity        INT NOT NULL,
    UnitPrice       DECIMAL(10,2) NOT NULL
);

CREATE TABLE Returns (
    ReturnID        INT PRIMARY KEY,
    SaleID          INT NOT NULL REFERENCES Sales(SaleID),
    ProductID       INT NOT NULL REFERENCES Products(ProductID),
    CustomerID      INT NOT NULL REFERENCES Customers(CustomerID),
    StoreID         INT NOT NULL REFERENCES Stores(StoreID),
    EmployeeID      INT NOT NULL REFERENCES Employees(EmployeeID),
    ReturnDate      DATE NOT NULL,
    ReturnQuantity  INT NOT NULL,
    ReturnReason    NVARCHAR(50) NOT NULL,
    ReturnStatus    NVARCHAR(20) NOT NULL
);

CREATE TABLE Refunds (
    RefundID        INT PRIMARY KEY,
    ReturnID        INT NOT NULL REFERENCES Returns(ReturnID),
    RefundDate      DATE NOT NULL,
    RefundAmount    DECIMAL(10,2) NOT NULL,
    RefundMethod    NVARCHAR(20) NOT NULL,
    RefundStatus    NVARCHAR(20) NOT NULL
);

CREATE TABLE ReturnFeedback (
    FeedbackID      INT PRIMARY KEY,
    ReturnID        INT NOT NULL REFERENCES Returns(ReturnID),
    Rating          INT NOT NULL,
    FeedbackComment NVARCHAR(200),
    FeedbackDate    DATE NOT NULL
);


--------------------------------------
-- Inserting Sample Data
--------------------------------------

-- Stores
INSERT INTO Stores (StoreID, StoreName, City, Region) VALUES
    (1, 'Chennai Central Store', 'Chennai', 'South'),
    (2, 'Bengaluru City Store', 'Bengaluru', 'South'),
    (3, 'Hyderabad Retail Store', 'Hyderabad', 'South'),
    (4, 'Mumbai Main Store', 'Mumbai', 'West'),
    (5, 'Pune Shopping Store', 'Pune', 'West'),
    (6, 'Delhi North Store', 'New Delhi', 'North'),
    (7, 'Kolkata Retail Store', 'Kolkata', 'East');


-- Customers
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
    (11, 'Unassigned Customer', 'unassigned@example.com', 'Coimbatore', 'Individual');


-- Products
INSERT INTO Products (ProductID, ProductName, Category, UnitPrice) VALUES
    (1, 'Wireless Headphones', 'Electronics', 2500.00),
    (2, 'Smart Watch', 'Electronics', 4500.00),
    (3, 'Laptop Backpack', 'Accessories', 1800.00),
    (4, 'Running Shoes', 'Footwear', 3200.00),
    (5, 'Cotton T-Shirt', 'Clothing', 800.00),
    (6, 'Bluetooth Speaker', 'Electronics', 2200.00),
    (7, 'Travel Suitcase', 'Luggage', 5500.00),
    (8, 'Office Chair', 'Furniture', 7500.00),
    (9, 'Water Bottle', 'Accessories', 600.00),
    (10, 'Mechanical Keyboard', 'Electronics', 3000.00);


-- Employees
INSERT INTO Employees (EmployeeID, EmployeeName, Designation, StoreID, ManagerID) VALUES
    (101, 'Arjun Sharma', 'Store Manager', 1, NULL),
    (102, 'Meera Iyer', 'Store Manager', 2, NULL),
    (103, 'Rahul Verma', 'Store Manager', 4, NULL),
    (104, 'Kavya Reddy', 'Store Manager', 6, NULL),
    (105, 'Ishaan Kumar', 'Sales Executive', 1, 101),
    (106, 'Diya Nair', 'Sales Executive', 2, 102),
    (107, 'Kabir Patel', 'Returns Executive', 1, 101),
    (108, 'Riya Gupta', 'Returns Executive', 2, 102),
    (109, 'Neil Menon', 'Sales Executive', 4, 103),
    (110, 'Tara Rao', 'Returns Executive', 4, 103),
    (111, 'Ayaan Das', 'Sales Executive', 3, 101),
    (112, 'Kiara Joshi', 'Sales Executive', 5, 103);


-- Sales
INSERT INTO Sales (SaleID, CustomerID, StoreID, EmployeeID, ProductID, SaleDate, Quantity, UnitPrice) VALUES
    (1001, 1, 1, 105, 1, '2026-09-01', 10, 2500.00),
    (1002, 2, 2, 106, 2, '2026-09-02', 8, 4500.00),
    (1003, 3, 3, 111, 3, '2026-09-03', 12, 1800.00),
    (1004, 4, 4, 109, 4, '2026-09-04', 10, 3200.00),
    (1005, 5, 5, 112, 5, '2026-09-05', 20, 800.00),
    (1006, 6, 6, 104, 6, '2026-09-06', 10, 2200.00),
    (1007, 7, 7, 101, 7, '2026-09-07', 8, 5500.00),
    (1008, 8, 1, 105, 8, '2026-09-08', 5, 7500.00),
    (1009, 9, 6, 104, 9, '2026-09-09', 30, 600.00),
    (1010, 10, 4, 109, 10, '2026-09-10', 10, 3000.00),
    (1011, 1, 1, 105, 1, '2026-09-12', 10, 2500.00),
    (1012, 2, 2, 106, 2, '2026-09-13', 8, 4500.00),
    (1013, 3, 3, 111, 3, '2026-09-14', 12, 1800.00),
    (1014, 4, 4, 109, 4, '2026-09-15', 10, 3200.00),
    (1015, 5, 5, 112, 5, '2026-09-16', 20, 800.00),
    (1016, 6, 6, 104, 6, '2026-09-17', 10, 2200.00),
    (1017, 7, 7, 101, 7, '2026-09-18', 8, 5500.00),
    (1018, 8, 1, 105, 8, '2026-09-19', 5, 7500.00),
    (1019, 9, 6, 104, 9, '2026-09-20', 30, 600.00),
    (1020, 10, 4, 109, 10, '2026-09-21', 10, 3000.00),
    (1021, 2, 1, 107, 1, '2026-10-01', 10, 2500.00),
    (1022, 3, 2, 108, 2, '2026-10-02', 8, 4500.00),
    (1023, 4, 4, 110, 4, '2026-10-03', 10, 3200.00),
    (1024, 5, 5, 112, 5, '2026-10-04', 20, 800.00),
    (1025, 1, 1, 105, 6, '2026-10-05', 10, 2200.00),
    (1026, 6, 6, 104, 9, '2026-10-06', 30, 600.00),
    (1027, 7, 7, 101, 7, '2026-10-07', 8, 5500.00),
    (1028, 8, 1, 105, 3, '2026-10-08', 12, 1800.00),
    (1029, 10, 4, 109, 10, '2026-10-09', 10, 3000.00),
    (1030, 9, 6, 104, 5, '2026-10-10', 20, 800.00);


-- Returns
INSERT INTO Returns (ReturnID, SaleID, ProductID, CustomerID, StoreID, EmployeeID, ReturnDate, ReturnQuantity, ReturnReason, ReturnStatus) VALUES
    (1, 1001, 1, 1, 1, 107, '2026-09-10', 2, 'Defective Product', 'Approved'),
    (2, 1002, 2, 2, 2, 108, '2026-09-11', 3, 'Damaged Product', 'Approved'),
    (3, 1003, 3, 3, 3, 111, '2026-09-15', 1, 'Wrong Item', 'Approved'),
    (4, 1004, 4, 4, 4, 110, '2026-09-16', 2, 'Size Issue', 'Approved'),
    (5, 1005, 5, 5, 5, 112, '2026-09-18', 2, 'Quality Issue', 'Approved'),
    (6, 1006, 6, 6, 6, 104, '2026-09-20', 1, 'Defective Product', 'Approved'),
    (7, 1007, 7, 7, 7, 101, '2026-09-22', 1, 'Damaged Product', 'Approved'),
    (8, 1008, 8, 8, 1, 107, '2026-09-23', 1, 'Wrong Item', 'Pending'),
    (9, 1009, 9, 9, 6, 104, '2026-09-25', 2, 'Quality Issue', 'Approved'),
    (10, 1010, 10, 10, 4, 110, '2026-09-26', 1, 'Defective Product', 'Approved'),
    (11, 1011, 1, 1, 1, 107, '2026-09-27', 2, 'Damaged Product', 'Approved'),
    (12, 1012, 2, 2, 2, 108, '2026-09-28', 2, 'Wrong Item', 'Pending'),
    (13, 1013, 3, 3, 3, 111, '2026-09-29', 1, 'Quality Issue', 'Rejected'),
    (14, 1014, 4, 4, 4, 110, '2026-09-30', 1, 'Size Issue', 'Approved'),
    (15, 1015, 5, 5, 5, 112, '2026-10-01', 3, 'Defective Product', 'Approved'),
    (16, 1016, 6, 6, 6, 104, '2026-10-02', 1, 'Wrong Item', 'Pending'),
    (17, 1017, 7, 7, 7, 101, '2026-10-03', 2, 'Damaged Product', 'Approved'),
    (18, 1021, 1, 2, 1, 107, '2026-10-05', 1, 'Quality Issue', 'Approved'),
    (19, 1023, 4, 4, 4, 110, '2026-10-06', 2, 'Defective Product', 'Approved'),
    (20, 1025, 6, 1, 1, 107, '2026-10-08', 1, 'Damaged Product', 'Pending');


-- Refunds
INSERT INTO Refunds (RefundID, ReturnID, RefundDate, RefundAmount, RefundMethod, RefundStatus) VALUES
    (1, 1, '2026-09-11', 5000.00, 'Original Payment', 'Completed'),
    (2, 2, '2026-09-12', 13500.00, 'Bank Transfer', 'Completed'),
    (3, 3, '2026-09-16', 1800.00, 'Original Payment', 'Completed'),
    (4, 4, '2026-09-17', 6400.00, 'Bank Transfer', 'Completed'),
    (5, 5, '2026-09-19', 1600.00, 'Original Payment', 'Completed'),
    (6, 6, '2026-09-21', 2200.00, 'Original Payment', 'Completed'),
    (7, 7, '2026-09-23', 5500.00, 'Bank Transfer', 'Completed'),
    (8, 9, '2026-09-26', 1200.00, 'Original Payment', 'Completed'),
    (9, 10, '2026-09-27', 3000.00, 'Bank Transfer', 'Completed'),
    (10, 11, '2026-09-28', 5000.00, 'Original Payment', 'Completed'),
    (11, 14, '2026-10-01', 3200.00, 'Bank Transfer', 'Completed'),
    (12, 15, '2026-10-02', 2400.00, 'Original Payment', 'Completed'),
    (13, 17, '2026-10-04', 11000.00, 'Bank Transfer', 'Completed'),
    (14, 18, '2026-10-06', 2500.00, 'Original Payment', 'Completed'),
    (15, 19, '2026-10-07', 6400.00, 'Bank Transfer', 'Completed');


-- Return Feedback
INSERT INTO ReturnFeedback (FeedbackID, ReturnID, Rating, FeedbackComment, FeedbackDate) VALUES
    (1, 1, 2, 'Product stopped working after a few days', '2026-09-12'),
    (2, 2, 1, 'Received a damaged product', '2026-09-13'),
    (3, 3, 3, 'Received the wrong item', '2026-09-16'),
    (4, 4, 2, 'The product size was incorrect', '2026-09-17'),
    (5, 5, 3, 'Product quality was not satisfactory', '2026-09-20'),
    (6, 6, 2, 'Speaker was not functioning properly', '2026-09-22'),
    (7, 7, 1, 'Suitcase arrived damaged', '2026-09-24'),
    (8, 8, 3, 'Return is still being processed', '2026-09-25'),
    (9, 9, 2, 'Bottle quality was poor', '2026-09-26'),
    (10, 10, 2, 'Keyboard had defective keys', '2026-09-28'),
    (11, 12, 3, 'Waiting for return approval', '2026-09-29'),
    (12, 13, 2, 'Return request was rejected', '2026-09-30'),
    (13, 16, 3, 'Refund is still pending', '2026-10-03'),
    (14, 19, 1, 'Product was defective', '2026-10-08');



--------------------------------------
-- Assignment Tasks
--------------------------------------


-- Task 1

-- Query 1 - Products with a return rate above 10 percent
SELECT p.ProductID, p.ProductName, SUM(s.Quantity) AS TotalUnitsSold, COALESCE(SUM(r.ReturnQuantity), 0) AS TotalUnitsReturned,
    CAST(COALESCE(SUM(r.ReturnQuantity), 0) * 100.0 / NULLIF(SUM(s.Quantity), 0) AS DECIMAL(10,2)) AS ReturnRate
    FROM Products p
    INNER JOIN Sales s ON p.ProductID = s.ProductID
    LEFT JOIN Returns r ON s.SaleID = r.SaleID
    GROUP BY p.ProductID, p.ProductName
    HAVING COALESCE(SUM(r.ReturnQuantity), 0) * 100.0 / NULLIF(SUM(s.Quantity), 0) > 10
    ORDER BY ReturnRate DESC;


-- Query 2 - Customers with returns but no refund
SELECT DISTINCT c.CustomerID, c.CustomerName, c.Email
    FROM Customers c
    INNER JOIN Returns r ON c.CustomerID = r.CustomerID
    LEFT JOIN Refunds rf ON r.ReturnID = rf.ReturnID
    WHERE rf.RefundID IS NULL
    ORDER BY c.CustomerID;


-- Query 3 - Stores with the highest refund value
SELECT s.StoreID, s.StoreName, s.Region, COALESCE(SUM(rf.RefundAmount), 0) AS TotalRefundValue
    FROM Stores s
    LEFT JOIN Returns r ON s.StoreID = r.StoreID
    LEFT JOIN Refunds rf ON r.ReturnID = rf.ReturnID
    GROUP BY s.StoreID, s.StoreName, s.Region
    ORDER BY TotalRefundValue DESC;


-- Query 4 - Employees with their managers
SELECT employee.EmployeeID, employee.EmployeeName, employee.Designation, s.StoreName, manager.EmployeeName AS ManagerName, manager.Designation AS ManagerDesignation
    FROM Employees employee
    INNER JOIN Stores s ON employee.StoreID = s.StoreID
    LEFT JOIN Employees manager ON employee.ManagerID = manager.EmployeeID
    ORDER BY employee.EmployeeID;


-- Query 5 - Return details with product and customer information
SELECT r.ReturnID, p.ProductName, c.CustomerName, s.StoreName, r.ReturnDate, r.ReturnQuantity, r.ReturnReason, r.ReturnStatus
    FROM Returns r
    INNER JOIN Products p ON r.ProductID = p.ProductID
    INNER JOIN Customers c ON r.CustomerID = c.CustomerID
    INNER JOIN Stores s ON r.StoreID = s.StoreID
    ORDER BY r.ReturnDate;


-- Query 6 - Refund details with return information
SELECT rf.RefundID, r.ReturnID, p.ProductName, c.CustomerName, rf.RefundDate, rf.RefundAmount, rf.RefundMethod, rf.RefundStatus
    FROM Refunds rf
    INNER JOIN Returns r ON rf.ReturnID = r.ReturnID
    INNER JOIN Products p ON r.ProductID = p.ProductID
    INNER JOIN Customers c ON r.CustomerID = c.CustomerID
    ORDER BY rf.RefundDate;


-- Query 7 - Stores with no returns
SELECT s.StoreID, s.StoreName, s.City, s.Region
    FROM Stores s
    LEFT JOIN Returns r ON s.StoreID = r.StoreID
    WHERE r.ReturnID IS NULL
    ORDER BY s.StoreID;


-- Query 8 - Products that have never been returned
SELECT p.ProductID, p.ProductName, p.Category
    FROM Products p
    LEFT JOIN Returns r ON p.ProductID = r.ProductID
    WHERE r.ReturnID IS NULL
    ORDER BY p.ProductID;


-- Query 9 - Customers with more than one return
SELECT c.CustomerID, c.CustomerName, COUNT(r.ReturnID) AS TotalReturns, SUM(r.ReturnQuantity) AS TotalReturnedUnits
    FROM Customers c
    INNER JOIN Returns r ON c.CustomerID = r.CustomerID
    GROUP BY c.CustomerID, c.CustomerName
    HAVING COUNT(r.ReturnID) > 1
    ORDER BY TotalReturns DESC;


-- Query 10 - Return count and refund value by return reason
SELECT r.ReturnReason, COUNT(r.ReturnID) AS TotalReturns, COALESCE(SUM(rf.RefundAmount), 0) AS TotalRefundValue
    FROM Returns r
    LEFT JOIN Refunds rf ON r.ReturnID = rf.ReturnID
    GROUP BY r.ReturnReason
    ORDER BY TotalReturns DESC;



-- Task 2

-- Query 1 - IN: Products that have been returned
SELECT ProductID, ProductName, Category
    FROM Products
    WHERE ProductID IN (
        SELECT ProductID
            FROM Returns
    )
    ORDER BY ProductID;


-- Query 2 - NOT IN: Customers who have never returned a product
SELECT CustomerID, CustomerName
    FROM Customers
    WHERE CustomerID NOT IN (
        SELECT CustomerID
            FROM Returns
    )
    ORDER BY CustomerID;


-- Query 3 - Demonstrating the NULL pitfall in NOT IN
SELECT CustomerID, CustomerName
    FROM Customers
    WHERE CustomerID NOT IN (
        SELECT CustomerID
            FROM Returns
        UNION ALL
        SELECT CAST(NULL AS INT)
    );


-- Query 4 - Correcting the NULL pitfall using NOT EXISTS
SELECT c.CustomerID, c.CustomerName
    FROM Customers c
    WHERE NOT EXISTS (
        SELECT 1
            FROM Returns r
            WHERE r.CustomerID = c.CustomerID
    )
    ORDER BY c.CustomerID;



-- Task 3

-- Query 1 - ANY: Stores with refunds greater than at least one other store in the same region
WITH StoreRefunds AS (
    SELECT s.StoreID, s.StoreName, s.Region, COALESCE(SUM(rf.RefundAmount), 0) AS TotalRefundValue
        FROM Stores s
        LEFT JOIN Returns r ON s.StoreID = r.StoreID
        LEFT JOIN Refunds rf ON r.ReturnID = rf.ReturnID
        GROUP BY s.StoreID, s.StoreName, s.Region
    )
    SELECT sr.StoreID, sr.StoreName, sr.Region, sr.TotalRefundValue
        FROM StoreRefunds sr
        WHERE sr.TotalRefundValue > ANY (
            SELECT otherStore.TotalRefundValue
                FROM StoreRefunds otherStore
                WHERE otherStore.Region = sr.Region
                    AND otherStore.StoreID <> sr.StoreID
        )
        ORDER BY sr.Region, sr.TotalRefundValue DESC;


-- Query 2 - ALL: Stores with refunds greater than every other store in the same region
WITH StoreRefunds AS (
    SELECT s.StoreID, s.StoreName, s.Region, COALESCE(SUM(rf.RefundAmount), 0) AS TotalRefundValue
        FROM Stores s
        LEFT JOIN Returns r ON s.StoreID = r.StoreID
        LEFT JOIN Refunds rf ON r.ReturnID = rf.ReturnID
        GROUP BY s.StoreID, s.StoreName, s.Region
    )
    SELECT sr.StoreID, sr.StoreName, sr.Region, sr.TotalRefundValue
        FROM StoreRefunds sr
        WHERE sr.TotalRefundValue > ALL (
            SELECT otherStore.TotalRefundValue
                FROM StoreRefunds otherStore
                WHERE otherStore.Region = sr.Region
                    AND otherStore.StoreID <> sr.StoreID
        )
        ORDER BY sr.Region, sr.TotalRefundValue DESC;



-- Task 4

-- Query 1 - Products with return counts above the average return count
SELECT p.ProductID, p.ProductName, COUNT(r.ReturnID) AS TotalReturns
    FROM Products p
    INNER JOIN Returns r ON p.ProductID = r.ProductID
    GROUP BY p.ProductID, p.ProductName
    HAVING COUNT(r.ReturnID) > (
        SELECT AVG(ProductReturnCount)
            FROM (
                SELECT COUNT(r2.ReturnID) AS ProductReturnCount
                    FROM Returns r2
                    GROUP BY r2.ProductID
            ) AS ProductReturns
    )
    ORDER BY TotalReturns DESC;


-- Query 2 - Customers whose total refund value exceeds the average customer refund value
SELECT c.CustomerID, c.CustomerName, SUM(rf.RefundAmount) AS TotalRefundValue
    FROM Customers c
    INNER JOIN Returns r ON c.CustomerID = r.CustomerID
    INNER JOIN Refunds rf ON r.ReturnID = rf.ReturnID
    GROUP BY c.CustomerID, c.CustomerName
    HAVING SUM(rf.RefundAmount) > (
        SELECT AVG(CustomerRefundValue)
            FROM (
                SELECT SUM(rf2.RefundAmount) AS CustomerRefundValue
                    FROM Returns r2
                    INNER JOIN Refunds rf2 ON r2.ReturnID = rf2.ReturnID
                    GROUP BY r2.CustomerID
            ) AS CustomerRefunds
    )
    ORDER BY TotalRefundValue DESC;