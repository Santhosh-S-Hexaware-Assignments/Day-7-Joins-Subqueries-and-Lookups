//--------------------------------------
// Set 2 (Bank Loan Portfolio)
//--------------------------------------


// Creating Database
use("BankLoanDB");


// Creating Collections
db.createCollection("Branches");
db.createCollection("Customers");
db.createCollection("Loans");
db.createCollection("Repayments");
db.createCollection("LoanGuarantors");


// Inserting Sample Data

db.Branches.insertMany([
    { BranchID: 1, BranchName: "Chennai Main Branch", City: "Chennai", Region: "South" },
    { BranchID: 2, BranchName: "Bengaluru Central Branch", City: "Bengaluru", Region: "South" },
    { BranchID: 3, BranchName: "Hyderabad Branch", City: "Hyderabad", Region: "South" },
    { BranchID: 4, BranchName: "Mumbai Corporate Branch", City: "Mumbai", Region: "West" },
    { BranchID: 5, BranchName: "Pune Branch", City: "Pune", Region: "West" },
    { BranchID: 6, BranchName: "Delhi Main Branch", City: "New Delhi", Region: "North" },
    { BranchID: 7, BranchName: "Kolkata Branch", City: "Kolkata", Region: "East" },
    { BranchID: 8, BranchName: "Jaipur Branch", City: "Jaipur", Region: "North" }
]);


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
    { CustomerID: 11, CustomerName: "Rohan Kumar", Email: "rohan@example.com", City: "Bengaluru", CustomerType: "Individual" },
    { CustomerID: 12, CustomerName: "Unassigned Customer", Email: "unassigned@example.com", City: "Coimbatore", CustomerType: "Individual" }
]);


