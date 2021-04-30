package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Series;
import org.springframework.data.repository.CrudRepository;

public interface SeriesRepository
    extends CrudRepository<Series, Integer> {
}

