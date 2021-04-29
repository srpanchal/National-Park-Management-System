package com.sjsu.npms.repository;

import com.sjsu.npms.dao.Employee;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, String> {

    @Override
    @Modifying
    @Query(value = "SELECT * FROM Employee", nativeQuery = true)
    public List<Employee> findAll();

}