db.Loans.insertMany([
    { LoanID: 1001, CustomerID: 1, BranchID: 1, LoanType: "Home Loan", LoanAmount: 2500000.00, OutstandingAmount: 2100000.00, InterestRate: 8.50, LoanDate: ISODate("2025-01-10"), LoanStatus: "Active" },
    { LoanID: 1002, CustomerID: 1, BranchID: 2, LoanType: "Car Loan", LoanAmount: 800000.00, OutstandingAmount: 500000.00, InterestRate: 9.25, LoanDate: ISODate("2025-03-15"), LoanStatus: "Active" },
    { LoanID: 1003, CustomerID: 2, BranchID: 1, LoanType: "Personal Loan", LoanAmount: 500000.00, OutstandingAmount: 350000.00, InterestRate: 11.50, LoanDate: ISODate("2025-02-12"), LoanStatus: "Active" },
    { LoanID: 1004, CustomerID: 2, BranchID: 3, LoanType: "Education Loan", LoanAmount: 1200000.00, OutstandingAmount: 1000000.00, InterestRate: 7.75, LoanDate: ISODate("2025-04-20"), LoanStatus: "Active" },
    { LoanID: 1005, CustomerID: 3, BranchID: 2, LoanType: "Business Loan", LoanAmount: 3000000.00, OutstandingAmount: 2600000.00, InterestRate: 10.00, LoanDate: ISODate("2025-01-25"), LoanStatus: "Active" },
    { LoanID: 1006, CustomerID: 4, BranchID: 4, LoanType: "Home Loan", LoanAmount: 4000000.00, OutstandingAmount: 3500000.00, InterestRate: 8.25, LoanDate: ISODate("2025-05-05"), LoanStatus: "Active" },
    { LoanID: 1007, CustomerID: 5, BranchID: 5, LoanType: "Business Loan", LoanAmount: 1800000.00, OutstandingAmount: 1200000.00, InterestRate: 10.50, LoanDate: ISODate("2025-06-18"), LoanStatus: "Active" },
    { LoanID: 1008, CustomerID: 6, BranchID: 6, LoanType: "Car Loan", LoanAmount: 900000.00, OutstandingAmount: 650000.00, InterestRate: 9.00, LoanDate: ISODate("2025-07-10"), LoanStatus: "Active" },
    { LoanID: 1009, CustomerID: 7, BranchID: 7, LoanType: "Personal Loan", LoanAmount: 600000.00, OutstandingAmount: 450000.00, InterestRate: 12.00, LoanDate: ISODate("2025-08-22"), LoanStatus: "Active" },
    { LoanID: 1010, CustomerID: 8, BranchID: 1, LoanType: "Education Loan", LoanAmount: 1000000.00, OutstandingAmount: 800000.00, InterestRate: 7.50, LoanDate: ISODate("2025-09-12"), LoanStatus: "Active" },
    { LoanID: 1011, CustomerID: 9, BranchID: 6, LoanType: "Home Loan", LoanAmount: 3500000.00, OutstandingAmount: 3100000.00, InterestRate: 8.75, LoanDate: ISODate("2025-02-28"), LoanStatus: "Active" },
    { LoanID: 1012, CustomerID: 10, BranchID: 4, LoanType: "Business Loan", LoanAmount: 5000000.00, OutstandingAmount: 4200000.00, InterestRate: 10.25, LoanDate: ISODate("2025-03-30"), LoanStatus: "Active" },
    { LoanID: 1013, CustomerID: 11, BranchID: 2, LoanType: "Personal Loan", LoanAmount: 400000.00, OutstandingAmount: 250000.00, InterestRate: 11.00, LoanDate: ISODate("2025-10-05"), LoanStatus: "Active" },
    { LoanID: 1014, CustomerID: 3, BranchID: 3, LoanType: "Car Loan", LoanAmount: 750000.00, OutstandingAmount: 500000.00, InterestRate: 9.50, LoanDate: ISODate("2025-11-15"), LoanStatus: "Active" },
    { LoanID: 1015, CustomerID: 5, BranchID: 5, LoanType: "Home Loan", LoanAmount: 2800000.00, OutstandingAmount: 2400000.00, InterestRate: 8.40, LoanDate: ISODate("2025-12-01"), LoanStatus: "Active" },
    { LoanID: 1016, CustomerID: 1, BranchID: 1, LoanType: "Personal Loan", LoanAmount: 300000.00, OutstandingAmount: 150000.00, InterestRate: 12.25, LoanDate: ISODate("2026-01-12"), LoanStatus: "Active" },
    { LoanID: 1017, CustomerID: 4, BranchID: 4, LoanType: "Car Loan", LoanAmount: 1000000.00, OutstandingAmount: 700000.00, InterestRate: 9.10, LoanDate: ISODate("2026-02-20"), LoanStatus: "Active" },
    { LoanID: 1018, CustomerID: 7, BranchID: 7, LoanType: "Business Loan", LoanAmount: 2200000.00, OutstandingAmount: 1800000.00, InterestRate: 10.75, LoanDate: ISODate("2026-03-15"), LoanStatus: "Active" },
    { LoanID: 1019, CustomerID: 8, BranchID: 3, LoanType: "Personal Loan", LoanAmount: 450000.00, OutstandingAmount: 300000.00, InterestRate: 11.75, LoanDate: ISODate("2026-04-10"), LoanStatus: "Active" },
    { LoanID: 1020, CustomerID: 10, BranchID: 4, LoanType: "Home Loan", LoanAmount: 3200000.00, OutstandingAmount: 2700000.00, InterestRate: 8.60, LoanDate: ISODate("2026-05-25"), LoanStatus: "Active" }
]);


