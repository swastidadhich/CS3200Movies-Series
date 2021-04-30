package com.example.springtemplate.models;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="casts")
public class Cast {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  @OneToOne
  @JsonIgnore
  private Series series;

  @OneToMany(mappedBy = "casts")
  @JsonIgnore
  private List<Actor> actors;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public Series getSeries() {
    return series;
  }

  public void setSeries(Series series) {
    this.series = series;
  }

  public List<Actor> getActors() {
    return actors;
  }

  public void setActor(List<Actor> actors) {
    this.actors = actors;
  }
}

