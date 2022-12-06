# RUPA
## Team Profile
**Team 03 - Radford University Parking App** 

**Members**: Angel Diaz-Soriano, Kevin McGruder, and Drew Richards
***
## Project Scope
A application designed to give parking information to make it easier for the users to find parking. For system limitations will depend on the mobile device, as well as the fact that it is strictly limited to mobile devices and no other platform. This application will be able to work on Android and IOS. Users are not required to have @radford.edu emails to use this application as this will be an option to save preferences, user will be given the ability to continue as a guest on the application. Access will include Radford Students/faculty and regular (or “visitor”) users.  User access levels will be determined by user input upon clicking the prospective buttons . The users will be able to use the interactive map to find information on the different parking lots operated by Radford campus. The user will be able to see parking availability, available times of the lot, and busy hours. The data provided in the interactive map will display an overall heatmap of all parking, as well as specific heatmaps for each lot based upon parking data and estimated frequency.

## Projected Sprint Development Plan
### Spring 1
 * Construct a splash screen 
 * Construct a Log-in screen
 * Connect to a database
 * Be able to store information
 * Be able to retreive information
### Sprint 2
 * Display where the user is allowed to park
 * Display an interactive map
 * Add outlines to each lot
 * Make each lot interactive
 * Clicking each lot will display specific headmap
### Sprint 3
 * Updating the map at a varying rate
 * Displaying a heatmap for each lot
 * Map with ecery lot being interactive
## Tech Stack
 * LAMP
 * WAMP
 * LeafletJS (API)
 * HTML, CSS, and JavaScript
## Installation
Cloning to a web server and connecting to a database will allow you to replicate our system.
### About our files
The file paths in our files will not align with the file structure here. To deploy it as such, place every single file in one folder (provided here in this repository).

### Setting up the DB
It will be as simple as running the contents (or the sql file) [found here.](./sql/parkingdb.sql)

### Config.php
There is a specific file that [connection.php](./src/connection.php) requires called config.php. This is what config.php needs to contain:
```php
<?php 
DEFINE('db_type', 'database-type');
DEFINE('db_server', 'database-server');
DEFINE('db_database', 'database-name');
DEFINE('db_port','database-port');
DEFINE('db_charset','utf8mb4');
DEFINE('db_user', 'database-username');
DEFINE('db_pass', 'database-user-password');
?>
```

## Usage
This will be used by any student, faculty, or visitor looking for a quick reference to parking lots. Our system will display where they are allowed to park and the probability of certain spots being open to park in.
## Project Status
Sprint 1. Setting up enviroments and loading dependencies for all languages and libraries needed. COMPLETED.

Sprint 2. Creating the bulk of our front end, such that a user will be able to navigate the radford campus using the interactive map. COMPLETED.

Sprint 3. Connecting the front end and the back end more closely. Heat map of lot / spot activity will be given and users may choose to park at a given location. COMPLETED.