db.Repayments.insertMany([
    { RepaymentID: 1, LoanID: 1001, InstallmentNumber: 1, DueDate: ISODate("2026-01-05"), PaymentDate: ISODate("2026-01-05"), AmountDue: 25000.00, AmountPaid: 25000.00 },
    { RepaymentID: 2, LoanID: 1001, InstallmentNumber: 2, DueDate: ISODate("2026-02-05"), PaymentDate: ISODate("2026-02-05"), AmountDue: 25000.00, AmountPaid: 25000.00 },
    { RepaymentID: 3, LoanID: 1001, InstallmentNumber: 3, DueDate: ISODate("2026-03-05"), PaymentDate: ISODate("2026-03-05"), AmountDue: 25000.00, AmountPaid: 25000.00 },
    { RepaymentID: 4, LoanID: 1001, InstallmentNumber: 4, DueDate: ISODate("2026-04-05"), PaymentDate: ISODate("2026-04-05"), AmountDue: 25000.00, AmountPaid: 25000.00 },
    { RepaymentID: 5, LoanID: 1001, InstallmentNumber: 5, DueDate: ISODate("2026-05-05"), PaymentDate: ISODate("2026-05-05"), AmountDue: 25000.00, AmountPaid: 25000.00 },
    { RepaymentID: 6, LoanID: 1001, InstallmentNumber: 6, DueDate: ISODate("2026-06-05"), PaymentDate: ISODate("2026-06-05"), AmountDue: 25000.00, AmountPaid: 25000.00 },
    { RepaymentID: 7, LoanID: 1002, InstallmentNumber: 1, DueDate: ISODate("2026-01-10"), PaymentDate: ISODate("2026-01-10"), AmountDue: 15000.00, AmountPaid: 15000.00 },
    { RepaymentID: 8, LoanID: 1002, InstallmentNumber: 2, DueDate: ISODate("2026-02-10"), PaymentDate: ISODate("2026-02-10"), AmountDue: 15000.00, AmountPaid: 15000.00 },
    { RepaymentID: 9, LoanID: 1002, InstallmentNumber: 3, DueDate: ISODate("2026-03-10"), PaymentDate: ISODate("2026-03-10"), AmountDue: 15000.00, AmountPaid: 15000.00 },
    { RepaymentID: 10, LoanID: 1003, InstallmentNumber: 1, DueDate: ISODate("2026-01-15"), PaymentDate: ISODate("2026-01-15"), AmountDue: 12000.00, AmountPaid: 12000.00 },
    { RepaymentID: 11, LoanID: 1003, InstallmentNumber: 2, DueDate: ISODate("2026-02-15"), PaymentDate: ISODate("2026-02-15"), AmountDue: 12000.00, AmountPaid: 12000.00 },
    { RepaymentID: 12, LoanID: 1003, InstallmentNumber: 3, DueDate: ISODate("2026-03-15"), PaymentDate: ISODate("2026-03-15"), AmountDue: 12000.00, AmountPaid: 12000.00 },
    { RepaymentID: 13, LoanID: 1003, InstallmentNumber: 4, DueDate: ISODate("2026-04-15"), PaymentDate: ISODate("2026-04-15"), AmountDue: 12000.00, AmountPaid: 12000.00 },
    { RepaymentID: 14, LoanID: 1004, InstallmentNumber: 1, DueDate: ISODate("2026-01-20"), PaymentDate: ISODate("2026-01-20"), AmountDue: 18000.00, AmountPaid: 18000.00 },
    { RepaymentID: 15, LoanID: 1004, InstallmentNumber: 2, DueDate: ISODate("2026-02-20"), PaymentDate: ISODate("2026-02-20"), AmountDue: 18000.00, AmountPaid: 18000.00 },
    { RepaymentID: 16, LoanID: 1004, InstallmentNumber: 3, DueDate: ISODate("2026-03-20"), PaymentDate: ISODate("2026-03-20"), AmountDue: 18000.00, AmountPaid: 0.00 },
    { RepaymentID: 17, LoanID: 1004, InstallmentNumber: 4, DueDate: ISODate("2026-04-20"), PaymentDate: null, AmountDue: 18000.00, AmountPaid: 0.00 },
    { RepaymentID: 18, LoanID: 1004, InstallmentNumber: 5, DueDate: ISODate("2026-05-20"), PaymentDate: null, AmountDue: 18000.00, AmountPaid: 0.00 },
    { RepaymentID: 19, LoanID: 1004, InstallmentNumber: 6, DueDate: ISODate("2026-06-20"), PaymentDate: null, AmountDue: 18000.00, AmountPaid: 0.00 },
    { RepaymentID: 20, LoanID: 1005, InstallmentNumber: 1, DueDate: ISODate("2026-01-25"), PaymentDate: ISODate("2026-01-25"), AmountDue: 30000.00, AmountPaid: 30000.00 },
    { RepaymentID: 21, LoanID: 1005, InstallmentNumber: 2, DueDate: ISODate("2026-02-25"), PaymentDate: ISODate("2026-02-25"), AmountDue: 30000.00, AmountPaid: 30000.00 },
    { RepaymentID: 22, LoanID: 1005, InstallmentNumber: 3, DueDate: ISODate("2026-03-25"), PaymentDate: ISODate("2026-03-25"), AmountDue: 30000.00, AmountPaid: 30000.00 },
    { RepaymentID: 23, LoanID: 1006, InstallmentNumber: 1, DueDate: ISODate("2026-02-05"), PaymentDate: ISODate("2026-02-05"), AmountDue: 35000.00, AmountPaid: 35000.00 },
    { RepaymentID: 24, LoanID: 1006, InstallmentNumber: 2, DueDate: ISODate("2026-03-05"), PaymentDate: ISODate("2026-03-05"), AmountDue: 35000.00, AmountPaid: 35000.00 },
    { RepaymentID: 25, LoanID: 1006, InstallmentNumber: 3, DueDate: ISODate("2026-04-05"), PaymentDate: ISODate("2026-04-05"), AmountDue: 35000.00, AmountPaid: 35000.00 },
    { RepaymentID: 26, LoanID: 1007, InstallmentNumber: 1, DueDate: ISODate("2026-02-18"), PaymentDate: ISODate("2026-02-18"), AmountDue: 22000.00, AmountPaid: 22000.00 },
    { RepaymentID: 27, LoanID: 1007, InstallmentNumber: 2, DueDate: ISODate("2026-03-18"), PaymentDate: ISODate("2026-03-18"), AmountDue: 22000.00, AmountPaid: 22000.00 },
    { RepaymentID: 28, LoanID: 1007, InstallmentNumber: 3, DueDate: ISODate("2026-04-18"), PaymentDate: ISODate("2026-04-18"), AmountDue: 22000.00, AmountPaid: 22000.00 },
    { RepaymentID: 29, LoanID: 1008, InstallmentNumber: 1, DueDate: ISODate("2026-03-10"), PaymentDate: ISODate("2026-03-10"), AmountDue: 16000.00, AmountPaid: 16000.00 },
    { RepaymentID: 30, LoanID: 1008, InstallmentNumber: 2, DueDate: ISODate("2026-04-10"), PaymentDate: ISODate("2026-04-10"), AmountDue: 16000.00, AmountPaid: 16000.00 },
    { RepaymentID: 31, LoanID: 1008, InstallmentNumber: 3, DueDate: ISODate("2026-05-10"), PaymentDate: ISODate("2026-05-10"), AmountDue: 16000.00, AmountPaid: 16000.00 },
    { RepaymentID: 32, LoanID: 1009, InstallmentNumber: 1, DueDate: ISODate("2026-03-22"), PaymentDate: ISODate("2026-03-22"), AmountDue: 14000.00, AmountPaid: 14000.00 },
    { RepaymentID: 33, LoanID: 1009, InstallmentNumber: 2, DueDate: ISODate("2026-04-22"), PaymentDate: ISODate("2026-04-22"), AmountDue: 14000.00, AmountPaid: 14000.00 },
    { RepaymentID: 34, LoanID: 1009, InstallmentNumber: 3, DueDate: ISODate("2026-05-22"), PaymentDate: ISODate("2026-05-22"), AmountDue: 14000.00, AmountPaid: 14000.00 },
    { RepaymentID: 35, LoanID: 1010, InstallmentNumber: 1, DueDate: ISODate("2026-04-12"), PaymentDate: ISODate("2026-04-12"), AmountDue: 17000.00, AmountPaid: 17000.00 },
    { RepaymentID: 36, LoanID: 1010, InstallmentNumber: 2, DueDate: ISODate("2026-05-12"), PaymentDate: ISODate("2026-05-12"), AmountDue: 17000.00, AmountPaid: 17000.00 },
    { RepaymentID: 37, LoanID: 1010, InstallmentNumber: 3, DueDate: ISODate("2026-06-12"), PaymentDate: ISODate("2026-06-12"), AmountDue: 17000.00, AmountPaid: 17000.00 },
    { RepaymentID: 38, LoanID: 1011, InstallmentNumber: 1, DueDate: ISODate("2026-04-28"), PaymentDate: ISODate("2026-04-28"), AmountDue: 32000.00, AmountPaid: 32000.00 },
    { RepaymentID: 39, LoanID: 1011, InstallmentNumber: 2, DueDate: ISODate("2026-05-28"), PaymentDate: ISODate("2026-05-28"), AmountDue: 32000.00, AmountPaid: 32000.00 },
    { RepaymentID: 40, LoanID: 1011, InstallmentNumber: 3, DueDate: ISODate("2026-06-28"), PaymentDate: ISODate("2026-06-28"), AmountDue: 32000.00, AmountPaid: 32000.00 },
    { RepaymentID: 41, LoanID: 1012, InstallmentNumber: 1, DueDate: ISODate("2026-05-30"), PaymentDate: ISODate("2026-05-30"), AmountDue: 40000.00, AmountPaid: 40000.00 },
    { RepaymentID: 42, LoanID: 1012, InstallmentNumber: 2, DueDate: ISODate("2026-06-30"), PaymentDate: ISODate("2026-06-30"), AmountDue: 40000.00, AmountPaid: 40000.00 },
    { RepaymentID: 43, LoanID: 1013, InstallmentNumber: 1, DueDate: ISODate("2026-06-05"), PaymentDate: ISODate("2026-06-05"), AmountDue: 11000.00, AmountPaid: 11000.00 },
    { RepaymentID: 44, LoanID: 1013, InstallmentNumber: 2, DueDate: ISODate("2026-07-05"), PaymentDate: ISODate("2026-07-05"), AmountDue: 11000.00, AmountPaid: 11000.00 },
    { RepaymentID: 45, LoanID: 1014, InstallmentNumber: 1, DueDate: ISODate("2026-06-15"), PaymentDate: ISODate("2026-06-15"), AmountDue: 15000.00, AmountPaid: 15000.00 },
    { RepaymentID: 46, LoanID: 1014, InstallmentNumber: 2, DueDate: ISODate("2026-07-15"), PaymentDate: ISODate("2026-07-15"), AmountDue: 15000.00, AmountPaid: 15000.00 },
    { RepaymentID: 47, LoanID: 1015, InstallmentNumber: 1, DueDate: ISODate("2026-07-01"), PaymentDate: ISODate("2026-07-01"), AmountDue: 28000.00, AmountPaid: 28000.00 },
    { RepaymentID: 48, LoanID: 1015, InstallmentNumber: 2, DueDate: ISODate("2026-08-01"), PaymentDate: ISODate("2026-08-01"), AmountDue: 28000.00, AmountPaid: 28000.00 },
    { RepaymentID: 49, LoanID: 1016, InstallmentNumber: 1, DueDate: ISODate("2026-07-12"), PaymentDate: ISODate("2026-07-12"), AmountDue: 9000.00, AmountPaid: 9000.00 },
    { RepaymentID: 50, LoanID: 1016, InstallmentNumber: 2, DueDate: ISODate("2026-08-12"), PaymentDate: ISODate("2026-08-12"), AmountDue: 9000.00, AmountPaid: 9000.00 },
    { RepaymentID: 51, LoanID: 1017, InstallmentNumber: 1, DueDate: ISODate("2026-08-20"), PaymentDate: ISODate("2026-08-20"), AmountDue: 18000.00, AmountPaid: 18000.00 },
    { RepaymentID: 52, LoanID: 1017, InstallmentNumber: 2, DueDate: ISODate("2026-09-20"), PaymentDate: ISODate("2026-09-20"), AmountDue: 18000.00, AmountPaid: 18000.00 },
    { RepaymentID: 53, LoanID: 1018, InstallmentNumber: 1, DueDate: ISODate("2026-09-15"), PaymentDate: ISODate("2026-09-15"), AmountDue: 26000.00, AmountPaid: 26000.00 },
    { RepaymentID: 54, LoanID: 1018, InstallmentNumber: 2, DueDate: ISODate("2026-10-15"), PaymentDate: ISODate("2026-10-15"), AmountDue: 26000.00, AmountPaid: 26000.00 },
    { RepaymentID: 55, LoanID: 1019, InstallmentNumber: 1, DueDate: ISODate("2026-10-10"), PaymentDate: ISODate("2026-10-10"), AmountDue: 10000.00, AmountPaid: 10000.00 },
    { RepaymentID: 56, LoanID: 1019, InstallmentNumber: 2, DueDate: ISODate("2026-11-10"), PaymentDate: ISODate("2026-11-10"), AmountDue: 10000.00, AmountPaid: 10000.00 },
    { RepaymentID: 57, LoanID: 1020, InstallmentNumber: 1, DueDate: ISODate("2026-10-25"), PaymentDate: ISODate("2026-10-25"), AmountDue: 30000.00, AmountPaid: 30000.00 }
]);


