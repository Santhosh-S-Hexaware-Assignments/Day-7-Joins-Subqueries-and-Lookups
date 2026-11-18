//--------------------------------------
//-- Set 1 (Logistics Shipment Analysis)
//--------------------------------------




// Creating Database
use("LogisticsDB");



// Creating Collections
db.createCollection("Hubs");
db.createCollection("Carriers");
db.createCollection("Customers");
db.createCollection("Employees");
db.createCollection("Shipments");
db.createCollection("DeliveryEvents");


// Inserting Sample Data
db.Hubs.insertMany([
    { HubID: 1, HubName: "Chennai Central Hub", City: "Chennai", State: "Tamil Nadu", Region: "South" },
    { HubID: 2, HubName: "Bengaluru Distribution Hub", City: "Bengaluru", State: "Karnataka", Region: "South" },
    { HubID: 3, HubName: "Hyderabad Logistics Hub", City: "Hyderabad", State: "Telangana", Region: "South" },
    { HubID: 4, HubName: "Mumbai Cargo Hub", City: "Mumbai", State: "Maharashtra", Region: "West" },
    { HubID: 5, HubName: "Pune Distribution Hub", City: "Pune", State: "Maharashtra", Region: "West" },
    { HubID: 6, HubName: "Delhi National Hub", City: "New Delhi", State: "Delhi", Region: "North" },
    { HubID: 7, HubName: "Kolkata Eastern Hub", City: "Kolkata", State: "West Bengal", Region: "East" },
    { HubID: 8, HubName: "Jaipur Regional Hub", City: "Jaipur", State: "Rajasthan", Region: "North" }
]);

db.Carriers.insertMany([
    { CarrierID: 1, CarrierName: "BlueDart Logistics", ContactNumber: "9876500001", ServiceType: "Express" },
    { CarrierID: 2, CarrierName: "Delhivery", ContactNumber: "9876500002", ServiceType: "Standard" },
    { CarrierID: 3, CarrierName: "DTDC Express", ContactNumber: "9876500003", ServiceType: "Express" },
    { CarrierID: 4, CarrierName: "FedEx India", ContactNumber: "9876500004", ServiceType: "International" },
    { CarrierID: 5, CarrierName: "Ecom Express", ContactNumber: "9876500005", ServiceType: "Standard" },
    { CarrierID: 6, CarrierName: "XpressBees", ContactNumber: "9876500006", ServiceType: "Express" }
]);

db.Customers.insertMany([
    { CustomerID: 1, CustomerName: "Aarav Technologies", Email: "aarav@example.com", City: "Chennai", CustomerType: "Corporate" },
    { CustomerID: 2, CustomerName: "Mavericks Retail", Email: "mavericks@example.com", City: "Bengaluru", CustomerType: "Corporate" },
    { CustomerID: 3, CustomerName: "Priya Enterprises", Email: "priya@example.com", City: "Hyderabad", CustomerType: "Business" },
    { CustomerID: 4, CustomerName: "Global Traders", Email: "global@example.com", City: "Mumbai", CustomerType: "Corporate" },
    { CustomerID: 5, CustomerName: "Ananya Stores", Email: "ananya@example.com", City: "Pune", CustomerType: "Business" },
    { CustomerID: 6, CustomerName: "Rohan Distributors", Email: "rohan@example.com", City: "Delhi", CustomerType: "Business" },
    { CustomerID: 7, CustomerName: "Meera Exports", Email: "meera@example.com", City: "Kolkata", CustomerType: "Corporate" },
    { CustomerID: 8, CustomerName: "Kabir Electronics", Email: "kabir@example.com", City: "Jaipur", CustomerType: "Business" },
    { CustomerID: 9, CustomerName: "Nila Fashion House", Email: "nila@example.com", City: "Chennai", CustomerType: "Individual" },
    { CustomerID: 10, CustomerName: "Dev Consumer Goods", Email: "dev@example.com", City: "Bengaluru", CustomerType: "Business" },
    { CustomerID: 11, CustomerName: "Unassigned Customer", Email: "unassigned@example.com", City: "Coimbatore", CustomerType: "Individual" }
]);

