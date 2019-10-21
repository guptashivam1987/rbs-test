package com.rbs.interview.rest.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.rbs.interview.model.Employee;
import com.rbs.interview.respository.EmployeeRespository;

import io.swagger.annotations.ApiOperation;

@RestController
public class EmployeeController {

	@Autowired
	private EmployeeRespository respository;

	@GetMapping("employees")
	@ApiOperation(value = "get all employees", notes = "Return all employees in form of 20 emp"
			+ " per page we can navigate with by passing 'size' and 'page' as request param "
			+ "also we can sort by passing sort param with attribute name as value "
			+ "for example 'employees?page=0&size=3&sort=firstName'")
	public ResponseEntity<Page<Employee>> getEmployees(Pageable pagable)

	{
		Page<Employee> employeePages = (Page) respository.findAll(pagable);
		if (employeePages.isEmpty())
			return new ResponseEntity("There are no employee records.", HttpStatus.NOT_FOUND);
		else
			return new ResponseEntity(employeePages, HttpStatus.OK);
	}

	@GetMapping("employees/{id}")
	public ResponseEntity<Optional<Employee>> getEmployeeDetail(@PathVariable("id") Long empId) {
		Optional<Employee> empRecord = respository.findById(empId);

		if (!empRecord.isPresent())
			return new ResponseEntity("Employee details are not found for employee id " + empId, HttpStatus.NOT_FOUND);
		else
			return new ResponseEntity(empRecord, HttpStatus.OK);
	}

}
