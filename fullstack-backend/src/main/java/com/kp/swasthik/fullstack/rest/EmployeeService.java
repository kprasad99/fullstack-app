package com.kp.swasthik.fullstack.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kp.swasthik.fullstack.dao.EmployeeDao;
import com.kp.swasthik.fullstack.domain.Employee;

import reactor.core.publisher.Flux;

@RestController
@RequestMapping("/employee")
public class EmployeeService {

	@Autowired
	private EmployeeDao empDao;
	
	
	@GetMapping()
	public Flux<Employee> list() { empDao.findById(1).get();
		return  Flux.fromIterable(empDao.findAll());
	}

}