db.Employees.insertMany([
    { EmployeeID: 101, EmployeeName: "Arjun Sharma", Designation: "Regional Manager", HubID: 1, ManagerID: null },
    { EmployeeID: 102, EmployeeName: "Meera Iyer", Designation: "Regional Manager", HubID: 2, ManagerID: null },
    { EmployeeID: 103, EmployeeName: "Rahul Verma", Designation: "Regional Manager", HubID: 4, ManagerID: null },
    { EmployeeID: 104, EmployeeName: "Kavya Reddy", Designation: "Regional Manager", HubID: 6, ManagerID: null },
    { EmployeeID: 105, EmployeeName: "Ishaan Kumar", Designation: "Hub Supervisor", HubID: 1, ManagerID: 101 },
    { EmployeeID: 106, EmployeeName: "Diya Nair", Designation: "Hub Supervisor", HubID: 2, ManagerID: 102 },
    { EmployeeID: 107, EmployeeName: "Kabir Patel", Designation: "Operations Executive", HubID: 1, ManagerID: 105 },
    { EmployeeID: 108, EmployeeName: "Riya Gupta", Designation: "Operations Executive", HubID: 2, ManagerID: 106 },
    { EmployeeID: 109, EmployeeName: "Neil Menon", Designation: "Operations Executive", HubID: 4, ManagerID: 103 },
    { EmployeeID: 110, EmployeeName: "Tara Rao", Designation: "Operations Executive", HubID: 6, ManagerID: 104 },
    { EmployeeID: 111, EmployeeName: "Ayaan Das", Designation: "Operations Executive", HubID: 3, ManagerID: 101 },
    { EmployeeID: 112, EmployeeName: "Kiara Joshi", Designation: "Operations Executive", HubID: 7, ManagerID: 103 }
]);