db.LoanGuarantors.insertMany([
    { LoanID: 1001, GuarantorCustomerID: 2, GuaranteeAmount: 1000000.00 },
    { LoanID: 1002, GuarantorCustomerID: 3, GuaranteeAmount: 300000.00 },
    { LoanID: 1003, GuarantorCustomerID: 1, GuaranteeAmount: 200000.00 },
    { LoanID: 1004, GuarantorCustomerID: 5, GuaranteeAmount: 500000.00 },
    { LoanID: 1005, GuarantorCustomerID: 4, GuaranteeAmount: 1500000.00 },
    { LoanID: 1006, GuarantorCustomerID: 1, GuaranteeAmount: 2000000.00 },
    { LoanID: 1007, GuarantorCustomerID: 6, GuaranteeAmount: 800000.00 },
    { LoanID: 1008, GuarantorCustomerID: 7, GuaranteeAmount: 400000.00 },
    { LoanID: 1009, GuarantorCustomerID: 8, GuaranteeAmount: 300000.00 },
    { LoanID: 1010, GuarantorCustomerID: 3, GuaranteeAmount: 500000.00 },
    { LoanID: 1011, GuarantorCustomerID: 2, GuaranteeAmount: 1500000.00 },
    { LoanID: 1012, GuarantorCustomerID: 5, GuaranteeAmount: 2000000.00 },
    { LoanID: 1014, GuarantorCustomerID: 1, GuaranteeAmount: 300000.00 },
    { LoanID: 1015, GuarantorCustomerID: 4, GuaranteeAmount: 1200000.00 },
    { LoanID: 1018, GuarantorCustomerID: 9, GuaranteeAmount: 1000000.00 }
]);




