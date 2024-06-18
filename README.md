# Jipange Sales Tracker

Jipange Sales Tracker is a web application built with Flask and a mobile application designed with Flutter for front end to help users track their sales data. It allows users to register, log in, manage sales records, and view cumulative sales with targets. This project demonstrates a complete stack development process with user authentication, CRUD operations, and real-time data display.

## Table of Contents

+ [Features](#features)
+ [Technologies Used](#technologies-used)
+ [Installation](#installation)
+ [Configuration](#configuration)
+ [Usage](#usage)
+ [API Endpoints](#api-endpoints)
+ [Project Structure](#project-structure)
+ [Contributing](#contributing)
+ [License](#license)
+ [Contact](#contact)


## Features

+ User registration and authentication
+ Track sales with customer, product, and quantity details
+ View cumulative sales and monitor monthly targets
+ Responsive web interface using Flask
+ Mobile application interface using Flutter
+ API endpoints for integration with other applications

## Technologies Used
+ **Backend:** Python, Flask, Flask-SQLAlchemy, Flask-Login, Flask-WTF, Flask-CORS
+ **Frontend:** Dart, Flutter, HTTP package
+ **Database:** SQLite

## Installation
### Backend (Flask)

1. Clone the repository:

```dart
git clone https:https://github.com/Kenfod/Python-Sales-Tracker.git
```
2. Create and activate a virtual environment:

```dart
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

3. Install the required dependencies:

```dart
pip install -r requirements.txt
```

4. Set up the database:

```dart
flask db init
flask db migrate -m "Initial migration."
flask db upgrade
```

5. Run the Flask application:

```dart
python app.py
```
The server will start on ' http://127.0.0.1:5000 '

### Frontend (Flutter)

1. Install Flutter:
Follow the instructions on the Flutter website to install Flutter on your system.

2. Navigate to the Flutter project directory:

```dart
cd flutter_app
```

3. Install the required dependencies:

```dart
flutter pub get
```

4. Run the Flutter application:

```dart
flutter run
```

## Configuration

### Flask Configuration
**Database URI:** Update SQLALCHEMY_DATABASE_URI in app.py to point to your database.

**Secret Key:** Update SECRET_KEY in app.py with a strong secret key.

### Flutter Configuration
**API Base URL:** Update the API base URL in the Flutter app's source code to match the Flask server's URL.

## Usage

### Web Interface

1. **Register:** Create a new user account by navigating to **'/register'**.

2. **Login:** Log in to the application at **'/login'**.

3. **Dashboard:** View the sales dashboard, add new sales, and monitor targets.

### Mobile Interface

1. <b>Home Screen:</b> Displays the current user, cumulative sales, and a list of all sales.

2. <b>Add Sale:</b> Add new sales entries with customer and product details.

3. <b>Edit Sale:</b> Modify existing sales entries.

4. <b>Delete Sale:</b> Remove sales entries.

## API Endpoints
### User Management
+ **Register: ' POST /api/register '**

```dart
{
    "username": "user",
    "password": "password"
}
```

+ **Login: ' POST /api/login '**

```dart
{
    "username": "user",
    "password": "password"
}
```
+ **Get Username: ' GET /api/username'** 

### Sales Management

+ **Get Sales:** ' GET /api/sales '
+ **Add Sale:** ' POST /api/sales '
+ **Edit Sale:** ' PUT /api/sales/<id> '
+ **Delete Sales:** ' DELETE /api/sales<id> '

## Project Structure

```dart
jipange-sales-tracker/
├── app.py                  # Flask application
├── models.py               # Database models
├── forms.py                # WTForms for registration and login
├── templates/              # HTML templates for Flask
│   ├── edit.html
│   ├── index.html
│   ├── login.html
│   └── register.html
├── static/                 # Static files (CSS, JS, images)
├── migrations/             # Database migrations
├── flutter_app/            # Flutter application
│   ├── lib/
│   │   ├── main.dart       # Main entry point for Flutter app
│   │   ├── screens/        # Flutter screens
│   │   └── widgets/        # Flutter widgets
│   └── pubspec.yaml        # Flutter dependencies
└── requirements.txt        # Python dependencies

```

## Contributing
  
We welcome contributions to the Jipange Sales Tracker project!<br> Here are some ways you can contribute:

+ Report bugs or issues.
+ Suggest new features.
+ Improve documentation.

To contribute, follow these steps:

1. Fork the repository.

2. Create a new branch <b>(' git checkout -b feature/your-feature ')</b>.

3. Commit your changes <b>(' git commit -m "Add new feature" ')</b>.

4. Push to the branch <b>(' git push origin feature/your-feature ')</b>.

5. Create a new Pull Request.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact
For questions or feedback, please contact **kelvinnyagudi@yahoo.com**.
