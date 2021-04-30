package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="series")
public class Series {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String title;

  @OneToMany(mappedBy = "series")
  @JsonIgnore
  private List<Movie> movies;

  @OneToOne
  @JsonIgnore
  private Cast casts;

  public List<Movie> getMovies() {
    return movies;
  }

  public void setMovies(List<Movie> movies) {
    this.movies = movies;
  }

  public Cast getCasts() { return casts; }

  public void setCasts(Cast casts) { this.casts = casts; }

  public Integer getId() { return id; }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }
}

