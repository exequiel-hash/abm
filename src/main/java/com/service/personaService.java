package com.service;

import java.util.Optional;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.model.Persona;
import com.repository.personaRepository;

@Component
public class personaService {

    @Autowired
    private personaRepository personaRepository;
    

    public Persona crearPersona(Persona persona){
        return personaRepository.save(persona);
      
    }

    public Persona getPersonaById(Long id){
        Optional<Persona> optionalPersona = personaRepository.findById(id);
        return optionalPersona.get();

    }    

    public List<Persona> getPersonas(){
        return personaRepository.findAll();
    }

    public void borrarPersona(Long id){
        personaRepository.deleteById(id);
    }

    public Persona updatePersona(Persona persona){
        return personaRepository.save(persona);
      
    }





}
