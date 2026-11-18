--------------------------------------
-- Set 1 (Logistics Shipment Analysis)
--------------------------------------

-- Creating Database
CREATE DATABASE LogisticsDB; GO
USE LogisticsDB;


-- Creating Tables
CREATE TABLE Hubs (
    HubID           INT PRIMARY KEY,
    HubName         NVARCHAR(100) NOT NULL,
    City            NVARCHAR(100) NOT NULL,
    State           NVARCHAR(100) NOT NULL,
    Region          NVARCHAR(50) NOT NULL
);

CREATE TABLE Carriers (
    CarrierID       INT PRIMARY KEY,
    CarrierName     VARCHAR(100) NOT NULL,
    ContactNumber   VARCHAR(15),
    ServiceType     VARCHAR(50) NOT NULL
);

CREATE TABLE Customers (
    CustomerID      INT PRIMARY KEY,
    CustomerName    VARCHAR(100) NOT NULL,
    Email           VARCHAR(100) UNIQUE,
    City            VARCHAR(100),
    CustomerType    VARCHAR(30)
);

CREATE TABLE Employees
(
    EmployeeID   INT PRIMARY KEY,
    EmployeeName VARCHAR(100) NOT NULL,
    Designation  VARCHAR(50),
    HubID        INT          NOT NULL REFERENCES Hubs (HubID),
    ManagerID    INT          NULL REFERENCES Employees (EmployeeID)
);

CREATE TABLE Shipments
(
    ShipmentID           INT PRIMARY KEY,
    CustomerID           INT NOT NULL REFERENCES Customers(CustomerID),
    CarrierID            INT NOT NULL REFERENCES Carriers(CarrierID),
    OriginHubID          INT NOT NULL REFERENCES Hubs(HubID),
    DestinationHubID     INT NOT NULL REFERENCES Hubs(HubID),
    ShippingCost         DECIMAL(10, 2) NOT NULL CHECK (ShippingCost >= 0),
    ShipmentDate         DATE NOT NULL,
    PromisedDeliveryDate DATE NOT NULL,
    ActualDeliveryDate   DATE NULL,
    ShipmentStatus       VARCHAR(30) NOT NULL
);

CREATE TABLE DeliveryEvents
(
    EventID       INT PRIMARY KEY,
    ShipmentID    INT NOT NULL REFERENCES Shipments(ShipmentID),
    EventType     VARCHAR(50) NOT NULL,
    EventLocation VARCHAR(100),
    EventDate     DATETIME2 NOT NULL,
    EventRemarks  VARCHAR(255)
);


-- Inserting Sample Data
INSERT INTO Hubs (HubID, HubName, City, State, Region) VALUES
    (1, 'Chennai Central Hub', 'Chennai', 'Tamil Nadu', 'South'),
    (2, 'Bengaluru Distribution Hub', 'Bengaluru', 'Karnataka', 'South'),
    (3, 'Hyderabad Logistics Hub', 'Hyderabad', 'Telangana', 'South'),
    (4, 'Mumbai Cargo Hub', 'Mumbai', 'Maharashtra', 'West'),
    (5, 'Pune Distribution Hub', 'Pune', 'Maharashtra', 'West'),
    (6, 'Delhi National Hub', 'New Delhi', 'Delhi', 'North'),
    (7, 'Kolkata Eastern Hub', 'Kolkata', 'West Bengal', 'East'),
    (8, 'Jaipur Regional Hub', 'Jaipur', 'Rajasthan', 'North');

INSERT INTO Carriers (CarrierID, CarrierName, ContactNumber, ServiceType) VALUES
    (1, 'BlueDart Logistics', '9876500001', 'Express'),
    (2, 'Delhivery', '9876500002', 'Standard'),
    (3, 'DTDC Express', '9876500003', 'Express'),
    (4, 'FedEx India', '9876500004', 'International'),
    (5, 'Ecom Express', '9876500005', 'Standard'),
    (6, 'XpressBees', '9876500006', 'Express');

