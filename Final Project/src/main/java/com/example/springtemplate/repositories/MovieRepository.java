package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Movie;
import org.springframework.data.repository.CrudRepository;

public interface MovieRepository
    extends CrudRepository<Movie, Integer> {
}
