//--------------------------------------
// Set 3 (Retail Returns and Refunds)
//--------------------------------------



// Creating Database
use("RetailReturnsDB");



// Creating Collections
db.createCollection("Stores");
db.createCollection("Customers");
db.createCollection("Products");
db.createCollection("Employees");
db.createCollection("Sales");
db.createCollection("Returns");
db.createCollection("Refunds");
db.createCollection("ReturnFeedback");



// Inserting Sample Data

// Stores
db.Stores.insertMany([
    { StoreID: 1, StoreName: "Chennai Central Store", City: "Chennai", Region: "South" },
    { StoreID: 2, StoreName: "Bengaluru City Store", City: "Bengaluru", Region: "South" },
    { StoreID: 3, StoreName: "Hyderabad Retail Store", City: "Hyderabad", Region: "South" },
    { StoreID: 4, StoreName: "Mumbai Main Store", City: "Mumbai", Region: "West" },
    { StoreID: 5, StoreName: "Pune Shopping Store", City: "Pune", Region: "West" },
    { StoreID: 6, StoreName: "Delhi North Store", City: "New Delhi", Region: "North" },
    { StoreID: 7, StoreName: "Kolkata Retail Store", City: "Kolkata", Region: "East" }
]);


// Customers
db.Customers.insertMany([
    { CustomerID: 1, CustomerName: "Aarav Sharma", Email: "aarav@example.com", City: "Chennai", CustomerType: "Individual" },
    { CustomerID: 2, CustomerName: "Priya Nair", Email: "priya@example.com", City: "Bengaluru", CustomerType: "Individual" },
    { CustomerID: 3, CustomerName: "Rahul Verma", Email: "rahul@example.com", City: "Hyderabad", CustomerType: "Individual" },
    { CustomerID: 4, CustomerName: "Ananya Reddy", Email: "ananya@example.com", City: "Mumbai", CustomerType: "Individual" },
    { CustomerID: 5, CustomerName: "Vikram Patel", Email: "vikram@example.com", City: "Pune", CustomerType: "Business" },
    { CustomerID: 6, CustomerName: "Meera Iyer", Email: "meera@example.com", City: "Delhi", CustomerType: "Individual" },
    { CustomerID: 7, CustomerName: "Karan Mehta", Email: "karan@example.com", City: "Kolkata", CustomerType: "Business" },
    { CustomerID: 8, CustomerName: "Diya Menon", Email: "diya@example.com", City: "Chennai", CustomerType: "Individual" },
    { CustomerID: 9, CustomerName: "Arjun Das", Email: "arjun@example.com", City: "Jaipur", CustomerType: "Individual" },
    { CustomerID: 10, CustomerName: "Nisha Kapoor", Email: "nisha@example.com", City: "Mumbai", CustomerType: "Business" },
    { CustomerID: 11, CustomerName: "Unassigned Customer", Email: "unassigned@example.com", City: "Coimbatore", CustomerType: "Individual" }
]);


// Products
db.Products.insertMany([
    { ProductID: 1, ProductName: "Wireless Headphones", Category: "Electronics", UnitPrice: 2500.00 },
    { ProductID: 2, ProductName: "Smart Watch", Category: "Electronics", UnitPrice: 4500.00 },
    { ProductID: 3, ProductName: "Laptop Backpack", Category: "Accessories", UnitPrice: 1800.00 },
    { ProductID: 4, ProductName: "Running Shoes", Category: "Footwear", UnitPrice: 3200.00 },
    { ProductID: 5, ProductName: "Cotton T-Shirt", Category: "Clothing", UnitPrice: 800.00 },
    { ProductID: 6, ProductName: "Bluetooth Speaker", Category: "Electronics", UnitPrice: 2200.00 },
    { ProductID: 7, ProductName: "Travel Suitcase", Category: "Luggage", UnitPrice: 5500.00 },
    { ProductID: 8, ProductName: "Office Chair", Category: "Furniture", UnitPrice: 7500.00 },
    { ProductID: 9, ProductName: "Water Bottle", Category: "Accessories", UnitPrice: 600.00 },
    { ProductID: 10, ProductName: "Mechanical Keyboard", Category: "Electronics", UnitPrice: 3000.00 }
]);


// Employees
db.Employees.insertMany([
    { EmployeeID: 101, EmployeeName: "Arjun Sharma", Designation: "Store Manager", StoreID: 1, ManagerID: null },
    { EmployeeID: 102, EmployeeName: "Meera Iyer", Designation: "Store Manager", StoreID: 2, ManagerID: null },
    { EmployeeID: 103, EmployeeName: "Rahul Verma", Designation: "Store Manager", StoreID: 4, ManagerID: null },
    { EmployeeID: 104, EmployeeName: "Kavya Reddy", Designation: "Store Manager", StoreID: 6, ManagerID: null },
    { EmployeeID: 105, EmployeeName: "Ishaan Kumar", Designation: "Sales Executive", StoreID: 1, ManagerID: 101 },
    { EmployeeID: 106, EmployeeName: "Diya Nair", Designation: "Sales Executive", StoreID: 2, ManagerID: 102 },
    { EmployeeID: 107, EmployeeName: "Kabir Patel", Designation: "Returns Executive", StoreID: 1, ManagerID: 101 },
    { EmployeeID: 108, EmployeeName: "Riya Gupta", Designation: "Returns Executive", StoreID: 2, ManagerID: 102 },
    { EmployeeID: 109, EmployeeName: "Neil Menon", Designation: "Sales Executive", StoreID: 4, ManagerID: 103 },
    { EmployeeID: 110, EmployeeName: "Tara Rao", Designation: "Returns Executive", StoreID: 4, ManagerID: 103 },
    { EmployeeID: 111, EmployeeName: "Ayaan Das", Designation: "Sales Executive", StoreID: 3, ManagerID: 101 },
    { EmployeeID: 112, EmployeeName: "Kiara Joshi", Designation: "Sales Executive", StoreID: 5, ManagerID: 103 }
]);


