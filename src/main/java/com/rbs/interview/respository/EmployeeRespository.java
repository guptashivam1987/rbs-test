package com.rbs.interview.respository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rbs.interview.model.Employee;

public interface EmployeeRespository extends JpaRepository<Employee, Long> {

	
}