db.Shipments.insertMany([
    // Customer 1: Shipments to every hub.
    { ShipmentID: 1001, CustomerID: 1, CarrierID: 1, OriginHubID: 1, DestinationHubID: 1, ShippingCost: 450.00, ShipmentDate: ISODate("2026-10-01"), PromisedDeliveryDate: ISODate("2026-10-03"), ActualDeliveryDate: ISODate("2026-10-03"), ShipmentStatus: "Delivered" },
    { ShipmentID: 1002, CustomerID: 1, CarrierID: 1, OriginHubID: 1, DestinationHubID: 2, ShippingCost: 650.00, ShipmentDate: ISODate("2026-10-02"), PromisedDeliveryDate: ISODate("2026-10-04"), ActualDeliveryDate: ISODate("2026-10-07"), ShipmentStatus: "Delivered" },
    { ShipmentID: 1003, CustomerID: 1, CarrierID: 2, OriginHubID: 1, DestinationHubID: 3, ShippingCost: 750.00, ShipmentDate: ISODate("2026-10-03"), PromisedDeliveryDate: ISODate("2026-10-06"), ActualDeliveryDate: ISODate("2026-10-06"), ShipmentStatus: "Delivered" },
    { ShipmentID: 1004, CustomerID: 1, CarrierID: 2, OriginHubID: 1, DestinationHubID: 4, ShippingCost: 950.00, ShipmentDate: ISODate("2026-10-04"), PromisedDeliveryDate: ISODate("2026-10-07"), ActualDeliveryDate: ISODate("2026-10-11"), ShipmentStatus: "Delivered" },
    { ShipmentID: 1005, CustomerID: 1, CarrierID: 3, OriginHubID: 1, DestinationHubID: 5, ShippingCost: 550.00, ShipmentDate: ISODate("2026-10-05"), PromisedDeliveryDate: ISODate("2026-10-08"), ActualDeliveryDate: ISODate("2026-10-08"), ShipmentStatus: "Delivered" },
    { ShipmentID: 1006, CustomerID: 1, CarrierID: 3, OriginHubID: 1, DestinationHubID: 6, ShippingCost: 850.00, ShipmentDate: ISODate("2026-10-06"), PromisedDeliveryDate: ISODate("2026-10-09"), ActualDeliveryDate: ISODate("2026-10-13"), ShipmentStatus: "Delivered" },
    { ShipmentID: 1007, CustomerID: 1, CarrierID: 4, OriginHubID: 1, DestinationHubID: 7, ShippingCost: 1250.00, ShipmentDate: ISODate("2026-10-07"), PromisedDeliveryDate: ISODate("2026-10-11"), ActualDeliveryDate: ISODate("2026-10-11"), ShipmentStatus: "Delivered" },
    { ShipmentID: 1008, CustomerID: 1, CarrierID: 4, OriginHubID: 1, DestinationHubID: 8, ShippingCost: 1450.00, ShipmentDate: ISODate("2026-10-08"), PromisedDeliveryDate: ISODate("2026-10-12"), ActualDeliveryDate: ISODate("2026-10-12"), ShipmentStatus: "Delivered" },
    // Customer 2.
    { ShipmentID: 1009, CustomerID: 2, CarrierID: 1, OriginHubID: 2, DestinationHubID: 1, ShippingCost: 500.00, ShipmentDate: ISODate("2026-10-10"), PromisedDeliveryDate: ISODate("2026-10-12"), ActualDeliveryDate: ISODate("2026-10-15"), ShipmentStatus: "Delivered" },
    { ShipmentID: 1010, CustomerID: 2, CarrierID: 2, OriginHubID: 2, DestinationHubID: 3, ShippingCost: 700.00, ShipmentDate: ISODate("2026-10-11"), PromisedDeliveryDate: ISODate("2026-10-14"), ActualDeliveryDate: ISODate("2026-10-14"), ShipmentStatus: "Delivered" },
    { ShipmentID: 1011, CustomerID: 2, CarrierID: 2, OriginHubID: 2, DestinationHubID: 4, ShippingCost: 900.00, ShipmentDate: ISODate("2026-10-12"), PromisedDeliveryDate: ISODate("2026-10-15"), ActualDeliveryDate: ISODate("2026-10-19"), ShipmentStatus: "Delivered" },
    { ShipmentID: 1012, CustomerID: 2, CarrierID: 3, OriginHubID: 2, DestinationHubID: 5, ShippingCost: 600.00, ShipmentDate: ISODate("2026-10-13"), PromisedDeliveryDate: ISODate("2026-10-16"), ActualDeliveryDate: ISODate("2026-10-16"), ShipmentStatus: "Delivered" },
    // Customer 3.
    { ShipmentID: 1013, CustomerID: 3, CarrierID: 3, OriginHubID: 3, DestinationHubID: 1, ShippingCost: 750.00, ShipmentDate: ISODate("2026-10-14"), PromisedDeliveryDate: ISODate("2026-10-17"), ActualDeliveryDate: ISODate("2026-10-17"), ShipmentStatus: "Delivered" },
    { ShipmentID: 1014, CustomerID: 3, CarrierID: 4, OriginHubID: 3, DestinationHubID: 4, ShippingCost: 1150.00, ShipmentDate: ISODate("2026-10-15"), PromisedDeliveryDate: ISODate("2026-10-18"), ActualDeliveryDate: ISODate("2026-10-22"), ShipmentStatus: "Delivered" },
    { ShipmentID: 1015, CustomerID: 3, CarrierID: 5, OriginHubID: 3, DestinationHubID: 6, ShippingCost: 950.00, ShipmentDate: ISODate("2026-10-16"), PromisedDeliveryDate: ISODate("2026-10-20"), ActualDeliveryDate: ISODate("2026-10-20"), ShipmentStatus: "Delivered" },
    // Customer 4.
    { ShipmentID: 1016, CustomerID: 4, CarrierID: 1, OriginHubID: 4, DestinationHubID: 2, ShippingCost: 850.00, ShipmentDate: ISODate("2026-10-17"), PromisedDeliveryDate: ISODate("2026-10-20"), ActualDeliveryDate: ISODate("2026-10-20"), ShipmentStatus: "Delivered" },
    { ShipmentID: 1017, CustomerID: 4, CarrierID: 2, OriginHubID: 4, DestinationHubID: 5, ShippingCost: 750.00, ShipmentDate: ISODate("2026-10-18"), PromisedDeliveryDate: ISODate("2026-10-21"), ActualDeliveryDate: ISODate("2026-10-25"), ShipmentStatus: "Delivered" },
    { ShipmentID: 1018, CustomerID: 4, CarrierID: 3, OriginHubID: 4, DestinationHubID: 7, ShippingCost: 1100.00, ShipmentDate: ISODate("2026-10-19"), PromisedDeliveryDate: ISODate("2026-10-22"), ActualDeliveryDate: ISODate("2026-10-22"), ShipmentStatus: "Delivered" },
    // Customer 5.
    { ShipmentID: 1019, CustomerID: 5, CarrierID: 4, OriginHubID: 5, DestinationHubID: 1, ShippingCost: 650.00, ShipmentDate: ISODate("2026-10-20"), PromisedDeliveryDate: ISODate("2026-10-23"), ActualDeliveryDate: ISODate("2026-10-27"), ShipmentStatus: "Delivered" },
    { ShipmentID: 1020, CustomerID: 5, CarrierID: 5, OriginHubID: 5, DestinationHubID: 3, ShippingCost: 700.00, ShipmentDate: ISODate("2026-10-21"), PromisedDeliveryDate: ISODate("2026-10-24"), ActualDeliveryDate: ISODate("2026-10-24"), ShipmentStatus: "Delivered" },
    { ShipmentID: 1021, CustomerID: 5, CarrierID: 1, OriginHubID: 5, DestinationHubID: 6, ShippingCost: 1250.00, ShipmentDate: ISODate("2026-10-22"), PromisedDeliveryDate: ISODate("2026-10-25"), ActualDeliveryDate: null, ShipmentStatus: "In Transit" },
    // Customer 6.
    { ShipmentID: 1022, CustomerID: 6, CarrierID: 2, OriginHubID: 6, DestinationHubID: 1, ShippingCost: 900.00, ShipmentDate: ISODate("2026-10-23"), PromisedDeliveryDate: ISODate("2026-10-26"), ActualDeliveryDate: ISODate("2026-10-26"), ShipmentStatus: "Delivered" },
    { ShipmentID: 1023, CustomerID: 6, CarrierID: 3, OriginHubID: 6, DestinationHubID: 4, ShippingCost: 850.00, ShipmentDate: ISODate("2026-10-24"), PromisedDeliveryDate: ISODate("2026-10-27"), ActualDeliveryDate: ISODate("2026-10-31"), ShipmentStatus: "Delivered" },
    { ShipmentID: 1024, CustomerID: 6, CarrierID: 4, OriginHubID: 6, DestinationHubID: 7, ShippingCost: 1350.00, ShipmentDate: ISODate("2026-10-25"), PromisedDeliveryDate: ISODate("2026-10-29"), ActualDeliveryDate: ISODate("2026-10-29"), ShipmentStatus: "Delivered" },
    // Customer 7.
    { ShipmentID: 1025, CustomerID: 7, CarrierID: 5, OriginHubID: 7, DestinationHubID: 1, ShippingCost: 1150.00, ShipmentDate: ISODate("2026-10-26"), PromisedDeliveryDate: ISODate("2026-10-29"), ActualDeliveryDate: ISODate("2026-10-29"), ShipmentStatus: "Delivered" },
    { ShipmentID: 1026, CustomerID: 7, CarrierID: 1, OriginHubID: 7, DestinationHubID: 3, ShippingCost: 950.00, ShipmentDate: ISODate("2026-10-27"), PromisedDeliveryDate: ISODate("2026-10-30"), ActualDeliveryDate: ISODate("2026-11-03"), ShipmentStatus: "Delivered" },
    { ShipmentID: 1027, CustomerID: 7, CarrierID: 2, OriginHubID: 7, DestinationHubID: 5, ShippingCost: 1050.00, ShipmentDate: ISODate("2026-10-28"), PromisedDeliveryDate: ISODate("2026-10-31"), ActualDeliveryDate: null, ShipmentStatus: "In Transit" },
    // Customer 8.
    { ShipmentID: 1028, CustomerID: 8, CarrierID: 3, OriginHubID: 8, DestinationHubID: 1, ShippingCost: 1300.00, ShipmentDate: ISODate("2026-10-29"), PromisedDeliveryDate: ISODate("2026-11-01"), ActualDeliveryDate: ISODate("2026-11-01"), ShipmentStatus: "Delivered" },
    { ShipmentID: 1029, CustomerID: 8, CarrierID: 4, OriginHubID: 8, DestinationHubID: 2, ShippingCost: 1100.00, ShipmentDate: ISODate("2026-10-30"), PromisedDeliveryDate: ISODate("2026-11-02"), ActualDeliveryDate: ISODate("2026-11-06"), ShipmentStatus: "Delivered" },
    { ShipmentID: 1030, CustomerID: 8, CarrierID: 5, OriginHubID: 8, DestinationHubID: 4, ShippingCost: 1250.00, ShipmentDate: ISODate("2026-10-31"), PromisedDeliveryDate: ISODate("2026-11-04"), ActualDeliveryDate: ISODate("2026-11-04"), ShipmentStatus: "Delivered" },
    // Additional shipments to create varied carrier and hub statistics.
    { ShipmentID: 1031, CustomerID: 9, CarrierID: 1, OriginHubID: 1, DestinationHubID: 2, ShippingCost: 400.00, ShipmentDate: ISODate("2026-11-01"), PromisedDeliveryDate: ISODate("2026-11-04"), ActualDeliveryDate: ISODate("2026-11-04"), ShipmentStatus: "Delivered" },
    { ShipmentID: 1032, CustomerID: 9, CarrierID: 2, OriginHubID: 2, DestinationHubID: 3, ShippingCost: 550.00, ShipmentDate: ISODate("2026-11-02"), PromisedDeliveryDate: ISODate("2026-11-05"), ActualDeliveryDate: ISODate("2026-11-09"), ShipmentStatus: "Delivered" },
    { ShipmentID: 1033, CustomerID: 10, CarrierID: 3, OriginHubID: 3, DestinationHubID: 4, ShippingCost: 700.00, ShipmentDate: ISODate("2026-11-03"), PromisedDeliveryDate: ISODate("2026-11-06"), ActualDeliveryDate: ISODate("2026-11-06"), ShipmentStatus: "Delivered" },
    { ShipmentID: 1034, CustomerID: 10, CarrierID: 4, OriginHubID: 4, DestinationHubID: 5, ShippingCost: 800.00, ShipmentDate: ISODate("2026-11-04"), PromisedDeliveryDate: ISODate("2026-11-07"), ActualDeliveryDate: ISODate("2026-11-11"), ShipmentStatus: "Delivered" },
    { ShipmentID: 1035, CustomerID: 2, CarrierID: 5, OriginHubID: 5, DestinationHubID: 6, ShippingCost: 950.00, ShipmentDate: ISODate("2026-11-05"), PromisedDeliveryDate: ISODate("2026-11-08"), ActualDeliveryDate: null, ShipmentStatus: "In Transit" },
    { ShipmentID: 1036, CustomerID: 3, CarrierID: 1, OriginHubID: 6, DestinationHubID: 7, ShippingCost: 1050.00, ShipmentDate: ISODate("2026-11-06"), PromisedDeliveryDate: ISODate("2026-11-09"), ActualDeliveryDate: ISODate("2026-11-09"), ShipmentStatus: "Delivered" },
    { ShipmentID: 1037, CustomerID: 4, CarrierID: 2, OriginHubID: 7, DestinationHubID: 2, ShippingCost: 1150.00, ShipmentDate: ISODate("2026-11-07"), PromisedDeliveryDate: ISODate("2026-11-10"), ActualDeliveryDate: ISODate("2026-11-14"), ShipmentStatus: "Delivered" },
    { ShipmentID: 1038, CustomerID: 5, CarrierID: 3, OriginHubID: 8, DestinationHubID: 3, ShippingCost: 1350.00, ShipmentDate: ISODate("2026-11-08"), PromisedDeliveryDate: ISODate("2026-11-11"), ActualDeliveryDate: ISODate("2026-11-11"), ShipmentStatus: "Delivered" },
    // Shipment from hub 1 to demonstrate a higher shipping cost.
    { ShipmentID: 1039, CustomerID: 1, CarrierID: 4, OriginHubID: 1, DestinationHubID: 4, ShippingCost: 2500.00, ShipmentDate: ISODate("2026-11-09"), PromisedDeliveryDate: ISODate("2026-11-12"), ActualDeliveryDate: ISODate("2026-11-12"), ShipmentStatus: "Delivered" }
]);

