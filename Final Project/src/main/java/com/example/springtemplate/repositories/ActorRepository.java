package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Actor;
import org.springframework.data.repository.CrudRepository;

public interface ActorRepository
    extends CrudRepository<Actor, Integer> {
}
