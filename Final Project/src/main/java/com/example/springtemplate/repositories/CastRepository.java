package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Cast;
import org.springframework.data.repository.CrudRepository;

public interface CastRepository
    extends CrudRepository<Cast, Integer> {
}

