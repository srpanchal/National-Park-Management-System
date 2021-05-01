package com.sjsu.npms.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Employee {
    private String empId;
    private String empName;
    private long salary;
    private String role;
    private int age;
    private String empDept;
    private String gender;

    public static final String EMP_ID = "emp_id";
    public static final String EMP_NAME = "emp_name";
    public static final String EMP_DEPT = "emp_dept";
    public static final String SALARY = "salary";
    public static final String ROLE = "role";
    public static final String AGE = "age";
    public static final String GENDER = "gender";
}
