package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.model.Persona;


@Repository
public interface personaRepository extends JpaRepository<Persona, Long> {

    



    
}