// Sales
db.Sales.insertMany([
    { SaleID: 1001, CustomerID: 1, StoreID: 1, EmployeeID: 105, ProductID: 1, SaleDate: ISODate("2026-09-01"), Quantity: 10, UnitPrice: 2500.00 },
    { SaleID: 1002, CustomerID: 2, StoreID: 2, EmployeeID: 106, ProductID: 2, SaleDate: ISODate("2026-09-02"), Quantity: 8, UnitPrice: 4500.00 },
    { SaleID: 1003, CustomerID: 3, StoreID: 3, EmployeeID: 111, ProductID: 3, SaleDate: ISODate("2026-09-03"), Quantity: 12, UnitPrice: 1800.00 },
    { SaleID: 1004, CustomerID: 4, StoreID: 4, EmployeeID: 109, ProductID: 4, SaleDate: ISODate("2026-09-04"), Quantity: 10, UnitPrice: 3200.00 },
    { SaleID: 1005, CustomerID: 5, StoreID: 5, EmployeeID: 112, ProductID: 5, SaleDate: ISODate("2026-09-05"), Quantity: 20, UnitPrice: 800.00 },
    { SaleID: 1006, CustomerID: 6, StoreID: 6, EmployeeID: 104, ProductID: 6, SaleDate: ISODate("2026-09-06"), Quantity: 10, UnitPrice: 2200.00 },
    { SaleID: 1007, CustomerID: 7, StoreID: 7, EmployeeID: 101, ProductID: 7, SaleDate: ISODate("2026-09-07"), Quantity: 8, UnitPrice: 5500.00 },
    { SaleID: 1008, CustomerID: 8, StoreID: 1, EmployeeID: 105, ProductID: 8, SaleDate: ISODate("2026-09-08"), Quantity: 5, UnitPrice: 7500.00 },
    { SaleID: 1009, CustomerID: 9, StoreID: 6, EmployeeID: 104, ProductID: 9, SaleDate: ISODate("2026-09-09"), Quantity: 30, UnitPrice: 600.00 },
    { SaleID: 1010, CustomerID: 10, StoreID: 4, EmployeeID: 109, ProductID: 10, SaleDate: ISODate("2026-09-10"), Quantity: 10, UnitPrice: 3000.00 },
    { SaleID: 1011, CustomerID: 1, StoreID: 1, EmployeeID: 105, ProductID: 1, SaleDate: ISODate("2026-09-12"), Quantity: 10, UnitPrice: 2500.00 },
    { SaleID: 1012, CustomerID: 2, StoreID: 2, EmployeeID: 106, ProductID: 2, SaleDate: ISODate("2026-09-13"), Quantity: 8, UnitPrice: 4500.00 },
    { SaleID: 1013, CustomerID: 3, StoreID: 3, EmployeeID: 111, ProductID: 3, SaleDate: ISODate("2026-09-14"), Quantity: 12, UnitPrice: 1800.00 },
    { SaleID: 1014, CustomerID: 4, StoreID: 4, EmployeeID: 109, ProductID: 4, SaleDate: ISODate("2026-09-15"), Quantity: 10, UnitPrice: 3200.00 },
    { SaleID: 1015, CustomerID: 5, StoreID: 5, EmployeeID: 112, ProductID: 5, SaleDate: ISODate("2026-09-16"), Quantity: 20, UnitPrice: 800.00 },
    { SaleID: 1016, CustomerID: 6, StoreID: 6, EmployeeID: 104, ProductID: 6, SaleDate: ISODate("2026-09-17"), Quantity: 10, UnitPrice: 2200.00 },
    { SaleID: 1017, CustomerID: 7, StoreID: 7, EmployeeID: 101, ProductID: 7, SaleDate: ISODate("2026-09-18"), Quantity: 8, UnitPrice: 5500.00 },
    { SaleID: 1018, CustomerID: 8, StoreID: 1, EmployeeID: 105, ProductID: 8, SaleDate: ISODate("2026-09-19"), Quantity: 5, UnitPrice: 7500.00 },
    { SaleID: 1019, CustomerID: 9, StoreID: 6, EmployeeID: 104, ProductID: 9, SaleDate: ISODate("2026-09-20"), Quantity: 30, UnitPrice: 600.00 },
    { SaleID: 1020, CustomerID: 10, StoreID: 4, EmployeeID: 109, ProductID: 10, SaleDate: ISODate("2026-09-21"), Quantity: 10, UnitPrice: 3000.00 },
    { SaleID: 1021, CustomerID: 2, StoreID: 1, EmployeeID: 107, ProductID: 1, SaleDate: ISODate("2026-10-01"), Quantity: 10, UnitPrice: 2500.00 },
    { SaleID: 1022, CustomerID: 3, StoreID: 2, EmployeeID: 108, ProductID: 2, SaleDate: ISODate("2026-10-02"), Quantity: 8, UnitPrice: 4500.00 },
    { SaleID: 1023, CustomerID: 4, StoreID: 4, EmployeeID: 110, ProductID: 4, SaleDate: ISODate("2026-10-03"), Quantity: 10, UnitPrice: 3200.00 },
    { SaleID: 1024, CustomerID: 5, StoreID: 5, EmployeeID: 112, ProductID: 5, SaleDate: ISODate("2026-10-04"), Quantity: 20, UnitPrice: 800.00 },
    { SaleID: 1025, CustomerID: 1, StoreID: 1, EmployeeID: 105, ProductID: 6, SaleDate: ISODate("2026-10-05"), Quantity: 10, UnitPrice: 2200.00 },
    { SaleID: 1026, CustomerID: 6, StoreID: 6, EmployeeID: 104, ProductID: 9, SaleDate: ISODate("2026-10-06"), Quantity: 30, UnitPrice: 600.00 },
    { SaleID: 1027, CustomerID: 7, StoreID: 7, EmployeeID: 101, ProductID: 7, SaleDate: ISODate("2026-10-07"), Quantity: 8, UnitPrice: 5500.00 },
    { SaleID: 1028, CustomerID: 8, StoreID: 1, EmployeeID: 105, ProductID: 3, SaleDate: ISODate("2026-10-08"), Quantity: 12, UnitPrice: 1800.00 },
    { SaleID: 1029, CustomerID: 10, StoreID: 4, EmployeeID: 109, ProductID: 10, SaleDate: ISODate("2026-10-09"), Quantity: 10, UnitPrice: 3000.00 },
    { SaleID: 1030, CustomerID: 9, StoreID: 6, EmployeeID: 104, ProductID: 5, SaleDate: ISODate("2026-10-10"), Quantity: 20, UnitPrice: 800.00 }
]);


