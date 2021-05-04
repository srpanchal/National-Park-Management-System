# SJSU CMPE 138Spring2021TEAM8
import simplejson as json
from flask import Flask, make_response, jsonify, Blueprint, request
from flask_mysql_connector import MySQL
from flask import current_app
import random
mysql = MySQL()

animals_api = Blueprint('animals_api', __name__)


@animals_api.route('/animals', methods=['GET', 'POST', 'DELETE', 'PUT'])
def animals():
    if request.method == 'GET':
        try:
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            if 'species_id' in request.args:
                get_animal = """SELECT * FROM Species  \
                          WHERE species_id = %s"""
                cursor.execute(get_animal, (request.args.get('species_id'),))
                current_app.logger.info("Fetching species %s",request.args.get('species_id'))
                rows = cursor.fetchone()
            else:
                get_animal = "SELECT * FROM Species"
                cursor.execute(get_animal)
                current_app.logger.info("Fetching all species in the park")
                rows = cursor.fetchall()
            return make_response(json.dumps(rows), 200)
        except Exception as e:
            current_app.logger.error(e)
            return make_response("false", 500)
        finally:
            cursor.close()
            conn.close()
    if request.method == 'POST':
        try:
            body = request.json
            post_animal = """INSERT INTO Species (species_id,name,age,description,gender,category)
            VALUES ( %s, %s, %s, %s, %s, %s )"""
            species_id =random.randint(100, 999999)
            data = (
                species_id, body['name'], body['age'], body['description'], body['gender'], body['category'])
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            cursor.execute(post_animal, data)
            current_app.logger.info("Inserting species %s", body['name'])
            conn.commit()
            return make_response("true", 200)
        except Exception as e:
            current_app.logger.error(e)
            return make_response("false", 500)
        finally:
            cursor.close()
            conn.close()
    if request.method == 'DELETE':
        try:
            delete_species = """DELETE FROM Species where species_id = %s"""
            data = (request.args.get('species_id'),)
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            cursor.execute(delete_species, data)
            current_app.logger.info("Delete species %s", request.args.get('species_id'))
            conn.commit()
            return make_response("true", 200)
        except Exception as e:
            current_app.logger.error(e)
            return make_response("false", 500)
        finally:
            cursor.close()
            conn.close()
    if request.method == 'PUT':
        try:
            body = request.json
            update_employee = """UPDATE Species set species_id = %s,name = %s,age= %s, description= %s,gender= %s,
            category = %s WHERE species_id = %s"""
            data = (
                body['species_id'], body['name'], body['age'], body['description'], body['gender'], body['category'],
                body['species_id'])
            conn = mysql.connection
            cursor = conn.cursor(dictionary=True)
            cursor.execute(update_employee, data)
            current_app.logger.info("Update species %s", body['name'])
            conn.commit()
            return make_response("true", 200)
        except Exception as e:
            current_app.logger.error(e)
            return make_response("false", 500)
        finally:
            cursor.close()
            conn.close()


@animals_api.route('/animals-stats', methods=['GET'])
def getStats():
    try:
        conn = mysql.connection
        cursor = conn.cursor(dictionary=True, buffered=True)
        stats = {}
        count_query = "SELECT COUNT(*) as total_count FROM Species;"
        cursor.execute(count_query)
        row = cursor.fetchone()
        stats['total_count'] = row['total_count']

        gender_query = """SELECT gender, COUNT(*) as count
                        FROM Species
                        GROUP BY gender;"""
        cursor.execute(gender_query)
        rows = cursor.fetchall()
        stats['gender_stats'] = rows

        category_query = """SELECT category, COUNT(*) as count
                        FROM Species
                        GROUP BY category;"""
        cursor.execute(category_query)
        rows = cursor.fetchall()
        stats['category_stats'] = rows

        age_query = """SELECT SUM(CASE WHEN age < 10 THEN 1 ELSE 0 END) AS 'Under 10',
                        SUM(CASE WHEN age BETWEEN 11 AND 20 THEN 1 ELSE 0 END) AS '11-20',
                        SUM(CASE WHEN age BETWEEN 21 AND 30 THEN 1 ELSE 0 END) AS '21-30',
                        SUM(CASE WHEN age > 30 THEN 1 ELSE 0 END) AS '30 And More'
                        FROM Species"""
        cursor.execute(age_query)
        rows = cursor.fetchall()
        stats['age_stats'] = rows
        return make_response(json.dumps(stats), 200)
    except Exception as e:
        print(e)
        return make_response("false", 500)