INSERT INTO Customers (CustomerID, CustomerName, Email, City, CustomerType) VALUES
    (1, 'Aarav Technologies', 'aarav@example.com', 'Chennai', 'Corporate'),
    (2, 'Mavericks Retail', 'mavericks@example.com', 'Bengaluru', 'Corporate'),
    (3, 'Priya Enterprises', 'priya@example.com', 'Hyderabad', 'Business'),
    (4, 'Global Traders', 'global@example.com', 'Mumbai', 'Corporate'),
    (5, 'Ananya Stores', 'ananya@example.com', 'Pune', 'Business'),
    (6, 'Rohan Distributors', 'rohan@example.com', 'Delhi', 'Business'),
    (7, 'Meera Exports', 'meera@example.com', 'Kolkata', 'Corporate'),
    (8, 'Kabir Electronics', 'kabir@example.com', 'Jaipur', 'Business'),
    (9, 'Nila Fashion House', 'nila@example.com', 'Chennai', 'Individual'),
    (10, 'Dev Consumer Goods', 'dev@example.com', 'Bengaluru', 'Business'),
    (11, 'Unassigned Customer', 'unassigned@example.com', 'Coimbatore', 'Individual');

INSERT INTO Employees (EmployeeID, EmployeeName, Designation, HubID, ManagerID) VALUES
    (101, 'Arjun Sharma', 'Regional Manager', 1, NULL),
    (102, 'Meera Iyer', 'Regional Manager', 2, NULL),
    (103, 'Rahul Verma', 'Regional Manager', 4, NULL),
    (104, 'Kavya Reddy', 'Regional Manager', 6, NULL);


INSERT INTO Employees (EmployeeID, EmployeeName, Designation, HubID, ManagerID) VALUES
    (105, 'Ishaan Kumar', 'Hub Supervisor', 1, 101),
    (106, 'Diya Nair', 'Hub Supervisor', 2, 102),
    (107, 'Kabir Patel', 'Operations Executive', 1, 105),
    (108, 'Riya Gupta', 'Operations Executive', 2, 106),
    (109, 'Neil Menon', 'Operations Executive', 4, 103),
    (110, 'Tara Rao', 'Operations Executive', 6, 104),
    (111, 'Ayaan Das', 'Operations Executive', 3, 101),
    (112, 'Kiara Joshi', 'Operations Executive', 7, 103);