// Returns
db.Returns.insertMany([
    { ReturnID: 1, SaleID: 1001, ProductID: 1, CustomerID: 1, StoreID: 1, EmployeeID: 107, ReturnDate: ISODate("2026-09-10"), ReturnQuantity: 2, ReturnReason: "Defective Product", ReturnStatus: "Approved" },
    { ReturnID: 2, SaleID: 1002, ProductID: 2, CustomerID: 2, StoreID: 2, EmployeeID: 108, ReturnDate: ISODate("2026-09-11"), ReturnQuantity: 3, ReturnReason: "Damaged Product", ReturnStatus: "Approved" },
    { ReturnID: 3, SaleID: 1003, ProductID: 3, CustomerID: 3, StoreID: 3, EmployeeID: 111, ReturnDate: ISODate("2026-09-15"), ReturnQuantity: 1, ReturnReason: "Wrong Item", ReturnStatus: "Approved" },
    { ReturnID: 4, SaleID: 1004, ProductID: 4, CustomerID: 4, StoreID: 4, EmployeeID: 110, ReturnDate: ISODate("2026-09-16"), ReturnQuantity: 2, ReturnReason: "Size Issue", ReturnStatus: "Approved" },
    { ReturnID: 5, SaleID: 1005, ProductID: 5, CustomerID: 5, StoreID: 5, EmployeeID: 112, ReturnDate: ISODate("2026-09-18"), ReturnQuantity: 2, ReturnReason: "Quality Issue", ReturnStatus: "Approved" },
    { ReturnID: 6, SaleID: 1006, ProductID: 6, CustomerID: 6, StoreID: 6, EmployeeID: 104, ReturnDate: ISODate("2026-09-20"), ReturnQuantity: 1, ReturnReason: "Defective Product", ReturnStatus: "Approved" },
    { ReturnID: 7, SaleID: 1007, ProductID: 7, CustomerID: 7, StoreID: 7, EmployeeID: 101, ReturnDate: ISODate("2026-09-22"), ReturnQuantity: 1, ReturnReason: "Damaged Product", ReturnStatus: "Approved" },
    { ReturnID: 8, SaleID: 1008, ProductID: 8, CustomerID: 8, StoreID: 1, EmployeeID: 107, ReturnDate: ISODate("2026-09-23"), ReturnQuantity: 1, ReturnReason: "Wrong Item", ReturnStatus: "Pending" },
    { ReturnID: 9, SaleID: 1009, ProductID: 9, CustomerID: 9, StoreID: 6, EmployeeID: 104, ReturnDate: ISODate("2026-09-25"), ReturnQuantity: 2, ReturnReason: "Quality Issue", ReturnStatus: "Approved" },
    { ReturnID: 10, SaleID: 1010, ProductID: 10, CustomerID: 10, StoreID: 4, EmployeeID: 110, ReturnDate: ISODate("2026-09-26"), ReturnQuantity: 1, ReturnReason: "Defective Product", ReturnStatus: "Approved" },
    { ReturnID: 11, SaleID: 1011, ProductID: 1, CustomerID: 1, StoreID: 1, EmployeeID: 107, ReturnDate: ISODate("2026-09-27"), ReturnQuantity: 2, ReturnReason: "Damaged Product", ReturnStatus: "Approved" },
    { ReturnID: 12, SaleID: 1012, ProductID: 2, CustomerID: 2, StoreID: 2, EmployeeID: 108, ReturnDate: ISODate("2026-09-28"), ReturnQuantity: 2, ReturnReason: "Wrong Item", ReturnStatus: "Pending" },
    { ReturnID: 13, SaleID: 1013, ProductID: 3, CustomerID: 3, StoreID: 3, EmployeeID: 111, ReturnDate: ISODate("2026-09-29"), ReturnQuantity: 1, ReturnReason: "Quality Issue", ReturnStatus: "Rejected" },
    { ReturnID: 14, SaleID: 1014, ProductID: 4, CustomerID: 4, StoreID: 4, EmployeeID: 110, ReturnDate: ISODate("2026-09-30"), ReturnQuantity: 1, ReturnReason: "Size Issue", ReturnStatus: "Approved" },
    { ReturnID: 15, SaleID: 1015, ProductID: 5, CustomerID: 5, StoreID: 5, EmployeeID: 112, ReturnDate: ISODate("2026-10-01"), ReturnQuantity: 3, ReturnReason: "Defective Product", ReturnStatus: "Approved" },
    { ReturnID: 16, SaleID: 1016, ProductID: 6, CustomerID: 6, StoreID: 6, EmployeeID: 104, ReturnDate: ISODate("2026-10-02"), ReturnQuantity: 1, ReturnReason: "Wrong Item", ReturnStatus: "Pending" },
    { ReturnID: 17, SaleID: 1017, ProductID: 7, CustomerID: 7, StoreID: 7, EmployeeID: 101, ReturnDate: ISODate("2026-10-03"), ReturnQuantity: 2, ReturnReason: "Damaged Product", ReturnStatus: "Approved" },
    { ReturnID: 18, SaleID: 1021, ProductID: 1, CustomerID: 2, StoreID: 1, EmployeeID: 107, ReturnDate: ISODate("2026-10-05"), ReturnQuantity: 1, ReturnReason: "Quality Issue", ReturnStatus: "Approved" },
    { ReturnID: 19, SaleID: 1023, ProductID: 4, CustomerID: 4, StoreID: 4, EmployeeID: 110, ReturnDate: ISODate("2026-10-06"), ReturnQuantity: 2, ReturnReason: "Defective Product", ReturnStatus: "Approved" },
    { ReturnID: 20, SaleID: 1025, ProductID: 6, CustomerID: 1, StoreID: 1, EmployeeID: 107, ReturnDate: ISODate("2026-10-08"), ReturnQuantity: 1, ReturnReason: "Damaged Product", ReturnStatus: "Pending" }
]);


// Refunds
db.Refunds.insertMany([
    { RefundID: 1, ReturnID: 1, RefundDate: ISODate("2026-09-11"), RefundAmount: 5000.00, RefundMethod: "Original Payment", RefundStatus: "Completed" },
    { RefundID: 2, ReturnID: 2, RefundDate: ISODate("2026-09-12"), RefundAmount: 13500.00, RefundMethod: "Bank Transfer", RefundStatus: "Completed" },
    { RefundID: 3, ReturnID: 3, RefundDate: ISODate("2026-09-16"), RefundAmount: 1800.00, RefundMethod: "Original Payment", RefundStatus: "Completed" },
    { RefundID: 4, ReturnID: 4, RefundDate: ISODate("2026-09-17"), RefundAmount: 6400.00, RefundMethod: "Bank Transfer", RefundStatus: "Completed" },
    { RefundID: 5, ReturnID: 5, RefundDate: ISODate("2026-09-19"), RefundAmount: 1600.00, RefundMethod: "Original Payment", RefundStatus: "Completed" },
    { RefundID: 6, ReturnID: 6, RefundDate: ISODate("2026-09-21"), RefundAmount: 2200.00, RefundMethod: "Original Payment", RefundStatus: "Completed" },
    { RefundID: 7, ReturnID: 7, RefundDate: ISODate("2026-09-23"), RefundAmount: 5500.00, RefundMethod: "Bank Transfer", RefundStatus: "Completed" },
    { RefundID: 8, ReturnID: 9, RefundDate: ISODate("2026-09-26"), RefundAmount: 1200.00, RefundMethod: "Original Payment", RefundStatus: "Completed" },
    { RefundID: 9, ReturnID: 10, RefundDate: ISODate("2026-09-27"), RefundAmount: 3000.00, RefundMethod: "Bank Transfer", RefundStatus: "Completed" },
    { RefundID: 10, ReturnID: 11, RefundDate: ISODate("2026-09-28"), RefundAmount: 5000.00, RefundMethod: "Original Payment", RefundStatus: "Completed" },
    { RefundID: 11, ReturnID: 14, RefundDate: ISODate("2026-10-01"), RefundAmount: 3200.00, RefundMethod: "Bank Transfer", RefundStatus: "Completed" },
    { RefundID: 12, ReturnID: 15, RefundDate: ISODate("2026-10-02"), RefundAmount: 2400.00, RefundMethod: "Original Payment", RefundStatus: "Completed" },
    { RefundID: 13, ReturnID: 17, RefundDate: ISODate("2026-10-04"), RefundAmount: 11000.00, RefundMethod: "Bank Transfer", RefundStatus: "Completed" },
    { RefundID: 14, ReturnID: 18, RefundDate: ISODate("2026-10-06"), RefundAmount: 2500.00, RefundMethod: "Original Payment", RefundStatus: "Completed" },
    { RefundID: 15, ReturnID: 19, RefundDate: ISODate("2026-10-07"), RefundAmount: 6400.00, RefundMethod: "Bank Transfer", RefundStatus: "Completed" }
]);


