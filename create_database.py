import sqlite3

# Connect to the SQLite database (or create it if it doesn't exist)
conn = sqlite3.connect('sales_tracker.db')

# Create a cursor object to interact with the database
cursor = conn.cursor()

# Create the sales table
cursor.execute('''
CREATE TABLE IF NOT EXISTS sales (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_name TEXT NOT NULL,
    customer_name TEXT NOT NULL,
    product_name TEXT NOT NULL,
    product_price REAL NOT NULL,
    product_quantity INTEGER NOT NULL,
    total_sale REAL NOT NULL,
    date TEXT NOT NULL
)
''')

# Commit the changes and close the connection
conn.commit()
conn.close()

print("Database and table created successfully.")
