import mysql.connector

conn = mysql.connector.connect(host="172.24.20.34", user="root", password="tmcit")
curs = conn.cursor()

curs.execute("CREATE DATABASE my_database")

curs.close()
conn.close()