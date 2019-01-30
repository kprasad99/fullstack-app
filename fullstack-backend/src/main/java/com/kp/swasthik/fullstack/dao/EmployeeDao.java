package com.kp.swasthik.fullstack.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.kp.swasthik.fullstack.domain.Employee;

@Repository
public interface EmployeeDao extends CrudRepository<Employee, Integer> {

}
