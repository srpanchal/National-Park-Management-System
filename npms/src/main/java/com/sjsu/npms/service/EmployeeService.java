package com.sjsu.npms.service;


import com.sjsu.npms.model.Employee;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import static com.sjsu.npms.model.Employee.*;

@Service
@Slf4j
public class EmployeeService {

//    @Value("sql.url")
//    private String databaseUrl;
//
//    @Value("sql.username")
//    private String username;
//
//    @Value("sql.password")
//    private String password;

    public static final String GET_ALL_EMPLOYEES = "SELECT * FROM Employee";

    public List<Employee> getAllEmployees(){
        List<Employee> employees = new ArrayList<>();
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/national_park", "root", "admin123");
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(GET_ALL_EMPLOYEES);

            while(rs.next()){
                employees.add(Employee.builder()
                        .empId(rs.getString(EMP_ID))
                        .empName(rs.getString(EMP_NAME))
                        .role(rs.getString(ROLE))
                        .empDept(rs.getString(EMP_DEPT))
                        .salary(rs.getInt(SALARY))
                        .age(rs.getInt(AGE))
                        .gender(rs.getString(GENDER))
                        .build());
            }
        } catch (Exception e){
            log.error("Error in executing SQL query: {} ", GET_ALL_EMPLOYEES, e);
        }
        return employees;
    }
}