db.DeliveryEvents.insertMany([
    { EventID: 1, ShipmentID: 1001, EventType: "Picked Up", EventLocation: "Chennai", EventDate: ISODate("2026-10-01T09:00:00"), EventRemarks: "Shipment collected" },
    { EventID: 2, ShipmentID: 1001, EventType: "In Transit", EventLocation: "Chennai", EventDate: ISODate("2026-10-02T11:00:00"), EventRemarks: "Departed hub" },
    { EventID: 3, ShipmentID: 1001, EventType: "Delivered", EventLocation: "Chennai", EventDate: ISODate("2026-10-03T15:00:00"), EventRemarks: "Successfully delivered" },
    { EventID: 4, ShipmentID: 1002, EventType: "Picked Up", EventLocation: "Chennai", EventDate: ISODate("2026-10-02T10:00:00"), EventRemarks: "Shipment collected" },
    { EventID: 5, ShipmentID: 1002, EventType: "Delayed", EventLocation: "Bengaluru", EventDate: ISODate("2026-10-05T12:00:00"), EventRemarks: "Weather disruption" },
    { EventID: 6, ShipmentID: 1002, EventType: "Delivered", EventLocation: "Bengaluru", EventDate: ISODate("2026-10-07T16:00:00"), EventRemarks: "Delivered late" },
    { EventID: 7, ShipmentID: 1004, EventType: "Picked Up", EventLocation: "Chennai", EventDate: ISODate("2026-10-04T08:00:00"), EventRemarks: "Shipment collected" },
    { EventID: 8, ShipmentID: 1004, EventType: "Delayed", EventLocation: "Mumbai", EventDate: ISODate("2026-10-09T10:00:00"), EventRemarks: "Vehicle breakdown" },
    { EventID: 9, ShipmentID: 1004, EventType: "Delivered", EventLocation: "Mumbai", EventDate: ISODate("2026-10-11T14:00:00"), EventRemarks: "Delivered late" },
    { EventID: 10, ShipmentID: 1011, EventType: "Picked Up", EventLocation: "Bengaluru", EventDate: ISODate("2026-10-12T10:00:00"), EventRemarks: "Shipment collected" },
    { EventID: 11, ShipmentID: 1011, EventType: "Delayed", EventLocation: "Mumbai", EventDate: ISODate("2026-10-17T11:00:00"), EventRemarks: "Operational delay" },
    { EventID: 12, ShipmentID: 1011, EventType: "Delivered", EventLocation: "Mumbai", EventDate: ISODate("2026-10-19T17:00:00"), EventRemarks: "Delivered late" },
    { EventID: 13, ShipmentID: 1021, EventType: "Picked Up", EventLocation: "Pune", EventDate: ISODate("2026-10-22T09:00:00"), EventRemarks: "Shipment collected" },
    { EventID: 14, ShipmentID: 1021, EventType: "In Transit", EventLocation: "Chennai", EventDate: ISODate("2026-10-24T14:00:00"), EventRemarks: "Shipment in transit" },
    { EventID: 15, ShipmentID: 1027, EventType: "Picked Up", EventLocation: "Kolkata", EventDate: ISODate("2026-10-28T09:00:00"), EventRemarks: "Shipment collected" },
    { EventID: 16, ShipmentID: 1027, EventType: "In Transit", EventLocation: "Pune", EventDate: ISODate("2026-10-30T13:00:00"), EventRemarks: "Shipment in transit" },
    { EventID: 17, ShipmentID: 1039, EventType: "Picked Up", EventLocation: "Chennai", EventDate: ISODate("2026-11-09T09:00:00"), EventRemarks: "Shipment collected" },
    { EventID: 18, ShipmentID: 1039, EventType: "Delivered", EventLocation: "Mumbai", EventDate: ISODate("2026-11-12T14:00:00"), EventRemarks: "Successfully delivered" }
]);



