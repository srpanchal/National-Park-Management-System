package com.sjsu.npms.service.impl;

import com.sjsu.npms.dao.Employee;
import com.sjsu.npms.repository.EmployeeRepository;
import com.sjsu.npms.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;
    @Autowired
    private EmployeeService employeeService;

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }
}
