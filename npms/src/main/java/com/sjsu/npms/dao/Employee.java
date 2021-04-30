package com.sjsu.npms.dao;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Employee {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private String empId;
    private String empName;
    private long salary;
    private String role;
    private int age;
    private String empDept;
    private String gender;
}