// Assignment Tasks


// Task 5

// Query 1 - Shipments with Delivery Events
db.Shipments.aggregate([
    {
        $lookup: {
            from: "DeliveryEvents",
            localField: "ShipmentID",
            foreignField: "ShipmentID",
            as: "DeliveryEvents"
        }
    },
    {
        $project: {
            _id: 0,
            ShipmentID: 1,
            CustomerID: 1,
            CarrierID: 1,
            ShipmentStatus: 1,
            DeliveryEvents: 1
        }
    },
    {
        $sort: { ShipmentID: 1 }
    }
]);


// Query 2 - Customers with their Shipments
db.Customers.aggregate([
    {
        $lookup: {
            from: "Shipments",
            localField: "CustomerID",
            foreignField: "CustomerID",
            as: "Shipments"
        }
    },
    {
        $project: {
            _id: 0,
            CustomerID: 1,
            CustomerName: 1,
            Email: 1,
            City: 1,
            TotalShipments: { $size: "$Shipments" },
            Shipments: 1
        }
    },
    {
        $sort: { CustomerID: 1 }
    }
]);


// Query 3 - Carrier-wise Delivery Delay Statistics
db.Carriers.aggregate([
    {
        $lookup: {
            from: "Shipments",
            localField: "CarrierID",
            foreignField: "CarrierID",
            as: "Shipments"
        }
    },
    {
        $unwind: {
            path: "$Shipments",
            preserveNullAndEmptyArrays: true
        }
    },
    {
        $group: {
            _id: {
                CarrierID: "$CarrierID",
                CarrierName: "$CarrierName"
            },
            TotalShipments: {
                $sum: {
                    $cond: [
                        { $ne: ["$Shipments.ShipmentID", null] },
                        1,
                        0
                    ]
                }
            },
            DeliveredShipments: {
                $sum: {
                    $cond: [
                        { $eq: ["$Shipments.ShipmentStatus", "Delivered"] },
                        1,
                        0
                    ]
                }
            },
            DelayedShipments: {
                $sum: {
                    $cond: [
                        {
                            $and: [
                                { $ne: ["$Shipments.ActualDeliveryDate", null] },
                                { $gt: ["$Shipments.ActualDeliveryDate", "$Shipments.PromisedDeliveryDate"] }
                            ]
                        },
                        1,
                        0
                    ]
                }
            },
            TotalDelayDays: {
                $sum: {
                    $cond: [
                        {
                            $and: [
                                { $ne: ["$Shipments.ActualDeliveryDate", null] },
                                { $gt: ["$Shipments.ActualDeliveryDate", "$Shipments.PromisedDeliveryDate"] }
                            ]
                        },
                        {
                            $dateDiff: {
                                startDate: "$Shipments.PromisedDeliveryDate",
                                endDate: "$Shipments.ActualDeliveryDate",
                                unit: "day"
                            }
                        },
                        0
                    ]
                }
            }
        }
    },
    {
        $project: {
            _id: 0,
            CarrierID: "$_id.CarrierID",
            CarrierName: "$_id.CarrierName",
            TotalShipments: 1,
            DeliveredShipments: 1,
            DelayedShipments: 1,
            AverageDelayDays: {
                $cond: [
                    { $gt: ["$DelayedShipments", 0] },
                    { $divide: ["$TotalDelayDays", "$DelayedShipments"] },
                    0
                ]
            }
        }
    },
    {
        $sort: { CarrierID: 1 }
    }
]);