// Assignment Tasks


// Task 5


// Query 1 - Loans with Customer Details
db.Loans.aggregate([
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
        $project: {
            _id: 0,
            LoanID: 1,
            LoanType: 1,
            LoanAmount: 1,
            OutstandingAmount: 1,
            LoanStatus: 1,
            CustomerID: 1,
            CustomerName: "$CustomerDetails.CustomerName",
            Email: "$CustomerDetails.Email",
            City: "$CustomerDetails.City"
        }
    },
    {
        $sort: { LoanID: 1 }
    }
]);


// Query 2 - Loans with Repayment History
db.Loans.aggregate([
    {
        $lookup: {
            from: "Repayments",
            localField: "LoanID",
            foreignField: "LoanID",
            as: "RepaymentHistory"
        }
    },
    {
        $project: {
            _id: 0,
            LoanID: 1,
            CustomerID: 1,
            LoanType: 1,
            LoanAmount: 1,
            OutstandingAmount: 1,
            TotalInstallments: { $size: "$RepaymentHistory" },
            RepaymentHistory: 1
        }
    },
    {
        $sort: { LoanID: 1 }
    }
]);


// Query 3 - Latest Repayment for Each Loan
db.Loans.aggregate([
    {
        $lookup: {
            from: "Repayments",
            let: { currentLoanID: "$LoanID" },
            pipeline: [
                {
                    $match: {
                        $expr: {
                            $eq: ["$LoanID", "$$currentLoanID"]
                        }
                    }
                },
                {
                    $sort: {
                        PaymentDate: -1,
                        RepaymentID: -1
                    }
                },
                {
                    $limit: 1
                }
            ],
            as: "LatestRepayment"
        }
    },
    {
        $unwind: {
            path: "$LatestRepayment",
            preserveNullAndEmptyArrays: true
        }
    },
    {
        $project: {
            _id: 0,
            LoanID: 1,
            CustomerID: 1,
            LoanType: 1,
            LoanAmount: 1,
            OutstandingAmount: 1,
            LatestRepaymentID: "$LatestRepayment.RepaymentID",
            InstallmentNumber: "$LatestRepayment.InstallmentNumber",
            DueDate: "$LatestRepayment.DueDate",
            PaymentDate: "$LatestRepayment.PaymentDate",
            AmountDue: "$LatestRepayment.AmountDue",
            AmountPaid: "$LatestRepayment.AmountPaid"
        }
    },
    {
        $sort: { LoanID: 1 }
    }
]);