INSERT INTO Shipments (ShipmentID, CustomerID, CarrierID, OriginHubID, DestinationHubID, ShippingCost, ShipmentDate, PromisedDeliveryDate, ActualDeliveryDate, ShipmentStatus) VALUES
    -- Customer 1: Shipments to every hub.
    (1001, 1, 1, 1, 1, 450.00, '2026-10-01', '2026-10-03', '2026-10-03', 'Delivered'),
    (1002, 1, 1, 1, 2, 650.00, '2026-10-02', '2026-10-04', '2026-10-07', 'Delivered'),
    (1003, 1, 2, 1, 3, 750.00, '2026-10-03', '2026-10-06', '2026-10-06', 'Delivered'),
    (1004, 1, 2, 1, 4, 950.00, '2026-10-04', '2026-10-07', '2026-10-11', 'Delivered'),
    (1005, 1, 3, 1, 5, 550.00, '2026-10-05', '2026-10-08', '2026-10-08', 'Delivered'),
    (1006, 1, 3, 1, 6, 850.00, '2026-10-06', '2026-10-09', '2026-10-13', 'Delivered'),
    (1007, 1, 4, 1, 7, 1250.00, '2026-10-07', '2026-10-11', '2026-10-11', 'Delivered'),
    (1008, 1, 4, 1, 8, 1450.00, '2026-10-08', '2026-10-12', '2026-10-12', 'Delivered'),
    -- Customer 2.
    (1009, 2, 1, 2, 1, 500.00, '2026-10-10', '2026-10-12', '2026-10-15', 'Delivered'),
    (1010, 2, 2, 2, 3, 700.00, '2026-10-11', '2026-10-14', '2026-10-14', 'Delivered'),
    (1011, 2, 2, 2, 4, 900.00, '2026-10-12', '2026-10-15', '2026-10-19', 'Delivered'),
    (1012, 2, 3, 2, 5, 600.00, '2026-10-13', '2026-10-16', '2026-10-16', 'Delivered'),
    -- Customer 3.
    (1013, 3, 3, 3, 1, 750.00, '2026-10-14', '2026-10-17', '2026-10-17', 'Delivered'),
    (1014, 3, 4, 3, 4, 1150.00, '2026-10-15', '2026-10-18', '2026-10-22', 'Delivered'),
    (1015, 3, 5, 3, 6, 950.00, '2026-10-16', '2026-10-20', '2026-10-20', 'Delivered'),
    -- Customer 4.
    (1016, 4, 1, 4, 2, 850.00, '2026-10-17', '2026-10-20', '2026-10-20', 'Delivered'),
    (1017, 4, 2, 4, 5, 750.00, '2026-10-18', '2026-10-21', '2026-10-25', 'Delivered'),
    (1018, 4, 3, 4, 7, 1100.00, '2026-10-19', '2026-10-22', '2026-10-22', 'Delivered'),
    -- Customer 5.
    (1019, 5, 4, 5, 1, 650.00, '2026-10-20', '2026-10-23', '2026-10-27', 'Delivered'),
    (1020, 5, 5, 5, 3, 700.00, '2026-10-21', '2026-10-24', '2026-10-24', 'Delivered'),
    (1021, 5, 1, 5, 6, 1250.00, '2026-10-22', '2026-10-25', NULL, 'In Transit'),
    -- Customer 6.
    (1022, 6, 2, 6, 1, 900.00, '2026-10-23', '2026-10-26', '2026-10-26', 'Delivered'),
    (1023, 6, 3, 6, 4, 850.00, '2026-10-24', '2026-10-27', '2026-10-31', 'Delivered'),
    (1024, 6, 4, 6, 7, 1350.00, '2026-10-25', '2026-10-29', '2026-10-29', 'Delivered'),
    -- Customer 7.
    (1025, 7, 5, 7, 1, 1150.00, '2026-10-26', '2026-10-29', '2026-10-29', 'Delivered'),
    (1026, 7, 1, 7, 3, 950.00, '2026-10-27', '2026-10-30', '2026-11-03', 'Delivered'),
    (1027, 7, 2, 7, 5, 1050.00, '2026-10-28', '2026-10-31', NULL, 'In Transit'),
    -- Customer 8.
    (1028, 8, 3, 8, 1, 1300.00, '2026-10-29', '2026-11-01', '2026-11-01', 'Delivered'),
    (1029, 8, 4, 8, 2, 1100.00, '2026-10-30', '2026-11-02', '2026-11-06', 'Delivered'),
    (1030, 8, 5, 8, 4, 1250.00, '2026-10-31', '2026-11-04', '2026-11-04', 'Delivered'),
    -- Additional shipments to create varied carrier and hub statistics.
    (1031, 9, 1, 1, 2, 400.00, '2026-11-01', '2026-11-04', '2026-11-04', 'Delivered'),
    (1032, 9, 2, 2, 3, 550.00, '2026-11-02', '2026-11-05', '2026-11-09', 'Delivered'),
    (1033, 10, 3, 3, 4, 700.00, '2026-11-03', '2026-11-06', '2026-11-06', 'Delivered'),
    (1034, 10, 4, 4, 5, 800.00, '2026-11-04', '2026-11-07', '2026-11-11', 'Delivered'),
    (1035, 2, 5, 5, 6, 950.00, '2026-11-05', '2026-11-08', NULL, 'In Transit'),
    (1036, 3, 1, 6, 7, 1050.00, '2026-11-06', '2026-11-09', '2026-11-09', 'Delivered'),
    (1037, 4, 2, 7, 2, 1150.00, '2026-11-07', '2026-11-10', '2026-11-14', 'Delivered'),
    (1038, 5, 3, 8, 3, 1350.00, '2026-11-08', '2026-11-11', '2026-11-11', 'Delivered'),
    -- Shipment from hub 1 to demonstrate a higher shipping cost.
    (1039, 1, 4, 1, 4, 2500.00, '2026-11-09', '2026-11-12', '2026-11-12', 'Delivered');

INSERT INTO DeliveryEvents (EventID, ShipmentID, EventType, EventLocation, EventDate, EventRemarks) VALUES
    (1, 1001, 'Picked Up', 'Chennai', '2026-10-01 09:00:00', 'Shipment collected'),
    (2, 1001, 'In Transit', 'Chennai', '2026-10-02 11:00:00', 'Departed hub'),
    (3, 1001, 'Delivered', 'Chennai', '2026-10-03 15:00:00', 'Successfully delivered'),
    (4, 1002, 'Picked Up', 'Chennai', '2026-10-02 10:00:00', 'Shipment collected'),
    (5, 1002, 'Delayed', 'Bengaluru', '2026-10-05 12:00:00', 'Weather disruption'),
    (6, 1002, 'Delivered', 'Bengaluru', '2026-10-07 16:00:00', 'Delivered late'),
    (7, 1004, 'Picked Up', 'Chennai', '2026-10-04 08:00:00', 'Shipment collected'),
    (8, 1004, 'Delayed', 'Mumbai', '2026-10-09 10:00:00', 'Vehicle breakdown'),
    (9, 1004, 'Delivered', 'Mumbai', '2026-10-11 14:00:00', 'Delivered late'),
    (10, 1011, 'Picked Up', 'Bengaluru', '2026-10-12 10:00:00', 'Shipment collected'),
    (11, 1011, 'Delayed', 'Mumbai', '2026-10-17 11:00:00', 'Operational delay'),
    (12, 1011, 'Delivered', 'Mumbai', '2026-10-19 17:00:00', 'Delivered late'),
    (13, 1021, 'Picked Up', 'Pune', '2026-10-22 09:00:00', 'Shipment collected'),
    (14, 1021, 'In Transit', 'Chennai', '2026-10-24 14:00:00', 'Shipment in transit'),
    (15, 1027, 'Picked Up', 'Kolkata', '2026-10-28 09:00:00', 'Shipment collected'),
    (16, 1027, 'In Transit', 'Pune', '2026-10-30 13:00:00', 'Shipment in transit'),
    (17, 1039, 'Picked Up', 'Chennai', '2026-11-09 09:00:00', 'Shipment collected'),
    (18, 1039, 'Delivered', 'Mumbai', '2026-11-12 14:00:00', 'Successfully delivered');


