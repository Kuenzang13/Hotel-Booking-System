# Hotel Booking System - Project Planning & Requirement Analysis

## 1. Project Title
Hotel Booking System (Template ID: T9)

## 2. Problem Statement
Hotels and hospitality businesses often face challenges when managing room availability, guest bookings, check-ins, check-outs, and billing through manual methods, spreadsheets, or fragmented messaging systems. This leads to double bookings, delayed guest processing, lack of real-time occupancy updates, and inaccurate revenue reporting.

The people affected are hotel administrators, front-desk receptionists, and prospective guests. A centralized web-based application is required to automate hotel operations, maintain accurate room availability, streamline guest check-ins/check-outs, record payments, and provide clear analytical insight into hotel performance.

## 3. Project Objective
To develop a web-based Hotel Booking System using the MERN stack that enables admins and receptionists to manage hotel rooms, process reservations, execute check-in/check-out workflows, record payments, and track revenue, while allowing customers to search available rooms and manage their bookings through a unified platform.

## 4. Target Users / Stakeholders
### Administrator
- Creates and manages staff (receptionist) accounts.
- Oversees overall hotel management, including rooms, bookings, and payments.
- Accesses system dashboards, occupancy analytics, and financial reports.

### Receptionist
- Adds and updates room categories and individual room details.
- Confirms customer reservations and updates booking statuses.
- Performs guest check-in and check-out procedures.
- Generates invoices, records guest payments, and issues receipts.

### Customer / Guest
- Browses available hotel rooms with details and pricing.
- Creates and cancels room bookings.
- Views booking history and payment records.
- Manages personal user profile details.

## 5. Core Modules
1. User Authentication & Role-Based Authorization
2. Room & Category Management
3. Customer Management
4. Booking & Reservation Management
5. Check-in & Check-out Operations
6. Payment & Billing Management
7. Dashboard & Analytical Reports

## 6. Project Scope
### Included Features
- User registration, login, and profile management.
- JWT-based authentication and role-based access control (Admin, Receptionist, Customer).
- Room management: Add, edit, delete, search, and update availability status.
- Room category management.
- Customer management: Add, edit, search, and manage customer details.
- Booking management: Create, modify, cancel, and view reservation history.
- Check-in and check-out processing with automated room status updates.
- Payment management: Invoice generation, payment recording, and billing history.
- Real-time dashboard showing occupancy rates and revenue reports.
- Responsive user interface across desktop and mobile devices.

### Excluded Features
- Online payment gateway integrations (e.g., Stripe, PayPal).
- Third-party booking portal sync (e.g., Booking.com, Agoda).
- Automated AI room recommendation engines.
- Native mobile application.
- SMS or Email notification services.
- Housekeeping/cleaning schedule management.

## 7. Functional Requirements
### Authentication & Users
- The system shall allow users (Customers and Receptionists) to register and log in.
- The system shall issue JWT tokens for secure session handling.
- The system shall restrict pages and API routes based on user roles (Admin, Receptionist, Customer).
- The system shall allow logged-in users to view and edit their profile details.

### Room Management
- Receptionists/Admins shall be able to create, update, and delete room categories and room items.
- The system shall display room information, including room type, price per night, amenities, and availability status.
- Customers and Receptionists shall be able to search and filter rooms by date and category.

### Booking Management
- Customers shall be able to select an available room and create a booking.
- Receptionists shall be able to confirm, modify, or cancel guest bookings.
- The system shall maintain complete booking records with status indicators (Pending, Confirmed, Cancelled, Completed).

### Check-in & Check-out Operations
- Receptionists shall be able to perform guest check-in on the scheduled date.
- Receptionists shall be able to process guest check-out after the stay.
- The system shall automatically update room availability (e.g., Occupied, Available, Maintenance) based on check-in/check-out events.

### Payment & Revenue Management
- The system shall generate billing invoices for completed or checked-in bookings.
- Receptionists shall record cash or manual card payments into the system.
- The system shall calculate revenue and generate occupancy summaries.

### Dashboard & Reports
- The Admin/Receptionist dashboard shall display live occupancy rates, total active bookings, and daily/monthly revenue.

## 8. Non-Functional Requirements
### Security
- Passwords must be hashed using bcrypt before storage in MongoDB.
- All protected REST API endpoints must validate JWT authorization tokens.
- Role-based authorization middleware must verify user privileges.
- User input must be validated to prevent injection and malicious inputs.

### Performance
- Room search queries and API response times should take less than 2 seconds under standard operations.
- MongoDB queries using indexes (e.g., Room status, Booking dates) should be optimized.

### Usability
- The user interface must be clean, intuitive, and responsive on mobile and desktop viewports.
- Clear error messages and status alerts must guide user actions (e.g., invalid booking dates).

### Reliability
- The backend must handle invalid inputs or database disconnects gracefully without application crashes.
- Appropriate HTTP status codes and structured JSON messages must be returned for failed operations.

### Maintainability
- Backend code must follow a modular architecture (models, controllers, routes, middleware).
- Frontend components must be reusable, modular React components.

### Scalability
- The database schema must use proper Mongoose ObjectId references to allow easy expansion (e.g., adding online payment gateways or email alerts in future phases).

## 9. Expected Outcome
The Hotel Booking System will provide a centralized management portal that automates hotel administrative tasks, reduces booking conflicts, streamlines guest check-ins, and tracks hotel earnings efficiently. For the development team, it serves as a practical implementation of the MERN stack, RESTful API design, JWT authentication, and relational data modeling with MongoDB.