// Return Feedback
db.ReturnFeedback.insertMany([
    { FeedbackID: 1, ReturnID: 1, Rating: 2, FeedbackComment: "Product stopped working after a few days", FeedbackDate: ISODate("2026-09-12") },
    { FeedbackID: 2, ReturnID: 2, Rating: 1, FeedbackComment: "Received a damaged product", FeedbackDate: ISODate("2026-09-13") },
    { FeedbackID: 3, ReturnID: 3, Rating: 3, FeedbackComment: "Received the wrong item", FeedbackDate: ISODate("2026-09-16") },
    { FeedbackID: 4, ReturnID: 4, Rating: 2, FeedbackComment: "The product size was incorrect", FeedbackDate: ISODate("2026-09-17") },
    { FeedbackID: 5, ReturnID: 5, Rating: 3, FeedbackComment: "Product quality was not satisfactory", FeedbackDate: ISODate("2026-09-20") },
    { FeedbackID: 6, ReturnID: 6, Rating: 2, FeedbackComment: "Speaker was not functioning properly", FeedbackDate: ISODate("2026-09-22") },
    { FeedbackID: 7, ReturnID: 7, Rating: 1, FeedbackComment: "Suitcase arrived damaged", FeedbackDate: ISODate("2026-09-24") },
    { FeedbackID: 8, ReturnID: 8, Rating: 3, FeedbackComment: "Return is still being processed", FeedbackDate: ISODate("2026-09-25") },
    { FeedbackID: 9, ReturnID: 9, Rating: 2, FeedbackComment: "Bottle quality was poor", FeedbackDate: ISODate("2026-09-26") },
    { FeedbackID: 10, ReturnID: 10, Rating: 2, FeedbackComment: "Keyboard had defective keys", FeedbackDate: ISODate("2026-09-28") },
    { FeedbackID: 11, ReturnID: 12, Rating: 3, FeedbackComment: "Waiting for return approval", FeedbackDate: ISODate("2026-09-29") },
    { FeedbackID: 12, ReturnID: 13, Rating: 2, FeedbackComment: "Return request was rejected", FeedbackDate: ISODate("2026-09-30") },
    { FeedbackID: 13, ReturnID: 16, Rating: 3, FeedbackComment: "Refund is still pending", FeedbackDate: ISODate("2026-10-03") },
    { FeedbackID: 14, ReturnID: 19, Rating: 1, FeedbackComment: "Product was defective", FeedbackDate: ISODate("2026-10-08") }
]);




// Assignment Tasks


// Task 5


// Pipeline 1: Returns with Product, Customer, Store and Feedback Details
db.Returns.aggregate([
    {
        $lookup: {
            from: "Products",
            localField: "ProductID",
            foreignField: "ProductID",
            as: "ProductDetails"
        }
    },
    {
        $unwind: "$ProductDetails"
    },
    {
        $lookup: {
            from: "Customers",
            localField: "CustomerID",
            foreignField: "CustomerID",
            as: "CustomerDetails"
        }
    },
    {
        $unwind: "$CustomerDetails"
    },
    {
        $lookup: {
            from: "Stores",
            localField: "StoreID",
            foreignField: "StoreID",
            as: "StoreDetails"
        }
    },
    {
        $unwind: "$StoreDetails"
    },
    {
        $lookup: {
            from: "ReturnFeedback",
            localField: "ReturnID",
            foreignField: "ReturnID",
            as: "FeedbackDetails"
        }
    },
    {
        $project: {
            _id: 0,
            ReturnID: 1,
            SaleID: 1,
            ReturnDate: 1,
            ReturnQuantity: 1,
            ReturnReason: 1,
            ReturnStatus: 1,
            ProductName: "$ProductDetails.ProductName",
            Category: "$ProductDetails.Category",
            CustomerName: "$CustomerDetails.CustomerName",
            StoreName: "$StoreDetails.StoreName",
            FeedbackDetails: 1
        }
    },
    {
        $sort: {
            ReturnID: 1
        }
    }
]);



// Pipeline 2: Customers with Their Returns and Refund Details
db.Customers.aggregate([
    {
        $lookup: {
            from: "Returns",
            localField: "CustomerID",
            foreignField: "CustomerID",
            as: "ReturnDetails"
        }
    },
    {
        $unwind: {
            path: "$ReturnDetails",
            preserveNullAndEmptyArrays: true
        }
    },
    {
        $lookup: {
            from: "Refunds",
            localField: "ReturnDetails.ReturnID",
            foreignField: "ReturnID",
            as: "RefundDetails"
        }
    },
    {
        $project: {
            _id: 0,
            CustomerID: 1,
            CustomerName: 1,
            Email: 1,
            CustomerType: 1,
            ReturnID: "$ReturnDetails.ReturnID",
            ReturnDate: "$ReturnDetails.ReturnDate",
            ReturnReason: "$ReturnDetails.ReturnReason",
            ReturnStatus: "$ReturnDetails.ReturnStatus",
            RefundDetails: 1
        }
    },
    {
        $sort: {
            CustomerID: 1,
            ReturnID: 1
        }
    }
]);