-------------------
-- Assignment Tasks
-------------------

-- Task 1

-- Query 1
SELECT s.ShipmentID, c.CarrierName, customer.CustomerName, origin.HubName AS OriginHub, destination.HubName AS DestinationHub, s.PromisedDeliveryDate, s.ActualDeliveryDate, DATEDIFF(DAY, s.PromisedDeliveryDate, s.ActualDeliveryDate) AS DelayInDays
    FROM Shipments s
    INNER JOIN Carriers c ON s.CarrierID = c.CarrierID
    INNER JOIN Customers customer ON s.CustomerID = customer.CustomerID
    INNER JOIN Hubs origin ON s.OriginHubID = origin.HubID
    INNER JOIN Hubs destination ON s.DestinationHubID = destination.HubID
    WHERE s.ActualDeliveryDate IS NOT NULL
        AND s.ActualDeliveryDate > DATEADD(DAY, 2, s.PromisedDeliveryDate)
    ORDER BY DelayInDays DESC;


-- Query 2
SELECT h.HubID, h.HubName, h.City, h.Region
    FROM Hubs h
    LEFT JOIN Shipments s ON h.HubID = s.OriginHubID
    WHERE s.ShipmentID IS NULL;


-- Query 3
SELECT employee.EmployeeID, employee.EmployeeName, employee.Designation, supervisor.EmployeeName AS SupervisorName, supervisor.Designation AS SupervisorDesignation
    FROM Employees employee
    LEFT JOIN Employees supervisor ON employee.ManagerID = supervisor.EmployeeID
    ORDER BY employee.EmployeeID;


-- Query 4
SELECT s.ShipmentID, customer.CustomerName, carrier.CarrierName, origin.HubName AS OriginHub, destination.HubName AS DestinationHub, s.ShippingCost, s.ShipmentStatus
    FROM Shipments s
    INNER JOIN Customers customer ON s.CustomerID = customer.CustomerID
    INNER JOIN Carriers carrier ON s.CarrierID = carrier.CarrierID
    INNER JOIN Hubs origin ON s.OriginHubID = origin.HubID
    INNER JOIN Hubs destination ON s.DestinationHubID = destination.HubID
    ORDER BY s.ShipmentID;


-- Query 5
SELECT c.CustomerID, c.CustomerName, c.Email, c.City
    FROM Customers c
    LEFT JOIN Shipments s ON c.CustomerID = s.CustomerID
    WHERE s.ShipmentID IS NULL;


-- Query 6
SELECT c.CarrierID, c.CarrierName, COUNT(s.ShipmentID) AS TotalShipments, COALESCE(SUM(s.ShippingCost), 0) AS TotalShippingRevenue
    FROM Carriers c
    FULL OUTER JOIN Shipments s ON c.CarrierID = s.CarrierID
    GROUP BY c.CarrierID, c.CarrierName
    ORDER BY TotalShipments DESC;


-- Query 7
SELECT s.ShipmentID, s.ShipmentStatus, e.EventID, e.EventType, e.EventLocation, e.EventDate, e.EventRemarks
    FROM Shipments s
    LEFT JOIN DeliveryEvents e ON s.ShipmentID = e.ShipmentID
    ORDER BY s.ShipmentID, e.EventDate;


-- Query 8
SELECT h.HubID, h.HubName, COUNT(DISTINCT outbound.ShipmentID) AS OutboundShipments, COUNT(DISTINCT inbound.ShipmentID) AS InboundShipments
    FROM Hubs h
    LEFT JOIN Shipments outbound ON h.HubID = outbound.OriginHubID
    LEFT JOIN Shipments inbound ON h.HubID = inbound.DestinationHubID
    GROUP BY h.HubID, h.HubName
    ORDER BY h.HubID;


-- Query 9
SELECT c.CustomerID, c.CustomerName, COUNT(s.ShipmentID) AS TotalShipments, SUM(s.ShippingCost) AS TotalShippingCost
    FROM Customers c
    INNER JOIN Shipments s ON c.CustomerID = s.CustomerID
    GROUP BY c.CustomerID, c.CustomerName
    HAVING COUNT(s.ShipmentID) > 2
    ORDER BY TotalShipments DESC;


-- Query 10
SELECT s1.ShipmentID AS ShipmentOne, s2.ShipmentID AS ShipmentTwo, c.CarrierName, s1.ShippingCost AS FirstShippingCost, s2.ShippingCost AS SecondShippingCost
    FROM Shipments s1
    INNER JOIN Shipments s2
    ON s1.CarrierID = s2.CarrierID
    AND s1.ShipmentID < s2.ShipmentID
    INNER JOIN Carriers c ON s1.CarrierID = c.CarrierID
    WHERE s1.ShippingCost <> s2.ShippingCost
    ORDER BY c.CarrierName;


-- Task 2

-- Query 1
SELECT c.CustomerID, c.CustomerName
    FROM Customers c
    WHERE NOT EXISTS (
        SELECT 1
        FROM Hubs h
        WHERE NOT EXISTS (
            SELECT 1
            FROM Shipments s
            WHERE s.CustomerID = c.CustomerID
            AND s.DestinationHubID = h.HubID
        )
    );


-- Query 2
SELECT CustomerID, CustomerName
    FROM Customers
    WHERE CustomerID IN (
        SELECT CustomerID
        FROM Shipments
        WHERE DestinationHubID IN (
            SELECT HubID
            FROM Hubs
            WHERE Region = 'West'
        )
    );


-- Query 3
SELECT c.CustomerID, c.CustomerName
    FROM Customers c
    WHERE EXISTS (
        SELECT 1
        FROM Shipments s
        WHERE s.CustomerID = c.CustomerID
            AND s.ActualDeliveryDate IS NOT NULL
            AND s.ActualDeliveryDate > DATEADD(DAY, 2, s.PromisedDeliveryDate)
    );


-- Query 4
WITH CarrierDelays AS (
    SELECT CarrierID, AVG(CAST(DATEDIFF(DAY, PromisedDeliveryDate, ActualDeliveryDate) AS DECIMAL(10,2))) AS AverageDelay
        FROM Shipments
        WHERE ActualDeliveryDate IS NOT NULL
        GROUP BY CarrierID
    )
    SELECT c.CarrierID, c.CarrierName, cd.AverageDelay
        FROM CarrierDelays cd
        INNER JOIN Carriers c
        ON cd.CarrierID = c.CarrierID
        WHERE cd.AverageDelay > ALL (
            SELECT AverageDelay
                FROM CarrierDelays
        )
        ORDER BY cd.AverageDelay DESC;


-- Query 5
SELECT ShipmentID, ShippingCost
    FROM Shipments
    WHERE ShippingCost > ANY (
        SELECT ShippingCost
            FROM Shipments
            WHERE CarrierID = 1
    )
    ORDER BY ShippingCost DESC;


-- Task 3


-- Query 1.1
SELECT CustomerID, CustomerName
    FROM Customers
    WHERE CustomerID IN (
        SELECT CustomerID
        FROM Shipments
    );


-- Query 1.2
SELECT DISTINCT c.CustomerID, c.CustomerName
    FROM Customers c
    INNER JOIN Shipments s ON c.CustomerID = s.CustomerID;


-- Query 2.1
SELECT h.HubID, h.HubName
    FROM Hubs h
    WHERE NOT EXISTS (
        SELECT 1
            FROM Shipments s
            WHERE s.OriginHubID = h.HubID
    );


-- Query 2.2
SELECT h.HubID, h.HubName
    FROM Hubs h
    LEFT JOIN Shipments s ON h.HubID = s.OriginHubID
    WHERE s.ShipmentID IS NULL;


-- Task 4
SELECT h.HubID, h.HubName, (
    SELECT MAX(s2.ShippingCost)
        FROM Shipments s2
        WHERE s2.OriginHubID = h.HubID
            AND s2.ShippingCost < (
                SELECT MAX(s3.ShippingCost)
                    FROM Shipments s3
                    WHERE s3.OriginHubID = h.HubID
            )
    ) AS SecondHighestShippingCost
    FROM Hubs h
    ORDER BY h.HubID;