// Pipeline 3: Store-wise Return, Refund and Feedback Analysis
db.Stores.aggregate([
    {
        $lookup: {
            from: "Returns",
            localField: "StoreID",
            foreignField: "StoreID",
            as: "ReturnDetails"
        }
    },
    {
        $lookup: {
            from: "Refunds",
            let: {
                returnIDs: "$ReturnDetails.ReturnID"
            },
            pipeline: [
                {
                    $match: {
                        $expr: {
                            $in: ["$ReturnID", "$$returnIDs"]
                        }
                    }
                }
            ],
            as: "RefundDetails"
        }
    },
    {
        $lookup: {
            from: "ReturnFeedback",
            let: {
                returnIDs: "$ReturnDetails.ReturnID"
            },
            pipeline: [
                {
                    $match: {
                        $expr: {
                            $in: ["$ReturnID", "$$returnIDs"]
                        }
                    }
                }
            ],
            as: "FeedbackDetails"
        }
    },
    {
        $project: {
            _id: 0,
            StoreID: 1,
            StoreName: 1,
            Region: 1,
            TotalReturns: {
                $size: "$ReturnDetails"
            },
            TotalRefundValue: {
                $sum: "$RefundDetails.RefundAmount"
            },
            FeedbackCount: {
                $size: "$FeedbackDetails"
            },
            AverageRating: {
                $round: [
                    {
                        $avg: "$FeedbackDetails.Rating"
                    },
                    2
                ]
            }
        }
    },
    {
        $sort: {//--------------------------------------
// Set 3 (Retail Returns and Refunds)
//--------------------------------------



// Creating Database
use("RetailReturnsDB");



// Creating Collections
db.createCollection("Stores");
db.createCollection("Customers");
db.createCollection("Products");
db.createCollection("Employees");
db.createCollection("Sales");
db.createCollection("Returns");
db.createCollection("Refunds");
db.createCollection("ReturnFeedback");



// Inserting Sample Data

// Stores
db.Stores.insertMany([
    { StoreID: 1, StoreName: "Chennai Central Store", City: "Chennai", Region: "South" },
    { StoreID: 2, StoreName: "Bengaluru City Store", City: "Bengaluru", Region: "South" },
    { StoreID: 3, StoreName: "Hyderabad Retail Store", City: "Hyderabad", Region: "South" },
    { StoreID: 4, StoreName: "Mumbai Main Store", City: "Mumbai", Region: "West" },
    { StoreID: 5, StoreName: "Pune Shopping Store", City: "Pune", Region: "West" },
    { StoreID: 6, StoreName: "Delhi North Store", City: "New Delhi", Region: "North" },
    { StoreID: 7, StoreName: "Kolkata Retail Store", City: "Kolkata", Region: "East" }
]);


// Customers
db.Customers.insertMany([
    { CustomerID: 1, CustomerName: "Aarav Sharma", Email: "aarav@example.com", City: "Chennai", CustomerType: "Individual" },
    { CustomerID: 2, CustomerName: "Priya Nair", Email: "priya@example.com", City: "Bengaluru", CustomerType: "Individual" },
    { CustomerID: 3, CustomerName: "Rahul Verma", Email: "rahul@example.com", City: "Hyderabad", CustomerType: "Individual" },
    { CustomerID: 4, CustomerName: "Ananya Reddy", Email: "ananya@example.com", City: "Mumbai", CustomerType: "Individual" },
    { CustomerID: 5, CustomerName: "Vikram Patel", Email: "vikram@example.com", City: "Pune", CustomerType: "Business" },
    { CustomerID: 6, CustomerName: "Meera Iyer", Email: "meera@example.com", City: "Delhi", CustomerType: "Individual" },
    { CustomerID: 7, CustomerName: "Karan Mehta", Email: "karan@example.com", City: "Kolkata", CustomerType: "Business" },
    { CustomerID: 8, CustomerName: "Diya Menon", Email: "diya@example.com", City: "Chennai", CustomerType: "Individual" },
    { CustomerID: 9, CustomerName: "Arjun Das", Email: "arjun@example.com", City: "Jaipur", CustomerType: "Individual" },
    { CustomerID: 10, CustomerName: "Nisha Kapoor", Email: "nisha@example.com", City: "Mumbai", CustomerType: "Business" },
    { CustomerID: 11, CustomerName: "Unassigned Customer", Email: "unassigned@example.com", City: "Coimbatore", CustomerType: "Individual" }
]);


// Products
db.Products.insertMany([
    { ProductID: 1, ProductName: "Wireless Headphones", Category: "Electronics", UnitPrice: 2500.00 },
    { ProductID: 2, ProductName: "Smart Watch", Category: "Electronics", UnitPrice: 4500.00 },
    { ProductID: 3, ProductName: "Laptop Backpack", Category: "Accessories", UnitPrice: 1800.00 },
    { ProductID: 4, ProductName: "Running Shoes", Category: "Footwear", UnitPrice: 3200.00 },
    { ProductID: 5, ProductName: "Cotton T-Shirt", Category: "Clothing", UnitPrice: 800.00 },
    { ProductID: 6, ProductName: "Bluetooth Speaker", Category: "Electronics", UnitPrice: 2200.00 },
    { ProductID: 7, ProductName: "Travel Suitcase", Category: "Luggage", UnitPrice: 5500.00 },
    { ProductID: 8, ProductName: "Office Chair", Category: "Furniture", UnitPrice: 7500.00 },
    { ProductID: 9, ProductName: "Water Bottle", Category: "Accessories", UnitPrice: 600.00 },
    { ProductID: 10, ProductName: "Mechanical Keyboard", Category: "Electronics", UnitPrice: 3000.00 }
]);


// Employees
db.Employees.insertMany([
    { EmployeeID: 101, EmployeeName: "Arjun Sharma", Designation: "Store Manager", StoreID: 1, ManagerID: null },
    { EmployeeID: 102, EmployeeName: "Meera Iyer", Designation: "Store Manager", StoreID: 2, ManagerID: null },
    { EmployeeID: 103, EmployeeName: "Rahul Verma", Designation: "Store Manager", StoreID: 4, ManagerID: null },
    { EmployeeID: 104, EmployeeName: "Kavya Reddy", Designation: "Store Manager", StoreID: 6, ManagerID: null },
    { EmployeeID: 105, EmployeeName: "Ishaan Kumar", Designation: "Sales Executive", StoreID: 1, ManagerID: 101 },
    { EmployeeID: 106, EmployeeName: "Diya Nair", Designation: "Sales Executive", StoreID: 2, ManagerID: 102 },
    { EmployeeID: 107, EmployeeName: "Kabir Patel", Designation: "Returns Executive", StoreID: 1, ManagerID: 101 },
    { EmployeeID: 108, EmployeeName: "Riya Gupta", Designation: "Returns Executive", StoreID: 2, ManagerID: 102 },
    { EmployeeID: 109, EmployeeName: "Neil Menon", Designation: "Sales Executive", StoreID: 4, ManagerID: 103 },
    { EmployeeID: 110, EmployeeName: "Tara Rao", Designation: "Returns Executive", StoreID: 4, ManagerID: 103 },
    { EmployeeID: 111, EmployeeName: "Ayaan Das", Designation: "Sales Executive", StoreID: 3, ManagerID: 101 },
    { EmployeeID: 112, EmployeeName: "Kiara Joshi", Designation: "Sales Executive", StoreID: 5, ManagerID: 103 }
]);


// Sales
db.Sales.insertMany([
    { SaleID: 1001, CustomerID: 1, StoreID: 1, EmployeeID: 105, ProductID: 1, SaleDate: ISODate("2026-09-01"), Quantity: 10, UnitPrice: 2500.00 },
    { SaleID: 1002, CustomerID: 2, StoreID: 2, EmployeeID: 106, ProductID: 2, SaleDate: ISODate("2026-09-02"), Quantity: 8, UnitPrice: 4500.00 },
    { SaleID: 1003, CustomerID: 3, StoreID: 3, EmployeeID: 111, ProductID: 3, SaleDate: ISODate("2026-09-03"), Quantity: 12, UnitPrice: 1800.00 },
    { SaleID: 1004, CustomerID: 4, StoreID: 4, EmployeeID: 109, ProductID: 4, SaleDate: ISODate("2026-09-04"), Quantity: 10, UnitPrice: 3200.00 },
    { SaleID: 1005, CustomerID: 5, StoreID: 5, EmployeeID: 112, ProductID: 5, SaleDate: ISODate("2026-09-05"), Quantity: 20, UnitPrice: 800.00 },
    { SaleID: 1006, CustomerID: 6, StoreID: 6, EmployeeID: 104, ProductID: 6, SaleDate: ISODate("2026-09-06"), Quantity: 10, UnitPrice: 2200.00 },
    { SaleID: 1007, CustomerID: 7, StoreID: 7, EmployeeID: 101, ProductID: 7, SaleDate: ISODate("2026-09-07"), Quantity: 8, UnitPrice: 5500.00 },
    { SaleID: 1008, CustomerID: 8, StoreID: 1, EmployeeID: 105, ProductID: 8, SaleDate: ISODate("2026-09-08"), Quantity: 5, UnitPrice: 7500.00 },
    { SaleID: 1009, CustomerID: 9, StoreID: 6, EmployeeID: 104, ProductID: 9, SaleDate: ISODate("2026-09-09"), Quantity: 30, UnitPrice: 600.00 },
    { SaleID: 1010, CustomerID: 10, StoreID: 4, EmployeeID: 109, ProductID: 10, SaleDate: ISODate("2026-09-10"), Quantity: 10, UnitPrice: 3000.00 },
    { SaleID: 1011, CustomerID: 1, StoreID: 1, EmployeeID: 105, ProductID: 1, SaleDate: ISODate("2026-09-12"), Quantity: 10, UnitPrice: 2500.00 },
    { SaleID: 1012, CustomerID: 2, StoreID: 2, EmployeeID: 106, ProductID: 2, SaleDate: ISODate("2026-09-13"), Quantity: 8, UnitPrice: 4500.00 },
    { SaleID: 1013, CustomerID: 3, StoreID: 3, EmployeeID: 111, ProductID: 3, SaleDate: ISODate("2026-09-14"), Quantity: 12, UnitPrice: 1800.00 },
    { SaleID: 1014, CustomerID: 4, StoreID: 4, EmployeeID: 109, ProductID: 4, SaleDate: ISODate("2026-09-15"), Quantity: 10, UnitPrice: 3200.00 },
    { SaleID: 1015, CustomerID: 5, StoreID: 5, EmployeeID: 112, ProductID: 5, SaleDate: ISODate("2026-09-16"), Quantity: 20, UnitPrice: 800.00 },
    { SaleID: 1016, CustomerID: 6, StoreID: 6, EmployeeID: 104, ProductID: 6, SaleDate: ISODate("2026-09-17"), Quantity: 10, UnitPrice: 2200.00 },
    { SaleID: 1017, CustomerID: 7, StoreID: 7, EmployeeID: 101, ProductID: 7, SaleDate: ISODate("2026-09-18"), Quantity: 8, UnitPrice: 5500.00 },
    { SaleID: 1018, CustomerID: 8, StoreID: 1, EmployeeID: 105, ProductID: 8, SaleDate: ISODate("2026-09-19"), Quantity: 5, UnitPrice: 7500.00 },
    { SaleID: 1019, CustomerID: 9, StoreID: 6, EmployeeID: 104, ProductID: 9, SaleDate: ISODate("2026-09-20"), Quantity: 30, UnitPrice: 600.00 },
    { SaleID: 1020, CustomerID: 10, StoreID: 4, EmployeeID: 109, ProductID: 10, SaleDate: ISODate("2026-09-21"), Quantity: 10, UnitPrice: 3000.00 },
    { SaleID: 1021, CustomerID: 2, StoreID: 1, EmployeeID: 107, ProductID: 1, SaleDate: ISODate("2026-10-01"), Quantity: 10, UnitPrice: 2500.00 },
    { SaleID: 1022, CustomerID: 3, StoreID: 2, EmployeeID: 108, ProductID: 2, SaleDate: ISODate("2026-10-02"), Quantity: 8, UnitPrice: 4500.00 },
    { SaleID: 1023, CustomerID: 4, StoreID: 4, EmployeeID: 110, ProductID: 4, SaleDate: ISODate("2026-10-03"), Quantity: 10, UnitPrice: 3200.00 },
    { SaleID: 1024, CustomerID: 5, StoreID: 5, EmployeeID: 112, ProductID: 5, SaleDate: ISODate("2026-10-04"), Quantity: 20, UnitPrice: 800.00 },
    { SaleID: 1025, CustomerID: 1, StoreID: 1, EmployeeID: 105, ProductID: 6, SaleDate: ISODate("2026-10-05"), Quantity: 10, UnitPrice: 2200.00 },
    { SaleID: 1026, CustomerID: 6, StoreID: 6, EmployeeID: 104, ProductID: 9, SaleDate: ISODate("2026-10-06"), Quantity: 30, UnitPrice: 600.00 },
    { SaleID: 1027, CustomerID: 7, StoreID: 7, EmployeeID: 101, ProductID: 7, SaleDate: ISODate("2026-10-07"), Quantity: 8, UnitPrice: 5500.00 },
    { SaleID: 1028, CustomerID: 8, StoreID: 1, EmployeeID: 105, ProductID: 3, SaleDate: ISODate("2026-10-08"), Quantity: 12, UnitPrice: 1800.00 },
    { SaleID: 1029, CustomerID: 10, StoreID: 4, EmployeeID: 109, ProductID: 10, SaleDate: ISODate("2026-10-09"), Quantity: 10, UnitPrice: 3000.00 },
    { SaleID: 1030, CustomerID: 9, StoreID: 6, EmployeeID: 104, ProductID: 5, SaleDate: ISODate("2026-10-10"), Quantity: 20, UnitPrice: 800.00 }
]);


// Returns
db.Returns.insertMany([
    { ReturnID: 1, SaleID: 1001, ProductID: 1, CustomerID: 1, StoreID: 1, EmployeeID: 107, ReturnDate: ISODate("2026-09-10"), ReturnQuantity: 2, ReturnReason: "Defective Product", ReturnStatus: "Approved" },
    { ReturnID: 2, SaleID: 1002, ProductID: 2, CustomerID: 2, StoreID: 2, EmployeeID: 108, ReturnDate: ISODate("2026-09-11"), ReturnQuantity: 3, ReturnReason: "Damaged Product", ReturnStatus: "Approved" },
    { ReturnID: 3, SaleID: 1003, ProductID: 3, CustomerID: 3, StoreID: 3, EmployeeID: 111, ReturnDate: ISODate("2026-09-15"), ReturnQuantity: 1, ReturnReason: "Wrong Item", ReturnStatus: "Approved" },
    { ReturnID: 4, SaleID: 1004, ProductID: 4, CustomerID: 4, StoreID: 4, EmployeeID: 110, ReturnDate: ISODate("2026-09-16"), ReturnQuantity: 2, ReturnReason: "Size Issue", ReturnStatus: "Approved" },
    { ReturnID: 5, SaleID: 1005, ProductID: 5, CustomerID: 5, StoreID: 5, EmployeeID: 112, ReturnDate: ISODate("2026-09-18"), ReturnQuantity: 2, ReturnReason: "Quality Issue", ReturnStatus: "Approved" },
    { ReturnID: 6, SaleID: 1006, ProductID: 6, CustomerID: 6, StoreID: 6, EmployeeID: 104, ReturnDate: ISODate("2026-09-20"), ReturnQuantity: 1, ReturnReason: "Defective Product", ReturnStatus: "Approved" },
    { ReturnID: 7, SaleID: 1007, ProductID: 7, CustomerID: 7, StoreID: 7, EmployeeID: 101, ReturnDate: ISODate("2026-09-22"), ReturnQuantity: 1, ReturnReason: "Damaged Product", ReturnStatus: "Approved" },
    { ReturnID: 8, SaleID: 1008, ProductID: 8, CustomerID: 8, StoreID: 1, EmployeeID: 107, ReturnDate: ISODate("2026-09-23"), ReturnQuantity: 1, ReturnReason: "Wrong Item", ReturnStatus: "Pending" },
    { ReturnID: 9, SaleID: 1009, ProductID: 9, CustomerID: 9, StoreID: 6, EmployeeID: 104, ReturnDate: ISODate("2026-09-25"), ReturnQuantity: 2, ReturnReason: "Quality Issue", ReturnStatus: "Approved" },
    { ReturnID: 10, SaleID: 1010, ProductID: 10, CustomerID: 10, StoreID: 4, EmployeeID: 110, ReturnDate: ISODate("2026-09-26"), ReturnQuantity: 1, ReturnReason: "Defective Product", ReturnStatus: "Approved" },
    { ReturnID: 11, SaleID: 1011, ProductID: 1, CustomerID: 1, StoreID: 1, EmployeeID: 107, ReturnDate: ISODate("2026-09-27"), ReturnQuantity: 2, ReturnReason: "Damaged Product", ReturnStatus: "Approved" },
    { ReturnID: 12, SaleID: 1012, ProductID: 2, CustomerID: 2, StoreID: 2, EmployeeID: 108, ReturnDate: ISODate("2026-09-28"), ReturnQuantity: 2, ReturnReason: "Wrong Item", ReturnStatus: "Pending" },
    { ReturnID: 13, SaleID: 1013, ProductID: 3, CustomerID: 3, StoreID: 3, EmployeeID: 111, ReturnDate: ISODate("2026-09-29"), ReturnQuantity: 1, ReturnReason: "Quality Issue", ReturnStatus: "Rejected" },
    { ReturnID: 14, SaleID: 1014, ProductID: 4, CustomerID: 4, StoreID: 4, EmployeeID: 110, ReturnDate: ISODate("2026-09-30"), ReturnQuantity: 1, ReturnReason: "Size Issue", ReturnStatus: "Approved" },
    { ReturnID: 15, SaleID: 1015, ProductID: 5, CustomerID: 5, StoreID: 5, EmployeeID: 112, ReturnDate: ISODate("2026-10-01"), ReturnQuantity: 3, ReturnReason: "Defective Product", ReturnStatus: "Approved" },
    { ReturnID: 16, SaleID: 1016, ProductID: 6, CustomerID: 6, StoreID: 6, EmployeeID: 104, ReturnDate: ISODate("2026-10-02"), ReturnQuantity: 1, ReturnReason: "Wrong Item", ReturnStatus: "Pending" },
    { ReturnID: 17, SaleID: 1017, ProductID: 7, CustomerID: 7, StoreID: 7, EmployeeID: 101, ReturnDate: ISODate("2026-10-03"), ReturnQuantity: 2, ReturnReason: "Damaged Product", ReturnStatus: "Approved" },
    { ReturnID: 18, SaleID: 1021, ProductID: 1, CustomerID: 2, StoreID: 1, EmployeeID: 107, ReturnDate: ISODate("2026-10-05"), ReturnQuantity: 1, ReturnReason: "Quality Issue", ReturnStatus: "Approved" },
    { ReturnID: 19, SaleID: 1023, ProductID: 4, CustomerID: 4, StoreID: 4, EmployeeID: 110, ReturnDate: ISODate("2026-10-06"), ReturnQuantity: 2, ReturnReason: "Defective Product", ReturnStatus: "Approved" },
    { ReturnID: 20, SaleID: 1025, ProductID: 6, CustomerID: 1, StoreID: 1, EmployeeID: 107, ReturnDate: ISODate("2026-10-08"), ReturnQuantity: 1, ReturnReason: "Damaged Product", ReturnStatus: "Pending" }
]);


// Refunds
db.Refunds.insertMany([
    { RefundID: 1, ReturnID: 1, RefundDate: ISODate("2026-09-11"), RefundAmount: 5000.00, RefundMethod: "Original Payment", RefundStatus: "Completed" },
    { RefundID: 2, ReturnID: 2, RefundDate: ISODate("2026-09-12"), RefundAmount: 13500.00, RefundMethod: "Bank Transfer", RefundStatus: "Completed" },
    { RefundID: 3, ReturnID: 3, RefundDate: ISODate("2026-09-16"), RefundAmount: 1800.00, RefundMethod: "Original Payment", RefundStatus: "Completed" },
    { RefundID: 4, ReturnID: 4, RefundDate: ISODate("2026-09-17"), RefundAmount: 6400.00, RefundMethod: "Bank Transfer", RefundStatus: "Completed" },
    { RefundID: 5, ReturnID: 5, RefundDate: ISODate("2026-09-19"), RefundAmount: 1600.00, RefundMethod: "Original Payment", RefundStatus: "Completed" },
    { RefundID: 6, ReturnID: 6, RefundDate: ISODate("2026-09-21"), RefundAmount: 2200.00, RefundMethod: "Original Payment", RefundStatus: "Completed" },
    { RefundID: 7, ReturnID: 7, RefundDate: ISODate("2026-09-23"), RefundAmount: 5500.00, RefundMethod: "Bank Transfer", RefundStatus: "Completed" },
    { RefundID: 8, ReturnID: 9, RefundDate: ISODate("2026-09-26"), RefundAmount: 1200.00, RefundMethod: "Original Payment", RefundStatus: "Completed" },
    { RefundID: 9, ReturnID: 10, RefundDate: ISODate("2026-09-27"), RefundAmount: 3000.00, RefundMethod: "Bank Transfer", RefundStatus: "Completed" },
    { RefundID: 10, ReturnID: 11, RefundDate: ISODate("2026-09-28"), RefundAmount: 5000.00, RefundMethod: "Original Payment", RefundStatus: "Completed" },
    { RefundID: 11, ReturnID: 14, RefundDate: ISODate("2026-10-01"), RefundAmount: 3200.00, RefundMethod: "Bank Transfer", RefundStatus: "Completed" },
    { RefundID: 12, ReturnID: 15, RefundDate: ISODate("2026-10-02"), RefundAmount: 2400.00, RefundMethod: "Original Payment", RefundStatus: "Completed" },
    { RefundID: 13, ReturnID: 17, RefundDate: ISODate("2026-10-04"), RefundAmount: 11000.00, RefundMethod: "Bank Transfer", RefundStatus: "Completed" },
    { RefundID: 14, ReturnID: 18, RefundDate: ISODate("2026-10-06"), RefundAmount: 2500.00, RefundMethod: "Original Payment", RefundStatus: "Completed" },
    { RefundID: 15, ReturnID: 19, RefundDate: ISODate("2026-10-07"), RefundAmount: 6400.00, RefundMethod: "Bank Transfer", RefundStatus: "Completed" }
]);


// Return Feedback
db.ReturnFeedback.insertMany([
    { FeedbackID: 1, ReturnID: 1, Rating: 2, FeedbackComment: "Product stopped working after a few days", FeedbackDate: ISODate("2026-09-12") },
    { FeedbackID: 2, ReturnID: 2, Rating: 1, FeedbackComment: "Received a damaged product", FeedbackDate: ISODate("2026-09-13") },
    { FeedbackID: 3, ReturnID: 3, Rating: 3, FeedbackComment: "Received the wrong item", FeedbackDate: ISODate("2026-09-16") },
    { FeedbackID: 4, ReturnID: 4, Rating: 2, FeedbackComment: "The product size was incorrect", FeedbackDate: ISODate("2026-09-17") },
    { FeedbackID: 5, ReturnID: 5, Rating: 3, FeedbackComment: "Product quality was not satisfactory", FeedbackDate: ISODate("2026-09-20") },
    { FeedbackID: 6, ReturnID: 6, Rating: 2, FeedbackComment: "Speaker was not functioning properly", FeedbackDate: ISODate("2026-09-22") },
    { FeedbackID: 7, ReturnID: 7, Rating: 1, FeedbackComment: "Suitcase arrived damaged", FeedbackDate: ISODate("2026-09-24") },
    { FeedbackID: 8, ReturnID: 8, Rating: 3, FeedbackComment: "Return is still being processed", FeedbackDate: ISODate("2026-09-25") },
    { FeedbackID: 9, ReturnID: 9, Rating: 2, FeedbackComment: "Bottle quality was poor", FeedbackDate: ISODate("2026-09-26") },
    { FeedbackID: 10, ReturnID: 10, Rating: 2, FeedbackComment: "Keyboard had defective keys", FeedbackDate: ISODate("2026-09-28") },
    { FeedbackID: 11, ReturnID: 12, Rating: 3, FeedbackComment: "Waiting for return approval", FeedbackDate: ISODate("2026-09-29") },
    { FeedbackID: 12, ReturnID: 13, Rating: 2, FeedbackComment: "Return request was rejected", FeedbackDate: ISODate("2026-09-30") },
    { FeedbackID: 13, ReturnID: 16, Rating: 3, FeedbackComment: "Refund is still pending", FeedbackDate: ISODate("2026-10-03") },
    { FeedbackID: 14, ReturnID: 19, Rating: 1, FeedbackComment: "Product was defective", FeedbackDate: ISODate("2026-10-08") }
]);




// Assignment Tasks


// Task 5


// Pipeline 1: Returns with Product, Customer, Store and Feedback Details
db.Returns.aggregate([
    {
        $lookup: {
            from: "Products",
            localField: "ProductID",
            foreignField: "ProductID",
            as: "ProductDetails"
        }
    },
    {
        $unwind: "$ProductDetails"
    },
    {
        $lookup: {
            from: "Customers",
            localField: "CustomerID",
            foreignField: "CustomerID",
            as: "CustomerDetails"
        }
    },
    {
        $unwind: "$CustomerDetails"
    },
    {
        $lookup: {
            from: "Stores",
            localField: "StoreID",
            foreignField: "StoreID",
            as: "StoreDetails"
        }
    },
    {
        $unwind: "$StoreDetails"
    },
    {
        $lookup: {
            from: "ReturnFeedback",
            localField: "ReturnID",
            foreignField: "ReturnID",
            as: "FeedbackDetails"
        }
    },
    {
        $project: {
            _id: 0,
            ReturnID: 1,
            SaleID: 1,
            ReturnDate: 1,
            ReturnQuantity: 1,
            ReturnReason: 1,
            ReturnStatus: 1,
            ProductName: "$ProductDetails.ProductName",
            Category: "$ProductDetails.Category",
            CustomerName: "$CustomerDetails.CustomerName",
            StoreName: "$StoreDetails.StoreName",
            FeedbackDetails: 1
        }
    },
    {
        $sort: {
            ReturnID: 1
        }
    }
]);



// Pipeline 2: Customers with Their Returns and Refund Details
db.Customers.aggregate([
    {
        $lookup: {
            from: "Returns",
            localField: "CustomerID",
            foreignField: "CustomerID",
            as: "ReturnDetails"
        }
    },
    {
        $unwind: {
            path: "$ReturnDetails",
            preserveNullAndEmptyArrays: true
        }
    },
    {
        $lookup: {
            from: "Refunds",
            localField: "ReturnDetails.ReturnID",
            foreignField: "ReturnID",
            as: "RefundDetails"
        }
    },
    {
        $project: {
            _id: 0,
            CustomerID: 1,
            CustomerName: 1,
            Email: 1,
            CustomerType: 1,
            ReturnID: "$ReturnDetails.ReturnID",
            ReturnDate: "$ReturnDetails.ReturnDate",
            ReturnReason: "$ReturnDetails.ReturnReason",
            ReturnStatus: "$ReturnDetails.ReturnStatus",
            RefundDetails: 1
        }
    },
    {
        $sort: {
            CustomerID: 1,
            ReturnID: 1
        }
    }
]);



// Pipeline 3: Store-wise Return, Refund and Feedback Analysis
db.Stores.aggregate([
    {
        $lookup: {
            from: "Returns",
            localField: "StoreID",
            foreignField: "StoreID",
            as: "ReturnDetails"
        }
    },
    {
        $lookup: {
            from: "Refunds",
            let: {
                returnIDs: "$ReturnDetails.ReturnID"
            },
            pipeline: [
                {
                    $match: {
                        $expr: {
                            $in: ["$ReturnID", "$$returnIDs"]
                        }
                    }
                }
            ],
            as: "RefundDetails"
        }
    },
    {
        $lookup: {
            from: "ReturnFeedback",
            let: {
                returnIDs: "$ReturnDetails.ReturnID"
            },
            pipeline: [
                {
                    $match: {
                        $expr: {
                            $in: ["$ReturnID", "$$returnIDs"]
                        }
                    }
                }
            ],
            as: "FeedbackDetails"
        }
    },
    {
        $project: {
            _id: 0,
            StoreID: 1,
            StoreName: 1,
            Region: 1,
            TotalReturns: {
                $size: "$ReturnDetails"
            },
            TotalRefundValue: {
                $sum: "$RefundDetails.RefundAmount"
            },
            FeedbackCount: {
                $size: "$FeedbackDetails"
            },
            AverageRating: {
                $round: [
                    {
                        $avg: "$FeedbackDetails.Rating"
                    },
                    2
                ]
            }
        }
    },
    {
        $sort: {
            TotalRefundValue: -1
        }
    }
]);
            TotalRefundValue: -1
        }
    }
]);